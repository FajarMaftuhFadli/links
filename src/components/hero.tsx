import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative -mt-14 aspect-[100/33] w-full">
      <Image
        className="object-cover object-top"
        src="/hero.png"
        alt="Header image"
        fill
        priority
      />
    </div>
  );
}
