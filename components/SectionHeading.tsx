'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  children: string;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-16"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white relative inline-block tracking-tight">
        {children}
        <motion.span
          className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-teal-300 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.5)]"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </h2>
    </motion.div>
  );
}