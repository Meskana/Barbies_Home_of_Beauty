import { motion } from "framer-motion";

const services = [
  {
    title: "Bridal Makeup",
    description:
      "Luxury bridal glam tailored to enhance your natural beauty on your special day.",
    image: "/images/wedding.jfif",
  },

  {
    title: "Wig Styling",
    description:
      "Expert wig installation and styling for a seamless natural finish.",
    image: "/images/barbies2.1.png",
  },
  {
    title: "Nail Fixing",
    description: "Clean and polished nail enhancement to complete your look.",
    image: "/images/niles.jfif",
  },
];

const Services = () => {
  return (
    <section className="py-2 pb-8 px-6 bg-[#F8F4EC]">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-light"
        >
          Our <span className="text-[#B8860B]">Services </span>
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative group overflow-hidden rounded-2xl shadow-xl"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition duration-500" />

            {/* Content */}
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-white/90  transition duration-500">
                {service.description}
              </p>
              <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B]" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
