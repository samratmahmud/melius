/* eslint-disable @next/next/no-img-element */
import React from "react";

function CheckField({className, type, ...rest}: React.ComponentProps<"input">) {
   const icons = {
      radio: {
         active: "/images/active-radio.svg",
         inactive: "/images/inactive-radio.svg",
      },
      checkbox: {
         active: "/images/active-checkbox.svg",
         inactive: "/images/inactive-checkbox.svg",
      },
   };

   return (
      <label className={`cursor-pointer inline-block`}>
         <input
            {...rest}
            type={type === "checkbox" ? "checkbox" : "radio"}
            className="sr-only peer"
         />
         <img
            className="w-6 h-6 block peer-checked:hidden"
            src={icons[type === "checkbox" ? "checkbox" : "radio"].inactive}
            alt=""
         />
         <img
            className="w-6 h-6 hidden peer-checked:block"
            src={icons[type === "checkbox" ? "checkbox" : "radio"].active}
            alt=""
         />
      </label>
   );
}

export default CheckField;
