/* eslint-disable @next/next/no-img-element */
import Button from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const supportCards = [
   {
      thumbnail: "/images/Rectangle 1045.jpg",
      title: "First Assessment",
      describtion: (
         <>
            Get started with a rapid analysis of your processes in 15 minutes with our melius SaaS
            product! <br /> Identify high-potential areas for improvement and gain quick insights
            into opportunities for optimization.
         </>
      ),
   },
   {
      thumbnail: "/images/Rectangle 1045 (1).jpg",
      title: "Comprehensive Process Discovery",
      describtion:
         "Embark on a journey of in-depth process assessment, with melius. Undertake a thorough process discovery, assessment, and scoping. Identify bottlenecks, inefficiencies, and areas for improvement.",
   },
   {
      thumbnail: "/images/Rectangle 1045 (2).jpg",
      title: "Transformation Roadmap",
      describtion:
         "Prioritize defined business cases and receive a clear transformation roadmap. Our experts guide you in developing a strategic plan for process improvement, automation, and advanced solutions. Propel your business towards greater efficiency and success!",
   },
];

function Support() {
   return (
      <section className="relative z-0 bg-black pb-28">
         <div className="absolute top-80 -z-10">
            <img className="w-screen h-[720px]" src="/images/Group 1000002278.png" alt="" />
         </div>
         <div className="container">
            <div className="relative z-0 mb-44 cursor-pointer">
               <Image
                  className="rounded-3xl"
                  src="/images/support-building-thumbnail.jpg"
                  alt=""
                  width={1146}
                  height={644}
               />
               <Link
                  href="https://www.youtube.com/watch?v=4BzjUq921Y4"
                  target="_blank"
                  className="absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-black/40 hover:bg-black/60 duration-300 p-6 flex items-center justify-center"
               >
                  <Image src="/images/Polygon 1.svg" alt="" width={1146} height={644} />
               </Link>
            </div>
            <div>
               <h2 className="text-12xl font-semibold text-center mb-10">
                  How we support your transformation journey at{" "}
                  <span className="text-primary-500">melius digital</span>
               </h2>
               <div className="grid grid-cols-3 gap-[30px] mb-10">
                  {supportCards.map(({thumbnail, title, describtion}, index) => (
                     <div key={index} className="border border-white/20 rounded-xl p-5">
                        <Image
                           className="rounded-xl mb-7"
                           src={thumbnail}
                           alt=""
                           width={332}
                           height={188}
                        />
                        <h3 className="text-4xl font-medium mb-3">{title}</h3>
                        <p className="font-futura-lt">{describtion}</p>
                     </div>
                  ))}
               </div>
               <div className="flex items-center justify-center gap-[30px]">
                  <Button className="bg-black-primary bg-transparent">
                     Start Your Transformation
                  </Button>
                  <Button className="bg-black-primary bg-transparent">Contact Melius</Button>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Support;
