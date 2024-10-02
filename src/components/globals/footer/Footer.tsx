/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import {GrInstagram} from "react-icons/gr";
import {FaFacebookF} from "react-icons/fa6";
import {FaLinkedinIn} from "react-icons/fa";
import TextField from "@/components/common/TextField";
import TextArea from "@/components/common/Textarea";
import Button from "@/components/common/Button";

const mediaLinks = [
   {
      icon: <GrInstagram />,
      href: "https://www.instagram.com/",
   },
   {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/",
   },
   {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/",
   },
];

const footerLink = [
   {
      name: "Contact Us",
      url: "/",
   },
   {
      name: "Privacy Statement",
      url: "/",
   },
   {
      name: "About Us",
      url: "/",
   },
   {
      name: "Terms & Conditions",
      url: "/",
   },
   {
      name: "Sitemap",
      url: "/",
   },
   {
      name: "Cookie Policy/Settings",
      url: "/",
   },
];

function Footer() {
   return (
      <footer className="pb-10 relative z-50">
         <div className="container">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:gap-7 gap-4 gap-y-10 lg:pt-5 md:pt-3">
               <div className="flex flex-col justify-between gap-5">
                  <Link href="/">
                     <img src="/images/Group 1.svg" alt="" />
                  </Link>
                  <div className="flex gap-6">
                     {mediaLinks.map(({icon, href}, index) => (
                        <Link
                           href={href}
                           key={index}
                           target="_blank"
                           className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-2 hover:bg-primary-500 duration-300 group"
                        >
                           <span className="text-3xl text-black group-hover:text-white duration-200">
                              {icon}
                           </span>
                        </Link>
                     ))}
                  </div>
               </div>
               <div className="flex flex-col md:gap-3.5 gap-2.5">
                  {footerLink.map(({name, url}, index) => (
                     <Link
                        href={url}
                        key={index}
                        target="_blank"
                        className="text-2xl leading-[1.1em] font-code-pro-lc hover:no-underline hover:text-primary-500 duration-300 py-1"
                     >
                        {name}
                     </Link>
                  ))}
               </div>
               <div>
                  <h6 className="text-4xl font-medium font-tt-hoves lg:mb-7 mb-5">
                     Get in touch
                  </h6>
                  <div className="flex flex-col gap-3">
                     <TextField placeholder="Name" type="text" />
                     <TextField placeholder="Last Name" type="text" />
                     <TextField placeholder="Email" type="email" />
                  </div>
               </div>
               <div className="flex flex-col gap-3 lg:mt-14 md:mt-10 mt-4">
                  <TextArea placeholder="Message" />
                  <Button
                     variant="outlined"
                     className="bg-black-primary bg-transparent header-button-blur min-w-[none]"
                  >
                     Send message
                  </Button>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
