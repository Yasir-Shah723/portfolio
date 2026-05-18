import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-gradient-to-r from-neon-cyan to-neon-purple text-white shadow-neon hover:shadow-[0_0_40px_rgba(0,240,255,0.45)]',
  secondary:
    'glass neon-border text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan/50',
  ghost: 'text-slate-300 hover:text-neon-cyan hover:bg-white/5',
};

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon: Icon,
  download,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer';

  const Component = href ? motion.a : motion.button;
  const linkProps = href
    ? { href, target: download ? undefined : href.startsWith('#') ? undefined : '_blank', rel: 'noopener noreferrer', download }
    : { type: 'button', onClick };

  return (
    <Component
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...linkProps}
      {...props}
    >
      {Icon && <Icon className="text-lg" />}
      {children}
    </Component>
  );
}
