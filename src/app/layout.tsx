import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
      className={`${playfair.variable} ${poppins.variable} antialiased overflow-x-clip max-w-full w-full`}
    >
      <body className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#F5F0E8] selection:bg-[#C9A96E] selection:text-[#0A0A0A] font-[family-name:var(--font-poppins)] overflow-x-clip max-w-full w-full relative">
        <Header />
        <main className="flex-1 w-full max-w-full overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
