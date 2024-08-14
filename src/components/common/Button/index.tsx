import Link, {LinkProps} from "next/link";
import React from "react";

type LinkTagProps = {} & LinkProps;
type ButtonTagProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type CombainElementProps = LinkTagProps | ButtonTagProps;
type ButtonProps = CombainElementProps & {
   size?: "small" | "normal" | "large" | "xl-large";
   color?: "primary" | "secondary";
   variant?: "contained" | "outlined" | "text";
   component?: React.ElementType;
};

function Button({
   size = "normal",
   color = "primary",
   variant = "contained",
   component = "button",
   ...props
}: ButtonProps) {
   let Element = component;
   let ElementProps = {};
   let {className, children, ...rest} = props as ButtonTagProps;

   if ("href" in props) {
      Element = Link;
      ElementProps = {href: props.href};
   }

   return (
      <Element
         className={`${
            className || ""
         } button-wrapper button-wrapper-${size} button-wrapper-${color}-${variant} text-center`}
         {...ElementProps}
         {...rest}
      >
         {children}
      </Element>
   );
}

export default Button;
