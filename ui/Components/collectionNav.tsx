'use client'
import dynamic from "next/dynamic";
import { useState } from "react";
import { ShareButton } from "../ShareCardButton";
import CollectionContent from "./CollectionContent";

const ViewNfts = dynamic(() => import("./ViewNfts"), { ssr: false });

function CollectionNav({ props }: any) {
  const [activeTab, setActiveTab] = useState("details");
  
  return (
    <div className="flex flex-col w-full mx-auto justify-center items-center content-center justify-items-center mt-8">
      <div className="grid grid-cols-12">
        <div className="flex col-span-2"></div>
      <div className="flex col-span-8 justify-center">
        <div
          onClick={() => setActiveTab("details")}
          className="w-full border border-zinc-800  text-white py-2 px-4 rounded font-medium hover:bg-zinc-900 "
          >
          Details
        </div>
        <div
          onClick={() => setActiveTab("view-collection")}
          className="w-full text-nowrap border border-zinc-800  text-white py-2 px-4 rounded font-medium hover:bg-zinc-900 "
          >
          View Collection
        </div>
      </div>
      <div className="flex col-span-2 justify-end">
        {/* <ShareButton url={`/nft/${props[0]?.contract}`} title={props[1]?.collection?.name} /> */}
      </div>
      </div>
     
      <div className="w-screen p-6">
        {activeTab === "details" && <CollectionContent props={props} />}
        {activeTab === "view-collection" && <ViewNfts props={props} />}
      </div>
    </div>
  );
}

export default CollectionNav;
