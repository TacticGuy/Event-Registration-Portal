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
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35] to-[#ff8555] rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
      <div className="relative flex flex-col items-center bg-[#1a1a2e]/90 backdrop-blur-sm border border-[#ff6b35]/30 rounded-2xl p-6 min-w-[100px] md:min-w-[120px]">
        <span className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-[#ff6b35] to-[#ff8555] bg-clip-text">
          {value.toString().padStart(2, '0')}
        </span>
        <span className="text-sm md:text-base text-[#FFFFFF]/70 mt-2 font-semibold uppercase tracking-wider">{label}</span>
      </div>
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