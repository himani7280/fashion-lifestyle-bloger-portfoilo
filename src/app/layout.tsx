import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fonts } from "@/data/fashionData";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tara Verma — Fashion & Lifestyle Portfolio",
  description:
    "Official fashion and lifestyle portfolio of Tara Verma. High-fashion runway, editorial campaigns, luxury services, and curated lifestyle journal.",
  keywords:
    "Tara Verma, Fashion & Lifestyle, Women's Fashion, Runway Model, Editorial Campaigns, Fashion Services, Lifestyle Blog",
  openGraph: {
    title: "Tara Verma — Fashion & Lifestyle Portfolio",
    description: "Official fashion and lifestyle portfolio of Tara Verma.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="antialiased text-[16px] font-normal overflow-x-clip max-w-full w-full"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={fonts.googleFontsUrl} rel="stylesheet" />
      </head>
      <body
        className={`${fonts.body} min-h-screen flex flex-col bg-[#0A0A0A] text-[#F5F0E8] text-[14px] font-normal leading-[1.6] selection:bg-[#C9A96E] selection:text-[#0A0A0A] overflow-x-clip max-w-full w-full relative`}
      >
        <Header />
        <main className="flex-1 w-full max-w-full overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
