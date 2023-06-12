import { Link } from '@/types/linkModel';
import Image from 'next/image';
import moment from 'moment';

export default function Links({ links }: { links: Link[] }) {
  return (
    <section className="flex w-full flex-col bg-crust">
      {links.map((link: Link) => (
        <a
          className="cursor-default border-b-[1px] border-blue/20 px-4 py-2"
          key={link._id}
          href={link.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          {link.pinned === true && (
            <span className="flex gap-2 pb-2 text-sm font-semibold text-blue/80">
              <span className="block w-12 text-right">#</span>{' '}
              <span>Pinned Link</span>
            </span>
          )}
          <div className="flex gap-2">
            <div className="h-12 w-12 min-w-[3rem] overflow-hidden rounded-md bg-base">
              <Image src={link.icon} alt={link.name} width={256} height={256} />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <span className="font-semibold">{link.name}</span>
                <span className="font-light lowercase text-blue/80">
                  @{link.username}
                  {' • '}
                  <span className="capitalize">
                    {moment(link._updatedAt).format('DD MMM')}
                  </span>
                </span>
              </div>
              <span className="">
                {link.description == null
                  ? 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Abcommodi reiciendis id ut odit.'
                  : link.description}
              </span>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}
