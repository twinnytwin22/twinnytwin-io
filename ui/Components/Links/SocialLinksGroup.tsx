import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa6";
import { SiCashapp } from "react-icons/si";

export const SocialLinkGroup = ({ links }: any) => {
  return (
    <>
      <div className="h-fit flex items-center space-x-4 justify-center text-3xl ">
        <Link
          target="_blank"
          className="hover:scale-110 duration-500 ease-in-out"
          href={links[0]?.facebookURL}
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
    </>
  );
};
