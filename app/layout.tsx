import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Recommendations",
  description: "Generated by create next app",
  // viewport: {
  //   width: 'device-width',
  //   initialScale: 1,
  // }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <main>{children}</main>
      </body>
    </html>
  );
}
