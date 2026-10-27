import React from "react";
import CategoryCollectionPage from "@/components/CategoryCollectionPage";
import fashionData from "@/data/fashionData.json";
import { WomenCollection } from "@/data/fashionData";

export const metadata = {
  title: "Seasonal Wear — Women's Fashion Collection | Summer, Winter Coats & Spring Wear",
  description: "Curated four-season luxury wardrobe featuring breathable summer linens, Italian cashmere trench overcoats, and floral spring chiffons.",
};

export default function SeasonalWearPage() {
  const collections = (fashionData as unknown as { womenFashionCollections: WomenCollection[] }).womenFashionCollections;
  const collection = collections.find((c) => c.id === "seasonal-wear") || collections[6];

  return <CategoryCollectionPage collection={collection} />;
}
