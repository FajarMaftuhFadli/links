import Header from '@/components/header';
import Hero from '@/components/hero';
import Profile from '@/components/profile';
import { items } from '@/data';

export default function Home() {
  return (
    <main className="bg-crust text-text">
      <Header name="Fajar" linkCount={items.length} />
      <Hero />
      <Profile />
      <div className="flex w-full flex-col gap-4 p-4">
        {items.map((item, index) => (
          <a
            className="block rounded-md border-2 border-text p-6 text-lg font-semibold"
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
