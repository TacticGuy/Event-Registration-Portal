import { motion } from 'framer-motion';
interface FormProgressProps {
  progress: number;
}
export function FormProgress({ progress }: FormProgressProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-[#FFFFFF]/70">Registration Progress</span>
        <span className="text-sm font-semibold text-[#ff6b35]">{progress}%</span>
      </div>
      <div className="h-2 bg-[#1a1a2e] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-[#ff6b35] to-[#ff8555]"
        />
      </div>
    </div>
  );
}