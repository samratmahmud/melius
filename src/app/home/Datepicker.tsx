import Button from "@/components/common/Button";
import React from "react";

function Datepicker() {
   return (
      <section className="xl:mb-44 lg:mb-36 md:mb-28 sm:mb-24 mb-20">
         <div className="container">
            <h6 className="text-6xl text-white/40 text-center font-code-pro-lc md:mb-5 mb-4">
               Schedule an Introduction Call
            </h6>
            <h2 className="text-10xl font-semibold capitalize font-tt-hoves text-center max-w-[1000px] mx-auto lg:mb-[60px] md:mb-12 mb-10">
               Let’s discover how melius can support you (in your transformation journey)
            </h2>
            <div className="flex justify-center">
               <Button>Book Full Consulting Hours</Button>
            </div>
         </div>
      </section>
   );
}

export default Datepicker;
