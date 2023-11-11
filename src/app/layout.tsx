import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/pages/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baggins",
  description: "Entertainment and Event Production",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

// data-theme="light"
