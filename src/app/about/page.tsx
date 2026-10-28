
import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Tara Verma — Fashion & Lifestyle Portfolio",
  description:
    "Discover Tara Verma's fashion styling journey, aesthetic pillars, creative philosophy, and archival personal portrait exhibition.",
};

export default function AboutPage() {
  return <AboutContent />;
}
