/* eslint-disable @next/next/no-img-element */
import Button from "@/components/common/Button";
import React from "react";

function Account() {
   return (
      <section className="bg-primary-500p relative z-0 pt-20 pb-[200px]">
         <div
            className="absolute inset-0 -z-10"
            style={{
               backgroundImage:
                  "linear-gradient(rgb(128, 80, 242, 80%) 70%, transparent 30%)",
            }}
         />
         <div className="absolute -z-20 -top-14 -right-[30%] left-0">
            <img
               className="min-w-full max-h-[720px]"
               src="/images/Mask group.png"
               alt=""
            />
         </div>
         <div className="container">
            <h2 className="text-12xl font-semibold font-tt-hoves text-center mb-5">
               Start your process discovery easily
            </h2>
            <p className="text-6xl text-center font-dm-sans mb-10">
               It all begins with a free account
            </p>
            <div className="flex justify-center">
               <Button className="bg-white text-primary-500 hover:text-white hover:bg-primary-300">
                  Start for free
               </Button>
            </div>
         </div>
      </section>
   );
}

export default Account;
