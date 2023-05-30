import { links } from '@/data';

export default function Links() {
  return (
    <section className="flex w-full flex-col">
      {links.map((link, index) => (
        <a
          className="flex gap-4 border-b-[1px] border-blue/70 p-4"
          key={index}
          href={link.link}
          target="_blank"
          rel="noreferrer"
        >
          <div className="h-12 w-12 min-w-[3rem] rounded-md bg-base"></div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">{link.title}</span>
            <span className="mb-2 font-light lowercase text-blue/70">
              @{link.title}
            </span>
            <span className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              commodi reiciendis id ut odit.
            </span>
          </div>
        </a>
      ))}
    </section>
  );
}
