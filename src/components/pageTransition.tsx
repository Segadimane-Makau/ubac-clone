import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ startAnimation }: any) => {
  return (
    <>
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-[30030] bg-[#000000]'
        initial={{ x: '100%', width: '100%' }}
        animate={startAnimation ? { x: '0%', width: '0%' } : {}} 
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <main className='z-[999999999999999999] w-[100%] absolute text-center item-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4'>
          <div className='w-full h-full'>
            <div className='flex justify-center items-center'>
              <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white'></div>
            </div>
          </div>
        </main>
      </motion.div>
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-[30020] bg-[#212322]'
        initial={{ x: '100%', width: '100%' }}
        animate={startAnimation ? { x: '0%', width: '0%' } : {}} 
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-[30010] bg-[#f7f6f3]'
        initial={{ x: '100%', width: '100%' }}
        animate={startAnimation ? { x: '0%', width: '0%' } : {}} 
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
      />
    </>
  );
};

export default PageTransition