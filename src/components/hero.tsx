import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative -mt-16 aspect-[100/33] w-full bg-base">
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
