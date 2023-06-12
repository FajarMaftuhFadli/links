'use client';

import { useState, useEffect } from 'react';
import ArrowLeft from '@/icons/arrow-left';
import ElipsisVertical from '@/icons/elipsis-vertical';
import Link from 'next/link';
import { exit } from 'process';

export interface HeaderProps {
  name: string;
}

function OptionButton() {
  const [optionOpen, setOptionOpen] = useState(false);

  return (
    <div className="group relative">
      <button
        onClick={() => setOptionOpen(!optionOpen)}
        type="button"
        title="option"
        // href="/studio"
        className="h-8 w-8 cursor-default rounded-full bg-mantle/80 p-1 transition-colors hover:bg-base"
      >
        <ElipsisVertical className="h-full w-full" />
      </button>
      <div className="absolute right-0 top-full hidden rounded-md p-2 group-hover:block">
        <div
          className={`flex flex-col rounded-md bg-base/90 p-2 text-right opacity-0 shadow-md transition-opacity group-hover:opacity-100`}
        >
          <button
            type="button"
            className="pointer-events-none whitespace-nowrap rounded-md p-2 text-text/60"
          >
            Change theme
          </button>
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md p-2 hover:bg-mantle"
            href="https://github.com/FajarMaftuhFadli/links"
          >
            Source Code
          </a>
          <Link
            className="pointer-events-none rounded-md p-2 text-text/60"
            href="/studio"
          >
            Admin
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Header({ name }: HeaderProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    if (typeof window !== 'undefined') {
      setScrollPosition(window.scrollY);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-10 h-16 w-full bg-gradient-to-t from-mantle/0 to-mantle/90">
      <div
        className={`flex h-full w-full items-center justify-between gap-4 px-4 py-2 transition-colors ${
          scrollPosition < 140 ? ' bg-mantle/0' : 'bg-mantle/100'
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
            className={`flex flex-col transition-opacity duration-500 ${
              scrollPosition < 140 ? 'opacity-0' : '!opacity-100'
            }`}
          >
            <span className="text-lg font-bold">{name}</span>
            <span className="text-sm font-light text-blue/80">{0} Links</span>
          </div>
          {/* {scrollPosition} */}
        </div>
        <OptionButton />
      </div>
    </div>
  );
}
