import { base64 } from '@/app/firebaseConfig';
import Image from 'next/image';
import React from 'react';

interface Description {
    title: string;
    description: string;
}

interface Item {
    image: string;
    header: string;
    details: Description[];
}

interface ProductFooterProps {
    items: { footer: Item[] };
}

const ProductFooter = ({ items }: any) => {
  return (
    <div className='justify-center items-center mb-16'>
        <div className='w-full'>
            {items.footer.map((item: any, index: any) => (
                <div key={index} className='w-[1150px] mx-auto px-[80px] py-0 text-[#212322]'>
                    <div className={`justify-between flex mt-16 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                        <div className='w-[440px] h-[640px]'>
                            <Image
                                src={item.image}
                                alt='regard'
                                width={440}
                                height={640}
                                unoptimized
                                priority
                                blurDataURL={base64}
                                className='w-full h-full'/>
                        </div>
                        <div className='w-[400px]'>
                            <h1 className='text-[#212322] font-bold text-[48px] uppercase'>{item.header}</h1>
                            {item.details.map((desc: any, descIndex: any) => (
                                <div key={descIndex} className='mb-8'>
                                    <p className='text-[24px] font-semibold mb-2'>{desc.title}</p>
                                    <p className='text-[16px] font-semibold leading-6 text-[#898989]'>{desc.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductFooter;
