import Image from 'next/image';
import Link from 'next/link';

export default function RegistrationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Image
        width={375}
        height={377}
        src="Ellipse.svg"
        alt="ellipse"
        className="absolute z-10 top-0 left-[calc(50%-1px)] -translate-x-1/2"
      />
      <Link className="mt-14 pl-5 mr-auto inline-block relative z-30" href="/">
        <Image width={24} height={24} src="chevron-left.svg" alt="go back" />
      </Link>
      {children}
    </>
  );
}
