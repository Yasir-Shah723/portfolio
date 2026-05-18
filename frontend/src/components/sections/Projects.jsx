import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../data/projects';
import SectionHeading from '../ui/SectionHeading';
import { staggerContainer, staggerItem } from '../../animations/variants';

function ProjectCard({ project, index }) {
  return (
    <motion.article
      variants={staggerItem}
      className={`group relative ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <motion.div
        className="relative h-full glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-colors duration-500"
        whileHover={{ y: -8 }}
      >
        {/* Preview area */}
        <div className={`relative h-48 md:h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          <div className="absolute inset-0 grid-bg opacity-30" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="w-3/4 max-w-sm rounded-xl glass-strong p-4 shadow-2xl"
              initial={false}
            >
              <div className="flex gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <motion.div className="space-y-2">
                <motion.div className="h-2 rounded bg-white/20 w-full" />
                <motion.div className="h-2 rounded bg-white/15 w-4/5" />
                <motion.div className="h-2 rounded bg-white/10 w-3/5" />
                <motion.div
                  className="mt-3 h-8 rounded-lg flex items-center justify-center text-xs font-semibold"
                  style={{ background: `${project.accent}33`, color: project.accent }}
                >
                  Preview UI
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {project.featured && (
            <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30">
              Featured
            </span>
          )}

          <motion.div
            className="absolute inset-0 bg-void/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
          >
            <a
              href={project.demoUrl}
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white hover:text-neon-cyan hover:glow-cyan transition-all"
              aria-label={`Live demo of ${project.title}`}
            >
              <HiExternalLink size={20} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white hover:text-neon-cyan hover:glow-cyan transition-all"
              aria-label={`GitHub repo for ${project.title}`}
            >
              <FaGithub size={20} />
            </a>
          </motion.div>
        </div>

        <div className="p-6 md:p-8">
          <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs rounded-md glass text-slate-300 border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href={project.demoUrl}
              className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-neon-cyan border border-neon-cyan/25 hover:border-neon-cyan/50 transition-colors"
            >
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold glass text-slate-300 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          tag="Portfolio"
          title="Featured Projects"
          subtitle="A curated selection of demo builds showcasing my frontend craft — each designed to impress at first glance."
        />

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
