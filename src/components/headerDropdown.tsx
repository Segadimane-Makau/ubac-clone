import React from 'react';
import Image from 'next/image';

interface DropdownMenuProps {
  menu: string;
  images: string[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ menu, images, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="absolute px-6 py-4 left-0 top-full w-full h-[500px] bg-[#F7F6F3] border-t border-gray-200"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-[400px] p-4">
          {images.map((image, index) => (
            <Image key={index} src={image} alt={menu} priority unoptimized loading='eager' width={100} height={100} className='w-full h-full' />
          ))}
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
            <li className="mb-2"><a href="#" className="text-gray-500 font-normal text-[16px] hover:underline">Wool sock</a></li>
            <li className="mb-2"><a href="#" className="text-gray-500 font-normal text-[16px] hover:underline">Classical beanie</a></li>
            <li className="mb-2"><a href="#" className="text-gray-500 font-normal text-[16px] hover:underline">Embroidered beanie</a></li>
            <li className="mb-2"><a href="#" className="text-gray-500 font-normal text-[16px] hover:underline">Scarf</a></li>
            <li className="mb-2"><a href="#" className="text-gray-500 font-normal text-[16px] hover:underline">Socks set</a></li>
            <li className="mb-2"><a href="#" className="text-gray-500 font-normal text-[16px] hover:underline">Hat and scarf set</a></li>
            <li className="mb-2"><a href="#" className="text-gray-500 font-normal text-[16px] hover:underline">Cotton socks</a></li>
            <li className="mb-2"><a href="#" className="text-gray-500 font-normal text-[16px] hover:underline">Wool cap</a></li>
            <li className="mb-2"><a href="#" className="text-gray-500 font-normal text-[16px] hover:underline">Cotton cap</a></li>
            <li className="mb-2"><a href="#" className="text-gray-500 font-normal text-[16px] hover:underline">Laces</a></li>
          </ul>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default DropdownMenu;
