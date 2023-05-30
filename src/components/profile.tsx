import Image from 'next/image';

export default function Profile() {
  return (
    <div className="leading-tight shadow-lg">
      <div className="relative flex flex-col items-start justify-end gap-4 px-4 pb-4 pt-16">
        <div className="absolute left-4 top-0 h-24 w-24 -translate-y-1/2 overflow-hidden rounded-full ring-4 ring-crust">
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
          <span className="font-light text-blue">@froggologies</span>
        </div>
        <span className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
          cupiditate laborum reprehenderit expedita tempore reiciendis.
        </span>
        <div className="flex flex-col font-light text-blue">
          <span>Middle Earth</span>
          <span>Last updated 30 May 2023</span>
        </div>
      </div>
    </div>
  );
}
