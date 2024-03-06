import { Inter } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/main-nav";

export const metadata = {
  title: "Philosopher's Hub",
  description: "Chat with your favorite personalities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="box-border h-screen">
      <body className=" w-full m-0 p-2 h-full">
        <MainNav />
        <main className="flex flex-col items-center justify-between h-full mt-20">
          {children}
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
