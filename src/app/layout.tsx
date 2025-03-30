import type { Metadata } from "next";
import {   Cairo , Almarai} from "next/font/google";
import "./globals.css";
const ar = Almarai({
  variable: "--arabic",
  weight:"400",
  subsets: ["arabic"],
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
    <html lang="ar" dir="rtl">
      <body
        className={`${ar.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
