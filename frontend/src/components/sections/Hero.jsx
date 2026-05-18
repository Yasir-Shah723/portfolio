import { motion } from 'framer-motion';
import { HiDownload, HiArrowRight } from 'react-icons/hi';
import { personal } from '../../data/personal';
import { socialLinks } from '../../data/social';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import Button from '../ui/Button';
import ParticleField from '../ui/ParticleField';
import { staggerContainer, staggerItem, floatAnimation } from '../../animations/variants';

export default function Hero() {
  const typedRole = useTypingEffect(
    ['Frontend Developer', 'React Enthusiast', 'UI Craftsperson', 'Web Innovator'],
    90,
    2200
  );

  const nameParts = personal.name.split(' ');

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-28 overflow-hidden"
    >
      <ParticleField count={35} />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 right-[10%] w-24 h-24 rounded-2xl glass neon-border hidden lg:block"
        variants={floatAnimation}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/3 left-[8%] w-16 h-16 rounded-full border border-neon-purple/40 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="section-container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl">
          <motion.span
            variants={staggerItem}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-neon-cyan border border-neon-cyan/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            {personal.availability}
          </motion.span>

          <motion.p variants={staggerItem} className="text-slate-400 text-lg mb-2">
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={staggerItem}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
          >
            {nameParts.map((part, i) => (
              <motion.span
                key={part}
                className="block overflow-hidden"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className={i === nameParts.length - 1 ? 'text-gradient' : 'text-white'}>
                  {part}
                </span>
              </motion.span>
            ))}
          </motion.h1>

          <motion.div variants={staggerItem} className="flex items-center gap-2 mb-6 h-10">
            <span className="text-2xl md:text-3xl font-semibold text-slate-300">
              {typedRole}
            </span>
            <span className="w-0.5 h-8 bg-neon-cyan animate-pulse" aria-hidden="true" />
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
          >
            {personal.intro}
          </motion.p>

          <motion.div variants={staggerItem} className="flex flex-wrap gap-4 mb-10">
            <Button href="#projects" icon={HiArrowRight}>
              View Projects
            </Button>
            <Button
              href={personal.resumePath}
              variant="secondary"
              icon={HiDownload}
              download
            >
              Download Resume
            </Button>
          </motion.div>

          <motion.div variants={staggerItem} className="flex items-center gap-4">
            {socialLinks.slice(0, 3).map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:glow-cyan transition-all"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Hero visual */}
        <motion.div
          variants={staggerItem}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md aspect-square">
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-cyan/20 via-neon-purple/20 to-neon-pink/10 blur-2xl"
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="relative glass-strong rounded-3xl p-8 h-full flex flex-col items-center justify-center neon-border"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink p-[2px] mb-6">
                <div className="w-full h-full rounded-2xl bg-deep flex items-center justify-center font-display text-5xl md:text-6xl font-bold text-gradient">
                  YS
                </div>
              </div>
              <p className="font-display text-center text-lg text-white mb-2">{personal.role}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['React', 'C++', 'JavaScript'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full glass text-neon-cyan border border-neon-cyan/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.div
                className="absolute -top-3 -right-3 px-3 py-1 rounded-lg glass text-xs text-neon-pink font-semibold"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Open to Work
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-neon-cyan transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <span className="w-5 h-8 rounded-full border-2 border-slate-600 flex justify-center pt-1.5">
          <motion.span
            className="w-1 h-2 rounded-full bg-neon-cyan"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </span>
      </motion.a>
    </section>
  );
}
