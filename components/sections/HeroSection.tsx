'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  const stats = [
    { value: '4+', label: 'Projects Built', colSpan: 'col-span-1' },
    { value: '3', label: 'Research Papers', colSpan: 'col-span-1' },
  ];

  const focusPoints = ['Research & Technology Enthusiast'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
   <section id="hero" className="relative flex items-center justify-center overflow-hidden pt-28 pb-12 bg-[#0a0a0a]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -z-20 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#6366f1]/20 via-[#818cf8]/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 -z-20 h-80 w-80 rounded-full bg-[#4f46e5]/15 blur-[100px] pointer-events-none" />

      {/* Subtle Architectural Grid */}
      <div className="absolute inset-0 -z-10 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black_40%,transparent_100%)] pointer-events-none" />

      <div className="container-max mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.25fr_0.9fr]">
          
          {/* Left Column: Editorial Hero Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Live Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366f1] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6366f1]"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a0a0a0]">
                Portfolio &amp; Research
              </span>
            </motion.div>

            {/* Massive Editorial Name & Inline Roles */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.92]">
                Nusrat Jahan <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#818cf8]">Bably</span>
              </h1>

              {/* Minimalist Typographic Focus Tags */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {focusPoints.map((point, idx) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="text-sm md:text-base font-semibold uppercase tracking-widest text-[#818cf8]">
                      {point}
                    </span>
                    {idx < focusPoints.length - 1 && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Crisp Bio Paragraph */}
            <motion.p variants={itemVariants} className="max-w-2xl text-base sm:text-lg leading-relaxed text-[#a0a0a0] font-normal">
              Aspiring tech professional with strong interests in research-driven innovation, AI, and full-stack development. Passionate about contributing to impactful
projects that combine scientific inquiry, technology, and real-world problem solving. Skilled in learning new concepts, conducting analytical investigations, and
collaborating in multidisciplinary environments while continuously pursuing growth and knowledge.
            </motion.p>

            {/* Primary & Secondary Action Bar */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#projects"
                className="relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#6366f1] to-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(99,102,241,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_35px_rgba(99,102,241,0.4)] active:scale-[0.98]"
              >
                Explore Projects
              </Link>
              <Link
                href="#research"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-[#6366f1]/50 hover:bg-white/[0.06] active:scale-[0.98]"
              >
                View Research
              </Link>
              <a
                href="/cv/NusratJahanBably_CV.pdf"
                download="NusratJahanBably_CV.pdf"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-bold text-[#e5e5e5] backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] active:scale-[0.98]"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Sleek Bento Grid Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 relative z-10">
              
              {/* Highlight Featured Card: CGPA */}
              <motion.div
                variants={itemVariants}
                className="col-span-2 relative rounded-3xl border border-[#6366f1]/30 bg-gradient-to-br from-[#6366f1]/15 via-white/[0.03] to-white/[0.01] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl overflow-hidden group hover:border-[#6366f1]/60 transition-all duration-500"
              >
                <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[#6366f1]/20 blur-2xl group-hover:bg-[#6366f1]/30 transition-all duration-500 pointer-events-none" />
                
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">
                      Academic Excellence
                    </span>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">3.90</span>
                      <span className="text-xl font-bold text-[#a0a0a0]">/ 4.00</span>
                    </div>
                  </div>
                  <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-[#818cf8] font-bold">
                    ★
                  </div>
                </div>
                <p className="mt-4 text-sm text-[#a0a0a0] font-medium">
                  B.Sc. in Computer Science &amp; Engineering · UIU
                </p>
              </motion.div>

              {/* Stat Card 1: Projects */}
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] flex flex-col justify-between aspect-square sm:aspect-auto sm:h-44"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-[#707070]">
                    <span>0{index + 1}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#6366f1]" />
                  </div>
                  <div>
                    <p className="text-4xl sm:text-5xl font-black text-white tracking-tight">{stat.value}</p>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-[#a0a0a0]">{stat.label}</p>
                  </div>
                </motion.div>
              ))}

              {/* Philosophical Statement Card */}
              <motion.div
                variants={itemVariants}
                className="col-span-2 rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-[#707070] mb-1">
                  Design &amp; Engineering Philosophy
                </p>
                <p className="text-sm font-medium text-white/90 italic">
                  &ldquo;Building systems where intelligence meets usability. Focused on clarity, scalability, and real-world impact.&rdquo;
                </p>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Centered Scroll Indicator (Now completely outside the columns) */}
        <div className="w-full flex justify-center mt-16 relative z-10">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[#707070] backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#6366f1]" />
            Scroll to explore
          </motion.div>
        </div>

      </div> {/* End of container-max */}
    </section>
  );
}