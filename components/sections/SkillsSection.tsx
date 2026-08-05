'use client';

import { motion } from 'framer-motion';

export default function SkillsSection() {
  const skills = {
    'Programming Languages': ['Python', 'Java', 'PHP', 'JavaScript', 'SQL', 'C/C++', 'HTML', 'CSS'],
    'Frameworks & Tools': ['Spring Boot', 'Laravel', 'Git/GitHub', 'Maven', 'MySQL', 'H2', 'XAMPP', 'LaTeX', 'Jira', 'Canva', 'Microsoft Office'],
    'AI & Data Science': ['Machine Learning', 'Deep Learning', 'NLP', 'TensorFlow', 'Pandas', 'NumPy', 'Matplotlib', 'Digital Image Processing'],
    'Research & Development': ['Literature Review', 'Experimental Design', 'Data Preprocessing', 'Prototype Development', 'Research Writing'],
    'Core Concepts': ['OOP', 'DSA', 'Software Engineering', 'DBMS', 'RDBMS', 'AI & Machine Learning', 'Computer Networks & Security', 'Full-Stack Development', 'Gamification Design'],
    'Professional Skills': ['Communication', 'Mentoring', 'Public Speaking', 'Classroom Facilitation', 'Team Collaboration', 'Problem Solving', 'Time Management'],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="skills" className="bg-[#0a0a0a] pt-6 pb-24 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute bottom-1/4 right-10 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-[140px]" />

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
            <span className="h-2 w-2 rounded-full bg-teal-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a0a0a0]">
              Capabilities
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-teal-300">Skills</span>
          </motion.h2>
        </motion.div>

        {/* Bento Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:border-teal-500/40 hover:bg-white/[0.04] shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Category Header with Index Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-bold text-teal-300 group-hover:border-teal-500/50 group-hover:bg-teal-500/10 transition-colors">
                    0{idx + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20 group-hover:bg-teal-500 transition-colors" />
                </div>

                <h3 className="text-xl font-extrabold text-white tracking-tight mb-6 group-hover:text-white/90">
                  {category}
                </h3>

                {/* Tactile Interactive Skill Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[#e5e5e5] transition-all duration-300 hover:border-teal-500/60 hover:bg-teal-500/15 hover:text-white hover:scale-105 cursor-default select-none shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}