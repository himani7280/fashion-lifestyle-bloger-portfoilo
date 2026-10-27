import React from "react";
import CategoryCollectionPage from "@/components/CategoryCollectionPage";
import fashionData from "@/data/fashionData.json";
import { WomenCollection } from "@/data/fashionData";

export const metadata = {
  title: "Party Wear — Women's Fashion Collection | Party Dresses, Cocktail & Sequin Outfits",
  description: "Dazzling evening gowns, sculpted cocktail dresses, and sequin glam outfits tailored for women's high-glamour celebrations.",
};

export default function PartyWearPage() {
  const collections = (fashionData as unknown as { womenFashionCollections: WomenCollection[] }).womenFashionCollections;
  const collection = collections.find((c) => c.id === "party-wear") || collections[1];

  return <CategoryCollectionPage collection={collection} />;
}
