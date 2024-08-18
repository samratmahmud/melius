import Button from "@/components/common/Button";
import React from "react";

function Datepicker() {
   return (
      <section className="mb-44">
         <div className="container">
            <h6 className="text-6xl text-white/40 text-center font-code-pro-lc mb-5">
               Schedule an Introduction Call
            </h6>
            <h2 className="text-10xl font-semibold capitalize font-tt-hoves text-center max-w-[1000px] mx-auto mb-[60px]">
               Let’s discover how melius can support you (in your transformation
               journey)
            </h2>
            <div className="flex justify-center">
               <Button>Book Full Consulting Hours</Button>
            </div>
         </div>
      </section>
   );
}

export default Datepicker;
