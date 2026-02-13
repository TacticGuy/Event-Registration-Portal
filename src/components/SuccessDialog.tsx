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
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0F1729] border border-[#ff6b35]/50 rounded-2xl p-8 relative shadow-2xl shadow-[#ff6b35]/20">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-[#FFFFFF]/50 hover:text-[#FFFFFF] hover:bg-[#ff6b35]/20 p-2 rounded-lg cursor-pointer transition-colors"
              >
                <X size={24} />
              </button>
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="flex justify-center mb-6"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-lg opacity-50"></div>
                  <div className="relative bg-green-500/20 rounded-full p-4">
                    <CheckCircle2 className="text-green-400" size={64} />
                  </div>
                </div>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-black text-[#FFFFFF] text-center mb-4"
              >
                Registration <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">Successful!</span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-[#FFFFFF]/70 text-center mb-6 leading-relaxed"
              >
                Thank you for registering for TechFest 2024. We've sent a confirmation email with all the event details.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={onClose}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(16, 185, 129, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 rounded-xl font-bold transition-all cursor-pointer uppercase tracking-wider shadow-lg shadow-green-500/30"
              >
                Got it!
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}