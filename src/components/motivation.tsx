import React from 'react'
import { Reveal } from './reveal'

const Motivation = () => {
  return (
    <div className='justify-center items-center w-[100%] text-center pt-32 pb-32 md:pl-[200px] md:pr-[200px] pr-8 pl-8 text-[#212322]'>
        <Reveal>
            <h2 className='uppercase text-5xl font-bold mb-8'>Inspired by nature, designed for future.</h2>            
        </Reveal>
        <Reveal>
            <p className='uppercase font-semibold text-2xl'>
                We create sneakers that connect natural materials to a bold design by 
                priotizing local manufacturing of components to assembly, promising a minimal impact on the 
                environment.
            </p>
        </Reveal>
    </div>
  )
}
export default Motivation;