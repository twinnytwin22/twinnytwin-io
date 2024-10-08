"use client";
import React from "react";
//import { YoutubeVideo } from "ui/Misc/YoutubeVideo";
import dynamic from "next/dynamic";
const CollectionContent = ({ props }: any) => {
  const info = props && props[0] || [];
  const collection =props && props[1]?.collection || [];
  const properties = collection?.traits || {};
  const id = "2g811Eo7K8U";

  // const CollectorList = dynamic(() => import("ui/Cards/CollectorList"), {
  //   ssr: false,
  // });

  // const CollectionStats = dynamic(() => import("ui/Misc/CollectionStats"), {
  //   ssr: false,
  // });
  return (
    <section className="bg-white dark:bg-black ">
      <div className="gap-8 items-start mx-auto py-8 px-4 max-w-7xl md:max-w-screen xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="hidden md:block">
          {/* <CollectorList collectors={props[2]} /> */}
        </div>
        <div className="mt-4 md:mt-0">
          {/* <CollectionStats data={collection} /> */}
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">
            {info?.description || ''}
          </h2>
          <p className="mb-6 font-light text-gray-500 text-2xl md:text-lg dark:text-gray-400">
            {collection?.description || ''}
          </p>
          <h5 className="mb-4 text-xl tracking-tight font-extrabold text-black dark:text-white">
            More on this collection
          </h5>
          {!props && (
            <div className="mb-4">
              <h5 className=" text-md tracking-tight font-bold text-black dark:text-white pr-5">
                Properties:
              </h5>
              <div className="grid lg:grid-cols-3 m:grid-cols-2 sm:grid-cols-1 w-full p-4 gap-6 ">
                {Object.keys(properties).map((trait: any, i: any) => (
                  <div
                    className="w-38 p-2 bg-white border rounded-lg shadow-md sm:p-4 dark:bg-gray-800 dark:border-gray-700"
                    key={i}
                  >
                    <p className="mb-4 text-xs tracking-tight font-md text-black dark:text-white text-center uppercase">
                      {trait}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex">
            <h5 className="mb-4 text-md tracking-tight font-bold text-black dark:text-white pr-5">
              Contract:
            </h5>

            <p className="mb-4 text-md tracking-tight font-md text-black dark:text-white truncate">
              {info?.contract}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-1">
            <div className="flex">
              <h5 className="mb-4 text-md tracking-tight font-bold text-black dark:text-white pr-5">
                Token Type:
              </h5>
              <p className="mb-4 text-md tracking-tight font-md text-black dark:text-white">
                {/* { collection?.primary_asset_contracts[0]?.schema_name ||  ''} */}
              </p>
            </div>
            <div className="flex">
              <h5 className="mb-4 text-md tracking-tight font-bold text-black dark:text-white pr-5">
                Mint Price
              </h5>
              <p className="mb-4 text-md tracking-tight font-md text-black dark:text-white">
                {info?.mintPrice} {info.chain == 'eth' ? 'ETH' : "MATIC"}
              </p>
            </div>
            <div className="flex col-span-2">
              <h5 className="mb-4 text-md tracking-tight font-bold text-black dark:text-white pr-5">
                Tags:
              </h5>
              <div className="mx-auto ">
                {info?.tags?.map((tag: any) => (
                  <span
                    className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-black "
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {!id && (
            <div className="p-8">
              {/* <YoutubeVideo id={id} /> */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CollectionContent;
