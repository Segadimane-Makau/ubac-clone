import React from 'react'
import Image from 'next/image'
import bg from '@/assets/bgTwo.avif'
import Link from 'next/link'
import { Reveal } from './reveal'

const Blog = () => {
  return (
    <div className='w-full z-[-1]'>
        <div className='w-full h-[550px]'>
            <Image
                src={bg}
                alt="Description of the image"
                fill
                loading='eager'
                priority
                unoptimized
                className='max-w-full max-h-full z-[0]'
            />        
        </div>
    </div>
  )
}

export default Blog