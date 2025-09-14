'use client';

import { useEffect, useRef } from 'react';

interface ScrollAnimateWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollAnimateWrapper({ 
  children, 
  className = '', 
  delay = 0 
}: ScrollAnimateWrapperProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay based on prop
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={elementRef} 
      className={`scroll-animate ${className}`}
    >
      {children}
    </div>
  );
}
