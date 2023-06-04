import './globals.css';

import Header from '@/components/header';
import Hero from '@/components/hero';
import Nav from '@/components/nav';
import Profile from '@/components/profile';

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
    <html lang="en" className="select-none scroll-smooth bg-mantle">
      <body className="relative mx-auto max-w-xl leading-tight text-text">
        <span id="top"></span>
        <Header name="Fajar" linkCount={10} />
        <Hero />
        <Profile />
        <Nav />
        {children}
      </body>
    </html>
  );
}
