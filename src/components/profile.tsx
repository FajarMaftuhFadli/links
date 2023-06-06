import ArrowPath from '@/icons/arrow-path';
import MapPin from '@/icons/map-pin';
import Image from 'next/image';

export default function Profile({ countedLink }: { countedLink: number }) {
  return (
    <div className="bg-crust">
      <div className="relative flex flex-col items-start justify-end gap-4 px-4 pb-4 pt-16">
        <div className="absolute left-4 top-0 h-24 w-24 -translate-y-1/2 overflow-hidden rounded-full bg-base ring-4 ring-crust">
          <div className="relative h-full w-full">
            <Image
              className="object-cover"
              src="/profile.png"
              alt="Profile image"
              fill
              priority
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Fajar Maftuh Fadli</h1>
          <span className="font-light text-blue/70">@froggologies</span>
        </div>
        <span className="">
          Welcome, traveler. This one is a frog, hailing from the misty swamps
          of Black Marsh. 🐸 Croak! May the Hist guide your path!
        </span>
        <div className="flex flex-col font-light text-blue/70">
          <div className="flex flex-row items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>Middle Earth</span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <ArrowPath className="h-4 w-4" />
            <span>Last updated 30 May 2023</span>
          </div>
        </div>
        <div className="text-sm">
          <span className="font-semibold">{countedLink}</span>{' '}
          <span className="font-light text-blue/70">Links</span>
        </div>
      </div>
    </div>
  );
}
