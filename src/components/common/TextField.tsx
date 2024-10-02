import React from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function TextField(props: TextFieldProps) {
   const {className, type, ...rest} = props;

   return (
      <label>
         <input
            {...rest}
            type={type || "text"}
            className={`w-full md:min-h-[52px] min-h-[46px] bg-transparent md:px-5 px-4 md:py-3.5 py-3 text-lg font-light font-futura-lt placeholder:text-white rounded-full border border-white/50 hover:border-primary-500/60 duration-300 outline-none focus:ring-2 ring-primary-500/40 ${className}`}
         />
      </label>
   );
}

export default TextField;
