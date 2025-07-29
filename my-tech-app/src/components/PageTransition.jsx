import React, { useEffect, useState } from 'react';

export function PageTransition({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation after component mount
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
}
