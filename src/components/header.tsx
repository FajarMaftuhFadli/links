import ArrowLeft from '@/icons/arrow-left';
import ElipsisVertical from '@/icons/elipsis-vertical';

export interface HeaderProps {
  name: string;
  linkCount: number;
}

export default function Header({ name, linkCount }: HeaderProps) {
  return (
    <div className="sticky top-0 z-10 flex h-14 w-full items-center justify-between gap-4 bg-crust/0 px-4 py-2">
      {/* <div className="h-full w-full bg-slate-800"></div> */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          title="back"
          className="h-8 w-8 rounded-full bg-crust/80 p-1"
        >
          <ArrowLeft className="h-full w-full" />
        </button>
        <div className="flex flex-col opacity-0">
          <span className="font-bold">{name}</span>
          <span className="text-sm font-light text-blue/70">
            {linkCount} Links
          </span>
        </div>
      </div>
      <button
        type="button"
        title="option"
        className="h-8 w-8 rounded-full bg-crust/80 p-1"
      >
        <ElipsisVertical className="h-full w-full" />
      </button>
    </div>
  );
}
