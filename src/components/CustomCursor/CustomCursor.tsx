import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

interface CursorState {
  x: number;
  y: number;
  hovered: boolean;
  text: string;
  variant: 'default' | 'view' | 'listen' | 'explore' | 'start' | 'hidden';
}

export const CustomCursor: React.FC = () => {
  const [cursor, setCursor] = useState<CursorState>({
    x: -100,
    y: -100,
    hovered: false,
    text: '',
    variant: 'default'
  });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device has touch capability
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setCursor(prev => ({
        ...prev,
        x: e.clientX,
        y: e.clientY
      }));
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      const clickable = target.closest('a, button, input, select, textarea, [role="button"]') as HTMLElement | null;

      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor') || 'explore';
        const label = cursorTarget.getAttribute('data-cursor-text') || type.toUpperCase();
        setCursor(prev => ({
          ...prev,
          hovered: true,
          text: label,
          variant: type as CursorState['variant']
        }));
      } else if (clickable) {
        setCursor(prev => ({
          ...prev,
          hovered: true,
          text: '',
          variant: 'default'
        }));
      } else {
        setCursor(prev => ({
          ...prev,
          hovered: false,
          text: '',
          variant: 'default'
        }));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      className={`custom-cursor-root ${cursor.hovered ? 'is-hovered' : ''} cursor-${cursor.variant}`}
      style={{
        transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)`
      }}
    >
      <div className="cursor-dot" />
      <div className="cursor-ring">
        {cursor.text && <span className="cursor-label">{cursor.text}</span>}
      </div>
    </div>
  );
};
