import Button from "@/components/common/Button";
import Link from "next/link";
import React, {Fragment} from "react";
import {FaFacebookF, FaLinkedinIn} from "react-icons/fa6";
import {GrInstagram} from "react-icons/gr";

const drawerLink = [
   {
      title: "lorem ipsum",
      link: [
         {
            name: "lorem ipsum",
            url: "/",
         },
         {
            name: "lorem ipsum",
            url: "/",
         },
         {
            name: "lorem ipsum",
            url: "/",
         },
      ],
   },
   {
      title: "lorem ipsum",
      link: [
         {
            name: "lorem ipsum",
            url: "/",
         },
         {
            name: "lorem ipsum",
            url: "/",
         },
         {
            name: "lorem ipsum",
            url: "/",
         },
      ],
   },
   {
      title: "lorem ipsum",
      link: [
         {
            name: "lorem ipsum",
            url: "/",
         },
         {
            name: "lorem ipsum",
            url: "/",
         },
         {
            name: "lorem ipsum",
            url: "/",
         },
      ],
   },
   {
      title: "lorem ipsum",
      link: [
         {
            name: "lorem ipsum",
            url: "/",
         },
         {
            name: "lorem ipsum",
            url: "/",
         },
         {
            name: "lorem ipsum",
            url: "/",
         },
      ],
   },
];

const DrawermediaLinks = [
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

function DrawerLink() {
   return (
      <Fragment>
         <div className="grid sm:grid-cols-2 xl:gap-20 lg:gap-10 gap-[30px] xl:mb-32 lg:mb-28 md:mb-16 sm:mb-12 mb-10">
            {drawerLink.map(({title, link}, index) => (
               <div key={index}>
                  <h6 className="text-9xl font-semibold text-gray-950 font-tt-hoves mb:mb-7 mb-5">
                     {title}
                  </h6>
                  <div className="flex flex-col md:gap-4 gap-3">
                     {link.map(({name, url}, index) => (
                        <Link
                           key={index}
                           href={url}
                           className="text-4xl text-gray-950 hover:text-primary-500 duration-300 font-code-pro-lc hover:no-underline"
                        >
                           {name}
                        </Link>
                     ))}
                  </div>
               </div>
            ))}
         </div>
         <div className="flex sm:hidden flex-col md:gap-6 gap-4 mb-10">
            <Button
               color="gray"
               size="small"
               variant="outlined"
               className="text-black hover:text-white hover:bg-black border-black ring-black/50 min-w-[166px] min-h-[42px]"
            >
               Sign in
            </Button>
            <Button
               size="small"
               className="bg-black hover:border-black hover:text-black border-black ring-black/50 min-h-[42px]"
            >
               Sign up for free
            </Button>
         </div>
         <div className="flex justify-center md:justify-start gap-6">
            {DrawermediaLinks.map(({icon, href}, index) => (
               <Link
                  href={href}
                  key={index}
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center p-4 hover:bg-primary-500 duration-300 group"
               >
                  <span className="text-4xl text-white group-hover:text-white duration-200">
                     {icon}
                  </span>
               </Link>
            ))}
         </div>
      </Fragment>
   );
}

export default DrawerLink;
