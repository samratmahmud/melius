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
            className={`w-full bg-transparent px-6 py-3 text-content-text placeholder:text-content-text bg-white rounded overflow-hidden border border-[#E7E6E6] group hover:border-accent focus:ring-1 ring-accent ${className}}`}
         />
      </label>
   );
}

export default TextArea;
