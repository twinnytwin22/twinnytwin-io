import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getSanityImage } from "@/lib/providers/sanity/lib/image";

function LatestReleases({ songs }: { songs?: any }) {
  return (
    <div className="relative max-w-7xl w-full ">
      <h2 className="font-owners text-3xl font-extrabold uppercase pb-2">
        LATEST
      </h2>
      <div className="relative max-w-6xl w-full mx-auto">
        <div className="flex w-full justify-between space-x-4 overflow-x-scroll  h-fit items-start scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent ">
          {songs.slice(0, 5).map((release: any) => (
            <div id={release._id} className="rounded py-4">
                <Link href={`/music/${release._id}`}>
              <Image
                alt={release?.title}
                src={getSanityImage(release.coverImage)}
                width={200}
                height={200}
                className="rounded min-w-36 min-h-36 md:min-w-48 md:min-h-48    "
              />
              <p className="text-xs font-owners-wide">{release.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full place-content-end flex pt-4'>
        <Link href={"/music"}>
        <p className='font-owners-wide rounded p-2 bg-red-600 w-fit'>
            View All</p>
        </Link>
      </div>
    </div>
  );
}

export default LatestReleases;
