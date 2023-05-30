import './globals.css';

import Header from '@/components/header';
import Hero from '@/components/hero';
import Nav from '@/components/nav';
import Profile from '@/components/profile';
import { links } from '@/data';

export const metadata = {
  title: 'Fajar links',
  description: "Let's connect and expand our knowledge together.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-base">
      <body className="relative mx-auto max-w-xl bg-crust leading-tight text-text ring-1 ring-blue/70">
        <Header name="Fajar" linkCount={links.length} />
        <Hero />
        <Profile />
        <Nav />
        {children}
      </body>
    </html>
  );
}
