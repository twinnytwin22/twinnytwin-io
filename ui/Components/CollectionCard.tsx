"use client";
import React from "react";
import Link from "next/link";
import {
  ActiveIndicator,
  NonActiveIndicator,
  UpcomingIndicator,
} from "../Components/Indicator";
import { MintPrice } from "./MintPrice";
import { getSanityImage } from "@/lib/providers/sanity/lib/image";
function CollectionCard({ collection, i }: any) {
  const chainSymbol = collection?.chain == "eth" ? "ETH" : "MATIC";
  const price = collection?.mintPrice;

  const MAX_DESCRIPTION_LENGTH = 100;

  const shortDescription =
    collection?.description?.length > 105
      ? collection?.description.substr(0, MAX_DESCRIPTION_LENGTH) + "..."
      : collection?.description;

  const mintStatus = collection?.mintStatus as string;
  console.log(mintStatus, "MS");

  return (
    <div key={collection._id}>
      <Link
        href={`collection/${collection?.slug?.current}`}
        className="flex flex-col items-center  border rounded shadow-md md:flex-row md:max-w-xl  border-zinc-800 bg-black hover:bg-zinc-950"
      >
        <img
          key={collection?.nftImage}
          className="object-cover aspect-square w-full rounded-t-lg h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={getSanityImage(collection?.nftImage)}
          alt=""
        />

        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-white uppercase font-owners">
            {collection?.title}
          </h5>
          <div className="flex mb-3 content-center items-center">
            <h6 className="hidden md:block text-sm uppercase text-white tracking-tight pr-5 items-center"></h6>
            {mintStatus == "upcoming" && <UpcomingIndicator />}{" "}
            {mintStatus == "active" && <ActiveIndicator />}{" "}
            {mintStatus == "inactive" && <NonActiveIndicator />}
            {mintStatus !== "inactive" && (
              <MintPrice chainSymbol={chainSymbol} mintPrice={price} />
            )}
          </div>
          <p className="hidden lg:block mb-3 font-normal text-sm text-zinc-400">
            {shortDescription}
          </p>
          <div className="mx-auto">
            {collection?.tags?.slice(0, 3).map((tag: any) => (
              <span
                key={tag}
                className="  text-[8px] md:text-[10px] lg:text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-zinc-200 text-zinc-900"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CollectionCard;
