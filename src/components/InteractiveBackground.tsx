import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface WordPosition {
  text: string;
  x: number;
  y: number;
  id: number;
}

const words: WordPosition[] = [
  { text: 'Build', x: 10, y: 15, id: 1 },
  { text: 'Create', x: 25, y: 35, id: 2 },
  { text: 'Innovate', x: 60, y: 20, id: 3 },
  { text: 'Code', x: 75, y: 45, id: 4 },
  { text: 'Design', x: 85, y: 70, id: 5 },
  { text: 'Dream', x: 15, y: 75, id: 6 },
  { text: 'Connect', x: 50, y: 85, id: 7 },
  { text: 'Transform', x: 70, y: 65, id: 8 },
  { text: 'Collaborate', x: 35, y: 60, id: 9 },
  { text: 'Develop', x: 45, y: 25, id: 10 },
];

export function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [distances, setDistances] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePos({ x, y });

      // Calculate distance from cursor to each word
      const newDistances: { [key: number]: number } = {};
      words.forEach((word) => {
        const wordX = (word.x / 100) * rect.width;
        const wordY = (word.y / 100) * rect.height;
        const dist = Math.sqrt((x - wordX) ** 2 + (y - wordY) ** 2);
        newDistances[word.id] = dist;
      });

      setDistances(newDistances);
    };

    const handleMouseLeave = () => {
      setDistances({});
    };

    window.addEventListener('mousemove', handleMouseMove);
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const getOpacity = (id: number) => {
    const distance = distances[id] || 500;
    const maxDistance = 300;
    const opacity = Math.max(0, 1 - distance / maxDistance);
    return opacity;
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
    >
      {words.map((word) => {
        const opacity = getOpacity(word.id);
        return (
          <div
            key={word.id}
            style={{
              position: 'absolute',
              left: `${word.x}%`,
              top: `${word.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            className="pointer-events-none"
          >
            <motion.span
              animate={{
                opacity: 0.1 + opacity * 0.6,
                textShadow:
                  opacity > 0.3
                    ? `0 0 ${20 + opacity * 30}px rgba(255, 107, 53, ${opacity}), 0 0 ${40 + opacity * 40}px rgba(99, 102, 241, ${opacity * 0.5})`
                    : '0 0 0px rgba(255, 107, 53, 0)',
              }}
              transition={{ duration: 0.3 }}
              className="font-black text-2xl md:text-4xl text-[#ff6b35] whitespace-nowrap select-none"
            >
              {word.text}
            </motion.span>
          </div>
        );
      })}
    </div>
  );
}
