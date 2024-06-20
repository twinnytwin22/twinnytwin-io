import { getSanityImage } from "@/lib/providers/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ShopSection({ products }: any) {
  return (
    <div className="relative max-w-7xl w-full">
      <h2 className="font-owners text-3xl font-extrabold uppercase pb-2">
        MERCH
      </h2>
      <div className="relative max-w-6xl w-full mx-auto">
        <div className="flex w-full justify-between overflow-x-scroll  h-fit items-center scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent ">
          {products.map((product: any) => (
            <div key={product._id}>
            <Link
              href={`/product/${product._id}`}
              className="p-4"
              id={product._id}
            >
              <Image
                className="min-w-36 min-h-36 md:hover:scale-110 ease-in-out duration-300"
                width={200}
                height={200}
                alt="twin-hoodie"
                src={getSanityImage(product.primaryImage)}
              />
              <p className="hidden">{product.name.en_us}</p>
            </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full place-content-end flex pt-4">
        <Link href="/shop">
          <p className="font-owners-wide rounded p-2 bg-red-600 w-fit">
            View All
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ShopSection;
