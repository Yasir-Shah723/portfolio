import { motion } from 'framer-motion';
import { services } from '../../data/services';
import SectionHeading from '../ui/SectionHeading';
import { staggerContainer, staggerItem } from '../../animations/variants';

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          tag="Services"
          title="What I Deliver"
          subtitle="End-to-end frontend solutions tailored for startups, brands, and internship-ready showcases."
        />

        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                className="group relative"
              >
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                />
                <motion.div
                  className="relative glass rounded-2xl p-8 h-full border border-white/5 group-hover:border-white/15 transition-all duration-500 overflow-hidden"
                  whileHover={{ y: -8 }}
                >
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ background: service.accent }}
                  />

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300"
                    style={{
                      background: `${service.accent}18`,
                      border: `1px solid ${service.accent}40`,
                      color: service.accent,
                    }}
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>

                  <motion.div
                    className="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: service.accent }}
                  >
                    Learn more
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
