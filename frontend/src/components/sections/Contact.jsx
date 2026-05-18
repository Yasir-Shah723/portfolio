import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { personal } from '../../data/personal';
import { socialLinks } from '../../data/social';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { staggerContainer, staggerItem } from '../../animations/variants';

const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: '#00f0ff',
  },
  {
    icon: HiPhone,
    label: 'Phone',
    value: personal.phone,
    href: `tel:+92${personal.phone.replace(/^0/, '')}`,
    color: '#7c3aed',
  },
  {
    icon: HiLocationMarker,
    label: 'Location',
    value: personal.location,
    href: null,
    color: '#ff2d95',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          tag="Contact"
          title="Let's Connect"
          subtitle="Have an internship opportunity or project in mind? I'd love to hear from you."
        />

        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Contact info */}
          <motion.div variants={staggerItem} className="space-y-4">
            {contactInfo.map((info) => (
              <GlassCard key={info.label} className="flex items-center gap-4" hover>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${info.color}15`,
                    border: `1px solid ${info.color}35`,
                  }}
                >
                  <info.icon style={{ color: info.color }} size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-white font-medium hover:text-neon-cyan transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{info.value}</p>
                  )}
                </div>
              </GlassCard>
            ))}

            <div className="pt-4">
              <p className="text-slate-500 text-sm mb-4">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-neon-cyan transition-all"
                    whileHover={{ scale: 1.1, y: -3 }}
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form UI (design only) */}
          <motion.div variants={staggerItem}>
            <GlassCard className="relative overflow-hidden" glowColor="rgba(124, 58, 237, 0.2)">
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-30"
                style={{ background: '#7c3aed' }}
              />

              <h3 className="font-display text-xl font-bold text-white mb-6">Send a Message</h3>

              <form
                className="space-y-5"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Contact form (UI preview)"
              >
                <motion.div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs text-slate-500 mb-2 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl glass bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-slate-500 mb-2 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@email.com"
                      className="w-full px-4 py-3 rounded-xl glass bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all"
                    />
                  </div>
                </motion.div>

                <div>
                  <label htmlFor="subject" className="block text-xs text-slate-500 mb-2 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Internship opportunity"
                    className="w-full px-4 py-3 rounded-xl glass bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-slate-500 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about the role or project..."
                    className="w-full px-4 py-3 rounded-xl glass bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-neon-cyan to-neon-purple text-white shadow-neon cursor-pointer"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(0,240,255,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>

                <p className="text-center text-xs text-slate-600">
                  Form UI preview — connect via email for fastest response
                </p>
              </form>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
