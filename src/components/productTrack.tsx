'use client';

import Link from 'next/link';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import Slider from 'react-slick';
import { base64 } from '@/app/firebaseConfig';

const ProductTrack = ({ salesData }: any) => {
  const [currentCategory, setCurrentCategory] = useState('Women');

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerMode: false } },
      { breakpoint: 200, settings: { slidesToShow: 1, centerMode: false } },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const categories = ['Women', 'Men'];

  const handleCategoryClick = (category: any) => {
    setCurrentCategory(category);
    console.log('categoryClick: ', category);
  }

  return (
    <div className='pb-16 pt-16 md:pl-32 pl-8 overflow-hidden md:pr-0 pr-0 text-[#212322]'>
      <ul className='flex space-x-0'>
        {categories.map((category) => (
          <li key={category} className='group'>
            <button onClick={() => handleCategoryClick(category)}>
              <span className={`md:pl-16 md:pr-16 pl-8 pr-8 pb-2 text-[#00000] text-2xl font-semibold relative bg-right-bottom bg-gradient-to-l from-black ${category === currentCategory ? 'bg-[length:120%3px]' : 'bg-[length:0%3px]'} bg-no-repeat group-hover:bg-[length:120%3px] transition-all duration-500 ease-out`}>
                {category}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className='w-full mt-8'>
        <Slider {...settings} className="ml-0 w-full">
          {salesData.map((sale: any) => (
            sale.saleImages.map((imageGroup: any, index: any) => (
              <div className="min-w-[100px] overflow-hidden p-2" key={sale.name + index}>
                <Link href={`/detail/${encodeURIComponent(sale.product_id)}-${encodeURIComponent(imageGroup.color.color)}`}>
                  <div className='overflow-hidden'>
                    <Image
                      src={imageGroup.imagesUrls[1]}
                      alt={sale.name}
                      unoptimized
                      placeholder='blur' 
                      blurDataURL={base64} // Assuming base64 is specific to each image
                      className="w-full hover:scale-105 transform transition-transform ease-in-out duration-300 cursor-pointer"
                      width={100}
                      height={140}
                      priority={index < 3} // Prioritize first few images
                    />
                  </div>
                  <div>
                    <div className="font-bold">
                      <p className="uppercase text-[16px] mt-[16px]">{sale.name}</p>
                    </div>
                    <p className="text-gray-400 text-base text-[14px]">{sale.material}</p>
                    <p className="font-bold text-[16px] mt-2">R{sale.price}</p>
                  </div>
                </Link>
              </div>
            ))
          ))}
        </Slider>
      </div>
    </div>
  );
}

function SampleNextArrow(props: any) {
  const { className = 'slick-arrow slick-next', style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default ProductTrack;
