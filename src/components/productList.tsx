import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PageTransition from './pageTransition';
import base64Image from '@/assets/base64.jpeg';

const ProductList = ({salesData}:any) => {
    const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (salesData.length > 0 || salesData.length > 0) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }}, [salesData.length]);

    if (loading) {
        return <PageTransition/>;
      }
    
  return (
    <main className='w-full h-full mt-[107px] relative'>
        <div className='w-full sm:p-16 sm:pt-8 pl-4 pr-4 pt-32'>
            <h1 className='text-center text-[#212322] font-bold text-[64px] mb-16'>Sneakers</h1>
            <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                {salesData.map((sale:any, idx:any) => (
                    sale.saleImages.map((imageGroup:any, index:any) => (
                        <React.Fragment key={imageGroup.imagesUrls[1]}>
                            {(index === 0) && (
                                <>
                                <div className='hidden sm:block sm:col-span-2 text-black min-w-[100px] overflow-hidden'>
                                    <Link href={`/detail/${encodeURIComponent(sale.product_id)}-${encodeURIComponent(imageGroup.color.color)}`}>
                                        <div className='overflow-hidden'>
                                            <Image 
                                            src={imageGroup.imagesUrls[2]} 
                                            alt="" 
                                            unoptimized 
                                            priority 
                                            placeholder='blur' 
                                            blurDataURL={base64Image.blurDataURL}
                                            loading="eager" 
                                            width={100} 
                                            height={100} 
                                            className='w-full md:max-h-[520px] object-cover hover:scale-105 transform transition-transform ease-in-out duration-300 cursor-pointer'/>
                                        </div>
                                    </Link>
                                </div>
                                </>
                            )}
                            <>
                            <Link href={`/detail/${encodeURIComponent(sale.product_id)}-${encodeURIComponent(imageGroup.color.color)}`}>
                                <div className='sm:col-span-1 col-span-2 text-[#212322] min-w-[100px] overflow-hidden'>
                                    <div className='overflow-hidden'>
                                        <Image 
                                        src={imageGroup.imagesUrls[1]} 
                                        alt="" 
                                        unoptimized 
                                        priority 
                                        placeholder='blur' 
                                        blurDataURL={base64Image.blurDataURL}
                                        loading="eager" 
                                        width={100} 
                                        height={100} 
                                        className='w-full md:max-h-[400px] object-cover hover:scale-105 transform transition-transform ease-in-out duration-300 cursor-pointer'/>
                                    </div>
                                    <div className='pb-8 border-b'>
                                        <div className='font-bold'>
                                            <p className='uppercase text-[16px] mt-[16px]'>{sale.name}</p>
                                        </div>
                                        <p className='text-gray-400 text-base text-[14px]'>{sale.material}</p>
                                        <p className='font-bold text-[16px] mt-0'>{sale.price}€</p>
                                    </div>
                                </div>
                            </Link>
                            </>
                        </React.Fragment>
                    ))
                ))}
            </div>
        </div>
    </main>
  )
}

export default ProductList