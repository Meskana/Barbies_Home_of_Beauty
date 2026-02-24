// import { useState } from 'react'

import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home/home";
import Contact from "./pages/Contact/contact";
import Services from "./pages/Services/services";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <>
      <Navbar />

      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/services" element={<Services />} />

          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
