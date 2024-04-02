import { getCollectibles } from "@/utils/db";
import React from "react";
import AllCollections from "ui/AllCollections";
export const dynamic = "force-dynamic";

async function Page() {
  const collectibles = await getCollectibles();
  console.log(collectibles);
  return (
    <main className="relative max-w-7xl w-full py-28 mx-auto p-8">
      <h2 className="font-owners text-3xl font-extrabold uppercase pb-2">
        Collectibles
      </h2>
      <AllCollections collections={collectibles} />
    </main>
  );
}

export default Page;
