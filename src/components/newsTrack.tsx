'use client';

import Link from 'next/link';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import Slider from 'react-slick';
import base64Image from '@/assets/base64.jpeg';
import { Reveal } from './reveal';


const NewsTrack = ({ newsData }: any) => {

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 4,
    speed: 500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 600, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerMode: false } },
      { breakpoint: 200, settings: { slidesToShow: 1, centerMode: false } },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className='pb-32 md:pl-32 pl-8 overflow-hidden md:pr-0 pr-0 text-[#212322] bg-[#F7F6F3]'>
      <div>
        <Reveal>
            <h1 className='text-[36px] text-[#212322] font-bold uppercase'>News</h1>            
        </Reveal>
      </div>
      <div className='w-full mt-8'>
        <Slider {...settings} className="ml-0 w-full">
          {newsData.map((news: any, index: any) => (
              <div className="min-w-[100px] overflow-hidden p-2" key={news.title}>
                <Link href={`/block/${encodeURIComponent(news.title)}`} className='bg-white cursor-grab'>
                  <div className='overflow-hidden'>
                    <Image
                      src={news.cover}
                      alt={news.name}
                      unoptimized
                      placeholder='blur' 
                      blurDataURL={base64Image.blurDataURL}
                      style={{objectFit:"cover"}}
                      className="w-full max-h-[320px] hover:scale-105 transform transition-transform ease-in-out duration-300 cursor-pointer"
                      width={100}
                      height={100}
                      priority={index < 3}
                    />
                  </div>
                  <div className='bg-white pt-[32px] px-8 pb-32'>
                    <div className='px-8 pt-1 pb-2 border-2 border-[#212322] w-fit rounded-full'>
                        <span className='uppercase text-[10px] mb-1 font-bold'>{news.type}</span>
                    </div>
                    <div className="font-bold">
                      <p className="uppercase text-[16px] mt-[16px]">{news.title}</p>
                    </div>
                    <p className="text-gray-400 text-base text-[14px]">{news.description}</p>
                  </div>
                </Link>
              </div>
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

export default NewsTrack;
