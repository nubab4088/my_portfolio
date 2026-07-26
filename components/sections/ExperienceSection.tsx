'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Graduate & Undergraduate Teaching Assistant',
      company: 'United International University (UIU) · Department of CSE & Data Science',
      period: 'Oct 2024 – Feb 2026',
      description: [
        'Assisted undergraduate students in Object Oriented Programming and Data Structures & Algorithms labs.',
        'Provided debugging support and academic guidance during lab sessions to strengthen problem-solving and programming fundamentals.',
        'Evaluated assignments, coding tasks, and class assessments with consistency and fairness.',
        'Collaborated with faculty members in preparing lab materials and ensuring smooth execution of lab activities.',
        'Evaluated assignments and class tests as a grader, aligned with course objectives.',
        'Provided constructive feedback to help students improve core Electrical Circuit understanding and theoretical foundations.',
      ],
      skills: ['OOP', 'C/C++', 'Python', 'DSA', 'Mentoring', 'Classroom Facilitation', 'Grading', 'Counselling'],
    },
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

  return (
    <section id="experience" className="bg-[#0a0a0a] pt-6 pb-24 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute top-1/2 right-10 -z-10 h-80 w-80 rounded-full bg-[#6366f1]/10 blur-[120px]" />

      {/* MATCHED CONTAINER: max-w-7xl ensures exact left-edge alignment */}
      <div className="container-max mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Editorial Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mb-16 space-y-4"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#6366f1]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a0a0a0]">
              Experience
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#818cf8]">Journey</span>
          </motion.h2>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 md:p-12 backdrop-blur-xl transition-all duration-500 hover:border-[#6366f1]/40 hover:bg-white/[0.04] shadow-2xl overflow-hidden"
            >
              {/* Top Row: Title, Company & Period Badge */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 border-b border-white/10 pb-8 mb-8">
                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="text-base sm:text-lg font-semibold text-[#818cf8]">
                    {exp.company}
                  </p>
                </div>
                
                <div className="self-start">
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#a0a0a0] backdrop-blur-md">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Description Bullet List */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-sm sm:text-base text-[#a0a0a0] flex items-start gap-3 leading-relaxed">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#6366f1] mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Pills */}
              <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#707070] mr-2">Skills Utilized:</span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-[#e5e5e5] transition-colors hover:border-[#6366f1]/50 hover:bg-[#6366f1]/10 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}