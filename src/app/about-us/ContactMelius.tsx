import React from "react";

function ContactMelius() {
   return (
      <section>
         <div className="container">
            <div className="flex justify-between gap-8">
               <h2 className="text-12xl font-semibold font-tt-hoves col-span-2">
                  <span className="text-primary-500">Lorem ipsum dolor</span>
                  <br />
                  sit consectetur
               </h2>
               <div className="border-t border-x border-white rounded-t-xl py-[60px] px-[30px] max-w-[362px] w-full">
                  <h6 className="text-12xl font-semibold font-tt-hoves mb-10">
                     100
                  </h6>
                  <p className="font-futura-lt text-white/40">
                     Gorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
               </div>
            </div>
            <div className="flex">
               <div className="border border-white rounded-tl-xl py-[60px] px-[30px] w-full">
                  <h6 className="text-12xl font-semibold font-tt-hoves mb-10">
                     10 000
                  </h6>
                  <p className="font-futura-lt text-white/40">
                     Gorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
               </div>
               <div className="border-r border-y border-white rounded-br-xl py-[60px] px-[30px] max-w-[362px] w-full">
                  <h6 className="text-12xl font-semibold font-tt-hoves mb-10">
                     100
                  </h6>
                  <p className="font-futura-lt text-white/40">
                     Gorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}

export default ContactMelius;
