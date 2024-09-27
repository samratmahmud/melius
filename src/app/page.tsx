import React from "react";
import Header from "./home/Header";
import Support from "./home/Support";
import Dashboard from "./home/Dashboard";
import Pricing from "./home/Pricing/Pricing";
import Datepicker from "./home/Datepicker";
import Discovary from "./home/Discovary";
import Roadmap from "./home/Roadmap";

function page() {
   return (
      <main>
         <Header />
         <Support />
         <Dashboard />
         <Pricing />
         <Datepicker />
         {/* <Roadmap /> */}
         <Discovary />
      </main>
   );
}

export default page;
