'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function FuelProject() {
  const router = useRouter();
  const sectionLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Build', href: '#build' },
    { label: 'Testing', href: '#testing' },
    { label: 'Video', href: '#video' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const handleBack = () => {
    if (typeof window !== 'undefined') {
      try {
        const params = new URLSearchParams(window.location.search);
        const fromParam = params.get('from');
        if (fromParam) {
          const target = decodeURIComponent(fromParam);
          router.push(target);
          return;
        }
      } catch (e) {
        // ignore and continue
      }
    }

    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
      return;
    }

    router.push('/#projects');
  };

  return (
    <main className="bg-[#050505] min-h-screen pt-32 pb-24 relative overflow-hidden text-white">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-10 -z-10 h-96 w-96 rounded-full bg-emerald-400/5 blur-[120px]" />

      {/* Flush Glass Navigation (Matches Hero) */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-40 pointer-events-none"
      >
        <nav className="pointer-events-auto w-full border-b border-white/10 bg-[#0a0a0a]/85 backdrop-blur-2xl">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 md:px-8 py-2.5">
            
            <div className="flex w-[164px] shrink-0 justify-start">
              <button
                type="button"
                onClick={handleBack}
                className="group relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#a0a0a0] transition-all duration-200 hover:text-white hover:border-teal-500/40 hover:bg-teal-500/10"
              >
                <svg className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span>Go Back</span>
              </button>
            </div>

            <div className="hidden md:flex items-center gap-1 bg-white/[0.02] px-2.5 py-1 rounded-full border border-white/5 shadow-inner">
              {sectionLinks.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#a0a0a0] hover:text-teal-400 hover:bg-white/10 transition-all duration-200 whitespace-nowrap"
                >
                  {section.label}
                </Link>
              ))}
            </div>

            {/* Empty div to balance flex layout */}
            <div className="w-[164px] shrink-0"></div>

          </div>
        </nav>
      </motion.header>

      <div className="container-max mx-auto max-w-5xl px-6 relative z-10">
        
        {/* Title Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6 mb-12 flex flex-col items-center text-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-300">
              Embedded IoT System
            </span>
          </motion.div>

          {/* Cleaned up redundant title text */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white max-w-4xl">
            Fuel Theft Detection &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400">Consumption Monitoring</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-[15px] sm:text-base leading-relaxed text-[#a0a0a0] font-medium max-w-2xl">
            A comprehensive hardware system integrating sensors and Bluetooth modules to detect unauthorized fuel withdrawals, monitor consumption patterns in real-time, and alert owners instantly.
          </motion.p>
        </motion.div>

        {/* UNIFIED METADATA PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-8 rounded-3xl border border-white/10 bg-[#0d0d12]/80 p-8 backdrop-blur-xl shadow-2xl"
        >
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#707070] mb-2">Role & Context</h3>
            <p className="text-sm font-semibold text-white">Microcontroller Lab Project</p>
          </div>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#707070] mb-2">Primary Focus</h3>
            <p className="text-sm font-semibold text-white">Live Theft Detection</p>
          </div>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#707070] mb-2">Hardware Stack</h3>
            <p className="text-sm font-semibold text-white">Arduino, C++, IoT Sensors</p>
          </div>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#707070] mb-2">Duration</h3>
            <p className="text-sm font-semibold text-white">4 Months</p>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          id="overview"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20 relative rounded-[32px] border border-white/10 bg-[#101010] overflow-hidden shadow-2xl p-4 sm:p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.1)_0%,transparent_70%)] pointer-events-none" />
          <img
            src="/fuel/1.jpg"
            alt="Fuel Theft Detection Prototype"
            className="w-full h-auto max-h-[500px] object-contain rounded-2xl mx-auto drop-shadow-2xl"
            loading="eager"
          />
        </motion.div>

        <motion.div
          id="build"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 space-y-4 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span className="text-teal-400 font-mono text-xl">01.</span> Problem Statement
          </h2>
          <p className="text-base leading-relaxed text-[#a0a0a0] font-normal">
            Fuel theft is a growing global issue, worsened by economic struggles, poor security, and high fuel costs. As a non-renewable resource, its misuse impacts both the economy and operations—especially in vehicle-dependent industries. To combat this, our project proposes a smart system using integrated sensors to detect unauthorized fuel usage and promote efficient fuel consumption.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 space-y-8 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span className="text-teal-400 font-mono text-xl">02.</span> Prototype &amp; Circuit Design
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/10 bg-[#101010] p-4 shadow-xl flex flex-col justify-between hover:border-teal-500/20 transition-colors">
              <div className="w-full h-[280px] flex items-center justify-center bg-black/60 rounded-2xl overflow-hidden p-2">
                <img src="/fuel/2.jpg" alt="Hardware Close-up" className="max-h-full max-w-full object-contain drop-shadow-lg" />
              </div>
              <p className="mt-4 text-xs font-bold text-center uppercase tracking-widest text-[#707070]">Hardware Integration</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#101010] p-4 shadow-xl flex flex-col justify-between hover:border-teal-500/20 transition-colors">
              <div className="w-full h-[280px] flex items-center justify-center bg-black/60 rounded-2xl overflow-hidden p-2">
                <img src="/fuel/3.png" alt="Circuit Schematic Diagram" className="max-h-full max-w-full object-contain drop-shadow-lg" />
              </div>
              <p className="mt-4 text-xs font-bold text-center uppercase tracking-widest text-[#707070]">Circuit Schematic</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-4">
            {[
              { component: 'Flow Meter', detail: 'Measures fuel flow rate for consumption data (A5).' },
              { component: 'Speed Sensor', detail: 'Monitors vehicle speed for efficiency analysis (D0, pin 2).' },
              { component: 'Ultrasonic Sensor', detail: 'Measures fuel level and detects sudden drops (Trig: 4, Echo: 3).' },
              { component: 'Bluetooth Module', detail: 'Transmits wireless theft alerts to monitoring station (RX: 11, TX: 10).' },
              { component: 'LCD Display', detail: 'Shows real-time consumption and alerts (SCL: A5, SDA: A4).' },
              { component: 'Arduino Uno', detail: 'Central processing unit managing all sensor inputs.' },
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.04] transition-colors">
                <span className="text-sm font-bold text-teal-300 min-w-[160px]">{item.component}</span>
                <span className="text-sm text-[#a0a0a0] flex-1">{item.detail}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          id="testing"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span className="text-teal-400 font-mono text-xl">03.</span> Results &amp; Testing
          </h2>

          <p className="text-base leading-relaxed text-[#a0a0a0] font-normal">
            When an abnormal drop in fuel level is detected—potentially due to theft—the ultrasonic sensor identifies the anomaly instantly. This data is displayed in real-time on the LCD and transmitted to the owner via Bluetooth, ensuring swift response.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {[
              { img: '/fuel/4.jpg', caption: 'Initial fuel level monitoring' },
              { img: '/fuel/5.jpg', caption: 'Live LCD feedback during refueling' },
              { img: '/fuel/6.jpg', caption: 'Simulating extraction via syringe' },
              { img: '/fuel/7.jpg', caption: 'Bluetooth warning logs' },
            ].map((test, idx) => (
              <div key={idx} className="group rounded-3xl border border-white/10 bg-[#101010] p-3 shadow-xl">
                {/* FIXED: Increased height to 400px, added object-cover, and added group-hover scale effect */}
                <div className="w-full h-[400px] flex items-center justify-center bg-[#050505] rounded-2xl overflow-hidden mb-3 relative">
                  <img src={test.img} alt={test.caption} className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                </div>
                <p className="text-[11px] font-bold text-center uppercase tracking-widest text-[#707070] px-2 pb-1">{test.caption}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#101010] p-4 sm:p-8 overflow-hidden shadow-2xl mt-12">
            <h3 id="video" className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300 mb-6 text-center">Live System Demonstration</h3>
            <video
              controls
              poster="/fuel/1.jpg"
              className="w-full h-auto max-h-[500px] object-contain rounded-xl mx-auto border border-white/5"
            >
              <source src="/fuel/Fuel Theft detection whole process video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </main>
  );
}