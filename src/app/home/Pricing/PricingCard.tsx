import Button from "@/components/common/Button";
import React from "react";

interface PricingCardProps {
   name: string;
   price: string;
   date?: string;
   describtion: string;
   features: {
      title: string;
      content: string;
   }[];
}

function PricingCard(props: PricingCardProps) {
   const {name, price, date, describtion, features} = props;

   return (
      <div className="first:mt-10 last:mt-10 group">
         <div className="bg-primary-500 group-first:bg-white/10 group-last:bg-white/10 border border-white/10 rounded-xl py-10 px-5">
            <h3 className="text-4xl font-tt-hoves font-medium mb-3">{name}</h3>
            <div className="flex items-center gap-3">
               <b className="text-10xl group-first:text-primary-500 group-last:text-primary-500 font-tt-hoves font-semibold mb-3">
                  {price}
               </b>
               {date && (
                  <p className="text-2xl font-futura-lt max-w-12">{date}</p>
               )}
            </div>
            <p className="font-futura-lt mb-[30px]">{describtion}</p>
            <div className="mb-[30px]">
               {features.map(({title, content}, index) => (
                  <div key={index}>
                     <h6 className="font-futura-lt font-medium mb-3">
                        {title}
                     </h6>
                     <p className="text-lg font-futura-lt">{content}</p>
                     <div className="w-full h-[1px] bg-white/20 my-4" />
                  </div>
               ))}
            </div>
            <div>
               <Button className="w-full group-first:bg-primary-500/20 group-first:hover:bg-transparent group-last:bg-primary-500/20 group-last:hover:bg-transparent bg-white text-primary-500 hover:bg-white/80">
                  Get Started
               </Button>
            </div>
         </div>
      </div>
   );
}

export default PricingCard;
