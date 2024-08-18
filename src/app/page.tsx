import React from "react";
import Header from "./home/Header";
import Support from "./home/Support";
import Dashboard from "./home/Dashboard";
import Pricing from "./home/Pricing/Pricing";
import Datepicker from "./home/Datepicker";
import Discovary from "./home/Discovary";
import Account from "./home/Account";

function page() {
   return (
      <main>
         <Header />
         <Support />
         <Dashboard />
         <Pricing />
         <Datepicker />
         <Discovary />
         <Account />
      </main>
   );
}

export default page;
