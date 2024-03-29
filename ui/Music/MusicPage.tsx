"use client";
import React from "react";
import Image from "next/image";
import { getSanityImage } from "@/lib/providers/sanity/lib/image";
import { FaCaretLeft, FaCaretRight, FaPlay } from "react-icons/fa6";
import { useLinkStore } from "ui/Components/Links/store";
import { useRouter } from "next/navigation";
function MusicPage({ music }: any) {
  const { song } = useLinkStore();
  const router = useRouter();
  const setSong = (song: any) => useLinkStore.setState({ song });
  const handleOpenLinkTree = (song: any) => {
    setSong(song);
  };
  return (
    <div className=" mx-auto p-8 max-w-5xl gap-8 justify-around items-center font-owners">
      <div className="mt-8">
        <h1 className="font-bold text-lg">Singles</h1>
        <div className="flex items-center">
          <FaCaretLeft className="block md:hidden text-5xl pr-2" />

          <div className="flex md:grid md:grid-cols-3 md:justify-items-center w-full items-center gap-8 overflow-x-auto space-y-2">
            {music.map((item: any) => {
              const image = getSanityImage(item.coverImage);
              if (item.type === "single")
                return (
                  <div key={item.title} className="w-full mx-auto relative">
                    <Image
                      onClick={() => router.push(`music/${item._id}`)}
                      className="rounded border border-zinc-900 min-w-[200px] w-full mx-auto cursor-pointer"
                      src={image}
                      alt={item.title}
                      width={250}
                      height={250}
                    />
                    <div
                      onClick={() => handleOpenLinkTree(item)}
                      className="absolute bottom-12 right-4 bg-red-600  rounded-full p-4 text-lg hover:scale-110 ease-in-out duration-500"
                    >
                      <FaPlay />
                    </div>
                    <p className="text-sm md:text-base mt-2">{item.title}</p>
                  </div>
                );
            })}
          </div>
          <FaCaretRight className="block md:hidden text-5xl pl-2" />
        </div>
        <div className="mt-8 border-b border-zinc-900" />

        <div className="mt-8">
          <h1 className="font-bold text-lg">Remixes</h1>
          <div className="flex items-center">
            <FaCaretLeft className="block md:hidden text-5xl pr-2" />
            <div className="flex md:grid md:grid-cols-3 md:justify-items-center items-center w-full gap-8 overflow-x-auto space-y-2">
              {music.map((item: any) => {
                const image = getSanityImage(item.coverImage);

                if (item.type === "remix")
                  return (
                    <div key={item._id} className="w-full relative">
                      <Image
                        onClick={() => router.push(`music/${item._id}`)}
                        className="rounded border border-zinc-900 min-w-[200px] w-full mx-auto cursor-pointer"
                        src={image}
                        alt={item.title}
                        width={250}
                        height={250}
                      />

                      <div
                        onClick={() => handleOpenLinkTree(item)}
                        className="absolute bottom-12 right-4 bg-red-600 rounded-full p-4 text-lg"
                      >
                        <FaPlay />
                      </div>
                      <p className="text-sm md:text-base mt-2">{item.title}</p>
                    </div>
                  );
              })}
            </div>
            <FaCaretRight className="block md:hidden text-5xl pl-2" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-md md:max-w-7xl md:p-4 w-full  md:items-center"></div>
    </div>
  );
}

export default MusicPage;
