import Links from '@/components/links';
import Top from '@/components/top';

import { getLinks } from '@/sanity/sanity-utils';

export default async function Home() {
  const links = await getLinks();
  return (
    <main>
      <Links links={links} />
      <Top />
    </main>
  );
}
