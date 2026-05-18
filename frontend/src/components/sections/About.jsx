import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { personal, stats, timeline } from '../../data/personal';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { staggerContainer, staggerItem } from '../../animations/variants';

function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-3xl md:text-4xl font-bold text-gradient">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          tag="About Me"
          title="Crafting Digital Experiences"
          subtitle="Passionate about building interfaces that feel alive — where design meets performance."
        />

        <motion.div
          className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={staggerItem} className="space-y-6">
            <GlassCard glowColor="rgba(124, 58, 237, 0.2)">
              <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                I&apos;m <span className="text-white font-semibold">{personal.name}</span>, a{' '}
                {personal.role.toLowerCase()} driven by curiosity and clean code. I transform
                concepts into responsive, visually striking web applications that leave lasting
                impressions.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                My journey started with HTML, CSS, and JavaScript fundamentals — evolving into
                React-powered SPAs with animation-rich UIs. I obsess over details: typography,
                spacing, micro-interactions, and accessibility — because great frontend work is
                felt, not just seen.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                I&apos;m actively seeking <span className="text-neon-cyan font-medium">frontend internships</span>{' '}
                where I can contribute immediately, learn from senior developers, and ship
                production-quality features.
              </p>
            </GlassCard>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <GlassCard key={stat.label} className="text-center py-6" hover>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-slate-500 text-sm mt-2">{stat.label}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h3 className="font-display text-xl text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-neon-cyan" />
              My Journey
            </h3>
            <div className="relative pl-8 border-l border-neon-cyan/20 space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="relative"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <span className="absolute -left-[2.35rem] top-1 w-3 h-3 rounded-full bg-neon-cyan shadow-[0_0_12px_rgba(0,240,255,0.8)]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-neon-purple">
                    {item.year}
                  </span>
                  <h4 className="text-white font-semibold text-lg mt-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
