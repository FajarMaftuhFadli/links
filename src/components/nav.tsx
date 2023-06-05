import Link from 'next/link';

function NavItem({ title, href }: { title: string; href: string }) {
  return (
    <Link
      className="block w-full cursor-default px-6 py-4 text-center transition-colors hover:bg-mantle hover:text-text"
      href={href}
    >
      {title}
    </Link>
  );
}

export default function Nav() {
  return (
    <nav className="sticky top-16 w-full overflow-x-auto border-b-[1px] border-blue/70 bg-crust text-blue/70">
      <div className="flex w-full justify-between">
        <NavItem title="All" href="/" />
        <NavItem title="Social" href="/social" />
        <NavItem title="Fun" href="/fun" />
        <NavItem title="Misc" href="/misc" />
      </div>
    </nav>
  );
}
