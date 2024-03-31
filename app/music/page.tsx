import Image from "next/image";
import React from "react";
import MusicPage from "ui/Music/MusicPage";
import { getSongs } from "utils/db";
export const dynamic = "force-dynamic";

const music = [
  {
    image: "/msv.png",
    title: "Mountain Side View",
    type: "single",
  },
  {
    image: "/sms.jpeg",
    title: "She Might Swurv",
    type: "single",
  },
  {
    image: "/sms.jpeg",
    title: "Touch",
    type: "feature",
  },
];

async function About() {
  const songs = await getSongs()
  //console.log(songs)
  return (
   <div className="w-full mx-auto   mb-24  pt-12">

    <MusicPage music={songs}/>
   </div>
  );
}

export default About;
