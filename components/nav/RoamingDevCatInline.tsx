'use client';

import { motion } from 'framer-motion';

export default function RoamingDevCatInline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-8 w-8"
      aria-hidden="true"
    >
      <svg viewBox="0 0 120 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="catBodyGradientInline" x1="0" x2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="1" stopColor="#f3f4f6" stopOpacity="1" />
          </linearGradient>
        </defs>

        <motion.circle
          cx="40"
          cy="42"
          r="14"
          fill="#fff"
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        />

        <motion.path
          d="M20 62 C12 60 12 48 22 44 C30 40 34 50 28 54 C24 58 22 50 28 47"
          stroke="#9CA3AF"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ rotate: [0, -6, 6, 0] }}
          transition={{ repeat: Infinity, duration: 3.6, ease: 'easeInOut' }}
          style={{ transformOrigin: '30px 50px' }}
        />

        <g>
          <motion.ellipse
            cx="52"
            cy="38"
            rx="3"
            ry="4"
            fill="#111827"
            animate={{ x: [0, 1.2, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          />
          <motion.ellipse
            cx="66"
            cy="38"
            rx="3"
            ry="4"
            fill="#111827"
            animate={{ x: [0, -1.2, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          />
        </g>

        <motion.path
          d="M54 52 C60 56 72 56 78 52"
          stroke="#f9a8d4"
          strokeWidth="1.4"
          strokeLinecap="round"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
        />
      </svg>
    </motion.div>
  );
}
