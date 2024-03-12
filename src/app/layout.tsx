import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CiaoChow',
  description: 'Ever felt hungry but had no clue what to eat?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative max-w-[375px] mx-auto bg-primary-background">
          {children}
        </main>
      </body>
    </html>
  );
}
