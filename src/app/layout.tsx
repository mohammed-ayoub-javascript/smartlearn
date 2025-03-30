import type { Metadata } from "next";
import {   Cairo } from "next/font/google";
import "./globals.css";
const ar = Cairo({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "SmartLearn",
  description: "SmartLearn The best",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body
        className={`${ar.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
