import Image from 'next/image';
import HomeSwiper from './components/molecules/slider/HomeSwiper';

export default function Home() {
  return (
    <div className="relative px-5">
      <Image
        width={375}
        height={377}
        src="Ellipse.svg"
        alt="ellipse"
        className="absolute z-10 top-0 left-[calc(50%-1px)] -translate-x-1/2"
      />
      <HomeSwiper />
    </div>
  );
}
