import ArrowUp from '@/icons/arrow-up';

export default function Top() {
  return (
    <a
      href="#top"
      title="Back to top"
      className="fixed bottom-4 right-4 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#1DA1F2] shadow-md transition-all hover:-translate-y-2 hover:bg-[#1C8FEA]"
    >
      <ArrowUp className="h-8 w-8 text-text" />
    </a>
  );
}
