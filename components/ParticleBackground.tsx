import React, { useEffect, useState } from 'react';

const ParticleBackground: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ left: string; delay: string; duration: string; opacity: number }>>([]);

  useEffect(() => {
    // Generate particles only once on mount to avoid re-renders
    const count = 25;
    const newParticles = Array.from({ length: count }).map(() => ({
      left: `${Math.random() * 100}vw`,
      delay: `${Math.random() * 10}s`,
      duration: `${10 + Math.random() * 10}s`,
      opacity: 0.1 + Math.random() * 0.4
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white rounded-full top-[-20px]"
          style={{
            left: p.left,
            animation: `fall ${p.duration} linear infinite`,
            animationDelay: p.delay,
            opacity: p.opacity,
          }}
        />
      ))}
      <style>{`
        @keyframes fall {
          from { transform: translateY(-20px); }
          to { transform: translateY(110vh); }
        }
      `}</style>
    </div>
  );
};

export default ParticleBackground;
