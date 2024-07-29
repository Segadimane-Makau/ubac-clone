import React from 'react'
import ProductDetails from '@/components/productDetails'
import Footer from '@/components/footer'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import Header from '@/components/header'
import ProductFooter from '@/components/productFooter'

async function fetchProductFromFirestore(collectionName: string, productId: string) {
  const docRef = doc(db, collectionName, productId);
  const docSnap = await getDoc(docRef);

  return { id: docSnap.id, ...docSnap.data() };
}

const Details = async ({params}:any) => {
  let str = params.slug;
  let parts = str.split("-");
  let productId = parts[0];
  let productColor = parts[1];

  const currentSaleData = await fetchProductFromFirestore('Sales', productId);

  return (
    <div className='block w-[100%] bg-[#F7F6F3] text-[#212322]'>
        <Header color={"black"}/>
        <div className='w-full md:mt-[107px] md:grid-cols-3 grid-cols-1 grid md:gap-8 sm:pl-[2px] md:pt-16 pb-16'>
             <ProductDetails saleData={currentSaleData} color={productColor} />
        </div>
        <div className='w-full'>
          <ProductFooter items={currentSaleData}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Details