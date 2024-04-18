import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";



export const metadata: Metadata = {
  title: "My Drawings",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    <html lang="en">
      <body className="bg-white container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] ">
        <Header/>
        {children}
        <footer className="text-center leading-[4rem] opacity-70 text-black">
          © {new Date().getFullYear()} My drawings App
        </footer>
      </body>
    </html>
  );
}
