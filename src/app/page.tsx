import Header from '@/components/header';
import Hero from '@/components/hero';
import Profile from '@/components/profile';
import { items } from '@/data';

export default function Home() {
  return (
    <main className="">
      <Header name="Fajar" linkCount={items.length} />
      <Hero />
      <Profile />
      <div className="flex w-full flex-col gap-4 bg-gradient-to-tr p-4">
        {items.map((item, index) => (
          <a
            className="block rounded-md border-2 border-slate-700 bg-white p-6 text-lg font-semibold text-slate-700"
            href={item.link}
            target="_blank"
            rel="noreferrer"
            key={index}
          >
            {item.title}
          </a>
        ))}
      </div>
    </main>
  );
}
