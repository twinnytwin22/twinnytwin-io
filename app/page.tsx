import Shows from "@/ui/show-section/shows";
import ShopSection from "ui/merch-section/ShopSection";
import Image from "next/image";
import LatestReleases from "ui/latest-releases/LatestReleases";
import SocialRow from "ui/social-row/SocialRow";
import { getSongs, getLinks, getProducts, getShows } from "@/utils/db";
import { Suspense } from "react";
import { getSanityImage } from "@/lib/providers/sanity/lib/image";
export const dynamic = "force-dynamic";
export default async function Home() {
  const [songs, shows, products] = await Promise.all([getSongs(), getShows(), getProducts()]);
  const sortedSongs = songs.sort((a: any, b: any) => {
    // Assuming releaseDate is a Date object or can be parsed to one
    const dateA = new Date(a.releaseDate).getTime();
    const dateB = new Date(b.releaseDate).getTime();
    
    return dateB - dateA;
});
  return (
    <main className="flex min-h-screen flex-col items-center py-24 p-8 md:p-24">
      <div className="bg-zinc-950 max-w-7xl w-full relative">
        <div className="max-h-[700px] md:max-h-[500px] min-h-[500px] bg-zinc-500 object-cover w-full h-full overflow-hidden rounded relative ">
          {/* <Image
            alt={'twin'}
            src={'/Twin_8.jpg'}
            className="object-cover relative lg:-translate-y-0 xl:-translate-y-10"
            width={2000}
            height={1000}
            priority
            style={{
              objectFit: "cover",
            }}
          /> */}
          <video
          
            loop
            muted
            autoPlay={true}
            controls={false}
            className="object-cover relative lg:-translate-y-0 xl:-translate-y-10 hidden md:block min-h-[500px]"
            style={{
              objectFit: "cover",
            }}
          >
            <source
              src="https://crib-network.s3.us-west-1.amazonaws.com/twinnytwin/twin-intro-video.mp4"
              type="video/mp4"
            />
          </video>
          <video
            loop
            muted
            autoPlay={true}
            controls={false}
            className="object-cover relative lg:-translate-y-0 xl:-translate-y-10 block md:hidden"
            style={{
              objectFit: "cover",
            }}
          >
            <source
              src="https://crib-network.s3.us-west-1.amazonaws.com/twinnytwin/twin-intro-long.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute z-10 flex w-full h-full mx-auto top-0 bottom-0 md:-mt-4 md:-ml-4 place-items-center md:place-items-end place-content-center md:place-content-end">
            <ConnectBox latestRelease={sortedSongs[0]} />
          </div>
        </div>
      </div>
      <HRLine />
      <Suspense>
        <LatestReleases songs={sortedSongs} />
      </Suspense>
      <HRLine />
      <ShopSection products={products} />
      <HRLine />

      <Shows shows={shows} />
    </main>
  );
}

const HRLine = () => {
  return (
    <div className="py-8 w-full">
      <hr className="border-b max-w-7xl mx-auto w-full border-zinc-900" />
    </div>
  );
};

const ConnectBox = ({latestRelease}: any) => {
  return (
    <div className="relative space-y-4 w-72 bg-black bg-opacity-60 rounded-lg p-8 border border-zinc-800 shadow-sm shadow-zinc-900">
      <div>
           <div className="text-center font-owners font-extrabold text-lg">
        Latest Release
      </div>
      <p className="text-center font-owners text-base ">
        {latestRelease.title}
      </p>
      <p className="text-xs font-owners text-center">
    Twinny Twin, {latestRelease.additionalArtists}
      </p>
      </div>
      <Image

        src={getSanityImage(latestRelease.coverImage)}
        className="mx-auto"
        alt="latest-release"
        height={200}
        width={200}
      />

      <div className="text-center font-owners font-extrabold text-lg">
        CONNECT WITH ME
      </div>
      <SocialRow />
    </div>
  );
};
