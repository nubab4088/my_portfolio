'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationBar() {
  const pathname = usePathname();

  // Hide on project sub-pages like /fuel
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
      className="fixed top-0 left-0 right-0 z-40 pointer-events-none"
    >
      <nav className="pointer-events-auto w-full border-b border-white/10 bg-[#0a0a0a]/85 backdrop-blur-2xl">
        
        {/* FIXED: Changed padding to pt-8 pb-4 to give the cat's head enough room below the browser edge! */}
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 md:px-8 pt-8 pb-4">
          
          {/* Workstation Anchor: Side-Profile Laptop */}
          <Link 
            href="/#hero" 
            id="workstation-anchor" 
            className="relative flex items-center justify-start h-[36px] w-[164px] shrink-0 group"
          >
            <span className="sr-only">Nusrat Jahan Bably - Home</span>
            <svg viewBox="0 0 120 40" className="h-full w-full overflow-visible" fill="none">
              <line x1="5" y1="36" x2="115" y2="36" stroke="#444" strokeWidth="2.5" strokeLinecap="round" />
              <motion.path d="M 83 12 L 40 18 L 40 32 L 80 32 Z" fill="#2dd4bf" opacity="0.15" animate={{ opacity: [0.1, 0.25, 0.1] }} transition={{ repeat: Infinity, duration: 3 }} />
              <line x1="80" y1="32" x2="45" y2="32" stroke="#e5e5e5" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="85" y1="10" x2="80" y2="32" stroke="#e5e5e5" strokeWidth="3.5" strokeLinecap="round" />
              <rect x="92" y="22" width="10" height="12" rx="2" fill="#0a0a0a" stroke="#e5e5e5" strokeWidth="2" />
              <path d="M 102 25 C 106 25, 106 31, 102 31" fill="none" stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" />
              <motion.path d="M 95 18 Q 98 15, 95 12" stroke="#e5e5e5" strokeWidth="1.5" fill="none" strokeLinecap="round" animate={{ y: [0, -3, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ repeat: Infinity, duration: 2 }} />
            </svg>
          </Link>

          {/* Center Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#a0a0a0] hover:text-teal-400 hover:bg-white/[0.05] transition-all duration-200 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex w-[164px] items-center justify-end shrink-0">
            <a
              href="/cv/NusratJahanBably_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-teal-500/40 bg-teal-500/10 px-5 py-2 text-[11px] font-bold uppercase tracking-widest text-teal-300 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-teal-400 hover:bg-teal-500/20 hover:text-white hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] active:scale-95"
            >
              <span>Download CV</span>
            </a>
          </div>

        </div>
      </nav>
    </motion.header>
  );
}