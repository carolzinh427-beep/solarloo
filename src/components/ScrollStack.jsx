import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({ children, className = '', autoPlaySpeed = 3500 }) => {
  const items = React.Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || items.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % items.length);
    }, autoPlaySpeed);

    return () => clearInterval(timer);
  }, [isHovered, items.length, autoPlaySpeed]);

  return (
    <div
      className={`scroll-stack-scroller ${className}`.trim()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="scroll-stack-inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="scroll-stack-card-wrapper"
          >
            {items[currentIndex]}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="scroll-stack-dots">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`stack-dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ver motivo ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollStack;
