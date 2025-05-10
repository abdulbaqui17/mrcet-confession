'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    content: "This platform helped me find others who were going through similar experiences. It's amazing how much lighter you feel after sharing.",
    author: "Anonymous Student"
  },
  {
    content: "I love how safe and anonymous it is. It's given me the courage to express things I couldn't share anywhere else.",
    author: "Anonymous Student"
  },
  {
    content: "The community here is so supportive. It's like having a group of friends who understand exactly what you're going through.",
    author: "Anonymous Student"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Community Says
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from students who have found support and connection through our platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm"
            >
              <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
              <p className="text-purple-400 font-medium">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}