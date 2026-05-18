import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glowColor = 'rgba(0, 240, 255, 0.15)',
  ...props
}) {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 md:p-8 relative overflow-hidden group ${className}`}
      whileHover={hover ? { y: -6, transition: { duration: 0.3 } } : undefined}
      {...props}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 40%)`,
        }}
      />
      <motion.div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-neon-cyan/20 via-transparent to-neon-purple/20 -z-10" />
      <motion.div className="relative z-10">{children}</motion.div>
    </motion.div>
  );
}
