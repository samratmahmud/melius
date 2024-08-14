import React from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
   describtion?: string;
   label?: string;
}

function TextField(props: TextFieldProps) {
   const {className, type, label, describtion, ...rest} = props;

   return (
      <label className="flex flex-col">
         {label && (
            <b
               className={`font-bold text-dark ${
                  describtion ? "mb-1" : "md:mb-3 mb-2"
               }`}
            >
               {label}
            </b>
         )}
         {describtion && <p className="text-sm md:mb-3 mb-2">{describtion}</p>}
         <input
            {...rest}
            type={type || "text"}
            className={`w-full lg:h-[61px] md:min-h-[55px] min-h-[50px] bg-transparent lg:px-6 md:px-5 px-4 lg:py-3 md:py-2.5 py-2 text-content-text placeholder:text-content-text bg-white rounded overflow-hidden border border-[#E7E6E6] group hover:border-accent focus:ring-1 ring-accent ${className}}`}
         />
      </label>
   );
}

export default TextField;
