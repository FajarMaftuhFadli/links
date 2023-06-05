'use client';

import Head from 'next/head';
import { NextStudio } from 'next-sanity/studio';
import { metadata } from 'next-sanity/studio/metadata';

import config from '../../../../sanity.config';
import Link from 'next/link';

export default function StudioPage() {
  return (
    <>
      <Head>
        {Object.entries(metadata).map(([key, value]) => (
          <meta key={key} name={key} content={value} />
        ))}
      </Head>
      <div className="fixed left-0 right-0 top-0 z-20">
        <NextStudio config={config} />
        <Link
          href="/"
          className="fixed bottom-16 left-0 z-20 flex h-8 w-8 items-center justify-end rounded-r-full bg-base pr-3 font-bold opacity-50 transition-opacity hover:opacity-100"
        >
          H
        </Link>
      </div>
    </>
  );
}
