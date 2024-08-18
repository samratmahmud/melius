/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const explore = [
   {
      icon: "/images/Huge-icon.svg",
      title: "We are more than just a technology company",
   },
   {
      icon: "/images/Huge-icon (1).svg",
      title: "we are your dedicated partner in the pursuit of operational excellence",
   },
];

function AboutHeader() {
   return (
      <section className="relative mb-40 z-0">
         <div className="absolute top-0 left-0 right-0 -z-10">
            <img
               className="min-w-full h-[720px]"
               src="/images/Group 1000002278 (2).png"
               alt=""
            />
         </div>
         <div className="container">
            <div className="relative mb-40">
               <div className="absolute top-0 right-0 -z-20">
                  <div className="bg-header-bg absolute inset-0 rounded-xl" />
                  <Image
                     className="rounded-xl"
                     width={852}
                     height={538}
                     src="/images/Rectangle 8.jpg"
                     alt=""
                  />
               </div>
               <h1 className="text-13xl font-bold uppercase font-tt-hoves pt-48 mb-44">
                  about us
               </h1>
               <div className="flex justify-end">
                  <p className="text-2xl font-futura-lt max-w-[362px]">
                     At Melius, we believe in the power of process excellence to
                     drive meaningful transformation within organizations.{" "}
                     <br /> <br />
                     Our journey began with a simple yet profound vision: to
                     democratize process optimization, making it accessible to
                     businesses of all sizes.
                  </p>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-x-[60px] border-t border-gray-300">
               {explore.map(({icon, title}, index) => (
                  <div
                     key={index}
                     className="flex items-center gap-10 py-[60px] odd:border-r-2 border-white/10"
                  >
                     <div className="w-[110px] aspect-square rounded-full bg-white/10 p-5 flex items-center justify-center flex-shrink-0">
                        <img src={icon} alt="" />
                     </div>
                     <h6 className="text-4xl font-tt-hoves capitalize max-w-[260px]">
                        {title}
                     </h6>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default AboutHeader;
