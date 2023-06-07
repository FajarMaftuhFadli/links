import { Link } from '@/types/linkModel';
import Image from 'next/image';

export default function Links({ links }: { links: Link[] }) {
  return (
    <section className="flex w-full flex-col bg-crust">
      {links.map((link: Link) => (
        <a
          className="flex cursor-default gap-4 border-b-[1px] border-blue/30 p-4"
          key={link._id}
          href={link.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="h-12 w-12 min-w-[3rem] overflow-hidden rounded-md bg-base">
            <Image src={link.icon} alt={link.name} width={400} height={400} />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex cursor-pointer items-center gap-1">
              <span className="text-lg font-semibold">{link.name}</span>
              <span className="font-light lowercase text-blue/70">
                @{link.username} • 2d
              </span>
            </div>
            <span className="cursor-pointer">
              {link.description == null
                ? 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Abcommodi reiciendis id ut odit.'
                : link.description}
            </span>
          </div>
        </a>
      ))}
    </section>
  );
}
