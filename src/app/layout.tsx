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
      <body className="relative mx-auto max-w-xl leading-tight text-text">
        <span id="top"></span>
        <div className="border-x-[1px] border-blue/30">
          <Header name="Fajar" />
          <Hero />
          <Profile
            countedLink={datas.length}
            lastUpdateDate={datas[0]._updatedAt}
          />
          <Nav />
        </div>
        {children}
      </body>
    </html>
  );
}
