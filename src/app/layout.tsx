import Layout from "@/components/globals/Layout";
import "@/styles/main.css";
import type {Metadata} from "next";
import {Grape_Nuts, DM_Sans, Inter_Tight} from "next/font/google";

const grapeNuts = Grape_Nuts({
   subsets: ["latin"],
   variable: "--font-grape-nuts",
   weight: "400",
});
const dmSans = DM_Sans({
   subsets: ["latin"],
   variable: "--font-dm-sans",
   weight: "400",
});
const interTight = Inter_Tight({
   subsets: ["latin"],
   variable: "--font-inter-tight",
   weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
   title: "Melius Design Apps",
   description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
   return (
      <html lang="en">
         <body
            className={`${grapeNuts.variable} ${dmSans.variable} ${interTight.variable}`}
         >
            <Layout>{children}</Layout>
         </body>
      </html>
   );
}
