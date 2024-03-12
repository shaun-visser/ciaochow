'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { Button } from '../../atoms/button/Button';

const HomeSwiper = () => {
  return (
    <div className="swiper-wrapper relative !z-20">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ type: 'bullets', clickable: true }}
        // autoplay={true}
        loop={true}
        className="w-full"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <Image
              className="mt-20 mb-12"
              priority
              alt="ciaochow"
              width={197}
              height={34}
              src="ciaochow.svg"
            />
            <div className="flex mb-20">
              <Image
                alt="lady"
                width={126}
                height={286}
                src="lady.svg"
                className="h-auto"
              />
              <Image
                alt="man"
                width={146}
                height={290}
                src="man.svg"
                className="h-auto"
              />
            </div>
            <p className="text-primary-text max-w-[225px] mb-12">
              Hungry? <strong>CiaoChow</strong> helps you find something to eat.{' '}
            </p>
            <Link href="/registration" className="w-full mb-16">
              <Button>Get Started</Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <Image
              className="mt-20 mb-12"
              priority
              alt="ciaochow"
              width={197}
              height={34}
              src="ciaochow.svg"
            />
            <div className="flex mb-20">
              <Image
                className="h-auto"
                alt="lady"
                width={126}
                height={286}
                src="lady.svg"
              />
              <Image
                className="h-auto"
                alt="man"
                width={146}
                height={290}
                src="man.svg"
              />
            </div>
            <p className="text-primary-text max-w-[225px] mb-12">
              Hungry? <strong>CiaoChow</strong> helps you find something to eat.{' '}
            </p>
            <Link href="/registration" className="w-full mb-16">
              <Button>Get Started</Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <Image
              className="mt-20 mb-12"
              priority
              alt="ciaochow"
              width={197}
              height={34}
              src="ciaochow.svg"
            />
            <div className="flex mb-20">
              <Image
                alt="lady"
                width={126}
                height={286}
                src="lady.svg"
                className="h-auto"
              />
              <Image
                alt="man"
                width={146}
                height={290}
                src="man.svg"
                className="h-auto"
              />
            </div>
            <p className="text-primary-text max-w-[225px] mb-12">
              Hungry? <strong>CiaoChow</strong> helps you find something to eat.{' '}
            </p>
            <Link href="/registration" className="w-full mb-16">
              <Button>Get Started</Button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
