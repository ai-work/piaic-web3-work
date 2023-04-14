import "./globals.css";
import Header from "@/components/Header";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "StepX Web 3",
  description: "Created by MAS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
