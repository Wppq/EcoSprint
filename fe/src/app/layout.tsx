import type { Metadata } from 'next';
import { Comic_Neue } from 'next/font/google';
import './globals.css';

const comic = Comic_Neue({
  subsets: ['latin'],
  weight: '700'
});

export const metadata: Metadata = {
  title: 'Eco sprint',
  description: 'Website that serve information about eco friendly',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comic.className} min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
