import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/Layout";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="flex flex-col justify-between items-center">
          <Navbar />
          <main className="flex flex-col min-h-screen py-10 max-w-[64rem] mx-auto px-4 sm:px-6 lg:px-8 md:w-[80%] lg:w-[72%]">
            {children}
          </main>
      </body>
    </html>
  );
}
