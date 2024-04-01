import Link from "next/link";
import React from "react";
import {
  FaGlobe,
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
  FaTwitter,
} from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";

const social_media_links = {
  spotify_url: "https://open.spotify.com/artist/7w2gMJn1yZ8R7aUvNFbPGF",
  applemusic_url: "https://music.apple.com/us/artist/twinny-twin/1517109083",
  soundcloud_url: "https://soundcloud.com/djtwinnytwin",
  instagram_url: "https://instagram.com/djtwinnytwin",
  x_url: "https://x.com/djtwinnytwin",
  website_url: "https://twinnytwin.io",
};
function SocialRow() {
  return (
    <div className="w-fit md:flex justify-start items-center space-x-8  text-white space-y-2 md:space-y-0 mx-auto">
      <div className="flex  items-center space-x-2 md:space-x-4 w-full">
        {social_media_links?.spotify_url && (
          <Link href={social_media_links.spotify_url} target="_blank">
            <FaSpotify />
          </Link>
        )}
        {social_media_links?.applemusic_url && (
          <Link href={social_media_links.applemusic_url} target="_blank">
            <SiApplemusic />
          </Link>
        )}
        {social_media_links?.soundcloud_url && (
          <Link href={social_media_links.soundcloud_url} target="_blank">
            <FaSoundcloud />
          </Link>
        )}
        {social_media_links?.instagram_url && (
          <Link href={social_media_links.instagram_url} target="_blank">
            <FaInstagram />
          </Link>
        )}
        {social_media_links?.x_url && (
          <Link href={social_media_links.x_url} target="_blank">
            <FaTwitter />
          </Link>
        )}
        {social_media_links?.website_url && (
          <Link href={social_media_links.website_url} target="_blank">
            <FaGlobe />
          </Link>
        )}
      </div>
    </div>
  );
}

export default SocialRow;
