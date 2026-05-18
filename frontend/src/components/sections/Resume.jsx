import { motion } from 'framer-motion';
import { HiDownload, HiDocumentText } from 'react-icons/hi';
import { personal } from '../../data/personal';
import { education, resumeHighlights } from '../../data/resume';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import { staggerContainer, staggerItem } from '../../animations/variants';

export default function Resume() {
  return (
    <section id="resume" className="section-padding relative">
      <div
        className="absolute inset-0 bg-gradient-to-t from-neon-cyan/5 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative">
        <SectionHeading
          tag="Resume"
          title="Education & Experience"
          subtitle="A snapshot of my learning path and the skills I bring to your team."
        />

        <motion.div
          className="grid lg:grid-cols-5 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Resume download card */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <GlassCard className="h-full flex flex-col items-center text-center py-10">
              <motion.div
                className="w-24 h-24 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center mb-6 neon-border"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <HiDocumentText className="text-5xl text-neon-cyan" />
              </motion.div>

              <h3 className="font-display text-2xl font-bold text-white mb-2">My Resume</h3>
              <p className="text-slate-400 text-sm mb-8 max-w-xs">
                Download my CV for a complete overview of skills, projects, and contact details.
              </p>

              <Button href={personal.resumePath} icon={HiDownload} download className="w-full max-w-xs">
                Download CV
              </Button>

              <p className="text-xs text-slate-600 mt-4">
                PDF format · Updated {new Date().getFullYear()}
              </p>
            </GlassCard>
          </motion.div>

          {/* Timeline & highlights */}
          <motion.div variants={staggerItem} className="lg:col-span-3 space-y-6">
            <GlassCard>
              <h3 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-neon-cyan rounded-full" />
                Education &amp; Learning
              </h3>
              <div className="space-y-6">
                {education.map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-20 text-xs font-semibold text-neon-purple uppercase pt-1">
                      {item.period}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-neon-cyan/80 text-sm">{item.institution}</p>
                      <p className="text-slate-400 text-sm mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            <GlassCard glowColor="rgba(0, 240, 255, 0.15)">
              <h3 className="font-display text-lg font-bold text-white mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {resumeHighlights.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg glass text-slate-300 border border-white/5 hover:border-neon-cyan/30 hover:text-neon-cyan transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
