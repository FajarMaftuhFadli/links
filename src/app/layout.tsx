import './globals.css';

import Hero from '@/components/hero';
import Nav from '@/components/nav';
import Profile from '@/components/profile';

import { countLinks } from '@/sanity/sanity-utils';

export const metadata = {
  title: 'Fajar links',
  description: "Let's connect and expand our knowledge together.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const countedLink = await countLinks();

  return (
    <html lang="en" className="select-none scroll-smooth bg-mantle">
      <body className="relative mx-auto max-w-xl leading-tight text-text">
        <span id="top"></span>
        <Hero />
        <Profile countedLink={countedLink} />
        <Nav />
        {children}
      </body>
    </html>
  );
}
