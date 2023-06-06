import Links from '@/components/links';
import Top from '@/components/top';
import { Link } from '@/types/linkModel';
import { getLinks } from '@/sanity/sanity-utils';

export default async function Social() {
  var links = await getLinks();

  links = links.filter((link: Link) => link.tags?.includes('social'));

  return (
    <main>
      <Links links={links} />
      <Top />
    </main>
  );
}
