import './globals.css';

export const metadata = {
  title: 'Fajar links',
  description: "Let's connect and expand our knowledge together.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
