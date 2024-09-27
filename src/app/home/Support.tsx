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
            Get started with a rapid analysis of your processes in 15 minutes with our
            melius SaaS product! <br /> Identify high-potential areas for improvement and
            gain quick insights into opportunities for optimization.
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
      <section className="relative z-0 bg-black lg:mb-28 md:mb-24 mb-20 overflow-hidden">
         <div className="absolute lg:top-[20%] sm:top-[13%] top-[6%] left-0 right-0 -z-10">
            <img
               className="w-full min-h-[330px]"
               src="/images/Group 1000002278.png"
               alt=""
            />
         </div>
         <div className="container">
            <div className="relative z-0 xl:mb-44 lg:mb-36 md:mb-24 sm:mb-20 mb-[60px] cursor-pointer">
               <Image
                  className="rounded-3xl min-h-[204px]"
                  src="/images/support-building-thumbnail.jpg"
                  alt=""
                  width={1146}
                  height={644}
               />
               <Link
                  href="https://www.youtube.com/watch?v=4BzjUq921Y4"
                  target="_blank"
                  className="absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:w-16 md:w-12 w-10 lg:h-16 md:h-12 h-10 rounded-full bg-black/40 hover:bg-black/60 duration-300 lg:p-6 md:p-4 p-3 flex items-center justify-center"
               >
                  <Image src="/images/Polygon 1.svg" alt="" width={1146} height={644} />
               </Link>
            </div>
            <div>
               <h2 className="text-12xl font-semibold tracking-[0.01em] sm:tracking-normal text-center mb-10">
                  How we support your transformation journey at{" "}
                  <span className="text-primary-500">melius digital</span>
               </h2>
               <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[30px] mb-10">
                  {supportCards.map(({thumbnail, title, describtion}, index) => (
                     <div
                        key={index}
                        className="border border-white/20 rounded-xl xl:p-5 p-4"
                     >
                        <Image
                           className="rounded-xl lg:mb-7 mb-5 w-full"
                           src={thumbnail}
                           alt=""
                           width={332}
                           height={188}
                        />
                        <h3 className="md:text-4xl text-[20px] font-medium mb-3">
                           {title}
                        </h3>
                        <p className="font-futura-lt">{describtion}</p>
                     </div>
                  ))}
               </div>
               <div className="flex sm:flex-row flex-col items-center justify-center md:gap-[30px] gap-5">
                  <Button
                     variant="outlined"
                     className="bg-black-primary bg-transparent header-button-blur w-full sm:w-auto"
                  >
                     Start Your Transformation
                  </Button>
                  <Button
                     variant="outlined"
                     className="bg-black-primary bg-transparent header-button-blur min-w-[250px] w-full sm:w-auto"
                  >
                     Contact Melius
                  </Button>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Support;
