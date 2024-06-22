"use client";
import React from "react";
import {
  FaAmazon,
  FaDeezer,
  FaMusic,
  FaYoutube,
  FaSoundcloud,
} from "react-icons/fa6";
import { SiTidal } from "react-icons/si";

import { useLinkStore } from "./Links/store";
import Link from "next/link";
import { getSanityImage } from "lib/providers/sanity/lib/image";
import Image from "next/image";
import { useHandleOutsideClick } from "utils/hooks/handleOutsideClick";
import { SocialLinkGroup } from "./Links/SocialLinksGroup";
import SignUpButton, { SignUpModal } from "./SignUpModal";
import { isDateInFuture, isDateInFutureTZ } from "@/lib/hooks/isDateInFuture";
import LaunchCountdown from "ui/Countdown/LaunchCountdown";

const spotifyUrlRegex: { [key: string]: RegExp } = {
  artist: /https:\/\/open.spotify.com\/artist\/([a-zA-Z0-9]+)/,
  track: /https:\/\/open.spotify.com\/track\/([a-zA-Z0-9]+)/,
  playlist: /https:\/\/open.spotify.com\/playlist\/([a-zA-Z0-9]+)/,
  album: /https:\/\/open.spotify.com\/album\/([a-zA-Z0-9]+)/,
};

function extractTrackId(url: string, type: string) {
  const match = url.match(spotifyUrlRegex[type]);

  if (match && match.length > 1) {
    return match[1];
  }
  return "1UEDOxQBNAXS8sbehXdFqa";
}

function LinkModal() {
  const { song, signUpFormOpen } = useLinkStore();
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
  //const songType = song.type === "single" || song.type === 'remix'
  const isFutureRelease = song.launchat ? isDateInFutureTZ(song.launchat) : isDateInFuture(song.releaseDate);
  const soundCloudEmbedURL = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${song.soundCloudTrackID}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`

  return (
    <div className="link-modal">
      <h1 className="text-base font-owners font-bold text-center mb-2">
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
      {song?.spotifyUrl && song.type === "ep" && (
        <iframe
          className="mb-4"
          src={`https://open.spotify.com/embed/album/${extractTrackId(
            song.spotifyUrl,
            "album",
          )}?utm_source=generator`}
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      )}
      {song?.spotifyUrl && song.type === "single" ? (
        <iframe
          className="mb-4"
          src={`https://open.spotify.com/embed/track/${extractTrackId(
            song.spotifyUrl,
            "track",
          )}?utm_source=generator`}
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      ) : !song.spotifyUrl && song.soundCloudUrl && song.type === 'remix' && !isFutureRelease && (
        <>
          <iframe
            className="mb-4 scroll-px-24"

            width="100%"
            height="166"
            // scrolling="no"
            // frameborder="no"
            allow="autoplay"
            src={soundCloudEmbedURL}
          ></iframe>
          <div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100 }}>

          </div>
        </>
      )}

      {/* {!song.spotifyUrl && song.soundCloudUrl &&  (
     
  )
} */}
      {
        song?.appleUrl && !isFutureRelease && (
          <LinkButton
            link={song.appleUrl}
            title={"Listen on Apple Music"}
            icon={<FaMusic />}
          />
        )
      }
      {
        song?.tidalUrl && !isFutureRelease && (
          <LinkButton
            link={song.tidalUrl}
            title={"Listen on Tidal"}
            icon={<SiTidal />}
          />
        )
      }
      {
        song?.youtubeUrl && !isFutureRelease && (
          <LinkButton
            link={song.youtubeUrl}
            title={"Listen on YouTube"}
            icon={<FaYoutube />}
          />
        )
      }
      {
        song?.amazonUrl && !isFutureRelease && (
          <LinkButton
            link={song.amazonUrl}
            title={"Listen on Amazon Music"}
            icon={<FaAmazon />}
          />
        )
      }

      {
        song?.deezerUrl && !isFutureRelease && (
          <LinkButton
            link={song.deezerUrl}
            title={"Listen on Deezer"}
            icon={<FaDeezer />}
          />
        )
      }

      {
        song?.soundCloudUrl && !isFutureRelease && (
          <LinkButton
            link={song.soundCloudUrl}
            title={"Listen on SoundCloud"}
            icon={<FaSoundcloud />}
          />
        )
      }
      {isFutureRelease &&
        <div className="mx-auto">
          <LaunchCountdown targetDate={song.launchat} />
          <SignUpButton />
        </div>
      }
    </div >
  );
};

export const LinkButton = ({ link, title, icon, setIsOpen }: any) => {
  return (
    <Link target="_blank" href={link}>
      <div className="text-white text-center w-full font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 bg-black hover:bg-zinc-950 focus:outline-none  border border-zinc-800">
        <div className="flex mx-auto space-x-2 items-center justify-center">
          {icon}
          <p className="font-owners font-bold break-words">{title}</p>{" "}
        </div>
      </div>
    </Link>
  );
};
