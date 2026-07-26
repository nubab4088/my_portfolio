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
      <h2 className="text-section font-bold text-text relative inline-block">
        {children}
        <motion.span
          className="absolute bottom-0 left-0 h-1 bg-accent rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </h2>
    </motion.div>
  );
}
