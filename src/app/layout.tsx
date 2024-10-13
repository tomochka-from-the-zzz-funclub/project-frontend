import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sirius - кинотеатр",
  description: "Sirius - кинотеатр. Сделан в рамках проекта по питону",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <title>Sirius - кинотеатр</title>
        <link rel="icon" type="image/png" href="favicon.png" sizes="32x32"/>
    </head>
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative dark bg-[#222222] pt-12 pb-12  h-full`}
      >
        {children}
      </body>
    </html>
  );
}
