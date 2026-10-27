import React from "react";
import CategoryCollectionPage from "@/components/CategoryCollectionPage";
import fashionData from "@/data/fashionData.json";
import { WomenCollection } from "@/data/fashionData";

export const metadata = {
  title: "Western Wear — Women's Fashion Collection | Mini & Maxi Dresses, Co-ord Sets & Skirts",
  description: "Modern Parisian and contemporary western silhouettes, clean-cut co-ord sets, fluid bias-cut dresses, and statement skirts.",
};

export default function WesternWearPage() {
  const collections = (fashionData as unknown as { womenFashionCollections: WomenCollection[] }).womenFashionCollections;
  const collection = collections.find((c) => c.id === "western-wear") || collections[3];

  return <CategoryCollectionPage collection={collection} />;
}
