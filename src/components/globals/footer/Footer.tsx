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
      <footer className="pt-5 pb-10">
         <div className="container">
            <div className="grid grid-cols-4 gap-7">
               <div className="flex flex-col justify-between gap-5">
                  <Link href="/">
                     <img src="/images/Group 1.svg" alt="" />
                  </Link>
                  <div className="flex gap-6">
                     {mediaLinks.map(({icon, href}, index) => (
                        <Link
                           href={href}
                           key={index}
                           className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-2 hover:bg-primary-500 duration-300 group"
                        >
                           <span className="text-3xl text-black group-hover:text-white duration-200">
                              {icon}
                           </span>
                        </Link>
                     ))}
                  </div>
               </div>
               <div className=" flex flex-col gap-[22px]">
                  {footerLink.map(({name, url}, index) => (
                     <Link
                        href={url}
                        key={index}
                        className="text-2xl leading-[1.1em] font-code-pro-lc hover:no-underline hover:text-primary-500 duration-300"
                     >
                        {name}
                     </Link>
                  ))}
               </div>
               <div>
                  <h6 className="text-4xl font-medium font-tt-hoves mb-7">
                     Get in touch
                  </h6>
                  <div className="flex flex-col gap-3">
                     <TextField placeholder="Name" />
                     <TextField placeholder="Last Name" />
                     <TextField placeholder="Email" />
                  </div>
               </div>
               <div className="flex flex-col gap-3 mt-14">
                  <TextArea placeholder="Message" />
                  <Button
                     variant="outlined"
                     className="bg-black-primary bg-transparent header-button-blur"
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
