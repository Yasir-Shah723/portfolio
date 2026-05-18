import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';

export default function SectionHeading({ tag, title, subtitle, align = 'center' }) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <motion.div
      className={`flex flex-col gap-3 mb-14 md:mb-16 ${alignClass}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {tag && (
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">
          {tag}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        {title.split(' ').map((word, i, arr) =>
          i === arr.length - 1 ? (
            <span key={i} className="text-gradient">
              {' '}
              {word}
            </span>
          ) : (
            <span key={i}>{word} </span>
          )
        )}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-slate-400 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <motion.div
        className="h-1 w-20 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink mt-2"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.div>
  );
}
