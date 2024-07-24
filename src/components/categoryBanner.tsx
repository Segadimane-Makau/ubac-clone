import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import axoloMen from '@/assets/axoloMale.avif';
import volkanMen from '@/assets/volkanMale.avif'
import axoloFemale from '@/assets/axoloFemale.avif'
import volkanFemale from '@/assets/volkanFemale.avif'
import discover from "@/assets/discover.jpg"
import { Reveal } from './reveal';

const CategoryBanner = () => {
  return (
    <main>
        <div className='relative h-[80vh] mt-32'>
        <div className='absolute inset-0 flex items-center justify-between'>
            <div className='w-1/2 h-full bg-black' >
                <Image className='w-[100%] h-full' priority={true} src={axoloMen} alt={''} style={{objectFit:"cover"}} unoptimized loading="eager"/>
            </div>
            <div className=' z-[1] absolute w-full h-full bg-gray-900 bg-opacity-30'></div>
            <div className='w-1/2 h-full'>
                <Image className='w-[100%] h-full' priority={true} src={axoloFemale} alt={''} style={{objectFit:"cover"}} unoptimized loading="eager"/>
            </div>
        </div>
        <div className='z-[2] w-[100%] absolute  text-center item-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Reveal>
                <p className='text-white'>FRENCH LINEN - FROM FIELD TO FABRIC</p>
            </Reveal>
            <Reveal>
                <p className='uppercase text-white font-bold text-5xl'>AXOLO LINEN</p>
            </Reveal>
        </div>
        <div className='z-[2] w-[100%] absolute flex text-center items-center justify-center bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0 pb-24 col-2'>
            <ul className='flex space-x-32'>
                <li className="group">
                <Link href='/sales/women'>
                    <span className='text-white text-4xl font-semibold relative bg-right-bottom bg-gradient-to-l from-white bg-[length:120%3px] bg-no-repeat group-hover:bg-[length:0%3px] transition-all duration-500 ease-out'>WOMEN</span>
                </Link>
                </li>
                <li className="group">
                <Link href='/sales/men'>
                    <span className='text-white text-4xl font-semibold relative bg-right-bottom bg-gradient-to-l from-white bg-[length:120%3px] bg-no-repeat group-hover:bg-[length:0%3px] transition-all duration-500 ease-out'>MEN</span>
                </Link>
                </li>
            </ul>
        </div>
    </div>
    <div className='relative h-[80vh]'>
        <div className='absolute inset-0 flex items-center justify-between'>
        <div className=' z-[1] absolute w-full h-full bg-gray-900 bg-opacity-30'></div>
            <div className='w-1/2 h-full' >
                <Image className='w-[100%] h-full' priority={true} src={volkanMen} alt={''} style={{objectFit:"cover"}} unoptimized loading="eager"/>
            </div>
            <div className='w-1/2 h-full bg-black'>
                <Image className='w-[100%] h-full' priority={true} src={volkanFemale} alt={''} style={{objectFit:"cover"}} unoptimized loading="eager"/>
            </div>
        </div>
        <div className='z-[2] w-[100%] absolute  text-center item-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Reveal>
                <p className='text-white'>0 PLASTIC - ULTRA COMFORTABLE</p>
            </Reveal>
            <Reveal>
                <p className='uppercase text-white font-bold text-5xl'>VOLKAN KNIT</p>
            </Reveal>
        </div>
        <div className='z-[2] w-[100%] absolute flex text-center items-center justify-center bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0 pb-24 col-2'>
            <ul className='flex space-x-32'>
                <li className="group">
                <Link href='/sales/women'>
                    <span className='text-white text-4xl font-semibold relative bg-right-bottom bg-gradient-to-l from-white bg-[length:120%3px] bg-no-repeat group-hover:bg-[length:0%3px] transition-all duration-500 ease-out'>WOMEN</span>
                </Link>
                </li>
                <li className="group">
                <Link href='/sales/men'>
                    <span className='text-white text-4xl font-semibold relative bg-right-bottom bg-gradient-to-l from-white bg-[length:120%3px] bg-no-repeat group-hover:bg-[length:0%3px] transition-all duration-500 ease-out'>MEN</span>
                </Link>
                </li>
            </ul>
        </div>
    </div>
    <div className='relative h-[80vh]'>
        <div className='absolute inset-0 flex items-center justify-between'>
        <div className=' z-[1] absolute w-full h-full bg-gray-900 bg-opacity-30'></div>
            <div className='w-full h-full' >
                <Image className='w-[100%] h-full' priority={true} src={discover} alt={''} style={{objectFit:"cover"}} unoptimized loading="eager"/>
            </div>
        </div>
        <div className='z-[2] w-[100%] absolute  text-center item-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Reveal>
                <p className='uppercase text-white font-bold text-5xl'>UBAC VISION</p>
            </Reveal>
        </div>
        <div className='z-[2] w-[100%] absolute flex text-center items-center justify-center bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0 pb-24 col-2'>
            <ul className='flex space-x-32'>
                    <li className="group">
                      <Link href='/sales/men'>
                        <span className='text-white text-4xl font-semibold relative bg-right-bottom bg-gradient-to-l from-white bg-[length:120%3px] bg-no-repeat group-hover:bg-[length:0%3px] transition-all duration-500 ease-out'>
                            DISCOVER
                        </span>
                      </Link>
                    </li>
                  </ul>
            </div>
    </div>
    </main>
    
  )
}

export default CategoryBanner