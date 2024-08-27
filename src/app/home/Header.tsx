import Button from "@/components/common/Button";
import Image from "next/image";
import React from "react";

function Header() {
   return (
      <section className="xl:mb-32 lg:mb-28 md:mb-20 sm:mb-16 mb-[60px]">
         <div className="container">
            <div className="relative">
               <div className="pt-[30px] sm:pt-10 md:hidden">
                  <h6 className="text-6xl mb-5">
                     Empowering your Transformation Journey!
                  </h6>
                  <h1 className="text-13xl uppercase leading-[1.1em] font-bold mb-6 sm:mb-8">
                     <span className="text-primary-500">Unlock the potential</span> of
                     your processes in 15 minutes!
                  </h1>
               </div>
               <div className="flex justify-end relative z-0">
                  <Image
                     width={700}
                     height={790}
                     src="/images/header-thumbnail.png"
                     alt=""
                  />
                  <div className="bg-header-bg absolute inset-0" />
                  <div className="absolute bottom-0 left-4 right-4 flex flex-col gap-3 md:hidden">
                     <Button
                        size="large"
                        variant="outlined"
                        className="bg-black-primary bg-transparent header-button-blur w-full"
                     >
                        Start Transformation
                     </Button>
                     <Button
                        size="large"
                        variant="outlined"
                        className="bg-black-primary bg-transparent header-button-blur w-full"
                     >
                        Book Consulting Hours
                     </Button>
                  </div>
               </div>
               <div className="absolute xl:top-[135px] lg:top-28 md:top-20 z-10 hidden md:block">
                  <h6 className="text-6xl text-center mb-7">
                     Empowering your Transformation Journey!
                  </h6>
                  <h1 className="text-13xl uppercase text-center font-bold max-w-[1000px] mx-auto lg:ml-5 xl:mb-[120px] lg:mb-24 mb-20">
                     <span className="text-primary-500">Unlock the potential</span> of
                     your processes in 15 minutes!
                  </h1>
                  <div className="flex justify-center gap-7">
                     <Button
                        size="large"
                        variant="outlined"
                        className="bg-black-primary bg-transparent header-button-blur"
                     >
                        Start Transformation
                     </Button>
                     <Button
                        size="large"
                        variant="outlined"
                        className="bg-black-primary bg-transparent header-button-blur"
                     >
                        Book Consulting Hours
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Header;
