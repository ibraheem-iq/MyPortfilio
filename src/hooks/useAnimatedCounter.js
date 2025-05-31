import { useState, useEffect } from 'react';

export const useAnimatedCounter = (endValue, duration = 2000) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const increment = endValue / (duration / 100);
    const timer = setInterval(() => {
      setValue(prev => {
        const nextValue = prev + increment;
        return nextValue >= endValue ? endValue : nextValue;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return value;
};