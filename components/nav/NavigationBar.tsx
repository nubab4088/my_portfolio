'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NavigationBar() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Research', href: '#research' },
    { label: 'Skills', href: '#skills' },
    { label: 'Awards', href: '#achievements' },
    { label: 'Education', href: '#education' },
    { label: 'References', href: '#references' },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      {/* Floating Glass Capsule - Upgraded to max-w-6xl to fit all 8 sections cleanly */}
      <nav className="pointer-events-auto flex items-center justify-between gap-4 rounded-full border border-white/10 bg-[#0a0a0a]/85 px-6 py-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl transition-all duration-300 hover:border-white/20 w-full max-w-6xl">
        
        {/* Brand Logo with Live Glowing Accent */}
        <Link href="#hero" className="flex items-center gap-2 group shrink-0">
          <span className="h-2 w-2 rounded-full bg-[#6366f1] group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(99,102,241,0.8)] transition-all" />
          <span className="text-base font-black tracking-wider text-white group-hover:text-[#818cf8] transition-colors">
            NJB
          </span>
        </Link>

        {/* Center Nav Links - All 8 Sections Included */}
        <div className="hidden lg:flex items-center gap-0.5 bg-white/[0.03] px-2.5 py-1 rounded-full border border-white/5 shadow-inner">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#a0a0a0] hover:text-white hover:bg-white/10 transition-all duration-200 whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+8801828624088"
            className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6366f1] to-[#4f46e5] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] active:scale-95"
          >
            Contact
          </a>
        </div>

      </nav>
    </motion.header>
  );
}