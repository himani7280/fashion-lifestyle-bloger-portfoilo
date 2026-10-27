import React from "react";
import CategoryCollectionPage from "@/components/CategoryCollectionPage";
import fashionData from "@/data/fashionData.json";
import { WomenCollection } from "@/data/fashionData";

export const metadata = {
  title: "Casual Wear — Women's Fashion Collection | Tops, Jeans & Casual Dresses",
  description: "Explore our curated women's casual wear collection featuring effortless everyday street elegance, chic tops, trousers, and casual dresses.",
};

export default function CasualWearPage() {
  const collections = (fashionData as unknown as { womenFashionCollections: WomenCollection[] }).womenFashionCollections;
  const collection = collections.find((c) => c.id === "casual-wear") || collections[0];

  return <CategoryCollectionPage collection={collection} />;
}
