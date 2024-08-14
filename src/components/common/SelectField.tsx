"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Select, {type Theme, components} from "react-select";

const theme = (theme: Theme) => ({
   ...theme,
   colors: {
      ...theme.colors,
      primary: "#E774B1",
      primary25: "#E774B122",
      primary50: "#E774B133",
      neutral0: "#FFFFFF",
      neutral50: "rgb(105 105 105)",
      neutral20: "#E7E6E6",
      neutral30: "#E774B1",
      neutral80: "#696969",
   },
   spacing: {
      ...theme.spacing,
      controlHeight: 0,
      baseUnit: 12,
   },
});

interface SelectFieldProps extends React.ComponentProps<typeof Select> {
   label?: string;
}

const indicator = (props: any) => {
   return (
      <components.DropdownIndicator
         {...props}
         className="!py-[21px] !px-[19px] md:!py-[23px] md:!px-[21px] lg:!py-[26px] lg:!px-6"
      >
         <img
            className={`duration-200 ${props.isFocused ? "rotate-[180deg]" : ""}`}
            src="/images/keyboard-arrow-down.svg"
            alt=""
         />
      </components.DropdownIndicator>
   );
};

function SelectField(props: SelectFieldProps) {
   const {label} = props;
   return (
      <label className="flex flex-col md:gap-3 gap-2">
         {label && <b className="font-bold text-dark">{label}</b>}
         <div>
            <Select
               {...props}
               theme={theme}
               components={{
                  DropdownIndicator: indicator,
                  Option: (props: any) => <components.Option className="!py-4" {...props} />,
                  IndicatorSeparator: () => null,
               }}
               styles={{
                  input: (base: any) => ({
                     ...base,
                     padding: 0,
                  }),
                  singleValue: (base: any) => ({...base, margin: 0}),
               }}
            />
         </div>
      </label>
   );
}

export default SelectField;
