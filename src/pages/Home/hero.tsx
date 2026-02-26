import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
    
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center
        
          md:bg-[url('/barbies-desktop.png')] bg-[url('/barbies-mobile.png')]"
      />

      {/* Dark Blur Overlay */}
      <div className="absolute inset-0 bg-black/50 " />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-[Playfair_Display] font-bold tracking-wide
                      bg-linear-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B]
                     bg-clip-text text-transparent mb-6"
        >
          Experience Timeless Beauty
        </motion.h1>

        <p className="text-white/90 text-lg md:text-xl mb-8">
          Bridal and special occasion glam with expert wig styling, nail and
          lash perfection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
  href="https://wa.me/2348168945213?text=Hello%20I%20would%20like%20to%20book%20an%20appointment"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-3 bg-linear-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B] text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg inline-block"
>
  Book Appointment
</a>

          <Link
  to="/services"
  className="px-8 py-3 border border-[#D4AF37] text-[#FFD700] rounded-full hover:bg-[#D4AF37]/10 transition duration-300 inline-block"
>
  View Services
</Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-b from-transparent to-[#F8F4EC]"></div>
    </section>
    
    </>
  );
};
export default Hero;
