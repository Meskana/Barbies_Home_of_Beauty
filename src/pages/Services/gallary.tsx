import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539",
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
    "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light">
            Our <span className="text-yellow-500">Gallery</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A glimpse into elegance, beauty, and unforgettable transformations.
          </p>
        </motion.div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[200px]">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-3xl group
                ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}
                ${index === 3 ? "md:col-span-2" : ""}
              `}
            >
              <img
                src={`${src}?auto=format&fit=crop&w=800&q=80`}
                alt="Beauty Work"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
