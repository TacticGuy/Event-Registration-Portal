import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Animated background elements - Enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#ff6b35]/15 to-[#ff8555]/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-l from-[#6366f1]/15 to-[#ff8555]/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#ff6b35]/8 via-[#6366f1]/8 to-[#ff8555]/8 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Logo with glow effect */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-8 relative"
          >
            {/* Removed Firefox logo */}
          </motion.div>
          {/* Badge removed to eliminate stray box above heading */}
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-6xl md:text-8xl font-black text-[#FFFFFF] mb-6 leading-tight tracking-tighter"
          >
            Tech<span className="bg-gradient-to-r from-[#ff6b35] via-[#ff8555] to-[#ff6b35] bg-clip-text text-transparent animate-text-glow">Fest</span>
            <br />
            <span className="text-5xl md:text-7xl bg-gradient-to-r from-[#6366f1] to-[#ff6b35] bg-clip-text text-transparent">2024</span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-[#FFFFFF]/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Join us for an <span className="text-transparent bg-gradient-to-r from-[#ff6b35] to-[#6366f1] bg-clip-text font-semibold">extraordinary journey</span> into the world of open-source technology, innovation, and collaborative learning
          </motion.p>
          {/* Event info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16"
          >
            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#1a1a2e]/80 to-[#1a1a2e]/60 backdrop-blur-md border border-[#ff6b35]/30 rounded-xl hover:border-[#ff6b35]/60 hover:shadow-lg hover:shadow-[#ff6b35]/20 transition-all duration-300">
              <div className="bg-gradient-to-r from-[#ff6b35] to-[#ff8555] p-2 rounded-lg">
                <Calendar className="text-white" size={24} />
              </div>
              <div className="text-left">
                <p className="text-[#FFFFFF]/60 text-xs font-medium">Date</p>
                <p className="text-[#FFFFFF] text-lg font-bold">March 15, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#1a1a2e]/80 to-[#1a1a2e]/60 backdrop-blur-md border border-[#6366f1]/30 rounded-xl hover:border-[#6366f1]/60 hover:shadow-lg hover:shadow-[#6366f1]/20 transition-all duration-300">
              <div className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] p-2 rounded-lg">
                <MapPin className="text-white" size={24} />
              </div>
              <div className="text-left">
                <p className="text-[#FFFFFF]/60 text-xs font-medium">Venue</p>
                <p className="text-[#FFFFFF] text-lg font-bold">Anna Auditorium</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#1a1a2e]/80 to-[#1a1a2e]/60 backdrop-blur-md border border-[#ec4899]/30 rounded-xl hover:border-[#ec4899]/60 hover:shadow-lg hover:shadow-[#ec4899]/20 transition-all duration-300">
              <div className="bg-gradient-to-r from-[#ec4899] to-[#f43f5e] p-2 rounded-lg">
                <Users className="text-white" size={24} />
              </div>
              <div className="text-left">
                <p className="text-[#FFFFFF]/60 text-xs font-medium">Expected</p>
                <p className="text-[#FFFFFF] text-lg font-bold">500+ Students</p>
              </div>
            </div>
          </motion.div>
          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-12"
          >
            <CountdownTimer targetDate={new Date(Date.now() + (10 * 24 * 60 * 60 * 1000) + (20 * 60 * 60 * 1000)).toISOString()} />
          </motion.div>
          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(255, 107, 53, 0.9)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('registration');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-12 py-5 bg-gradient-to-r from-[#ff6b35] via-[#ff8555] to-[#ff6b35] text-white text-xl font-bold rounded-full cursor-pointer shadow-2xl shadow-[#ff6b35]/60 hover:shadow-[#ff6b35]/90 transition-all duration-300 border border-[#ff6b35]/50 hover:border-[#ff6b35] animate-glow"
          >
            Register Now - Limited Seats!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}