"use client";
import { useState } from "react";
//import { LayloBar } from "ui/Modals/LayloModals";
import CollectionCard from "./Components/CollectionCard";
//import AllStats from "../Misc/AllStats";
//import CribFinder from "../Misc/CribFinder";
//import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function AllCollections({ collections }: any) {
  const [sortType, setSortType] = useState("mintStatus");
  const [searchQuery, setSearchQuery] = useState("");

  const allCollections = collections.sort((a: any, b: any) => {
    if (sortType === "mintPrice") {
      return a.mintPrice - b.mintPrice;
    } else if (sortType === "mintStatus") {
      if (a.mintStatus === "upcoming" || a.mintStatus === "active") {
        if (b.mintStatus === "upcoming" || b.mintStatus === "active") {
          return 0;
        } else {
          return -1;
        }
      } else if (b.mintStatus === "upcoming" || b.mintStatus === "active") {
        return 1;
      } else {
        return a._createdAt - b._createdAt;
      }
    } else if (sortType === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortType === "_createdAt") {
      return b._createdAt - a._createdAt;
    } else {
      return b.mintactive - a.mintactive;
    }
  });
  const filteredCollections = allCollections.filter((collection: any) => {
    const lowerCaseQuery = searchQuery.toLowerCase();

    return (
      collection.title.toLowerCase().includes(lowerCaseQuery) ||
      collection.description.toLowerCase().includes(lowerCaseQuery)
    );
  });

  return (
    <section className="bg-black w-full">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-10 md:mx-auto flex justify-center md:justify-between items-center mb-6">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              className="px-4 py-2 text-sm font-medium border rounded-l-lg  bg-black border-zinc-800 text-white hover:text-white hover:bg-zinc-800 focus:ring-red-500 focus:text-white"
              onClick={() => setSortType("mintStatus")}
            >
              Status
            </button>
            <button
              className="px-4 py-2 text-sm font-medium  border-t border-b  bg-black border-zinc-800 text-white hover:text-white hover:bg-zinc-800 focus:ring-red-500 focus:text-white"
              onClick={() => setSortType("title")}
            >
              A-Z
            </button>
            <button
              className="px-4 py-2 text-sm font-medium  border  rounded-r-md   bg-black border-zinc-800 text-white hover:text-white hover:bg-zinc-800 focus:ring-red-500 focus:text-white"
              onClick={() => setSortType("mintPrice")}
            >
              Price
            </button>
          </div>
        </div>
        <div className="mx-10 md:mx-auto grid gap-8  md:grid-cols-2">
          {filteredCollections.map((collection: any, i: any) => (
            <CollectionCard collection={collection} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
