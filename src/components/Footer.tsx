import { motion } from 'framer-motion';
export function Footer() {
  return (
    <footer className="bg-[#0B0B1D] border-t border-[#ff6b35]/20 py-8 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <img
              src="https://www.mfcvit.in/assets/logo_main-DYyPMjX9.png"
              alt="MFC VIT Logo"
              className="h-8 w-8"
            />
            <span className="text-[#FFFFFF] font-semibold">Firefox Club</span>
          </div>
          <p className="text-[#FFFFFF]/60 text-sm text-center">
            © 2024 Firefox Club. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#FFFFFF]/60 hover:text-[#ff6b35] transition-colors text-sm cursor-pointer">
              Privacy Policy
            </a>
            <a href="#" className="text-[#FFFFFF]/60 hover:text-[#ff6b35] transition-colors text-sm cursor-pointer">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}