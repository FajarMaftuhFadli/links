import { Link } from '@/types/linkModel';
import Image from 'next/image';
import moment from 'moment';
import ChatBubbleOvalLeft from '@/icons/chat-bubble-oval-leftt';
import ArrowPathRoundedSquare from '@/icons/arrow-path-rounded-square';
import Heart from '@/icons/heart';
import ChartBar from '@/icons/chart-bar';

export default function Links({ links }: { links: Link[] }) {
  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function formatDate(dateString: string) {
    const currentDate = moment();
    const date = moment(dateString);

    if (currentDate.diff(date, 'hours') < 24) {
      if (currentDate.diff(date, 'hours') >= 1) {
        return currentDate.diff(date, 'hours') + 'h';
      } else if (currentDate.diff(date, 'minutes') >= 1) {
        return currentDate.diff(date, 'minutes') + 'm';
      } else {
        return currentDate.diff(date, 'seconds') + 's';
      }
    } else if (currentDate.diff(date, 'days') === 1) {
      return 'yesterday';
    } else {
      return date.format('DD MMM');
    }
  }

  return (
    <section className="flex w-full flex-col bg-crust">
      {links.map((link: Link) => (
        <a
          className="cursor-default border-b-[1px] border-blue/20 p-4"
          key={link._id}
          href={link.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          {link.pinned === true && (
            <span className="mb-1 flex gap-4 text-sm font-semibold text-blue/80">
              <span className="block w-12 text-right">#</span>
              <span>Pinned Link</span>
            </span>
          )}
          <div className="mb-2 flex gap-4">
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
                    {formatDate(link._updatedAt)}
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
          <div className="flex px-16 text-sm font-light text-blue/80">
            <span className="flex w-full gap-1 hover:text-blue">
              <ChatBubbleOvalLeft className="h-5 w-5" />
              {randomIntFromInterval(5, 99)}
            </span>
            <span className="flex w-full gap-1 hover:text-blue">
              <ArrowPathRoundedSquare className="h-5 w-5" />
              {randomIntFromInterval(5, 99)}
            </span>
            <span className="flex w-full gap-1 hover:text-blue">
              <Heart className="h-5 w-5" />
              {randomIntFromInterval(5, 99)}
            </span>
            <span className="flex w-full gap-1 hover:text-blue">
              <ChartBar className="h-5 w-5" />
              {randomIntFromInterval(5, 10)}.{randomIntFromInterval(1, 99)}k
            </span>
          </div>
        </a>
      ))}
    </section>
  );
}
