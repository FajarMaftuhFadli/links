import Image from 'next/image';

export default function Profile() {
  return (
    <div className="bg-slate-800 leading-tight shadow-lg">
      <div className="relative flex flex-col items-start justify-end gap-2 px-4 pb-4 pt-16 text-slate-100">
        <div className="absolute left-4 top-0 h-24 w-24 -translate-y-1/2 overflow-hidden rounded-full bg-white ring-2 ring-slate-500">
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
          <span>@froggologies</span>
        </div>
        <span className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
          cupiditate laborum reprehenderit expedita tempore reiciendis.
        </span>
        <div className="flex flex-col font-light">
          <span>Middle Earth</span>
          <span>Last updated May 2023</span>
        </div>
      </div>
    </div>
  );
}
