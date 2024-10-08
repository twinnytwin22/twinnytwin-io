import { getSanityImage } from "@/lib/providers/sanity/lib/image";
import { getCollectibles, getProducts } from "@/utils/db";
import Link from "next/link";
import React from "react";
import Image from "next/image";
export const dynamic = "force-dynamic";
async function page() {
  const [products, nfts] = await Promise.all([getProducts(), getCollectibles()]);

  return (
    <main className="relative max-w-7xl w-full py-28 mx-auto p-8">
      <h2 className="font-owners text-3xl font-extrabold uppercase pb-2">
        Shop
      </h2>
      <div className="relative max-w-6xl w-full mx-auto">
        <div className="flex w-full justify-center md:justify-between flex-wrap h-fit items-center mx-auto ">
          {products.map((product: any) => (
            <Link
              key={product._id}
              href={`/product/${product._id}`}
              className="p-4"
              id={product._id}
            >
              <Image
                className="md:min-w-48 md:min-h-48 md:hover:scale-110 ease-in-out duration-300"
                width={300}
                height={300}
                alt={product.name}
                src={getSanityImage(product.primaryImage)}
              />
              <p className="text-white text-center font-owners tracking-wider">
                <span className="font-bold">{product.name}</span> | $
                {product.price}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex w-full justify-center md:justify-between flex-wrap h-fit items-center mx-auto ">

          {nfts.map((nft: any) => (
            <Link
              key={nft._id}
              href={`/nft/${nft.contract}`}
              className="p-4"
              id={nft._id}
            >
              <>
              <Image
                className=" md:hover:scale-110 ease-in-out duration-300 aspect-square object-cover"
                width={300}
                height={300}

                alt={nft.title}
                src={getSanityImage(nft.nftImage)}
              />
              </>
              <p className="text-white text-center font-owners tracking-wider">
                <span className="font-bold">{nft.title}</span>
                {nft.mintPrice}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default page;
