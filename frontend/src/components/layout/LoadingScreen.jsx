import { motion } from 'framer-motion';
import { personal } from '../../data/personal';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-void"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative w-20 h-20 mb-8"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <motion.div className="absolute inset-0 rounded-full border-2 border-transparent border-t-neon-cyan border-r-neon-purple" />
        <motion.div
          className="absolute inset-2 rounded-full border-2 border-transparent border-b-neon-pink border-l-neon-cyan"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      <motion.p
        className="font-display text-lg text-gradient tracking-widest uppercase"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        {personal.name.split(' ')[0]}
      </motion.p>

      <motion.div className="mt-6 w-48 h-1 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
}
