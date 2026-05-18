import { motion } from 'framer-motion';
import { skillCategories, highlightTech } from '../../data/skills';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { staggerContainer, staggerItem } from '../../animations/variants';

function SkillBar({ skill }) {
  const Icon = skill.icon;

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <motion.div className="flex items-center gap-2">
          <Icon className="text-lg" style={{ color: skill.color }} />
          <span className="text-sm font-medium text-slate-200">{skill.name}</span>
        </motion.div>
        <span className="text-xs text-neon-cyan font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
            boxShadow: `0 0 12px ${skill.color}66`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative">
        <SectionHeading
          tag="Skills"
          title="Technical Arsenal"
          subtitle="Technologies I use to build fast, beautiful, and maintainable frontend experiences."
        />

        {/* Highlight badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {highlightTech.map((tech) => (
            <span
              key={tech}
              className="px-5 py-2 rounded-full glass neon-border text-sm font-semibold text-neon-cyan"
            >
              ★ {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skillCategories.map((category) => {
            const CatIcon = category.icon;
            return (
              <motion.div key={category.id} variants={staggerItem}>
                <GlassCard
                  className="h-full"
                  glowColor={`${category.color}22`}
                  style={{ '--accent': category.color }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${category.color}15`,
                        border: `1px solid ${category.color}40`,
                      }}
                    >
                      <CatIcon style={{ color: category.color }} size={24} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-5">
                    {category.skills.map((skill) => (
                      <SkillBar key={skill.name} skill={skill} />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
