export interface HeaderProps {
  name: string;
  linkCount: number;
}

export default function Header({ name, linkCount }: HeaderProps) {
  return (
    <div className="fixed top-0 z-10 hidden w-full px-4 py-2">
      {/* <div className="h-full w-full bg-slate-800"></div> */}
      <div className="flex flex-col">
        <span className="font-bold">{name}</span>
        <span className="">{linkCount} links</span>
      </div>
    </div>
  );
}
