'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FoodImages } from '@/@interfaces/interfaces-components';

const FoodSwiper = ({ images }: { images: FoodImages[] }) => {
  return (
    <div className="swiper-wrapper food-slider">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ type: 'bullets', clickable: true }}
        // autoplay={true}
        loop={true}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-[375/341]">
              <Image fill priority alt="#" src={image.url} />
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute inset-x-0 bottom-0 h-[175px] bg-gradient-primary z-10"></div>
      </Swiper>
    </div>
  );
};
const test = [
  {
    id: 1,
    attributes: {
      Title: 'Carrots',
      Description:
        'The carrot is a root vegetable, most commonly observed as orange in color, though purple, black, red, white, and yellow cultivars exist, all of which are domesticated forms of the wild carrot, Daucus carota, native to Europe and Southwestern Asia.\n' +
        '\n' +
        'A medium-size carrot has 25 calories, 6 grams of carbs, and 2 grams of fiber. The veggie is an excellent source of vitamin A, providing more than 200% of your daily requirement in just one carrot. Carrots are loaded with beta-carotene, a natural chemical that the body changes into vitamin A.',
      createdAt: '2022-02-14T17:02:12.570Z',
      updatedAt: '2022-02-14T17:02:15.535Z',
      publishedAt: '2022-02-14T17:02:15.533Z',
      Image: {
        data: [
          {
            id: 1,
            attributes: {
              name: 'carrots.jpeg',
              alternativeText: 'carrots.jpeg',
              caption: 'carrots.jpeg',
              width: 1200,
              height: 740,
              formats: [
                {
                  thumbnail: {
                    name: 'thumbnail_carrots.jpeg',
                    hash: 'thumbnail_carrots_f0e8e6217a',
                    ext: '.jpeg',
                    mime: 'image/jpeg',
                    width: 245,
                    height: 151,
                    size: 11.38,
                    path: null,
                    url: '/uploads/thumbnail_carrots_f0e8e6217a.jpeg',
                  },
                  large: {
                    name: 'large_carrots.jpeg',
                    hash: 'large_carrots_f0e8e6217a',
                    ext: '.jpeg',
                    mime: 'image/jpeg',
                    width: 1000,
                    height: 617,
                    size: 98.72,
                    path: null,
                    url: '/uploads/large_carrots_f0e8e6217a.jpeg',
                  },
                  medium: {
                    name: 'medium_carrots.jpeg',
                    hash: 'medium_carrots_f0e8e6217a',
                    ext: '.jpeg',
                    mime: 'image/jpeg',
                    width: 750,
                    height: 463,
                    size: 65.61,
                    path: null,
                    url: '/uploads/medium_carrots_f0e8e6217a.jpeg',
                  },
                  small: {
                    name: 'small_carrots.jpeg',
                    hash: 'small_carrots_f0e8e6217a',
                    ext: '.jpeg',
                    mime: 'image/jpeg',
                    width: 500,
                    height: 308,
                    size: 36.27,
                    path: null,
                    url: '/uploads/small_carrots_f0e8e6217a.jpeg',
                  },
                },
              ],
              hash: 'carrots_f0e8e6217a',
              ext: '.jpeg',
              mime: 'image/jpeg',
              size: 84.25,
              url: '/uploads/carrots_f0e8e6217a.jpeg',
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2022-02-14T17:01:55.132Z',
              updatedAt: '2022-02-14T17:01:55.132Z',
            },
          },
          {
            id: 2,
            attributes: {
              name: 'carrots-3.jpeg',
              alternativeText: 'carrots-3.jpeg',
              caption: 'carrots-3.jpeg',
              width: 1155,
              height: 648,
              formats: [
                {
                  thumbnail: {
                    name: 'thumbnail_carrots.jpeg',
                    hash: 'thumbnail_carrots_f0e8e6217a',
                    ext: '.jpeg',
                    mime: 'image/jpeg',
                    width: 245,
                    height: 151,
                    size: 11.38,
                    path: null,
                    url: '/uploads/thumbnail_carrots_f0e8e6217a.jpeg',
                  },
                  large: {
                    name: 'large_carrots.jpeg',
                    hash: 'large_carrots_f0e8e6217a',
                    ext: '.jpeg',
                    mime: 'image/jpeg',
                    width: 1000,
                    height: 617,
                    size: 98.72,
                    path: null,
                    url: '/uploads/large_carrots_f0e8e6217a.jpeg',
                  },
                  medium: {
                    name: 'medium_carrots.jpeg',
                    hash: 'medium_carrots_f0e8e6217a',
                    ext: '.jpeg',
                    mime: 'image/jpeg',
                    width: 750,
                    height: 463,
                    size: 65.61,
                    path: null,
                    url: '/uploads/medium_carrots_f0e8e6217a.jpeg',
                  },
                  small: {
                    name: 'small_carrots.jpeg',
                    hash: 'small_carrots_f0e8e6217a',
                    ext: '.jpeg',
                    mime: 'image/jpeg',
                    width: 500,
                    height: 308,
                    size: 36.27,
                    path: null,
                    url: '/uploads/small_carrots_f0e8e6217a.jpeg',
                  },
                },
              ],
              hash: 'carrots_3_60f5a864c1',
              ext: '.jpeg',
              mime: 'image/jpeg',
              size: 134.23,
              url: '/uploads/carrots_3_60f5a864c1.jpeg',
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2022-02-14T17:01:55.204Z',
              updatedAt: '2022-02-14T17:01:55.204Z',
            },
          },
          {
            id: 3,
            attributes: {
              name: 'carrots-2.jpeg',
              alternativeText: 'carrots-2.jpeg',
              caption: 'carrots-2.jpeg',
              width: 2500,
              height: 1667,
              formats: [
                {
                  thumbnail: {
                    name: 'thumbnail_carrots.jpeg',
                    hash: 'thumbnail_carrots_f0e8e6217a',
                    ext: '.jpeg',
                    mime: 'image/jpeg',
                    width: 245,
                    height: 151,
                    size: 11.38,
                    path: null,
                    url: '/uploads/thumbnail_carrots_f0e8e6217a.jpeg',
                  },
                  large: {
                    name: 'large_carrots.jpeg',
                    hash: 'large_carrots_f0e8e6217a',
                    ext: '.jpeg',
                    mime: 'image/jpeg',
                    width: 1000,
                    height: 617,
                    size: 98.72,
                    path: null,
                    url: '/uploads/large_carrots_f0e8e6217a.jpeg',
                  },
                  medium: {
                    name: 'medium_carrots.jpeg',
                    hash: 'medium_carrots_f0e8e6217a',
                    ext: '.jpeg',
                    mime: 'image/jpeg',
                    width: 750,
                    height: 463,
                    size: 65.61,
                    path: null,
                    url: '/uploads/medium_carrots_f0e8e6217a.jpeg',
                  },
                  small: {
                    name: 'small_carrots.jpeg',
                    hash: 'small_carrots_f0e8e6217a',
                    ext: '.jpeg',
                    mime: 'image/jpeg',
                    width: 500,
                    height: 308,
                    size: 36.27,
                    path: null,
                    url: '/uploads/small_carrots_f0e8e6217a.jpeg',
                  },
                },
              ],
              hash: 'carrots_2_0a682e61c9',
              ext: '.jpeg',
              mime: 'image/jpeg',
              size: 792.18,
              url: '/uploads/carrots_2_0a682e61c9.jpeg',
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2022-02-14T17:01:56.045Z',
              updatedAt: '2022-02-14T17:01:56.045Z',
            },
          },
        ],
      },
    },
  },
];
export default FoodSwiper;
