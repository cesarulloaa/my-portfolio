import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./globals.css";
import { Urbanist } from 'next/font/google';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Navbar from "@/components/navbar";
import Header from "@/components/header";


const urbanist = Urbanist({subsets: ["latin"]})



export const metadata: Metadata = {
  title: "Ulloa Dev  👨‍💻",
  description: "Made by UlloaDev",
  icons: {
    icon: "/programacion-web.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        {/* Agrega el favicon aquí */}
        <link rel="icon" href="/landing-ulloa/public/programacion-web.png" type="image/x-icon" />
      </head>
      <body
        className={urbanist.className}>
          <Navbar/>
          <Header/>
        {children}
      </body>
    </html>
  );
}
