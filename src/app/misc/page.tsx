import { Link } from '@/types/linkModel';
import { getLinks } from '@/sanity/sanity-utils';
import Links from '@/components/links';

export default async function Misc() {
  const links: Link[] = await getLinks();

  const excludedTags = ['social', 'fun'];

  const filteredLinks = links.filter(
    (link) => !excludedTags.some((tag) => link.tags?.includes(tag))
  );

  return (
    <main className="">
      <Links links={filteredLinks} />
    </main>
  );
}
