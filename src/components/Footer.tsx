import { motion } from 'framer-motion';
export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#0B0B1D] to-[#16213e]/30 border-t border-[#ff6b35]/30 py-12 px-4 backdrop-blur-sm relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-[#ff6b35]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-[#ff6b35]/20"
        >
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-start gap-3"
          >
            <img
              src="https://www.mfcvit.in/assets/logo_main-DYyPMjX9.png"
              alt="MFC VIT Logo"
              className="h-10 w-10 mt-1"
            />
            <div>
              <span className="text-[#FFFFFF] font-black text-lg block">Mozilla FireFox Club</span>
              <span className="text-[#ff6b35] text-xs font-semibold">VIT University</span>
            </div>
          </motion.div>

          {/* Copyright Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-[#FFFFFF]/70 text-sm font-medium">
              © 2026 Mozilla FireFox Club<br />All rights reserved.
            </p>
          </motion.div>

          {/* Links Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-end gap-6"
          >
            <a href="#" className="text-[#FFFFFF]/70 hover:text-[#ff6b35] transition-colors text-sm font-semibold cursor-pointer uppercase tracking-wider">
              Privacy
            </a>
            <span className="text-[#ff6b35]/40">•</span>
            <a href="#" className="text-[#FFFFFF]/70 hover:text-[#ff6b35] transition-colors text-sm font-semibold cursor-pointer uppercase tracking-wider">
              Terms
            </a>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[#FFFFFF]/50 text-xs font-medium uppercase tracking-widest">
            Made with <span className="text-[#ff6b35]">❤</span> for the tech community
          </p>
        </motion.div>
      </div>
    </footer>
  );
}