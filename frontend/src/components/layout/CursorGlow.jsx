import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    if (!isDesktop) return;

    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neon-cyan/50 pointer-events-none z-[9999] mix-blend-screen"
        animate={{ x: position.x - 16, y: position.y - 16 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-72 h-72 rounded-full pointer-events-none z-[9998]"
        style={{
          background:
            'radial-gradient(circle, rgba(0,240,255,0.12) 0%, rgba(124,58,237,0.06) 40%, transparent 70%)',
        }}
        animate={{ x: position.x - 144, y: position.y - 144 }}
        transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.5 }}
      />
    </>
  );
}
