'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationBar() {
  const pathname = usePathname();

  if (pathname?.startsWith('/fuel')) {
    return null;
  }

  const navItems = [
    { label: 'About', href: '/#about' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Research', href: '/#research' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Awards', href: '/#achievements' },
    { label: 'Education', href: '/#education' },
    { label: 'References', href: '/#references' },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-5 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none"
    >
      <nav className="pointer-events-auto flex items-center justify-between gap-4 rounded-full border border-white/10 bg-[#0a0a0a]/85 px-6 py-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl transition-all duration-300 hover:border-white/20 w-full max-w-6xl">
        
        {/* Workstation Anchor: Side-Profile Laptop */}
        <Link 
          href="/#hero" 
          id="workstation-anchor" 
          className="relative flex items-center h-[36px] w-[120px] shrink-0 group pointer-events-auto"
        >
          <span className="sr-only">Nusrat Jahan Bably - Home</span>
          
          <svg viewBox="0 0 120 40" className="h-full w-full overflow-visible" fill="none">
            {/* Long Desk Line */}
            <line x1="5" y1="36" x2="115" y2="36" stroke="#444" strokeWidth="2.5" strokeLinecap="round" />
            
            {/* Screen Glow (Projecting left towards the cat) - Updated to Soft Teal */}
            <motion.path d="M 83 12 L 40 18 L 40 32 L 80 32 Z" fill="#2dd4bf" opacity="0.15" animate={{ opacity: [0.1, 0.25, 0.1] }} transition={{ repeat: Infinity, duration: 3 }} />
            
            {/* Side-Profile Laptop Base (Keyboard Deck) */}
            <line x1="80" y1="32" x2="45" y2="32" stroke="#e5e5e5" strokeWidth="3.5" strokeLinecap="round" />
            
            {/* Side-Profile Laptop Screen (Angled Back) */}
            <line x1="85" y1="10" x2="80" y2="32" stroke="#e5e5e5" strokeWidth="3.5" strokeLinecap="round" />
            
            {/* Coffee Mug (Tucked safely behind the laptop) */}
            <rect x="92" y="22" width="10" height="12" rx="2" fill="#0a0a0a" stroke="#e5e5e5" strokeWidth="2" />
            <path d="M 102 25 C 106 25, 106 31, 102 31" fill="none" stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" />
            <motion.path d="M 95 18 Q 98 15, 95 12" stroke="#e5e5e5" strokeWidth="1.5" fill="none" strokeLinecap="round" animate={{ y: [0, -3, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ repeat: Infinity, duration: 2 }} />
          </svg>
        </Link>

        {/* Center Nav Links */}
        <div className="hidden lg:flex items-center gap-0.5 bg-white/[0.03] px-2.5 py-1 rounded-full border border-white/5 shadow-inner">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#a0a0a0] hover:text-teal-400 hover:bg-white/10 transition-all duration-200 whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Action Button - Updated to Soft Ethereal Palette */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+8801828624088"
            className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-300 to-emerald-400 px-5 py-2 text-xs font-bold uppercase tracking-wider text-black shadow-[0_0_15px_rgba(20,184,166,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] active:scale-95"
          >
            Contact
          </a>
        </div>
      </nav>
    </motion.header>
  );
}