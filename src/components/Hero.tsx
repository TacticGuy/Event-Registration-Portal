import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff6b35]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff8555]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#ff6b35]/5 to-[#ff8555]/5 rounded-full blur-3xl"></div>
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
            className="text-6xl md:text-8xl font-black text-[#FFFFFF] mb-6 leading-tight"
          >
            Tech<span className="bg-gradient-to-r from-[#ff6b35] to-[#ff8555] bg-clip-text text-transparent">Fest</span>
            <br />
            <span className="text-5xl md:text-7xl">2024</span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-[#FFFFFF]/80 mb-12 max-w-3xl mx-auto font-light"
          >
            Join us for an <span className="text-[#ff6b35] font-semibold">extraordinary journey</span> into the world of open-source technology, innovation, and collaborative learning
          </motion.p>
          {/* Event info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16"
          >
            <div className="flex items-center gap-3 px-6 py-3 bg-[#1a1a2e]/80 backdrop-blur-sm border border-[#ff6b35]/20 rounded-xl">
              <div className="bg-[#ff6b35]/20 p-2 rounded-lg">
                <Calendar className="text-[#ff6b35]" size={24} />
              </div>
              <div className="text-left">
                <p className="text-[#FFFFFF]/60 text-xs font-medium">Date</p>
                <p className="text-[#FFFFFF] text-lg font-bold">March 15, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-[#1a1a2e]/80 backdrop-blur-sm border border-[#ff6b35]/20 rounded-xl">
              <div className="bg-[#ff6b35]/20 p-2 rounded-lg">
                <MapPin className="text-[#ff6b35]" size={24} />
              </div>
              <div className="text-left">
                <p className="text-[#FFFFFF]/60 text-xs font-medium">Venue</p>
                <p className="text-[#FFFFFF] text-lg font-bold">VIT Auditorium</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-[#1a1a2e]/80 backdrop-blur-sm border border-[#ff6b35]/20 rounded-xl">
              <div className="bg-[#ff6b35]/20 p-2 rounded-lg">
                <Users className="text-[#ff6b35]" size={24} />
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
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 107, 53, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('registration');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-12 py-5 bg-gradient-to-r from-[#ff6b35] to-[#ff8555] text-[#FFFFFF] text-xl font-bold rounded-full cursor-pointer shadow-2xl shadow-[#ff6b35]/50 hover:shadow-[#ff6b35]/80 transition-all duration-300 animate-gradient-x"
          >
            Register Now - Limited Seats!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}