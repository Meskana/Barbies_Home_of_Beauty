import { FaInstagram, FaFacebookF, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12  px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B] bg-clip-text text-transparent">
            Barbie’s Home of Beauty
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Luxury bridal and special occasion glam. Wig styling, nail fixing,
            and flawless lash installation — enhancing your beauty with
            elegance.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-gray-400 text-sm mb-2">Enugu, Nigeria</p>
          <p className="text-gray-400 text-sm mb-2">+234 816 894 5213</p>
          <p className="text-gray-400 text-sm">barbiesbeauty@gmail.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>

          <div className="flex gap-4">
            {[
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaWhatsapp />, link: "#" },
              { icon: <FaTiktok />, link: "#" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 flex items-center justify-center 
                rounded-full border border-[#D4AF37] 
                text-[#FFD700] hover:bg-[#D4AF37]/20 
                transition duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Barbie’s Home of Beauty. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
