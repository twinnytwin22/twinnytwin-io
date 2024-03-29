import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { getSanityImage } from "../../sanity/lib/image";
import { SiCashapp } from "react-icons/si";

function LinkPage({ links }: any) {
  const image = getSanityImage(links[0].linksPageProfileImage);
  return (
    <div className="w-full mx-auto max-w-3xl my-16">
      <Image
        className="rounded mx-auto"
        src={image}
        alt="Jaii"
        width={300}
        height={300}
      />
      <div className="h-fit flex items-center space-x-4 justify-center text-3xl mt-4">
        <Link
          target="_blank"
          className="hover:scale-110 duration-500 ease-in-out"
          href={links[0].facebookURL}
        >
          <div>
            <FaFacebook />
          </div>
        </Link>
        <Link
          target="_blank"
          className="hover:scale-110 duration-500 ease-in-out"
          href={links[0].twitterURL}
        >
          <div>
            <FaTwitter />
          </div>
        </Link>
        <Link
          target="_blank"
          className="hover:scale-110 duration-500 ease-in-out"
          href={links[0].tiktokURL}
        >
          <div>
            <FaTiktok />
          </div>
        </Link>
        <Link
          target="_blank"
          className="hover:scale-110 duration-500 ease-in-out"
          href={links[0].instagramURL}
        >
          <div>
            <FaInstagram />
          </div>
        </Link>
        <Link
          target="_blank"
          className="hover:scale-110 duration-500 ease-in-out"
          href={links[0].twitchURL}
        >
          <div>
            <FaTwitch />
          </div>
        </Link>
        <Link
          target="_blank"
          className="hover:scale-110 duration-500 ease-in-out"
          href={links[0].youtubeURL}
        >
          <div>
            <FaYoutube />
          </div>
        </Link>
        <Link
          target="_blank"
          className="hover:scale-110 duration-500 ease-in-out"
          href={links[0].cashappURL}
        >
          <div>
            <SiCashapp />
          </div>
        </Link>
      </div>
      <div className="mt-4">
      <iframe
      className="max-w-sm mx-auto"
        style={{ borderRadius: "12px", }}
        src="https://open.spotify.com/embed/artist/2uCDeXISayt3NOEaPq2EVs?utm_source=generator"
        width="90%"
        height="352"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      </div>
    </div>
  );
}

export default LinkPage;
