import React from "react";
import CategoryCollectionPage from "@/components/CategoryCollectionPage";
import fashionData from "@/data/fashionData.json";
import { WomenCollection } from "@/data/fashionData";

export const metadata = {
  title: "Wedding & Festive Wear — Women's Fashion Collection | Bridal, Festive Suits & Reception Gowns",
  description: "Heirloom bridal lehengas, royal festive suits with intricate gota patti, and champagne reception gowns for grand celebrations.",
};

export default function WeddingFestivePage() {
  const collections = (fashionData as unknown as { womenFashionCollections: WomenCollection[] }).womenFashionCollections;
  const collection = collections.find((c) => c.id === "wedding-festive") || collections[5];

  return <CategoryCollectionPage collection={collection} />;
}
