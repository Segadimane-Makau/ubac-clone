'use client';
import React, { useEffect, useState } from "react";
import ProductList from "@/components/productList";
import Footer from "@/components/footer";
import { db } from '../../firebaseConfig';
import { collection, getDocs} from 'firebase/firestore';
import Header from "@/components/header";

async function fetchSalesFromFirestore(collectionName: string) {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data: any = [];
    querySnapshot.forEach((doc) => {
      data.push({id:doc.id, ...doc.data()});
    });
    return data;
  }

export default function Products ({params}:any) {
    const category = params.category;
    const [womenSalesData, setwomenSalesData] = useState([]);
    const [menSalesData, setmenSalesData] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const womenData = await fetchSalesFromFirestore('Sales');
          const menData = await fetchSalesFromFirestore('Sales');
          
          setwomenSalesData(womenData);
          setmenSalesData(menData);

          if(category === 'femme') {
            setData(womenData);
          }
          else if(category === 'homme') {
            setData(menData);
          }
          else {
            setData(womenData.concat(menData));
          }
        }
        fetchData();
      }, [category])

    useEffect(() => {
    },);
    return (
      
        <div className="block w-[100%] bg-[#F7F6F3]">
            <Header color={"black"}/>
            <ProductList salesData={data}/>
            <Footer/>
        </div>
    )
}