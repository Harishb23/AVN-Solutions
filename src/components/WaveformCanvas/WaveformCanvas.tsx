import React, { useEffect, useRef } from 'react';

interface WaveformCanvasProps {
  interactive?: boolean;
  amplitude?: number;
  frequency?: number;
  color?: string;
  bands?: number;
  height?: number;
}

export const WaveformCanvas: React.FC<WaveformCanvasProps> = ({
  interactive = true,
  amplitude = 25,
  frequency = 0.02,
  color = '#00F0FF',
  bands = 4,
  height = 140
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let phase = 0;

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    const render = () => {
      const width = canvas.width / window.devicePixelRatio;
      const h = height;

      ctx.clearRect(0, 0, width, h);

      // Draw bands
      for (let b = 0; b < bands; b++) {
        ctx.beginPath();
        const bandAlpha = 0.25 + (b / bands) * 0.75;
        const currentAmp = amplitude * (1 - (b * 0.18));
        const currentFreq = frequency * (1 + b * 0.35);

        ctx.strokeStyle = color;
        ctx.globalAlpha = bandAlpha;
        ctx.lineWidth = b === bands - 1 ? 2.5 : 1.2;

        const centerY = h / 2;

        for (let x = 0; x < width; x += 3) {
          let mouseDistEffect = 1;
          if (mouseRef.current.active) {
            const dx = Math.abs(x - mouseRef.current.x);
            if (dx < 120) {
              mouseDistEffect = 1 + (1 - dx / 120) * 1.5;
            }
          }

          const y = centerY + Math.sin(x * currentFreq + phase + b * 0.8) * currentAmp * mouseDistEffect * Math.sin((x / width) * Math.PI);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      phase += 0.04;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      if (interactive && canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [interactive, amplitude, frequency, color, bands, height]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: `${height}px`,
        display: 'block'
      }}
    />
  );
};
