import { motion } from 'framer-motion';
interface FormProgressProps {
  progress: number;
}
export function FormProgress({ progress }: FormProgressProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-bold text-[#FFFFFF]/80 uppercase tracking-wider">Registration Progress</span>
        <motion.span
          key={progress}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          className="text-sm font-black text-transparent bg-gradient-to-r from-[#ff6b35] to-[#ff8555] bg-clip-text"
        >
          {progress}%
        </motion.span>
      </div>
      <div className="h-3 bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-full overflow-hidden border border-[#ff6b35]/20">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-[#ff6b35] via-[#ff8555] to-[#6366f1] shadow-lg shadow-[#ff6b35]/50 rounded-full"
        />
      </div>
    </motion.div>
  );
}