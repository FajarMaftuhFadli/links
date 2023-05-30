'use client';

import { useState, useEffect } from 'react';

import ArrowLeft from '@/icons/arrow-left';
import ElipsisVertical from '@/icons/elipsis-vertical';

export interface HeaderProps {
  name: string;
  linkCount: number;
}

export default function Header({ name, linkCount }: HeaderProps) {
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
    <div
      className={`duration-800 sticky top-0 z-10 flex h-16 w-full items-center justify-between gap-4 bg-gradient-to-b from-mantle px-4 py-2 transition-colors ${
        scrollPosition < 143 ? ' to-mantle/0' : 'to-mantle/100'
      }`}
    >
      {/* <div className="h-full w-full bg-slate-800"></div> */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          title="back"
          className="h-8 w-8 rounded-full bg-mantle/80 p-1"
        >
          <ArrowLeft className="h-full w-full" />
        </button>
        <div
          className={`duration-800 flex select-none flex-col transition-opacity ${
            scrollPosition < 148 ? 'opacity-0' : '!opacity-100'
          }`}
        >
          <span className="text-lg font-bold">{name}</span>
          <span className="text-sm font-light text-blue/70">
            {linkCount} Links
          </span>
        </div>
        {/* {scrollPosition} */}
      </div>
      <button
        type="button"
        title="option"
        className="h-8 w-8 rounded-full bg-mantle/80 p-1"
      >
        <ElipsisVertical className="h-full w-full" />
      </button>
    </div>
  );
}
