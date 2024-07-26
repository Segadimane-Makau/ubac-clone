import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { base64 } from '@/app/firebaseConfig';

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <Slider {...settings}>
            {images.map((slide: any, index) => (
                <div key={index} className='relative'>
                    <div className=' z-[1] absolute w-[100%] h-[400px] bg-gray-900 bg-opacity-10'>

                    </div>
                <Image 
                    src={slide.image} 
                    alt={`Slide ${index}`}
                    style={{objectFit:"cover"}}
                    width={100} 
                    height={100} 
                    unoptimized 
                    priority 
                    placeholder='blur' 
                    blurDataURL={base64} 
                    loading="eager"
                    className='w-[100%] h-[400px] relative' />
                <div className='font-semibold' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '36px' }}>
                        {slide.description}
                    </div>

            </div>
            ))}
        </Slider>
    );
};

export default Carousel;
