import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationMenuDemo from "@/components/nav-menu/navmenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teste - NextTrack",
  description: "Teste - NextTrack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationMenuDemo />
        {children}
      </body>
    </html>
  );
}
