// layout.tsx is the root of your React Component Tree
// children - is essentially all the pages

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MyContainer from "@/components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS - Blog",
  description: "Blog Posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-zinc-900 bg-zinc-100 min-h-screen`}>

        <MyContainer>
        {/* header */}
        <Header></Header>
        {children}        
        {/* footer */}
        <Footer></Footer>
        </MyContainer>
        </body>
    </html>
  );
}
