'use client';
import FoodSwiper from '@/app/components/molecules/slider/FoodSwiper';
import Tabs from '@/app/components/molecules/tabs/Tabs';
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '../components/atoms/button/Button';
import { FoodItem } from '@/@interfaces/interfaces-components';

const ClientComponent = ({ food }: any) => {
  const [foodItem, setFoodItem] = useState<FoodItem | null>(null);

  const selectRandomFoodItem = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * food.length);
    const randomItem = food[randomIndex];
    const { id, attributes } = randomItem;
    const { Title, Description, Image } = attributes;
    const hostName = 'https://ciaochow.plusnarrative.biz';
    const imageData = Image.data.map((image: any) => ({
      alternativeText: image.attributes.alternativeText,
      url: hostName + image.attributes.url,
    }));
    return {
      id,
      attributes: {
        Title,
        Description,
        imageData,
      },
    };
  }, [food]);

  useEffect(() => {
    // Function to select a random food item from the food list
    if (food.length > 0) {
      const newFoodItem = selectRandomFoodItem();
      setFoodItem(newFoodItem);
    }
  }, [food, selectRandomFoodItem]);

  const getNewItem = () => {
    const newFoodItem = selectRandomFoodItem();
    setFoodItem(newFoodItem);
  };

  return (
    <>
      {foodItem?.attributes.imageData && (
        <FoodSwiper images={foodItem.attributes.imageData} />
      )}
      <div className="bg-secondary-background rounded-tl-30 rounded-tr-30 pt-[30px] text-secondary-text relative z-10 -mt-[30px] grow flex flex-col">
        {foodItem?.attributes.Title && (
          <h2 className="mb-4 font-semibold px-5">
            {foodItem.attributes.Title}
          </h2>
        )}
        {foodItem?.attributes.Description && (
          <Tabs description={foodItem.attributes.Description} />
        )}
        <div className="mt-auto rounded-tl-30 rounded-tr-30 shadow-card">
          <div className="p-5">
            <Button onClick={getNewItem} variant="secondary" type="submit">
              Nah! Find something else.
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientComponent;
