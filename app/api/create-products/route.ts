import { convertPriceToCents } from "@/lib/hooks/convertPriceToCents";
import { getSanityImage } from "@/lib/providers/sanity/lib/image";
import { stripe } from "@/lib/providers/stripe/stripe";
import { getProducts } from "@/utils/db";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: Request) {
  try {
    const sanityProducts = await getProducts();

    const addProducts = await Promise.all(
      sanityProducts.map(async (sanityProduct: any) => {
        const { _id, name, price, primaryImage } = sanityProduct;

        const productData: any = {
          // active: true,
          name: name || "",
          //  default_price: convertPriceToCents(price),
          images: [getSanityImage(primaryImage)],
          shippable: true,
          url: "https://twinytwin.io/product/" + _id,
          metadata: {
            _id,
          },
          description: sanityProduct.description,
          //quantity: 1
        };

        const product = await stripe.products.create(productData);

        const priceData: any = {
          currency: "usd",
          unit_amount: convertPriceToCents(price),
          product: product.id,
        };

        return stripe.prices.create(priceData);

        //return stripe.products.create(productData);
      }),
    );

    return (
      NextResponse.json({ success: true, status: 200, data: addProducts }),
      { headers: corsHeaders }

    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      error: `Error creating - ${err}  `,
      status: 500,
    }),{ headers: corsHeaders }
    ;
  }
}
