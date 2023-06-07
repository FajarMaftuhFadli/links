'use client';

import { useState, useEffect } from 'react';

import ArrowUp from '@/icons/arrow-up';

export default function Top() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      href="#top"
      title="Back to top"
      className={`fixed bottom-4 right-4 flex h-14 w-14 cursor-default items-center justify-center  rounded-full bg-[#1DA1F2] shadow-md transition-all hover:-translate-y-2 hover:bg-[#1C8FEA] ${
        scrollPosition > 100 ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <ArrowUp className="h-8 w-8 text-text" />
    </a>
  );
}
