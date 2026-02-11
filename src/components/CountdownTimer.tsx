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
    <div className="relative group shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35] via-[#ff8555] to-[#ffd6a5] rounded-2xl blur-md opacity-40 group-hover:opacity-70 transition-opacity"></div>
      <div className="relative flex flex-col items-center bg-[#23234b]/90 backdrop-blur-md border border-[#ff6b35]/40 rounded-2xl p-6 min-w-[100px] md:min-w-[120px]">
        <span className="text-5xl md:text-6xl font-extrabold text-transparent bg-gradient-to-br from-[#ff6b35] via-[#ff8555] to-[#ffd6a5] bg-clip-text drop-shadow-lg">
          {value.toString().padStart(2, '0')}
        </span>
        <span className="text-base md:text-lg text-[#FFFFFF]/80 mt-2 font-semibold uppercase tracking-wider letter-spacing-2">{label}</span>
      </div>
    </div>
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