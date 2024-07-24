"use client";

import CategoryBanner from "@/components/categoryBanner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeaderMobile from "@/components/header-mobile";
import HeroBanner from "@/components/heroBanner";

export default function Home() {
  return (
    <main className="block w-[100%] bg-[#F7F6F3]">
      <Header/>
      <HeaderMobile/>
      <HeroBanner/>
      <CategoryBanner/>
      <Footer/>
    </main>
  );
}
