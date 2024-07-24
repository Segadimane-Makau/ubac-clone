"use client";

import CategoryBanner from "@/components/categoryBanner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeaderMobile from "@/components/header-mobile";
import HeroBanner from "@/components/heroBanner";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { useEffect, useState } from "react";
import ProductTrack from "@/components/productTrack";
import Motivation from "@/components/motivation";

async function fetchSalesFromFirestore(collectionName: string) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const data: any = [];
  querySnapshot.forEach((doc) => {
    data.push({id:doc.id, ...doc.data()});
  });
  return data;
}

export default function Home() {
  const [SalesData, setSalesData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const Data = await fetchSalesFromFirestore('Sales');
      
      setSalesData(Data);
    }
    fetchData();
  }, [])
  return (
    <main className="block w-[100%] bg-[#F7F6F3]">
      <Header/>
      <HeaderMobile/>
      <HeroBanner/>
      <ProductTrack salesData={SalesData}/>
      <CategoryBanner/>
      <Motivation/>
      <Footer/>
    </main>
  );
}
