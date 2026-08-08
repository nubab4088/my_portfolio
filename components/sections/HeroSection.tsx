'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  };

  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center pt-24 pb-20 overflow-hidden">
      
      {/* Background Glow Effects - Soft Sage & Dusty Periwinkle */}
      <div className="absolute top-1/4 left-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-400/10 blur-[150px] pointer-events-none" />

      {/* RESTORED BACKGROUND: Increased opacity to 20% and lightened the top gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/back.jpeg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-20 mix-blend-overlay grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/90 to-[#0a0a0a]" />
      </div>

      {/* Main Content Container */}
      <div className="container-max relative z-10 w-full px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          
          {/* LEFT COLUMN: Typography & Actions */}
          <motion.div 
            variants={container} 
            initial="hidden" 
            animate="show" 
            className="flex flex-col items-start w-full max-w-xl"
          >
            <motion.div variants={item} className="mb-8 flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#a0a0a0]">
                Portfolio & Research
              </span>
            </motion.div>

            <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight text-white leading-[1.05] mb-6">
              Nusrat Jahan <br />
              <span className="bg-gradient-to-r from-teal-300 via-emerald-200 to-indigo-300 bg-clip-text text-transparent animate-gradient-x">
                Bably
              </span>
            </motion.h1>

            <motion.h2 variants={item} className="text-sm font-bold uppercase tracking-widest text-emerald-300 mb-6">
              Research & Technology Enthusiast
            </motion.h2>

            <motion.p variants={item} className="text-[15px] sm:text-base leading-relaxed text-[#a0a0a0] mb-8 max-w-[480px] lg:pr-8">
              Aspiring tech professional with strong interests in research-driven innovation, AI, and full-stack development. Passionate about contributing to impactful projects that combine scientific inquiry, scalable technology, and real-world problem solving. Skilled in learning new concepts, conducting analytical investigations, and collaborating in multidisciplinary environments while continuously pursuing growth and knowledge.
            </motion.p>
          </motion.div>

          {/* RIGHT COLUMN: Modern Bento Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col gap-4 w-full max-w-[560px] mx-auto lg:mx-0 lg:ml-auto"
          >
            {/* Top Card: Academic Excellence */}
            <div className="group relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0d0d12]/80 p-7 shadow-2xl backdrop-blur-xl transition-all hover:border-emerald-500/30">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-[40px] transition-all group-hover:bg-emerald-500/20" />
              
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-emerald-300 mb-2">Academic Excellence</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black tracking-tight text-white">3.90</span>
                    <span className="text-lg font-bold text-[#555]">/4.00</span>
                  </div>
                  <p className="mt-3 text-xs font-medium text-[#888]">B.Sc. in Computer Science & Engineering · UIU</p>
                </div>
                
                {/* Star Badge */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-emerald-200 backdrop-blur-md">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                </div>
              </div>
            </div>

            {/* Middle Row: Qualitative Expertise Domains */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Domain 1: Full-Stack Systems */}
              <div className="group relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#0d0d12]/80 p-5 shadow-lg backdrop-blur-xl transition-all hover:border-teal-500/30">
                <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-teal-500/10 blur-[30px] transition-all group-hover:bg-teal-500/20" />
                <div className="relative z-10">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 transition-transform group-hover:scale-110">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  </div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#777] mb-1">Engineering</h4>
                  <p className="text-sm font-bold text-[#e5e5e5]">Full-Stack Systems</p>
                </div>
              </div>

              {/* Domain 2: AI & Deep Learning */}
              <div className="group relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#0d0d12]/80 p-5 shadow-lg backdrop-blur-xl transition-all hover:border-indigo-500/30">
                <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-indigo-500/10 blur-[30px] transition-all group-hover:bg-indigo-500/20" />
                <div className="relative z-10">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 transition-transform group-hover:scale-110">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  </div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#777] mb-1">Research Area</h4>
                  <p className="text-sm font-bold text-[#e5e5e5]">AI & Deep Learning</p>
                </div>
              </div>

            </div>

            {/* Bottom Card: Philosophy */}
            <div className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#0d0d12]/80 p-6 shadow-lg backdrop-blur-xl">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#777] mb-3">Design & Engineering Philosophy</h3>
              <p className="text-[13px] font-medium italic leading-relaxed text-[#a0a0a0]">
                "Building systems where intelligence meets usability. Focused on clarity, scalable architecture, and real-world impact."
              </p>
            </div>

          </motion.div>
        </div>
      </div>

      {/* FIXED BUTTON ALIGNMENT: Using left-0 right-0 to guarantee true center */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-0 right-0 z-20 flex justify-center"
      >
        <Link 
          href="#about"
          className="group flex w-max items-center gap-3 rounded-full border border-white/10 bg-[#050505]/50 px-5 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#a0a0a0] transition-colors group-hover:text-white">
            Scroll to Explore
          </span>
        </Link>
      </motion.div>

    </section>
  );
}