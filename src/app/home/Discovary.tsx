/* eslint-disable @next/next/no-img-element */
import Button from "@/components/common/Button";
import React from "react";

function Discovary() {
   return (
      <section className="relative z-10 bg-primary-500 xl:mb-[120px] lg:mb-24 md:mb-20 sm:mb-16 mb-12">
         <div className="absolute -z-20 xl:-top-[75px] lg:-top-10 top-[30%] lg:-right-[26%] md:-right-[50%] -right-[75%] md:left-0 -left-[15%]">
            <img className="min-h-[345px] w-full" src="/images/Mask group.png" alt="" />
         </div>
         <div className="container">
            <div className="lg:py-20 md:py-[70px] py-[60px]">
               <h2 className="text-12xl font-semibold font-tt-hoves text-center md:mb-5 mb-3">
                  Start your process discovery easily
               </h2>
               <p className="text-6xl text-center font-dm-sans lg:mb-10 md:mb-10 mb-[30px]">
                  It all begins with a free account
               </p>
               <div className="flex justify-center">
                  <Button className="bg-white text-primary-500 hover:text-white hover:bg-primary-300">
                     Start for free
                  </Button>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Discovary;
