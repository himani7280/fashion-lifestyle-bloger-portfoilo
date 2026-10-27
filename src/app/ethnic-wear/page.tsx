import React from "react";
import CategoryCollectionPage from "@/components/CategoryCollectionPage";
import fashionData from "@/data/fashionData.json";
import { WomenCollection } from "@/data/fashionData";

export const metadata = {
  title: "Ethnic Wear — Women's Fashion Collection | Sarees, Lehengas & Kurtis",
  description: "Hand-loomed Banarasi sarees, ornate bridal lehengas, and artisanal kurtis celebrating royal Indian craftsmanship.",
};

export default function EthnicWearPage() {
  const collections = (fashionData as unknown as { womenFashionCollections: WomenCollection[] }).womenFashionCollections;
  const collection = collections.find((c) => c.id === "ethnic-wear") || collections[2];

  return <CategoryCollectionPage collection={collection} />;
}
