import Header from '@/components/header';
import './globals.css';

import Hero from '@/components/hero';
import Nav from '@/components/nav';
import Profile from '@/components/profile';

import { getData } from '@/sanity/sanity-utils';

export const metadata = {
  title: 'Fajar links',
  description: "Let's connect and expand our knowledge together.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const datas = await getData();

  return (
    <html lang="en" className="select-none scroll-smooth bg-crust">
      <body className="relative mx-auto max-w-xl leading-tight text-text before:fixed before:bottom-0 before:top-0 before:-z-10 before:mx-auto before:block before:w-full before:max-w-xl before:bg-blue before:ring-1 before:ring-blue/30">
        <span id="top"></span>
        <Header name="Fajar" />
        <Hero />
        <Profile
          countedLink={datas.length}
          lastUpdateDate={datas[0]._updatedAt}
        />
        <Nav />
        {children}
      </body>
    </html>
  );
}
