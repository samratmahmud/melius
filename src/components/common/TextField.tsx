import React from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function TextField(props: TextFieldProps) {
   const {className, type, ...rest} = props;

   return (
      <label>
         <input
            {...rest}
            type={type || "text"}
            className={`w-full min-h-[52px] bg-transparent lg:px-6 md:px-5 px-4 lg:py-3 md:py-2.5 py-2 text-content-text placeholder: rounded border border-[#E7E6E6] group hover:border-accent focus:ring-1 ring-primary-300/50 ${className}`}
         />
      </label>
   );
}

export default TextField;
