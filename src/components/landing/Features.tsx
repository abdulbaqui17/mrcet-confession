'use client';

import { motion } from 'framer-motion';
import { Shield, Heart, MessageSquare, Eye } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Complete Anonymity",
    description: "Your identity remains protected while you share your thoughts and experiences."
  },
  {
    icon: Heart,
    title: "Supportive Community",
    description: "Connect with others who understand and empathize with your journey."
  },
  {
    icon: MessageSquare,
    title: "Easy to Share",
    description: "Simple and intuitive interface to share your confessions instantly."
  },
  {
    icon: Eye,
    title: "Safe Space",
    description: "A judgment-free environment where you can be your authentic self."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose MRCET Confession?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform is designed to provide a safe and supportive environment for students to express themselves.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}