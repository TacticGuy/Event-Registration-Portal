import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
interface CountdownTimerProps {
  targetDate: string;
}
export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35] via-[#ff8555] to-[#6366f1] rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
      <motion.div
        whileHover={{ y: -8, scale: 1.05 }}
        className="relative flex flex-col items-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0F1729] backdrop-blur-md border border-[#ff6b35]/50 hover:border-[#ff6b35] rounded-2xl p-6 min-w-[110px] md:min-w-[140px] shadow-lg shadow-[#ff6b35]/20 group-hover:shadow-[#ff6b35]/40 transition-all duration-300"
      >
        <span className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-[#ff6b35] via-[#ff8555] to-[#ff6b35] bg-clip-text">
          {value.toString().padStart(2, '0')}
        </span>
        <span className="text-xs md:text-sm text-[#FFFFFF]/80 mt-3 font-bold uppercase tracking-widest">{label}</span>
      </motion.div>
    </motion.div>
  );
  return (
    <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
      <TimeBox value={timeLeft.days} label="Days" />
      <TimeBox value={timeLeft.hours} label="Hours" />
      <TimeBox value={timeLeft.minutes} label="Minutes" />
      <TimeBox value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}