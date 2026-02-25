import { motion } from "framer-motion";
import { FaSpa, FaUserTie, FaSprayCan } from "react-icons/fa";
import Gallery from "./gallary";

export default function Services() {
  const services = [
    {
      icon: <FaSpa size={26} />,
      title: "Luxury Hair Styling",
      desc: "Precision cuts, silk press, and flawless installs tailored to elevate your confidence.",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    },
    {
      icon: <FaUserTie size={26} />,
      title: "Professional Makeup",
      desc: "Soft glam to full glam transformations using high-end premium beauty products.",
      image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
    },
    {
      icon: <FaSprayCan size={26} />,
      title: "Luxury Oil Perfume",
      desc: "Long-lasting concentrated oil perfumes with deep, rich, unforgettable fragrance notes.",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539",
    },
  ];

  return (
    <>
      <section className="bg-black text-white py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-wide">
              Our <span className="text-yellow-500">Premium Services</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Experience luxury beauty crafted with precision, elegance, and a
              touch of excellence.
            </p>
          </motion.div>

          {/* Services Layout */}
          <div className="grid md:grid-cols-3 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Rotated Image Accent */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                  <img
                    src={`${service.image}?auto=format&fit=crop&w=400&q=80`}
                    alt={service.title}
                    className="w-40 h-40 object-cover rounded-2xl shadow-xl transform rotate-[70deg] group-hover:rotate-[60deg] transition duration-500"
                  />
                </div>

                {/* Card */}
                <div className="bg-zinc-900 p-8 pt-32 rounded-3xl border border-zinc-800 hover:border-yellow-500 transition duration-500 text-center">
                  <div className="flex justify-center mb-4 text-yellow-500">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  <button className="mt-6 text-yellow-500 text-sm tracking-wider hover:underline">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Gallery />
    </>
  );
}
