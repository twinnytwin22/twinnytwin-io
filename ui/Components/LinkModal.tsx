"use client";
import React from "react";
import { FaAmazon, FaSpotify, FaMusic, FaYoutube } from "react-icons/fa6";
import { SiDeezer, SiTidal } from "react-icons/si";
import { useLinkStore } from "./Links/store";
import Link from "next/link";
import { getSanityImage } from "lib/providers/sanity/lib/image";
import Image from "next/image";
import { useHandleOutsideClick } from "utils/hooks/handleOutsideClick";
import { SocialLinkGroup } from "./Links/SocialLinksGroup";

const spotifyUrlRegex: { [key: string]: RegExp } = {
  artist: /https:\/\/open.spotify.com\/artist\/([a-zA-Z0-9]+)/,
  track: /https:\/\/open.spotify.com\/track\/([a-zA-Z0-9]+)/,
  playlist: /https:\/\/open.spotify.com\/playlist\/([a-zA-Z0-9]+)/,
  album: /https:\/\/open.spotify.com\/album\/([a-zA-Z0-9]+)/,

};
const getTypeAndId = (url: string) => {
  for (const [type, regex] of Object.entries(spotifyUrlRegex)) {
    const match = url.match(regex);
    if (match && match[1]) {
      return { type, id: match[1] };
    }
  }
  return null; // Invalid URL or unsupported type
};

function extractTrackId(url: string, type: string) {
  const match = url.match(spotifyUrlRegex[type]);

  if (match && match.length > 1) {
    return match[1];
  }
  return "1UEDOxQBNAXS8sbehXdFqa";
}

function LinkModal() {
  const { song } = useLinkStore();
  const setSong = (song: any) => useLinkStore.setState({ song });

  useHandleOutsideClick(song, setSong, "link-modal");
  return (
    <>
      {song && (
        <div className="fixed w-screen h-screen  z-20 flex items-center overflow-y-auto">
          <div className="bg-black opacity-50 fixed z-20 h-screen w-screen overflow-visible" />
          <div className="bg-black border border-zinc-900 rounded p-5 max-w-md mx-auto min-h-72 relative z-30 -mt-36">
            <ButtonGroup song={song} />
          </div>
        </div>
      )}
    </>
  );
}

export default LinkModal;

export const ButtonGroup = ({ song, links }: { song: any; links?: any }) => {
  console.log(song);

  const image = getSanityImage(song.coverImage);
  return (
    <div className="link-modal">
      <h1 className="text-lg font-owners font-bold text-center mb-2">
        {song?.title}
      </h1>
      <Image
        alt={song.title}
        width={250}
        height={250}
        src={image}
        className="rounded-md mx-auto"
      />
      <div className="scale-75 mx-auto my-4">
        {links && <SocialLinkGroup links={links} />}
      </div>
      {song?.spotifyUrl && song.type === 'ep' && (
        <iframe
          className="mb-4"
          src={`https://open.spotify.com/embed/album/${extractTrackId(song.spotifyUrl, "album")}?utm_source=generator`}
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      )}
      {song?.spotifyUrl && song.type === 'single' && (
        <iframe
          className="mb-4"
          src={`https://open.spotify.com/embed/track/${extractTrackId(song.spotifyUrl, "track")}?utm_source=generator`}
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      )}
      {song?.spotifyUrl && (
        <Link className="hidden" target="_blank" href={song.spotifyUrl}>
          <div className="text-white text-center w-full bg-green-700 hover:bg-green-600   font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none ">
            <div className="flex mx-auto space-x-2 items-center justify-center">
              <FaSpotify />
              <p className="font-owners font-bold">Listen on Spotify</p>{" "}
            </div>
          </div>
        </Link>
      )}
      {song?.amazonUrl && (
        <Link target="_blank" href={song.amazonUrl}>
          <div className="text-white text-center w-full    font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 bg-sky-600 hover:bg-sky-500 focus:outline-none ">
            <div className="flex mx-auto space-x-2 items-center justify-center">
              <FaAmazon />
              <p className="font-owners font-bold">Listen on Amazon Music</p>{" "}
            </div>
          </div>
        </Link>
      )}
      {song?.youtubeUrl && (
        <Link target="_blank" href={song.youtubeUrl}>
          <div className="text-white text-center w-full    font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 bg-red-600 hover:bg-red-500 focus:outline-none ">
            <div className="flex mx-auto space-x-2 items-center justify-center">
              <FaYoutube />
              <p className="font-owners font-bold">Listen on Youtube</p>{" "}
            </div>
          </div>
        </Link>
      )}
      {song?.deezerUrl && (
        <Link target="_blank" href={song.deezerUrl}>
          <div className="text-white text-center w-full    font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 bg-indigo-600 hover:bg-indigo-500 focus:outline-none ">
            <div className="flex mx-auto space-x-2 items-center justify-center">
              <SiDeezer />
              <p className="font-owners font-bold">Listen on Deezer</p>{" "}
            </div>
          </div>
        </Link>
      )}
      {song?.appleUrl && (
        <Link target="_blank" href={song.appleUrl}>
          <div className="text-white text-center w-full    font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 bg-rose-600 hover:bg-rose-500 focus:outline-none ">
            <div className="flex mx-auto space-x-2 items-center justify-center">
              <FaMusic />
              <p className="font-owners font-bold">{"Listen on Apple Music"} </p>{" "}
            </div>
          </div>
        </Link>
      )}
      {song?.tidalUrl && (
        <Link target="_blank" href={song.tidalUrl}>
          <div className="text-white text-center w-full    font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 bg-black hover:bg-zinc-950 focus:outline-none  border border-zinc-800">
            <div className="flex mx-auto space-x-2 items-center justify-center">
              <SiTidal />
              <p className="font-owners font-bold">Listen on Tidal</p>{" "}
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};
