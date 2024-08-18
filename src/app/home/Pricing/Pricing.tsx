import Button from "@/components/common/Button";
import React from "react";
import PricingCard from "./PricingCard";

const packages = [
   {
      name: "Pro",
      price: "$49",
      date: "per month",
      describtion:
         "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
      features: [
         {
            title: "Lorem ipsum dolor ",
            content:
               "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
         },
         {
            title: "Lorem ipsum dolor ",
            content:
               "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
         },
         {
            title: "Lorem ipsum dolor ",
            content:
               "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
         },
      ],
   },
   {
      name: "Basic",
      price: "free",
      describtion:
         "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
      features: [
         {
            title: "Lorem ipsum dolor ",
            content:
               "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
         },
         {
            title: "Lorem ipsum dolor ",
            content:
               "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
         },
         {
            title: "Lorem ipsum dolor ",
            content:
               "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
         },
      ],
   },
   {
      name: "Enterprise",
      price: "$49",
      date: "per month",
      describtion:
         "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
      features: [
         {
            title: "Lorem ipsum dolor ",
            content:
               "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
         },
         {
            title: "Lorem ipsum dolor ",
            content:
               "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
         },
         {
            title: "Lorem ipsum dolor ",
            content:
               "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
         },
      ],
   },
];

function Pricing() {
   return (
      <section className="pt-[120px] pb-40">
         <div className="container">
            <h2 className="text-12xl font-semibold text-center mb-16">
               Pricing
            </h2>
            <div className="grid grid-cols-3 gap-5">
               {packages.map(
                  ({name, price, date, describtion, features}, index) => (
                     <PricingCard
                        key={index}
                        name={name}
                        price={price}
                        date={date}
                        describtion={describtion}
                        features={features}
                     />
                  )
               )}
            </div>
         </div>
      </section>
   );
}

export default Pricing;
