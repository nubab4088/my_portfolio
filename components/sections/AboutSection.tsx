'use client';

import { motion } from 'framer-motion';

const aboutCards = [
  {
    title: 'Philosophy',
    description:
      'More than just a developer or researcher, I’m someone who finds meaning in patterns, peace in solitude, and purpose in learning.',
    tag: 'Mindset',
  },
  {
    title: 'Approach',
    description:
      'Whether I’m working on a hands-on project or diving into research, I see both as opportunities to ask better questions, not just chase quick results.',
    tag: 'Methodology',
  },
  {
    title: 'Values',
    description:
      'Clarity matters to me - in thought, design, and execution. I value depth over noise, intention over speed, and progress that feels grounded. Be it code, models, or ideas - I approach all with empathy, curiosity, and care.',
    tag: 'Principles',
  },
];

const galleryItems = [
  { id: 1, title: 'Strategic Thinking', subtitle: 'Chess', image: '/photos/Chess.jpeg' },
  { id: 2, title: 'Learning', subtitle: 'Reading', image: '/photos/reading.jpeg' },
  { id: 3, title: 'Creative Expression', subtitle: 'Sketching', image: '/photos/sketching.jpeg' },
  { id: 4, title: 'Natural Growth', subtitle: 'Gardening', image: '/photos/gardening.jpeg' },
  { id: 5, title: 'Captured Moments', subtitle: 'Photography', image: '/photos/photography.jpeg' },
  { id: 6, title: 'Urban Perspective', subtitle: 'Photography', image: '/photos/photography3.jpeg' },
  { id: 7, title: 'Companionship', subtitle: 'Pets', image: '/photos/pet.jpeg' },
];

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" className="bg-[#0a0a0a] pt-12 pb-24 relative overflow-hidden">
      {/* Ambient Background Glows - Updated to Soft Teal/Emerald */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-teal-500/15 via-emerald-400/5 to-transparent blur-[120px]" />

      {/* MATCHED HERO CONTAINER: max-w-7xl ensures perfect left-edge alignment */}
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
              About Me
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Who I Am <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-teal-300">Beyond Tech</span>
          </motion.h2>
        </motion.div>

        {/* Upgraded Smart Bento Cards: Philosophy, Approach & Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mb-20 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className="group relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-teal-500/50 hover:bg-white/[0.05] hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top ambient glow on hover - Updated to Teal */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-24 w-48 bg-teal-500/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header Row: Index Number & Interactive LED Indicator */}
                <div className="mb-6 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-bold tracking-widest text-teal-400 group-hover:border-teal-500/50 group-hover:bg-teal-500/10 group-hover:text-white transition-all duration-300">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#707070] group-hover:text-[#a0a0a0] transition-colors">
                      {card.tag}
                    </span>
                  </div>

                  {/* Glowing Status LED Dot - Updated to Teal */}
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white/20 group-hover:bg-teal-400 group-hover:shadow-[0_0_10px_rgba(20,184,166,0.8)] transition-all duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-2xl font-black text-white tracking-tight group-hover:text-white/90 relative z-10">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#a0a0a0] font-normal relative z-10">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hobbies & Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Editorial Split Grid Layout */}
          <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_1.8fr] lg:items-start border-t border-white/10 pt-16">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal-400">
                Outside The Terminal
              </span>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Hobbies &amp; Interests
              </h3>
            </div>
            
            <p className="text-base sm:text-lg leading-relaxed text-[#a0a0a0] font-normal">
              I’m a person with multiple hobbies and interests. Outside of my technical work, I find balance and inspiration in nature and quiet moments. I enjoy gardening, photography, sketching and journaling — each giving me space to relax and stay creative. Reading broadens my perspective, while chess sharpens my strategic thinking. I also enjoy spending time with my pets, which brings a sense of calm and responsibility. These activities help me stay thoughtful, focused, and energized beyond my research and engineering.
            </p>
          </div>

          {/* Cinematic Ticker Gallery */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] py-8 shadow-2xl backdrop-blur-xl">
            {/* Edge Fade Gradients */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />

            <div className="animate-ticker flex w-max gap-6 px-6 will-change-transform">
              {[...galleryItems, ...galleryItems].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="group relative h-64 w-52 sm:h-76 sm:w-64 shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-[#111111] shadow-lg"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Cinematic Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                  
                  {/* Card Content - Updated to Teal subtitle */}
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
                    <span className="inline-block rounded-lg border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-300 backdrop-blur-md mb-2">
                      {item.subtitle}
                    </span>
                    <p className="text-lg font-extrabold text-white tracking-tight">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}