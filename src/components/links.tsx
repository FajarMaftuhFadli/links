import { links } from '@/data';

export default function Links() {
  return (
    <section className="flex w-full flex-col">
      {links.map((link, index) => (
        <a
          className="flex gap-4 border-b-[1px] border-blue/30 p-4"
          key={index}
          href={link.link}
          target="_blank"
          rel="noreferrer"
        >
          <div className="h-12 w-12 min-w-[3rem] rounded-md bg-mantle"></div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <span className="text-lg font-semibold">{link.title}</span>
              <span className="font-light lowercase text-blue/70">
                @{link.title} • 2d
              </span>
            </div>
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
