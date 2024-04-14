import Link from "next/link";
import React from "react";

const ServiceCard = ({ cardData }: any) => {
  const { name, about, path, icon } = cardData;
  return (
    <Link href={path} className="basis-[33%]">
      <div className=" h-[130px] duration-300 hover:translate-y-[-5px] lg:h-[160px] rounded-xl p-3 lg:p-5 shadow-gray-300 dark:shadow-gray-900 shadow-xl flex flex-col gap-3">
        <h3 className=" text-2xl">{name}</h3>
        <p className="lg:text-xl line-clamp-2 text-slate-500">{about}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
