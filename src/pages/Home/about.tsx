import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="py-20 px-6 bg-[#F8F4EC]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/images/makeup.jpg"
            alt="Bridal Makeup"
            className="rounded-2xl shadow-lg md:h-[80vh] object-cover w-full"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-gray-800"
          >
            About Barbie’s Home of Beauty
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="text-gray-600 leading-relaxed mb-6"
          >
            Barbie’s Home of Beauty specializes in bridal and birthday makeup,
            as well as glam for all special occasions. We also offer
            professional wig styling, nail fixing, and flawless eyelash
            installation — ensuring every client leaves confident and beautiful.
          </motion.p>

          <motion.button
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.8 }}
            className="px-8 py-3 bg-linear-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B] text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Reserve Appointment
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
