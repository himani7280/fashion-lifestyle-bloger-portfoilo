import React from "react";
import CategoryCollectionPage from "@/components/CategoryCollectionPage";
import fashionData from "@/data/fashionData.json";
import { WomenCollection } from "@/data/fashionData";

export const metadata = {
  title: "Office Wear — Women's Fashion Collection | Formal Shirts, Blazers & Office Dresses",
  description: "Executive sophistication, sharp double-breasted blazers, fluid silk blouses, and modern sheath office dresses for women.",
};

export default function OfficeWearPage() {
  const collections = (fashionData as unknown as { womenFashionCollections: WomenCollection[] }).womenFashionCollections;
  const collection = collections.find((c) => c.id === "office-wear") || collections[4];

  return <CategoryCollectionPage collection={collection} />;
}
