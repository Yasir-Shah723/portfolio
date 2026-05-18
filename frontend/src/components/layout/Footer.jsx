import { motion } from 'framer-motion';
import { socialLinks } from '../../data/social';
import { personal } from '../../data/personal';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-deep/80 backdrop-blur-sm">
      <div className="section-padding section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-bold text-gradient">{personal.name}</p>
            <p className="text-slate-500 text-sm mt-1">{personal.role} · {personal.location}</p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/40 border border-transparent transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {year} {personal.name}. All rights reserved.</p>
          <p className="text-slate-600">
            Crafted with <span className="text-neon-pink">♥</span> React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
