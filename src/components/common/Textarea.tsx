import React from "react";

interface TextAreaProps
   extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
   label?: string;
}

function TextArea(props: TextAreaProps) {
   const {className, label, ...rest} = props;

   return (
      <label className="flex flex-col">
         {label && <b className="text-dark leading-[1.6em] mb-3">{label}</b>}
         <textarea
            {...rest}
            className={`w-full min-h-[116px] bg-transparent px-5 py-3.5 text-lg font-light font-futura-lt placeholder:text-white rounded-3xl border border-white/50 hover:border-primary-500/60 duration-300 outline-none focus:ring-2 ring-primary-500/40 ${className}`}
         />
      </label>
   );
}

export default TextArea;
