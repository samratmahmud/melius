import Button from "@/components/common/Button";
import React from "react";

interface PricingCardProps {
   name: string;
   price: string;
   date?: string;
   describtion: string;
   loading?: boolean;
   features: {
      title: string;
      content: string;
   }[];
}

function PricingCard(props: PricingCardProps) {
   const {name, price, date, describtion, features, loading} = props;

   return (
      <div className="first:mt-10 last:mt-10 group relative first:hidden last:hidden lg:first:block lg:last:block">
         {loading && (
            <div className="flex flex-col items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
               <img src="/images/loading-icon.svg" alt="" />
               <h6 className="text-4xl font-medium font-tt-hoves whitespace-nowrap mt-3">
                  to be released soon
               </h6>
            </div>
         )}
         <div className="bg-primary-500 group-first:bg-white/10 group-last:bg-white/10 border border-white/10 rounded-xl lg:py-10 md:py-9 py-[30px] xl:px-5 px-4 group-first:blur group-last:blur">
            <span className="absolute inset-0 group-first:bg-gray-950/40 group-last:bg-gray-950/40 group-first:backdrop-blur group-last:backdrop-blur" />
            <h3 className="lg:text-[24px] md:text-[22px] text-[20px] leading-[1.1em] font-tt-hoves font-medium mb-3">
               {name}
            </h3>
            <div className="flex items-center gap-3">
               <b className="xl:text-[50px] lg:text-[42px] md:text-[36px] text-[30px] leading-[1.2em] group-first:text-primary-500 group-last:text-primary-500 font-tt-hoves font-semibold mb-3">
                  {price}
               </b>
               {date && <p className="text-2xl font-futura-lt max-w-12">{date}</p>}
            </div>
            <p className="font-futura-lt lg:mb-[30px] md:mb-6 mb-5 group-first:text-white/40 group-last:text-white/40">
               {describtion}
            </p>
            <div className="mb-[30px]">
               {features.map(({title, content}, index) => (
                  <div key={index}>
                     <h6 className="font-futura-lt font-medium mb-3">{title}</h6>
                     <p className="text-lg font-futura-lt group-first:text-white/40 group-last:text-white/40">
                        {content}
                     </p>
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
