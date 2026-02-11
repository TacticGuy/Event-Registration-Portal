import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
interface SuccessDialogProps {
  open: boolean;
  onClose: () => void;
}
export function SuccessDialog({ open, onClose }: SuccessDialogProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-[#1a1a2e] border border-[#ff6b35]/30 rounded-lg p-8 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-[#FFFFFF]/50 hover:text-[#FFFFFF] cursor-pointer"
              >
                <X size={24} />
              </button>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="flex justify-center mb-6"
              >
                <div className="bg-green-500/20 rounded-full p-4">
                  <CheckCircle2 className="text-green-500" size={64} />
                </div>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-[#FFFFFF] text-center mb-4"
              >
                Registration Successful!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-[#FFFFFF]/70 text-center mb-6"
              >
                Thank you for registering for TechFest 2024. We've sent a confirmation email with all the event details.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={onClose}
                className="w-full bg-[#ff6b35] hover:bg-[#ff8555] text-[#FFFFFF] py-3 rounded-lg font-semibold transition-colors cursor-pointer"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}