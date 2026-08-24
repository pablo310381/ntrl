import React, { useMemo } from 'react';
import './styles.css';
import bgImage from './photo_2026-06-24_21-35-36.jpg';

const SakuraBackground = ({ children }) => {
  const petalCount = 42;

  const petals = useMemo(() => {
    return Array.from({ length: petalCount }).map((_, i) => {
      const depth = Math.random();
      const size = 12 + depth * 14;
      const fallDuration = 7 + (1 - depth) * 6;
      const swayDuration = 2.4 + Math.random() * 2;
      const rollDuration = 2 + Math.random() * 3;
      const delay = -(Math.random() * 12);
      const left = Math.random() * 100;
      const blur = depth < 0.25 ? '1.8px' : depth > 0.85 ? '0.8px' : '0px';

      return {
        id: i,
        left: `${left}vw`,
        size,
        fallDuration: `${fallDuration}s`,
        swayDuration: `${swayDuration}s`,
        rollDuration: `${rollDuration}s`,
        delay: `${delay}s`,
        blur,
        opacity: 0.55 + depth * 0.4,
        scale: 0.6 + depth * 0.65,
        zIndex: depth > 0.75 ? 20 : 2,
      };
    });
  }, []);

  return (
    <div className="background-container">
      {/* Слой фона с импортированным изображением */}
      <div
        className="bg-image-layer"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* 3D-пространство лепестков */}
      <div className="sakura-viewport">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="petal-fall-track"
            style={{
              left: petal.left,
              zIndex: petal.zIndex,
              opacity: petal.opacity,
              filter: `blur(${petal.blur})`,
              transform: `scale(${petal.scale})`,
              animationDuration: petal.fallDuration,
              animationDelay: petal.delay,
            }}
          >
            <div
              className="petal-wind-sway"
              style={{
                animationDuration: petal.swayDuration,
                animationDelay: petal.delay,
              }}
            >
              <svg
                className="petal-3d-tumble"
                viewBox="0 0 30 30"
                style={{
                  width: `${petal.size}px`,
                  height: `${petal.size}px`,
                  animationDuration: petal.rollDuration,
                  animationDelay: petal.delay,
                }}
              >
                <defs>
                  <linearGradient id={`sakuraGrad-${petal.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="45%" stopColor="#ffbccc" />
                    <stop offset="100%" stopColor="#ff7092" />
                  </linearGradient>
                </defs>
                <path
                  d="M15,2 C18,7 28,11 26,20 C24,28 17,29 15,26 C13,29 6,28 4,20 C2,11 12,7 15,2 Z"
                  fill={`url(#sakuraGrad-${petal.id})`}
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default SakuraBackground;