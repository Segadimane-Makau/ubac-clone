'use client'

import React from 'react'
import ProductDetails from '@/components/productDetails'
import Footer from '@/components/footer'
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import ProductTrack from '@/components/productTrack'
import Header from '@/components/header'

async function fetchProductFromFirestore(collectionName: string, productId: string) {
  const docRef = doc(db, collectionName, productId);
  const docSnap = await getDoc(docRef);

  return { id: docSnap.id, ...docSnap.data() };
}

async function fetchSalesFromFirestore(collectionName: string, productId: string) {
  const docRef = doc(db, collectionName, productId);
  const docSnap = await getDoc(docRef);
  const data: any = [];
  data.push({ id: docSnap.id, ...docSnap.data() })

  return data;
}

// async function FetchReviews(product_id: string) {
//     const q = query(collection(db, "reviews"), where("productId", "==", product_id));
//     const querySnapshot = await getDocs(q);

//     const data: any = [];
//     querySnapshot.forEach((doc) => {
//       data.push({id:doc.id, ...doc.data()});
//     });

//     return data;
// }

const Details = async ({params}:any) => {
  let str = params.slug;
  let parts = str.split("-");
  let productId = parts[0];
  let productColor = parts[1];

  const currentSaleData = await fetchProductFromFirestore('Sales', productId);
  const data: any = [];
//   const SalesData = await fetchSalesFromFirestore('Sales', productId);
  // data.push(currentSaleData);
//   const reviews = await FetchReviews(productId);
//   console.log(SalesData);
  return (
    <div className='block w-[100%] bg-[#F7F6F3] text-[#212322]'>
        <Header color={"black"}/>
        <div className='w-full md:mt-[107px] md:grid-cols-3 grid-cols-1 grid md:gap-8 sm:pl-[2px] md:pt-16 pb-16'>
             <ProductDetails saleData={currentSaleData} color={productColor} />
        </div>
        {/* <div className='w-full'>
              <p className='text-4xl text-black font-semibold text-center'>You may also like</p>
              <ProductTrack salesData={SalesData}/>
        </div> */}
        <Footer/>
    </div>
  )
}

export default Details