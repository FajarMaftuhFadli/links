import { items } from '@/data';

export default function Links() {
  return (
    <section className="flex w-full flex-col gap-4">
      {items.map((item, index) => (
        <a
          className="flex gap-4 border-b-[1px] border-blue/70 p-4"
          key={index}
          href={item.link}
          target="_blank"
          rel="noreferrer"
        >
          <div className="h-12 w-12 min-w-[3rem] rounded-md bg-base"></div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">{item.title}</span>
            <span className="mb-2 font-light lowercase text-blue/70">
              @{item.title}
            </span>
            <span className="leading-tight">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              commodi reiciendis id ut odit.
            </span>
          </div>
        </a>
      ))}
    </section>
  );
}
