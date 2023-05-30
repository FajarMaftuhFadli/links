export default function Social() {
  const items = [
    {
      title: 'GitHub',
      link: 'https://github.com/hiroshi-nakamura',
    },
    {
      title: 'Twitter',
      link: 'https://twitter.com/hiroshi_nakamura',
    },
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/hiroshi_nakamura/',
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/hiroshi-nakamura-a0a0a0a0/',
    },
  ];
  return (
    <main className="">
      <section className="flex w-full flex-col gap-4 p-4">
        {items.map((item, index) => (
          <a
            className="block rounded-md border-2 border-text p-6 text-lg font-semibold"
            href={item.link}
            target="_blank"
            rel="noreferrer"
            key={index}
          >
            {item.title}
          </a>
        ))}
      </section>
    </main>
  );
}
