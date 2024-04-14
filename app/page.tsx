"use client"
import ThemeButton from "./_components/ThemeButton";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "./_components/ServiceCard";

export default function Home() {
  const cardsData = [
    {
      name:"All API",
    about:"Concatinate multiple APIs into one",
    path:"/allApi",
    icon:null,
  },
    {
      name:"All Keys",
    about:"Create an API taking multiple attributes as keys",
    path:"/allKeys",
    icon:null,
  },
  
  ]
  return (
    <div >
      <h1 className="text-4xl my-5 font-semibold text-slate-500 dark:text-slate-400">All Services</h1>
      <div className="flex flex-wrap gap-3">
        {cardsData.map((cardData,ind)=> <ServiceCard key={ind} cardData={cardData}/>)}
      </div>
    </div>
  );
}
