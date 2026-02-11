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
        <div
          className="h-full bg-gradient-to-r from-[#ff6b35] to-[#ff8555] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}