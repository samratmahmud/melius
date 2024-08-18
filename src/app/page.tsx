import React from "react";
import Header from "./home/Header";
import Support from "./home/Support";
import Dashboard from "./home/Dashboard";
import Pricing from "./home/Pricing/Pricing";
import Datepicker from "./home/Datepicker";

function page() {
   return (
      <main>
         <Header />
         <Support />
         <Dashboard />
         <Pricing />
         <Datepicker />
      </main>
   );
}

export default page;
