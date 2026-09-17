import React, { useEffect, useRef } from 'react';

export default function WaveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    let step = 0;
    const waves = [
      { amplitude: 35, frequency: 0.008, speed: 0.015, color: 'rgba(0, 230, 118, 0.07)' },
      { amplitude: 50, frequency: 0.005, speed: 0.01, color: 'rgba(0, 180, 216, 0.05)' },
      { amplitude: 25, frequency: 0.012, speed: 0.02, color: 'rgba(0, 230, 118, 0.03)' },
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      step += 1;

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.fillStyle = wave.color;

        ctx.moveTo(0, height);
        for (let x = 0; x <= width; x += 10) {
          const y =
            Math.sin(x * wave.frequency + step * wave.speed) * wave.amplitude +
            height * 0.85;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
