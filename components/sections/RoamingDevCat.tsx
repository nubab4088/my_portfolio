'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';

export default function RoamingDevCat() {
  const { scrollYProgress } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [facingRight, setFacingRight] = useState(true);
  const [lastX, setLastX] = useState(5);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 60 });

  // Adjusted roaming coordinates so it stays well clear of your main portfolio text and headers
  const xProgress = useTransform(smoothProgress, 
    [0, 0.2, 0.4, 0.6, 0.8, 1], 
    [5, 85, 10, 88, 12, 80] 
  );
  
  const yProgress = useTransform(smoothProgress, 
    [0, 0.2, 0.4, 0.6, 0.8, 1], 
    [8, 28, 48, 68, 82, 92] 
  );

  const leftValue = useTransform(xProgress, (val) => `${val}vw`);
  const topValue = useTransform(yProgress, (val) => `${val}vh`);

  useMotionValueEvent(xProgress, "change", (latest) => {
    if (latest > lastX + 0.1) setFacingRight(true);
    else if (latest < lastX - 0.1) setFacingRight(false);
    setLastX(latest);
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsAtTop(latest < 0.02);
  });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolling(false), 250);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-30"
      style={{
        left: leftValue,
        top: topValue,
        scaleX: facingRight ? 1 : -1,
      }}
    >
      {/* Ultra-clean minimalist white aesthetic with soft ambient glow */}
      <div className="relative flex h-20 w-20 items-center justify-center drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
        
        {isAtTop ? (
          // 1. LAPTOP STATE: Modern minimalist line-art white cat coding at a sleek glass workspace
          <svg viewBox="0 0 100 100" className="h-full w-full" fill="none">
            {/* Soft Ambient White Screen Glow */}
            <motion.rect animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ repeat: Infinity, duration: 2.5 }} x="62" y="38" width="22" height="16" rx="2" fill="white" filter="blur(6px)" opacity="0.3" />
            
            {/* Modern Minimalist Laptop */}
            <path d="M 58 55 L 88 55 L 84 38 L 62 38 Z" fill="#121212" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M 38 56 L 94 56 L 90 61 L 34 61 Z" fill="#222" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />

            {/* Elegant White Cat Silhouette */}
            <path d="M 22 65 C 20 42, 45 35, 52 52 C 58 68, 40 67, 22 65 Z" fill="white" />
            
            {/* Head & Pointed Ears */}
            <circle cx="48" cy="36" r="11" fill="white" />
            <path d="M 40 28 L 43 17 L 50 26 Z" fill="white" />
            <path d="M 47 25 L 54 17 L 57 28 Z" fill="white" />
            
            {/* Minimalist Face Details */}
            <circle cx="53" cy="35" r="1.5" fill="#0a0a0a" />

            {/* Typing Paws Motion */}
            <motion.path d="M 46 50 L 58 57" stroke="white" strokeWidth="4" strokeLinecap="round" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.15 }} />
            <motion.path d="M 38 52 L 50 59" stroke="white" strokeWidth="4" strokeLinecap="round" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.2, delay: 0.05 }} />
          </svg>

        ) : isScrolling ? (
          // 2. WALKING STATE: Clean white fluid curves pacing smoothly across sections
          <svg viewBox="0 0 100 100" className="h-full w-full" fill="none">
            {/* Graceful Flowing Tail */}
            <motion.path d="M 28 48 Q 12 45, 18 25" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" animate={{ rotate: [-8, 8, -8] }} transition={{ repeat: Infinity, duration: 0.8 }} style={{ transformOrigin: "28px 48px" }} />
            
            {/* Sleek Body */}
            <path d="M 22 46 C 22 34, 72 34, 72 52 C 72 65, 22 65, 22 46 Z" fill="white" />
            
            {/* Moving Legs */}
            <motion.line x1="32" y1="56" x2="28" y2="72" stroke="white" strokeWidth="4" strokeLinecap="round" animate={{ rotate: [-20, 20, -20] }} transition={{ repeat: Infinity, duration: 0.35 }} style={{ transformOrigin: "32px 56px" }} />
            <motion.line x1="62" y1="56" x2="66" y2="72" stroke="white" strokeWidth="4" strokeLinecap="round" animate={{ rotate: [20, -20, 20] }} transition={{ repeat: Infinity, duration: 0.35 }} style={{ transformOrigin: "62px 56px" }} />

            {/* Head & Ears */}
            <circle cx="75" cy="40" r="11" fill="white" />
            <path d="M 68 31 L 71 19 L 79 28 Z" fill="white" />
            <path d="M 77 29 L 83 19 L 86 31 Z" fill="white" />
            <circle cx="81" cy="38" r="1.5" fill="#0a0a0a" />
          </svg>

        ) : (
          // 3. IDLE / SITTING STATE: Poised white cat resting elegantly
          <svg viewBox="0 0 100 100" className="h-full w-full" fill="none">
            {/* Relaxed Tail */}
            <motion.path d="M 32 68 Q 14 68, 18 42" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" animate={{ rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3 }} style={{ transformOrigin: "32px 68px" }} />
            
            {/* Sitting Torso */}
            <path d="M 28 70 C 24 45, 58 38, 62 58 C 66 75, 32 75, 28 70 Z" fill="white" />
            
            {/* Front Paws */}
            <line x1="58" y1="56" x2="58" y2="74" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <line x1="48" y1="56" x2="48" y2="74" stroke="white" strokeWidth="4" strokeLinecap="round" />

            {/* Head & Ears */}
            <circle cx="62" cy="36" r="11" fill="white" />
            <path d="M 54 27 L 57 15 L 65 24 Z" fill="white" />
            <path d="M 63 24 L 70 15 L 73 27 Z" fill="white" />
            
            {/* Soft Blink */}
            <motion.circle 
              cx="68" cy="35" r="1.5" fill="#0a0a0a" 
              animate={{ scaleY: [1, 1, 0.1, 1, 1] }} 
              transition={{ repeat: Infinity, duration: 4, times: [0, 0.45, 0.5, 0.55, 1] }} 
            />
          </svg>
        )}
        
      </div>
    </motion.div>
  );
}