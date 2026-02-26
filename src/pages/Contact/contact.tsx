import { IoHome } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { TbClockHour3Filled } from "react-icons/tb";
import { BsWhatsapp } from "react-icons/bs";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#F8F4EC] py-20 px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-light">
            Visit <span className="text-[#B8860B]"> Our Studio </span>
          </h2>

          <p className="mt-3 text-lg text-black/70 max-w-2xl mx-auto">
            Experience luxury beauty in a space designed for elegance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Barbie’s Home of Beauty
            </h3>

            <div className="space-y-4 text-[17px] text-black/80">
              <div className="flex items-center gap-3 text-[17px] text-black/80">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B]">
                  <IoHome className="text-black text-xs sm:text-sm" />
                </div>

                <span className="font-sm">
                  4B Ejindu street coal camp Enugu, Nigeria
                </span>
              </div>

              <div className="flex items-center gap-3 text-[17px] text-black/80">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B]">
                  <FaPhone className="text-black text-xs sm:text-sm" />
                </div>

                <span className="font-sm">+234 8168945213</span>
              </div>

              <div className="flex items-center gap-3 text-base sm:text-[17px] text-black/80">
                <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B]">
                  <TfiEmail className="text-black text-xs sm:text-sm" />
                </div>

                <span className="font-sm">hello@barbiesbeauty.com</span>
              </div>

              <div className="flex items-center gap-3 text-base sm:text-[17px] text-black/80">
                <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B]">
                  <TbClockHour3Filled className="text-black text-xs sm:text-sm" />
                </div>

                <span className="font-sm">
                  {" "}
                  Mon – Sat: 8:00 AM – 7:00 PM | Sunday: By Appointment
                </span>
              </div>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-105 rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3964.7208510573696!2d7.480618999999997!3d6.429896100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1772039068111!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Studio Location"
            ></iframe>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/2348168945213"
        target="_blank"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-2 rounded-full shadow-xl z-50"
      >
        <BsWhatsapp />
      </motion.a>
    </section>
  );
}
