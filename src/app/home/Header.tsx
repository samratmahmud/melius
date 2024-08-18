import Button from "@/components/common/Button";
import Image from "next/image";
import React from "react";

function Header() {
   return (
      <section className="mb-32">
         <div className="container">
            <div className="relative">
               <div className="flex justify-end relative z-0">
                  <Image
                     width={700}
                     height={790}
                     src="/images/header-thumbnail.png"
                     alt=""
                  />
                  <div className="bg-header-bg absolute inset-0" />
               </div>
               <div className="absolute top-[135px] z-10">
                  <h6 className="text-6xl text-center mb-7">
                     Empowering your Transformation Journey!
                  </h6>
                  <h1 className="text-13xl uppercase text-center font-bold max-w-[1000px] mx-auto mb-[120px]">
                     <p className="text-primary-500">Unlock the potential</p>
                     of your processes in 15 minutes!
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
