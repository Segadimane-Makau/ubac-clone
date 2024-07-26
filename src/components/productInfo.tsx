import React from 'react'

const ProductInfo = ({productInfo}: any) => {
  return (
    <div className='mt-2'>
        <h1 className='text-[20px] text-[#212322] font-semibold'>NATURAL & RECYCLED MATERIALS</h1>
        <div className='p-[20px] font-semibold'>
            {productInfo.map((info: any, index: any) => (
                    <div key={index} style={{ position: 'relative', padding: '0px' }}>
                        <div style={{ marginBottom: '10px', fontSize: '14px', color: '#212322' }}>
                            &#8226; {info.title}
                        </div>
                        <div style={{ marginBottom: '10px', fontSize: '14px', whiteSpace: 'pre-line', color: '#898989' }}>
                            {info.details}
                        </div>
                    </div>
                ))}
        </div>
        <h1 className='text-[20px] text-[#212322] font-semibold'>LOCAL MANUFACTURING</h1>
        <p className='text-[#898989] font-semibold text-[14px] mb-4 mt-4'>France : Linen l Portugal : soles, inserts, laces, packaging</p>
        <p className='text-[#898989] font-semibold text-[14px]'>Handmade in Portugal</p>
    </div>
  )
}

export default ProductInfo