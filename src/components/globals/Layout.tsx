import React, {ReactNode} from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

interface LayoutProps {
   children?: ReactNode;
}

function Layout({children}: LayoutProps) {
   return (
      <div className="bg-gray-950">
         <Navbar />
         {children}
         <Footer />
      </div>
   );
}

export default Layout;
