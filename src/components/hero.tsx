import Image from 'next/image';
export default function Hero() {
  return (
    <div className="relative aspect-[100/33] w-full bg-blue-500">
      <Image
        className="object-cover"
        src="/romb.png"
        alt="Header image"
        fill
        priority
      />
    </div>
  );
}
