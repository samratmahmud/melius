/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imagesGroup = [
   "/images/Add your screen inside.jpg",
   "/images/Add your screen inside.jpg",
   "/images/Add your screen inside.jpg",
   "/images/Add your screen inside.jpg",
   "/images/Add your screen inside.jpg",
];

function Dashboard() {
   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
   };
   return (
      <section className="bg-amber-400/15 py-[72px]">
         <div className="container">
            <h2 className="text-10xl font-semibold max-w-[700px] mx-auto text-center mb-5">
               <span className="text-primary-500">Melius SaaS</span> first impression of the
               dashboard
            </h2>
            <Slider {...settings} className="">
               {imagesGroup.map((image, index) => (
                  <div key={index} className="px-60">
                     <img src={image} alt="" className="rounded-xl" />
                  </div>
               ))}
            </Slider>
         </div>
      </section>
   );
}

export default Dashboard;
