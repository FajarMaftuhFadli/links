import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="sticky top-0 w-full overflow-x-auto border-b-[1px] border-blue/70 bg-crust px-4 text-blue/70">
      <div className="flex w-full justify-between">
        <Link
          className="block px-6 py-4 text-center font-semibold text-text"
          href="/"
        >
          All
        </Link>
        <Link className="block px-6 py-4 text-center" href="/social">
          Social
        </Link>
        <Link className="block px-6 py-4 text-center" href="/fun">
          Fun
        </Link>
        <Link className="block px-6 py-4 text-center" href="/misc">
          Misc
        </Link>
      </div>
    </nav>
  );
}
