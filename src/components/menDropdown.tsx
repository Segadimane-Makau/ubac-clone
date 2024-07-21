import { useState, useEffect } from 'react';
import Image from 'next/image';
import { db } from '@/app/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

const MenDropdown = ({ dropdown, setDropdown }: any) => {
  const [hoveredLink, setHoveredLink] = useState('VOLA - Recycled wool');
  const [images, setImages] = useState<any>({});

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const q = query(collection(db, 'NavbarDropdown'), where('id', '==', 'woman and man'));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            setImages(doc.data().images);
          });
        } else {
          console.log('No document with id: woman found!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchImages();
  }, []);

  const handleMouseEnter = (link: any) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setDropdown('');
  };

  const sneakersLinks = [
    'VOLA - Recycled wool',
    'AXOLO R-SKIN MONOCHROME - Recycled rubber',
    'AXOLO LINEN - Linen',
    'KOTO - Recycled cotton',
    'VOLKAN KNIT - Recycled wool and tencel',
    'AXOLO MESCLAT - Hemp - Wool',
    'VOLKAN MESCLAT - Hemp - Wool',
    'VOLKAN WOOL - Recycled wool'
  ];

  const accessoriesLinks = [
    'Wool sock',
    'Classical beanie',
    'Embroidered beanie',
    'Scarf',
    'Socks set',
    'Hat and scarf set',
    'Cotton socks',
    'Wool cap',
    'Cotton cap',
    'Laces'
  ];

  return (
    (dropdown === 'man') && (
      <div className="absolute px-6 py-4 left-0 top-full w-full h-[500px] bg-[#F7F6F3] border-t border-gray-200" onMouseLeave={handleMouseLeave}>
        <div className="flex flex-col md:flex-row h-full">
          {/* First Column: Image */}
          <div className="w-full md:w-[400px] p-4">
            {hoveredLink && images[hoveredLink] && (
              <Image
                src={images[hoveredLink]}
                alt={hoveredLink}
                priority
                unoptimized
                loading='eager'
                width={100}
                height={100}
                className='w-full h-full'
              />
            )}
          </div>

          <div className="w-full md:w-[450px] p-4">
            <h3 className="text-[16px] font-semibold mb-8 text-black">Sneakers</h3>
            <ul>
              {sneakersLinks.map((link) => (
                <li key={link} className="mb-2">
                  <a
                    href="#"
                    className="text-gray-600 font-semibold text-[16px]"
                    onMouseEnter={() => handleMouseEnter(link)}
                  >
                    <span className='relative bg-right-bottom bg-gradient-to-l from-[#000000] bg-[length:0%3px] bg-no-repeat hover:bg-[length:120%3px] transition-all duration-500 ease-out'>
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[300px] p-4">
            <h3 className="text-[16px] text-black font-semibold mb-8">Accessories</h3>
            <ul>
              {accessoriesLinks.map((link) => (
                <li key={link} className="mb-2">
                  <a
                    href="#"
                    className="text-gray-500 font-normal text-[16px]"
                    onMouseEnter={() => handleMouseEnter(link)}
                  >
                    <span className='relative bg-right-bottom bg-gradient-to-l from-[#000000] bg-[length:0%3px] bg-no-repeat hover:bg-[length:120%3px] transition-all duration-500 ease-out'>
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1"></div>
        </div>
      </div>
    )
  );
};

export default MenDropdown;