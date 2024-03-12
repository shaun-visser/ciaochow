'use client';
import React, { useState } from 'react';
import { Contents } from '@/@interfaces/interfaces-components';

const Tabs = ({ description }: Contents) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex border-b border-gray justify-center">
        <button className="px-5" key={0} onClick={() => handleTabClick(0)}>
          <span
            className={` inline-block text-s -tracking-[.24px] pt-1.5 pb-2.5 px-1.5 ${
              0 === activeTab
                ? 'text-green after:content-[""] after:absolute after:inset-x-0 relative after:bg-green after:bottom-0 after:h-[4px] after:rounded-tl-[20px] after:rounded-tr-[20px] after:inline-block'
                : 'text-black'
            }`}
          >
            Description
          </span>
        </button>
        <button className="px-5" key={1} onClick={() => handleTabClick(1)}>
          <span
            className={` inline-block text-s -tracking-[.24px] pt-1.5 pb-2.5 px-1.5 ${
              1 === activeTab
                ? 'text-green after:content-[""] after:absolute after:inset-x-0 relative after:bg-green after:bottom-0 after:h-[4px] after:rounded-tl-[20px] after:rounded-tr-[20px] after:inline-block'
                : 'text-black'
            }`}
          >
            Nutrition facts
          </span>
        </button>
      </div>
      <div className="px-5 py-9 text-gray-600 text-[13px] leading-[15.7px] tracking-[2%]">
        {activeTab === 0 ? (
          description.split('\n').map((paragraph, index) => (
            <p className="mb-6 last:mb-0" key={index}>
              {paragraph}
            </p>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
