import React from "react";
import PricingCard from "./PricingCard";

const packages = [
   {
      name: "Pro",
      price: "$49",
      date: "per month",
      loading: true,
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
      loading: true,
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
      <section className="lg:mt-[120px] md:mt-24 mt-20 xl:mb-40 lg:mb-32 md:mb-28 sm:mb-24 mb-20">
         <div className="container">
            <h2 className="text-12xl font-semibold text-center lg:mb-16 md:mb-12 mb-10">
               Pricing
            </h2>
            <div className="grid lg:grid-cols-3 gap-5">
               {packages.map(
                  ({name, price, date, describtion, features, loading}, index) => (
                     <PricingCard
                        key={index}
                        name={name}
                        price={price}
                        date={date}
                        loading={loading}
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
