/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const InnovationData = [
   {
      title: "Innovation",
      describetion: "We embrace and drive change through continuous innovation.",
   },
   {
      title: "Collaboration",
      describetion: "Success is a collective effort, and we thrive on collaboration.",
   },
   {
      title: "Customer-Centric",
      describetion: "Your success is our success, and we prioritize your unique needs.",
   },
   {
      title: "Excellence",
      describetion:
         "We strive for excellence in everything we do, setting high standards for ourselves and our partners.",
   },
];

function Innovation() {
   return (
      <section className="mb-64">
         <div className="container">
            <div className="flex gap-32">
               <div className="flex-shrink-0">
                  <Image
                     className="rounded-xl"
                     width={460}
                     height={900}
                     src="/images/Rectangle 1058.jpg"
                     alt=""
                  />
               </div>
               <div>
                  <h2 className="text-12xl font-semibold font-tt-hoves capitalize mb-5">
                     Our mission is clear -{" "}
                     <span className="text-primary-500">
                        empower organizations to unleash the full potential of their
                        processes
                     </span>
                  </h2>
                  <p className="text-2xl font-futura-lt mb-10">
                     Whether you're a startup aiming for efficiency or an established
                     enterprise seeking to redefine your operations, melius digital is
                     here to guide you on your journey.
                  </p>
                  <h6 className="text-8xl font-grape-nuts text-amber-300 -ml-[74px] mb-[52px]">
                     Core Values:
                  </h6>
                  <div className="flex gap-7">
                     {InnovationData.map(({title, describetion}, index) => (
                        <div key={index} className="max-w-[260px]">
                           <h4 className="text-4xl font-tt-hoves font-medium mb-7">
                              {title}
                           </h4>
                           <p className="font-futura-lt">{describetion}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Innovation;
