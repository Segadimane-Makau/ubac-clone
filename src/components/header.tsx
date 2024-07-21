'use client';

import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import useScroll from '@/hooks/use-scroll';
import { cn } from '@/utils/utils'
import { AiOutlineShopping} from 'react-icons/ai';
import { MdOutlineCancel} from 'react-icons/md';
import { MdOutlinePerson} from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import vola from '@/assets/menVola.avif';
import monochrome from '@/assets/menMonochrome.avif';
import Image from 'next/image';

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();
  const [showPopUp, setShowPopUp] = useState(true);
  const [dropdown, setDropdown] = useState('');

    const handleMouseEnter = (menu: any) => {
        setDropdown(menu);
    };

    const handleMouseLeave = () => {
        setDropdown('');
    };

  return (
    <main>
          <div
            className={cn(
              `sticky inset-x-0 top-[0] z-30 w-full transition-all duration-600 ease-in-out fixed ${(dropdown == 'woman' || dropdown == 'man' || dropdown == 'sales') ? 'bg-[#F7F6F3] text-black':''}`,
              {
                'bg-[#f2f2f2] transition-all duration-1000 ease-in-out': scrolled,
                ' text-black transition-all duration-1000 ease-in-out ': selectedLayout,
              },
            )}
          >
            {(showPopUp && !scrolled) && (
                <div className={cn(
                  ` text-white bg-[#212322] bg-opacity-90 w-full transition-all pt-[8px] pb-[8px] duration-600 ease-in-out fixed`,
                  {
                    'display-none': scrolled,
                    'display-none ': selectedLayout,
                  },
                )}>
                  <div className='flex justify-between items-center text-center'>
                    <p></p>
                    <p className='font-semibold text-[12px]'>FREE DELIVERY FROM R120 AND FREE RETURNS WITHIN 60 DAYS</p>
                    <button className='mr-[12px]' onClick={() => setShowPopUp(false)}><MdOutlineCancel/></button>
                  </div>
                </div>
            )}
            <div className={` mt-${showPopUp && !scrolled ? '8' : '0'} flex h-[100px] items-center justify-between px-8 transition-all duration-600 ease-in-out`}>
              <div className="flex items-center space-x-4">
                <Link
                  href="/"
                  className="flex flex-row space-x-3 items-center justify-center"
                >
                  <h2 className={cn(
                `letter-spacing-4 text-[22px] ${(dropdown == 'woman' || dropdown == 'man' || dropdown == 'sales') ? 'text-black':'text-[#D4D4D8]'} font-black transition-all duration-600 ease-in-out`,
                {
                  'letter-spacing-4 text-[#000000] text-[22px] font-black transition-all duration-1000 ease-in-out ': scrolled,
                  'letter-spacing-4 text-[#000000] text-[22px] font-black transition-all duration-1000 ease-in-out': selectedLayout,
                },
              )}>U B A C</h2>
                </Link>
              </div>

              <div className={cn(
                `flex-grow flex justify-center hidden md:flex ${(dropdown == 'woman' || dropdown == 'man' || dropdown == 'sales') ? 'text-black':'text-[#FFFFFF]'} text-[12px] font-bold transition-all duration-600 ease-in-out`,
                {
                  'text-[#000000] font-bold transition-all duration-1000 ease-in-out ': scrolled,
                  'text-[#000000] font-bold transition-all duration-1000 ease-in-out': selectedLayout,
                },
              )}>
                  <ul className='flex space-x-8'>
                    <li className="group" onMouseEnter={() => handleMouseEnter('woman')}>
                      <Link href='/sales/woman'>
                        <span className={`relative bg-right-bottom bg-gradient-to-l ${(dropdown == 'woman' || dropdown == 'man' || dropdown == 'sales') ? 'from-[#000000]':'from-[#F7F6F3]'} bg-[length:0%3px] bg-no-repeat group-hover:bg-[length:120%3px] transition-all duration-500 ease-out`}>WOMAN</span>
                      </Link>
                      {dropdown === 'woman' && (
                            <div className="absolute px-6 py-4 left-0 top-full w-full h-[500px] bg-[#F7F6F3] border-t border-gray-200">
                                <div className="flex flex-col md:flex-row h-full" onMouseEnter={() => handleMouseEnter('woman')} onMouseLeave={handleMouseLeave}>
                                    {/* First Column: Image */}
                                    <div className="w-full md:w-[400px] p-4">
                                        {/* <Image src={vola} alt='vola' priority unoptimized loading='eager' width={100} height={100} className='w-full h-full'/> */}
                                        <Image src={monochrome} alt='vola' priority unoptimized loading='eager' width={100} height={100} className='w-full h-full'/>
                                        {/* <Image src={vola} alt='vola' priority unoptimized loading='eager' width={100} height={100} className='w-full h-full'/>
                                        <Image src={vola} alt='vola' priority unoptimized loading='eager' width={100} height={100} className='w-full h-full'/> */}
                                        {/* etc */}
                                    </div>
                            
                                    <div className="w-full md:w-[450px] p-4">
                                        <h3 className="text-[16px] font-semibold mb-8 text-black">Sneakers</h3>
                                        <ul>
                                            <li className="mb-2"><a href="#" className="text-gray-600 font-semibold text-[16px]"><span className='relative bg-right-bottom bg-gradient-to-l from-[#000000] bg-[length:0%3px] bg-no-repeat hover:bg-[length:120%3px] transition-all duration-500 ease-out'>VOLA - <span className='text-gray-500 font-normal'>Recycled wool</span></span></a></li>
                                            <li className="mb-2"><a href="#" className="text-gray-600 font-semibold text-[16px]"><span className='relative bg-right-bottom bg-gradient-to-l from-[#000000] bg-[length:0%3px] bg-no-repeat hover:bg-[length:120%3px] transition-all duration-500 ease-out'>AXOLO R-SKIN MONOCHROME - <span className='text-gray-500 font-normal'>Recycled ruber</span></span></a></li>
                                            <li className="mb-2"><a href="#" className="text-gray-600 font-semibold text-[16px]"><span className='relative bg-right-bottom bg-gradient-to-l from-[#000000] bg-[length:0%3px] bg-no-repeat hover:bg-[length:120%3px] transition-all duration-500 ease-out'>AXOLO LINEN - <span className='text-gray-500 font-normal'>Linen</span></span></a></li>
                                            <li className="mb-2"><a href="#" className="text-gray-600 font-semibold text-[16px]"><span className='relative bg-right-bottom bg-gradient-to-l from-[#000000] bg-[length:0%3px] bg-no-repeat hover:bg-[length:120%3px] transition-all duration-500 ease-out'>KOTO - <span className='text-gray-500 font-normal'>Recycled cotton</span></span></a></li>
                                            <li className="mb-2"><a href="#" className="text-gray-600 font-semibold text-[16px]"><span className='relative bg-right-bottom bg-gradient-to-l from-[#000000] bg-[length:0%3px] bg-no-repeat hover:bg-[length:120%3px] transition-all duration-500 ease-out'>VOLKAN KNIT - <span className='text-gray-500 font-normal'>Recycled wool and tencel</span></span></a></li>
                                            <li className="mb-2"><a href="#" className="text-gray-600 font-semibold text-[16px]"><span className='relative bg-right-bottom bg-gradient-to-l from-[#000000] bg-[length:0%3px] bg-no-repeat hover:bg-[length:120%3px] transition-all duration-500 ease-out'>AXOLO MESCLAT - <span className='text-gray-500 font-normal'>Hemp - Wool</span></span></a></li>
                                            <li className="mb-2"><a href="#" className="text-gray-600 font-semibold text-[16px]"><span className='relative bg-right-bottom bg-gradient-to-l from-[#000000] bg-[length:0%3px] bg-no-repeat hover:bg-[length:120%3px] transition-all duration-500 ease-out'>VOLKAN MESCLAT - <span className='text-gray-500 font-normal'>Hemp - Wool</span></span></a></li>
                                            <li className="mb-2"><a href="#" className="text-gray-600 font-semibold text-[16px]"><span className='relative bg-right-bottom bg-gradient-to-l from-[#000000] bg-[length:0%3px] bg-no-repeat hover:bg-[length:120%3px] transition-all duration-500 ease-out'>VOLKAN WOOL - <span className='text-gray-500 font-normal'>Recycled wool</span></span></a></li>
                                        </ul>
                                    </div>
                            
                                    <div className="w-full md:w-[300px] p-4">
                                        <h3 className="text-[16px] text-black font-semibold mb-8">Accessories</h3>
                                        <ul className="">
                                            <li className="mb-2"><a href="#" className="text-gray-500 font-normal text-[16px]"><span className='relative bg-right-bottom bg-gradient-to-l from-[#000000] bg-[length:0%3px] bg-no-repeat hover:bg-[length:120%3px] transition-all duration-500 ease-out'>Wool sock</span></a></li>
                                            <li className="mb-2"><a href="#" className="text-gray-500 font-normal text-[16px]"><span className='relative bg-right-bottom bg-gradient-to-l from-[#000000] bg-[length:0%3px] bg-no-repeat hover:bg-[length:120%3px] transition-all duration-500 ease-out'>Classical beanie</span></a></li>
                                            <li className="mb-2"><a href="#" className="text-gray-500 font-normal text-[16px]"><span className='relative bg-right-bottom bg-gradient-to-l from-[#000000] bg-[length:0%3px] bg-no-repeat hover:bg-[length:120%3px] transition-all duration-500 ease-out'>Embroidered beanie</span></a></li>
                                            <li className="mb-2"><a href="#" className="text-gray-500 font-normal text-[16px]"><span className='relative bg-right-bottom bg-gradient-to-l from-[#000000] bg-[length:0%3px] bg-no-repeat hover:bg-[length:120%3px] transition-all duration-500 ease-out'>Scarf</span></a></li>
                                            <li className="mb-2"><a href="#" className="text-gray-500 font-normal text-[16px]"><span className='relative bg-right-bottom bg-gradient-to-l from-[#000000] bg-[length:0%3px] bg-no-repeat hover:bg-[length:120%3px] transition-all duration-500 ease-out'>Socks set</span></a></li>
                                            <li className="mb-2"><a href="#" className="text-gray-500 font-normal text-[16px]"><span className='relative bg-right-bottom bg-gradient-to-l from-[#000000] bg-[length:0%3px] bg-no-repeat hover:bg-[length:120%3px] transition-all duration-500 ease-out'>Hat and scarf set</span></a></li>
                                            <li className="mb-2"><a href="#" className="text-gray-500 font-normal text-[16px]"><span className='relative bg-right-bottom bg-gradient-to-l from-[#000000] bg-[length:0%3px] bg-no-repeat hover:bg-[length:120%3px] transition-all duration-500 ease-out'>Cotton socks</span></a></li>
                                            <li className="mb-2"><a href="#" className="text-gray-500 font-normal text-[16px]"><span className='relative bg-right-bottom bg-gradient-to-l from-[#000000] bg-[length:0%3px] bg-no-repeat hover:bg-[length:120%3px] transition-all duration-500 ease-out'>Wool cap</span></a></li>
                                            <li className="mb-2"><a href="#" className="text-gray-500 font-normal text-[16px]"><span className='relative bg-right-bottom bg-gradient-to-l from-[#000000] bg-[length:0%3px] bg-no-repeat hover:bg-[length:120%3px] transition-all duration-500 ease-out'>Cotton cap</span></a></li>
                                            <li className="mb-2"><a href="#" className="text-gray-500 font-normal text-[16px]"><span className='relative bg-right-bottom bg-gradient-to-l from-[#000000] bg-[length:0%3px] bg-no-repeat hover:bg-[length:120%3px] transition-all duration-500 ease-out'>Laces</span></a></li>

                                        </ul>
                                    </div>
                            
                                    <div className="flex-1"></div>
                                </div>
                            </div>
                        
                        )}
                    </li>
                    <li className="group" onMouseEnter={() => handleMouseEnter('man')}>
                      <Link href='/sales/man'>
                        <span className={`relative bg-right-bottom bg-gradient-to-l ${(dropdown == 'woman' || dropdown == 'man' || dropdown == 'sales') ? 'from-[#000000]':'from-[#F7F6F3]'} bg-[length:0%3px] bg-no-repeat group-hover:bg-[length:120%3px] transition-all duration-500 ease-out`}>MAN</span>
                      </Link>
                      {dropdown === 'man' && (
                            <div className="absolute left-0 top-full w-full h-[500px] bg-[#F7F6F3]" onMouseEnter={() => handleMouseEnter('man')} onMouseLeave={handleMouseLeave}>
                                {/* Dropdown content for Men */}
                            </div>
                        )}
                    </li>
                    <li className="group" onMouseEnter={() => handleMouseEnter('sales')}>
                      <Link href='/sales/all'>
                        <span className={`relative bg-right-bottom bg-gradient-to-l ${(dropdown == 'woman' || dropdown == 'man' || dropdown == 'sales') ? 'from-[#000000]':'from-[#F7F6F3]'} bg-[length:0%3px] bg-no-repeat group-hover:bg-[length:120%3px] transition-all duration-500 ease-out`}>SALES</span>
                      </Link>
                      {dropdown === 'sales' && (
                            <div className="absolute left-0 top-full w-full h-[500px] bg-[#F7F6F3]" onMouseEnter={() => handleMouseEnter('man')} onMouseLeave={handleMouseLeave}>
                                {/* Dropdown content for Men */}
                            </div>
                        )}
                    </li>
                    <li className='group'>
                      <Link href='/account/login'>
                          <MdOutlinePerson className='h-[22px] w-[22px]'/>
                      </Link>
                    </li>
                    <button className='mt-[-3px]'>
                      <AiOutlineShopping className='h-[22px] w-[22px]'/>
                      <span className='absolute mt-[-28px] ml-[8px] text-[]'>0</span>
                    </button>
                  </ul>


              </div>

              <div className="hidden md:block">
                <div className="h-8 w-8 rounded-full flex items-center justify-center text-center">
                  <Link href='/search'>
                    <FaSearch/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
    </main>
  );
};

export default Header;