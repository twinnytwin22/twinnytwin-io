import { BuyNowButton } from "ui/commerce/Components/Buttons/BuyNowButton";
import { getSanityImage } from "@/lib/providers/sanity/lib/image";
import { getProductbyId, getProducts } from "@/utils/db";
import Image from "next/image";
import React from "react";
import AddToCart from "ui/commerce/Components/Buttons/AddToCart";
import ColorSelectionButtons from "ui/commerce/Components/Buttons/ColorSelectionButtons";
import SizeButtonRow from "ui/commerce/Components/Buttons/SizeButtonRow";

async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const product = await getProductbyId(id);
  console.log(product);

  return (
    <main className="flex min-h-screen flex-col items-center top-32 relative w-full mx-auto ">
      <div className="bg-black max-w-7xl w-full relative p-8  mx-auto">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4 md:border-r border-zinc-800">
            <div className="md:h-[460px] rounded-lg b mb-4">
              <Image
                className="mx-auto flex items-center content-center place-items-center"
                src={getSanityImage(product?.primaryImage)}
                width={450}
                height={450}
                alt="Product Image"
              />
            </div>

            <div className="flex -mx-2 mb-4 border-t border-zinc-800 p-4 font-owners font-bold">
              <div className="w-1/2 px-2">
                <AddToCart product={product} />
              </div>
              <div className="w-1/2 px-2">
                <BuyNowButton product={product} />
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl  text-white mb-2 font-owners-wide font-bold">
              {product?.name}
            </h2>
            <p className="text-zinc-300 text-sm mb-4 hidden">
              {product.description || ""}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="text-zinc-300 font-owners font-bold">
                  Price:
                </span>
                <span className="text-zinc-300"> ${product.price}</span>
              </div>
               <div>
                <span className="font-owners font-bold text-zinc-300">
                  Availability:
                </span>
                <span className=" :text-zinc-300"> In Stock</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-owners font-bold text-zinc-300">
                Select Color:
              </span>
              <ColorSelectionButtons colors={product?.colors} />
        
            </div>
            <div className="mb-4 font-owners font-bold">
              <span className="text-zinc-300">Select Size:</span>
              <SizeButtonRow sizes={product.sizes} />

            </div>
            <div>
              <span className="font-bold text-zinc-200 font-owners">
                Product Description:
              </span>
              <p className="text-zinc-300 text-sm mt-2">
                {product?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
