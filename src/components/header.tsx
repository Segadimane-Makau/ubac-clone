"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import useScroll from '@/hooks/use-scroll';
import { cn } from '@/utils/utils';
import { AiOutlineShopping } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import { MdOutlinePerson } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';

import WomenDropdown from './womenDropdown';
import MenDropdown from './menDropdown';
import { useAppContext } from '@/context';
import CartDrawer from './cartDrawer';
import { motion } from 'framer-motion';

const Header = ({ color }: any) => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();
  const { IsCartOpen, setIsCartOpen, qty, showPopUp, setShowPopUp } = useAppContext();
  const [dropdown, setDropdown] = useState('');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleDrawer = () => {
    setIsCartOpen(!IsCartOpen);
  };

  useEffect(() => {
    const handleEscKeyPress = (e: any) => {
      if (e.keyCode === 27 && IsCartOpen) {
        setIsCartOpen(false);
      }
    };

    if (IsCartOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [IsCartOpen, setIsCartOpen]);

  const handleMouseEnter = (menu: any) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown('');
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <main>
      <div
        className={cn(
          `sticky inset-x-0 top-[0] z-30 w-full transition-all duration-600 ease-in-out fixed ${visible ? 'translate-y-0' : '-translate-y-full'} ${(dropdown == 'woman' || dropdown == 'man' || dropdown == 'sales') ? 'bg-[#F7F6F3] text-black' : ''}`,
          {
            'bg-[#FFFFFF] transition-all duration-1000 ease-in-out': scrolled,
            'text-black transition-all duration-1000 ease-in-out': selectedLayout,
          }
        )}
      >
        {(showPopUp && !scrolled) && (
          <div className={cn(
            `text-white bg-[#212322] bg-opacity-90 w-full transition-all pt-[8px] pb-[8px] duration-600 ease-in-out fixed`,
            {
              'display-none': scrolled,
              'display-none ': selectedLayout,
            }
          )}>
            <div className='flex justify-between items-center text-center'>
              <p></p>
              <p className='font-semibold text-[10px] sm:text-[12px]'>FREE DELIVERY FROM R120 AND FREE RETURNS WITHIN 60 DAYS</p>
              <button className='mr-[12px]' onClick={() => setShowPopUp(false)}><MdOutlineCancel /></button>
            </div>
          </div>
        )}
        <div className={`${showPopUp && !scrolled ? 'mt-8' : 'mt-0'} flex h-[82px] items-center justify-between px-12 transition-all duration-600 ease-in-out`}>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="flex flex-row space-x-3 items-center justify-center"
            >
              <h2 className={cn(
                `letter-spacing-4 text-[28px] sm:text-[28px] ${(dropdown == 'woman' || dropdown == 'man' || dropdown == 'sales' || color == 'black') ? 'text-black' : 'text-[#D4D4D8]'} font-black transition-all duration-600 ease-in-out`,
                {
                  'letter-spacing-4 text-[#000000] text-[28px] sm:text-[28px] font-black transition-all duration-1000 ease-in-out': scrolled,
                  'letter-spacing-4 text-[#000000] text-[28px] sm:text-[28px] font-black transition-all duration-1000 ease-in-out ': selectedLayout,
                }
              )}>U B A C</h2>
            </Link>
          </div>

          <div className={cn(
            `flex-grow flex justify-center hidden md:flex ${(dropdown == 'woman' || dropdown == 'man' || dropdown == 'sales' || color == 'black') ? 'text-black' : 'text-[#FFFFFF]'} text-[12px] font-bold transition-all duration-600 ease-in-out`,
            {
              'text-[#000000] font-bold transition-all duration-1000 ease-in-out': scrolled,
              'text-[#000000] font-bold transition-all duration-1000 ease-in-out ': selectedLayout,
            }
          )}>
            <ul className='flex space-x-8'>
              <li className="group" onMouseEnter={() => handleMouseEnter('woman')}>
                <Link href='/collection/femme'>
                  <span className={`relative bg-right-bottom bg-gradient-to-l ${(dropdown == 'woman' || dropdown == 'man' || dropdown == 'sales') ? 'from-[#000000]' : 'from-[#F7F6F3]'} bg-[length:0%3px] bg-no-repeat group-hover:bg-[length:120%3px] transition-all duration-500 ease-out`}>WOMAN</span>
                </Link>
                <WomenDropdown dropdown={dropdown} setDropdown={setDropdown} />
              </li>
              <li className="group" onMouseEnter={() => handleMouseEnter('man')}>
                <Link href='/collection/homme'>
                  <span className={`relative bg-right-bottom bg-gradient-to-l ${(dropdown == 'woman' || dropdown == 'man' || dropdown == 'sales') ? 'from-[#000000]' : 'from-[#F7F6F3]'} bg-[length:0%3px] bg-no-repeat group-hover:bg-[length:120%3px] transition-all duration-500 ease-out`}>MAN</span>
                </Link>
                <MenDropdown dropdown={dropdown} setDropdown={setDropdown} />
              </li>
              <li className="group" onMouseEnter={() => handleMouseEnter('sales')}>
                <Link href='/sales/all'>
                  <span className={`relative bg-right-bottom bg-gradient-to-l ${(dropdown == 'woman' || dropdown == 'man' || dropdown == 'sales') ? 'from-[#000000]' : 'from-[#F7F6F3]'} bg-[length:0%3px] bg-no-repeat group-hover:bg-[length:120%3px] transition-all duration-500 ease-out`}>SALES</span>
                </Link>
                {dropdown === 'sales' && (
                  <div className="absolute left-0 top-full w-full h-[500px] bg-[#F7F6F3]" onMouseEnter={() => handleMouseEnter('man')} onMouseLeave={handleMouseLeave}>
                    {/* Dropdown content for Men */}
                  </div>
                )}
              </li>
              <li className='group'>
                <Link href='/account/login'>
                  <MdOutlinePerson className='h-[22px] w-[22px]' />
                </Link>
              </li>
              <button className='mt-[-3px]'>
                <AiOutlineShopping className='h-[22px] w-[22px]' onClick={handleDrawer} />
                <span className='absolute mt-[-28px] ml-[8px] text-[]'>{qty}</span>
              </button>
            </ul>
          </div>

          <div className="hidden md:block">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center text-center ${scrolled ? 'bg-white border border-gray-800 text-gray-800' : 'bg-transparent'}`}>
              <Link href='/search'>
                <FaSearch />
              </Link>
            </div>
          </div>
        </div>
      </div>
        {IsCartOpen && (
          <div className="z-[9999999999] fixed inset-0 transition-opacity">
            <div
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-black opacity-50"
            ></div>
          </div>
        )}

        <aside
          className={`transform top-0 right-0 md:w-[740px] w-full bg-[#f2f2f2] fixed h-full overflow-auto ease-in-out transition-all duration-700 z-[9999999999991] ${
            !IsCartOpen ? "translate-x-full" : "-translate-x-[0]"
          }`}
        >
          <div onClick={handleDrawer} className='mt-6 absolute right-[32px] cursor-pointer z-[9999999999992]'>
            <motion.div
              className="cross-button"
              initial={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 0.8, rotate: 180 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="line line1" />
              <div className="line line2" />
            </motion.div>
          </div>
          <CartDrawer />
        </aside>
    </main>
  );
};

export default Header;
