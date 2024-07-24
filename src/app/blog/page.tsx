'use client'

import Blog from '@/components/blog'
import React from 'react'
import regard from '@/assets/regard.avif'
import Image from 'next/image'
import Header from '@/components/header'
import HeaderMobile from '@/components/header-mobile'
import regardOne from '@/assets/regardOne.avif'
import regardTwo from '@/assets/regardTwo.avif'
import regardFour from '@/assets/regardFour.avif'
import regardThree from '@/assets/regardThree.avif'
import Footer from '@/components/footer'

const BlogDetails = () => {
  return (
    <div className='justify-center items-center w-full bg-[#FFFFFF]'>
        <Header/>
        <HeaderMobile/>
        <div className='bg-[#F7F6F3] w-[1280px] h-screen mx-auto relative py-[220px]'>
            <h1 className='text-center text-[#212322] text-[54px] font-bold'>REGARD</h1>
            <Image
            src={regard}
            alt='regard'
            className='absolute bottom-0'/>
        </div>
        <div className='w-full bg-white mt-4 leading-none'>
            <div className='w-[1280px] h-screen mx-auto bg-white relative p-[80px] text-[#212322]'>
                <p className='text-[12px]'>19 May 2024</p>
                <p className='text-[48px] font-semibold leading-none'>Which trainers should you choose for spring and summer?</p>
                <p className='text-[24px] font-bold leading-none mt-8'>Spring is here and summer is on its way. To make sure you're comfortable this summer, here's a selection of eco-responsible trainers, made from natural materials, that will allow you to breathe while feeling comfortable in your trainers!</p>
                <div className='justify-between flex mt-16'>
                    <div className='w-[520px] h-[520px]'>
                        <Image
                            src={regardOne}
                            alt='regard'
                            className='w-full h-full'/>
                    </div>
                    <div className='w-[520px] h-[520px]'>
                        <p className='text-[36px] font-semibold mb-8'>KOTO - COTON RECYCLÉ</p>
                        <p className='text-[16px] font-semibold leading-6 text-[#898989]'>Recycled cotton avoids the ecological impact of conventional cotton, which is grown on the other side of the planet, using a lot of water and pesticides. <br /><br />

Cotton trainers are the ideal choice for spring and summer because of their naturally breathable properties. Cotton, a natural fibre, allows air to circulate freely around your feet, keeping you feeling cool even on the hottest days. This breathability helps to regulate the temperature inside the shoe, preventing the build-up of heat and moisture that can lead to discomfort. <br /><br />

What's more, natural materials like cotton are well known for their ability to minimise unpleasant odours. Unlike synthetic materials, cotton absorbs moisture without retaining odours, keeping your feet dry and free from the bacteria responsible for unpleasant smells. By choosing cotton trainers, you're not only ensuring optimum comfort, but also lasting freshness all day long. In short, cotton trainers are the perfect companion for the warmer seasons, combining lightness, comfort and hygiene.</p> 
                    </div>
                </div>
                <div className='justify-between space-x-6 bg-white flex w-full my-16'>
                    <Image
                    src={regardTwo}
                    alt='regard'
                    className='w-full h-[280px]'/>
                    <Image
                    src={regardThree}
                    alt='regard'
                    className='w-full h-[280px]'/>
                    <Image
                    src={regardFour}
                    alt='regard'
                    className='w-full h-[280px]'/>
                </div>

                <div className='justify-between flex mt-16'>
                    <div className='w-[520px] h-[520px]'>
                        <p className='text-[36px] font-semibold mb-8'>KOTO - COTON RECYCLÉ</p>
                        <p className='text-[16px] font-semibold leading-6 text-[#898989]'>Recycled cotton avoids the ecological impact of conventional cotton, which is grown on the other side of the planet, using a lot of water and pesticides. <br /><br />

Cotton trainers are the ideal choice for spring and summer because of their naturally breathable properties. Cotton, a natural fibre, allows air to circulate freely around your feet, keeping you feeling cool even on the hottest days. This breathability helps to regulate the temperature inside the shoe, preventing the build-up of heat and moisture that can lead to discomfort. <br /><br />

What's more, natural materials like cotton are well known for their ability to minimise unpleasant odours. Unlike synthetic materials, cotton absorbs moisture without retaining odours, keeping your feet dry and free from the bacteria responsible for unpleasant smells. By choosing cotton trainers, you're not only ensuring optimum comfort, but also lasting freshness all day long. In short, cotton trainers are the perfect companion for the warmer seasons, combining lightness, comfort and hygiene.</p> 
                    </div>
                    <div className='w-[520px] h-[520px]'>
                        <Image
                            src={regardOne}
                            alt='regard'
                            className='w-full h-full'/>
                    </div>
                </div>
                <div className='justify-between space-x-6 bg-white flex w-full my-16'>
                    <Image
                    src={regardTwo}
                    alt='regard'
                    className='w-full h-[280px]'/>
                    <Image
                    src={regardThree}
                    alt='regard'
                    className='w-full h-[280px]'/>
                    <Image
                    src={regardFour}
                    alt='regard'
                    className='w-full h-[280px]'/>
                </div>

                <div className='justify-between flex mt-16'>
                    <div className='w-[520px] h-[520px]'>
                        <Image
                            src={regardOne}
                            alt='regard'
                            className='w-full h-full'/>
                    </div>
                    <div className='w-[520px] h-[520px]'>
                        <p className='text-[36px] font-semibold mb-8'>KOTO - COTON RECYCLÉ</p>
                        <p className='text-[16px] font-semibold leading-6 text-[#898989]'>Recycled cotton avoids the ecological impact of conventional cotton, which is grown on the other side of the planet, using a lot of water and pesticides. <br /><br />

Cotton trainers are the ideal choice for spring and summer because of their naturally breathable properties. Cotton, a natural fibre, allows air to circulate freely around your feet, keeping you feeling cool even on the hottest days. This breathability helps to regulate the temperature inside the shoe, preventing the build-up of heat and moisture that can lead to discomfort. <br /><br />

What's more, natural materials like cotton are well known for their ability to minimise unpleasant odours. Unlike synthetic materials, cotton absorbs moisture without retaining odours, keeping your feet dry and free from the bacteria responsible for unpleasant smells. By choosing cotton trainers, you're not only ensuring optimum comfort, but also lasting freshness all day long. In short, cotton trainers are the perfect companion for the warmer seasons, combining lightness, comfort and hygiene.</p> 
                    </div>
                </div>
                <div className='justify-between space-x-6 bg-white flex w-full my-16'>
                    <Image
                    src={regardTwo}
                    alt='regard'
                    className='w-full h-[280px]'/>
                    <Image
                    src={regardThree}
                    alt='regard'
                    className='w-full h-[280px]'/>
                    <Image
                    src={regardFour}
                    alt='regard'
                    className='w-full h-[280px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogDetails