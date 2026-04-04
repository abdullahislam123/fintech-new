import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * High-fidelity Count-up Animation Component
 */
const StatCounter = ({ value, suffix = "", decimals = 0, prefix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.]/g, '')) : value;
      
      if (isNaN(end)) return;
      if (start === end) {
        setCount(end);
        return;
      }

      let iterationTime = 20;
      let totalIterations = duration / iterationTime;
      let increment = (end - start) / totalIterations;

      let timer = setInterval(() => {
        start += increment;
        if ((increment > 0 && start >= end) || (increment < 0 && start <= end)) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, iterationTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

export default StatCounter;
