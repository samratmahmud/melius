import React from "react";
import Header from "./home/Header";
import Support from "./home/Support";
import Dashboard from "./home/Dashboard";
import Pricing from "./home/Pricing";

function page() {
   return (
      <main>
         <Header />
         <Support />
         <Dashboard />
         <Pricing />
      </main>
   );
}

export default page;
