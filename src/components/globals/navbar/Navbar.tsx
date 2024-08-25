/* eslint-disable @next/next/no-img-element */
import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";

const navLink = [
   {
      name: "Product",
      href: "/",
   },
   {
      name: "Consulting",
      href: "/",
   },
   {
      name: "About Us",
      href: "/about-us",
   },
];

function Navbar() {
   return (
      <nav>
         <div className="container">
            <div className="flex items-center justify-between gap-5 py-[21px]">
               <Link href="/">
                  <img src="/images/logo.svg" alt="" />
               </Link>
               <div className="flex items-center xl:gap-5 gap-3">
                  {navLink.map(({name, href}, index) => (
                     <Link
                        key={index}
                        href={href}
                        className=" text-2xl hover:no-underline hover:text-primary-500 duration-300 px-2.5 py-2"
                     >
                        {name}
                     </Link>
                  ))}
               </div>
               <div className="flex items-center xl:gap-[30px] gap-5">
                  <Button color="gray" size="small" variant="outlined">
                     Sign in
                  </Button>
                  <Button size="small">Sign up for free</Button>
                  <div className="" role="button">
                     <img src="/images/menu-icon.png" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
