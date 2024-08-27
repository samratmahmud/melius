"use client";
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import DrawerLink from "./DrawerLink";

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
   const [open, setOpen] = React.useState(false);
   const toggle = () => setOpen((prev) => !prev);

   return (
      <nav>
         <div className="container">
            <div className="flex items-center justify-between gap-5 lg:py-[21px] py-4">
               <Link href="/">
                  <img className="h-10 md:h-auto" src="/images/logo.svg" alt="" />
               </Link>
               <div className="lg:flex hidden items-center xl:gap-5 gap-3">
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
                  <div className="md:flex hidden items-center xl:gap-[30px] gap-5">
                     <Button color="gray" size="small" variant="outlined">
                        Sign in
                     </Button>
                     <Button size="small">Sign up for free</Button>
                  </div>
                  <div onClick={toggle} className="lg:w-[68px] w-[62px]" role="button">
                     <img src="/images/menu-icon.png" alt="" />
                  </div>
               </div>
            </div>
            <div aria-label="Mobile Navigation">
               <Drawer
                  open={open}
                  onClose={toggle}
                  direction="right"
                  className="lg:!w-[62%] md:!w-[72%] !w-full"
               >
                  <div className="h-screen overflow-auto bg-white md:py-5 py-4 xl:px-24 lg:px-16 md:px-12 px-8">
                     <div className="flex items-center justify-end xl:gap-7 gap-5 xl:mb-[120px] lg:mb-24 md:mb-16 sm:mb-12 mb-8">
                        <Button
                           color="gray"
                           size="small"
                           variant="outlined"
                           className="text-black hover:text-white hover:bg-black border-black ring-black/50 min-w-[166px] hidden sm:block"
                        >
                           Sign in
                        </Button>
                        <Button
                           size="small"
                           className="bg-black hover:border-black hover:text-black border-black ring-black/50 hidden sm:block"
                        >
                           Sign up for free
                        </Button>
                        <div onClick={toggle} role="button">
                           <img
                              className="w-[62px] md:w-auto"
                              src="/images/close.svg"
                              alt=""
                           />
                        </div>
                     </div>
                     <DrawerLink />
                  </div>
               </Drawer>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
