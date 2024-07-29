'use client';

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
import PageTransition from "@/components/pageTransition";
import NewsTrack from "@/components/newsTrack";

async function fetchSalesFromFirestore(collectionName: any) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const data:any = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

async function fetchNewsFromFirestore(collectionName: any) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const data:any = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

export default function Home() {
  const [SalesData, setSalesData] = useState([]);
  const [NewsData, setNewsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchSalesFromFirestore('Sales');
      setSalesData(data);
      const newsData = await fetchNewsFromFirestore('News');
      setNewsData(newsData);
    }
    fetchData();
  }, []);

  return (
    <main className="block w-[100%] bg-[#F7F6F3]">
      <PageTransition/>
      {/* <Header /> */}
      {/* <HeaderMobile /> */}
      <HeroBanner />
      <ProductTrack salesData={SalesData} />
      <CategoryBanner />
      <Motivation />
      <NewsTrack newsData={NewsData}/>
      <Footer />
    </main>
  );
}
