'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';

// Compact roaming workstation adapted for navigation placement
export default function RoamingDevCatNav() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const animRef = useRef<any>(null);
  const [paused, setPaused] = useState(false);
  const directionRef = useRef<1 | -1>(1);

  const CAT_WIDTH = 82; // footprint in px
  const PADDING = 8;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const computeBounds = () => {
      const rect = container.getBoundingClientRect();
      const min = 0 + PADDING;
      const max = Math.max(0, rect.width - CAT_WIDTH - PADDING);
      return { min, max };
    };

    let stopped = false;

    const step = () => {
      if (stopped) return;
      if (paused) {
        requestAnimationFrame(step);
        return;
      }

      const { min, max } = computeBounds();
      const current = x.get();
      const dir = directionRef.current;
      let target = dir === 1 ? max : min;

      const duration = Math.max(0.8, Math.abs(target - current) / 120);
      animRef.current = animate(x, target, {
        duration,
        ease: [0.22, 1, 0.36, 1],
        onComplete: () => {
          // reverse direction and wait a moment
          directionRef.current = (-dir) as 1 | -1;
          setTimeout(step, 700 + Math.random() * 700);
        },
      });
    };

    // start
    step();

    const onResize = () => {
      // snap back to valid range if needed
      const { min, max } = computeBounds();
      const cur = x.get();
      if (cur < min || cur > max) {
        x.set(Math.max(min, Math.min(max, cur)));
      }
    };

    window.addEventListener('resize', onResize);

    return () => {
      stopped = true;
      animRef.current?.stop?.();
      window.removeEventListener('resize', onResize);
    };
  }, [paused, x]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative flex h-12 w-[180px] items-center"
      aria-hidden="true"
    >
      <motion.div style={{ x }} className="absolute left-0 top-0 h-full w-[180px]">
        <div className="relative h-full w-full">
          {/* workstation bubble */}
          <div className="absolute right-0 top-0 h-full w-[92px] rounded-lg">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[66px] w-[86px] rounded-lg border border-white/6 bg-[#0f0f0f]/70 shadow-[inset_0_6px_24px_rgba(0,0,0,0.45)]">
              {/* screen mock */}
              <div className="absolute left-6 top-6 h-5 w-10 rounded-sm bg-gradient-to-br from-indigo-500/20 to-cyan-300/10" />
            </div>
          </div>

          {/* cat SVG (scaled) positioned to the left of workstation */}
          <div className="absolute left-4 bottom-0 h-[82px] w-[82px] origin-bottom will-change-transform">
            {/* simplified cat svg - adapted from full component */}
            <svg viewBox="0 0 120 100" className="h-full w-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="54" cy="89" rx="31" ry="5" fill="black" opacity="0.18" />

              <path d="M34 55 C45 42 75 42 83 57 C88 68 78 81 60 81 C42 81 31 68 38 55Z" fill="#fff" />

              <circle cx="82" cy="42" r="19" fill="#ffffff" />

              <path d="M82 49 L87 49 L84.5 52 Z" fill="#f9a8d4" opacity="0.9" />

              <g>
                <ellipse cx="77" cy="42" rx="2.3" ry="3" fill="#18181b" />
                <ellipse cx="91" cy="42" rx="2.3" ry="3" fill="#18181b" />
              </g>
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
