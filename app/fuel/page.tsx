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
    <main className="bg-[#0a0a0a] min-h-screen pt-32 pb-24 relative overflow-hidden text-white">
      <div className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-10 -z-10 h-96 w-96 rounded-full bg-emerald-400/5 blur-[120px]" />

      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-5 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none"
      >
        <nav className="pointer-events-auto flex items-center justify-between gap-4 rounded-full border border-white/10 bg-[#0a0a0a]/85 px-6 py-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl transition-all duration-300 hover:border-white/20 w-full max-w-6xl">
          <button
            type="button"
            onClick={handleBack}
            className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#a0a0a0] transition-all duration-200 hover:text-white hover:border-teal-500/40"
          >
            <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span>Go Back</span>
          </button>

          <div className="hidden md:flex items-center gap-0.5 bg-white/[0.03] px-2.5 py-1 rounded-full border border-white/5 shadow-inner">
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

        </nav>
      </motion.header>

      <div className="container-max mx-auto max-w-6xl px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6 mb-10"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-300">
              Embedded IoT System
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white">
            The Fuel Theft Detection and Fuel Consumption <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400">Monitoring System</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base sm:text-lg leading-relaxed text-[#a0a0a0] font-normal max-w-3xl">
            Fuel theft and inefficient fuel consumption pose major challenges for individuals, businesses, and industries dependent on vehicles and machinery. This project proposes a comprehensive monitoring system that integrates sensors and modules to detect unauthorized fuel withdrawals, monitor consumption patterns, and encourage fuel-efficient usage through real-time feedback and alerts.
          </motion.p>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Built for', value: 'Microcontroller lab work' },
            { label: 'Focus', value: 'Live fuel theft detection' },
            { label: 'Stack', value: 'Arduino, sensors, LCD, Bluetooth' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#707070] mb-2">{item.label}</p>
              <p className="text-sm font-semibold text-white leading-snug">{item.value}</p>
            </div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <motion.div variants={itemVariants} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl shadow-lg">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#707070] mb-2">Role</h3>
            <p className="text-sm font-semibold text-white leading-snug">
              Microprocessor, Microcontroller and Interfacing Laboratory
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl shadow-lg">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#707070] mb-2">Industry</h3>
            <p className="text-sm font-semibold text-white">Academic Project</p>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl shadow-lg">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#707070] mb-2">Duration</h3>
            <p className="text-sm font-semibold text-white">4 months</p>
          </motion.div>
        </motion.div>

        <motion.div
          id="overview"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 relative rounded-3xl border border-white/10 bg-[#141414] overflow-hidden shadow-2xl p-6"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.15)_0%,transparent_70%)] pointer-events-none" />
          <img
            src="/fuel/1.jpg"
            alt="Fuel Theft Detection Prototype"
            className="w-full h-auto max-h-[480px] object-contain rounded-2xl mx-auto drop-shadow-2xl"
            loading="eager"
          />
        </motion.div>

        <motion.div
          id="build"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span className="text-teal-400 font-mono text-xl">01.</span> Problem Statement
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#a0a0a0] font-normal">
            Fuel theft is a growing global issue, worsened by economic struggles, poor security, and high fuel costs. As a non-renewable resource, its misuse impacts both the economy and operations—especially in vehicle-dependent industries. To combat this, our project proposes a smart system using integrated sensors to detect unauthorized fuel usage and promote efficient fuel consumption.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span className="text-teal-400 font-mono text-xl">02.</span> Prototype Development &amp; Circuit Design
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="rounded-3xl border border-white/10 bg-[#141414] p-4 shadow-xl flex flex-col justify-between">
              <div className="w-full h-[280px] flex items-center justify-center bg-black/50 rounded-2xl overflow-hidden p-2">
                <img
                  src="/fuel/2.jpg"
                  alt="Hardware Close-up"
                  className="max-h-full max-w-full object-contain drop-shadow-lg"
                />
              </div>
              <p className="mt-3 text-xs font-bold text-center uppercase tracking-widest text-[#a0a0a0]">Hardware Integration Close-Up</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#141414] p-4 shadow-xl flex flex-col justify-between">
              <div className="w-full h-[280px] flex items-center justify-center bg-black/50 rounded-2xl overflow-hidden p-2">
                <img
                  src="/fuel/3.png"
                  alt="Circuit Schematic Diagram"
                  className="max-h-full max-w-full object-contain drop-shadow-lg"
                />
              </div>
              <p className="mt-3 text-xs font-bold text-center uppercase tracking-widest text-[#a0a0a0]">Circuit Schematic Diagram</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 pt-4">
            {[
              { component: 'Flow Meter', detail: 'Measures fuel flow rate, providing accurate fuel consumption data. (yellow wire connected at A5 in Arduino)' },
              { component: 'Speed Sensor', detail: 'Monitors vehicle speed, contributing to fuel efficiency analysis. (D0 purple wire connected at 2 in Arduino)' },
              { component: 'Ultrasonic Sensor', detail: 'Measures fuel level, detects sudden fuel level changes, and indicates potential theft attempts. (trig (white wire) at 4, echo (gray wire) at 3 in Arduino)' },
              { component: 'Bluetooth Module', detail: 'Enables wireless data transmission to a monitoring station. (rx (blue wire) at 11, tx(green wire) at 10)' },
              { component: 'LCD Display', detail: 'Shows real-time fuel consumption, vehicle speed, and theft alerts. (SCL(yellow) at A5, SDA orange at A4)' },
              { component: 'Arduino', detail: 'Collects, processes, and manages data from all sensors and modules.' },
              { component: 'Breadboard', detail: 'Provides secure circuit prototyping bus connections.' },
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-sm font-bold text-teal-300 min-w-[180px]">{item.component}</span>
                <span className="text-sm text-[#a0a0a0] leading-relaxed flex-1">{item.detail}</span>
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
          className="space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span className="text-teal-400 font-mono text-xl">03.</span> Results &amp; Real-Time Testing
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-[#a0a0a0] font-normal">
            Our system operates on a simple yet effective principle: when an abnormal drop in fuel level is detected—potentially due to theft—the ultrasonic sensor immediately identifies the anomaly. This data is then displayed in real-time on the LCD and simultaneously transmitted to the owner via Bluetooth, ensuring timely alerts and swift response.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="rounded-3xl border border-white/10 bg-[#141414] p-4 shadow-xl flex flex-col justify-between">
              <div className="w-full h-[280px] flex items-center justify-center bg-black/50 rounded-2xl overflow-hidden p-2">
                <img
                  src="/fuel/4.jpg"
                  alt="Fuel level testing"
                  className="max-h-full max-w-full object-contain drop-shadow-lg"
                />
              </div>
              <p className="mt-3 text-xs font-medium text-center text-[#a0a0a0]">Initial testing of real-time fuel level monitoring</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#141414] p-4 shadow-xl flex flex-col justify-between">
              <div className="w-full h-[280px] flex items-center justify-center bg-black/50 rounded-2xl overflow-hidden p-2">
                <img
                  src="/fuel/5.jpg"
                  alt="Refueling telemetry"
                  className="max-h-full max-w-full object-contain drop-shadow-lg"
                />
              </div>
              <p className="mt-3 text-xs font-medium text-center text-[#a0a0a0]">Live LCD feedback during refueling state</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#141414] p-4 shadow-xl flex flex-col justify-between">
              <div className="w-full h-[280px] flex items-center justify-center bg-black/50 rounded-2xl overflow-hidden p-2">
                <img
                  src="/fuel/6.jpg"
                  alt="Syringe extraction test"
                  className="max-h-full max-w-full object-contain drop-shadow-lg"
                />
              </div>
              <p className="mt-3 text-xs font-medium text-center text-[#a0a0a0]">Simulating unauthorized extraction via syringe mechanism</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#141414] p-4 shadow-xl flex flex-col justify-between">
              <div className="w-full h-[280px] flex items-center justify-center bg-black/50 rounded-2xl overflow-hidden p-2">
                <img
                  src="/fuel/7.jpg"
                  alt="Bluetooth alert logs"
                  className="max-h-full max-w-full object-contain drop-shadow-lg"
                />
              </div>
              <p className="mt-3 text-xs font-medium text-center text-[#a0a0a0]">Instant warning logs transmitted over Bluetooth terminal</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#141414] p-6 overflow-hidden shadow-2xl mt-6">
            <h3 id="video" className="text-sm font-bold uppercase tracking-widest text-teal-300 mb-4 text-center">Live System Demonstration Video</h3>
            <video
              controls
              poster="/fuel/1.jpg"
              className="w-full h-auto max-h-[500px] object-contain rounded-2xl mx-auto shadow-2xl"
            >
              <source src="/fuel/Fuel Theft detection whole process video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="mt-3 text-xs font-medium text-center text-[#a0a0a0]">Complete walkthrough of sensor functionality, LCD status outputs, and wireless telemetry</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
