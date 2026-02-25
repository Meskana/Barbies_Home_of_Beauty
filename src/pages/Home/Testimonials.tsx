"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Amara Johnson",
    role: "Bride",
    image: "/images/wedding.jfif",
    text: "Barbie’s Home of Beauty completely transformed my bridal look. The attention to detail, professionalism, and luxury experience made my special day unforgettable.",
  },
  {
    name: "Chioma Ade",
    role: "Entrepreneur",
    image: "/images/wedding.jfif",
    text: "Every visit feels premium. From flawless wig styling to perfect lashes, they never disappoint. The service is consistent, elegant, and worth every naira.",
  },
  {
    name: "Teni Williams",
    role: "Content Creator",
    image: "/images/wedding.jfif",
    text: "I love how confident I feel after every appointment. The studio atmosphere is classy and the results are always stunning.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F8F4EC] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-lg text-black/70 max-w-2xl mx-auto">
            Real experiences from women who trust us with their beauty.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 relative w-[300px] h-[340px] overflow-hidden"
              style={{
                clipPath: `path("M20 40 
                    Q40 0 90 0 
                    L220 0 
                    Q260 0 280 40 
                    L280 260 
                    Q280 300 240 320 
                    L60 320 
                    Q20 300 20 260 
                    Z")`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 text-[#D4AF37] mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Text */}
              <p className="text-black/80 mb-6 leading-relaxed">
                “{item.text}”
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-black/60">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
