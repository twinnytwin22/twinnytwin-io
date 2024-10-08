import Image from "next/image";
import React from "react";
import { getSanityImage } from "@/lib/providers/sanity/lib/image";
import { ButtonGroup } from "ui/Components/LinkModal";
import { getLinks, getSongs } from "utils/db";
import { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0
export async function generateMetadata({ params }: { params: { id: string } }):Promise<Metadata>  {
  const [songs, links] = await Promise.all([getSongs(), getLinks()]);
  const { id } = params;
  const song = songs.find((song: any) => song._id === id);
  const image = getSanityImage(song.coverImage)
  return {
    title: song.title,
    openGraph: {
      title: song.title, 
      images: [image]
    }
  }
}


async function page({ params }: { params: { id: string } }) {
  const [songs, links] = await Promise.all([getSongs(), getLinks()]);
  const { id } = params;
  const song = songs.find((song: any) => song._id === id);

  const props = {
    links,
    song,
  };

  return (
    <>
      {song && (
        <div className="relative  overflow-hidden">
          <div className="absolute inset-0 overflow-visible bg-black opacity-30 object-cover">
            <Image
              alt={song?.title}
              src={getSanityImage(song.coverImage)}
              fill
              //layout="fill"
              className="object-cover scale-150 blur"
            />
          </div>
          <div className="bg-black bg-opacity-80 flex justify-center items-center md:px-4  ">
            <div className="bg-black border border-zinc-800 rounded p-5 max-w-md mx-auto min-h-72 relative mb-24 mt-24 font-owners font-bold">
              <ButtonGroup {...props} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default page;
