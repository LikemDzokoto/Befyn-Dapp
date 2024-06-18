import { Plus_Jakarta_Sans } from "@next/font/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const pj = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-pj" });

export const metadata: Metadata = {
  title: "Befyn",
  description: "Secure your Health,Share Wealth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className={`${pj.variable} font-pj`}>
      <AppProvider>
        <Header />
        {/* Workaround for fixed header block hero content, added mt-11 to the div */}
        <div className="mt-11">{children}</div>
        <Footer />
      </AppProvider>
    </div>
    </html>
  );
}
