import { Product } from "@/context/CommerceContextStore";
import { validateRequest } from "@/lib/hooks/validateRequest";
import { getProducts } from "@/utils/db";
import { NextResponse } from "next/server";

export const revalidate = 0;


export async function POST(req: Request) {
  if (req.method !== "POST") {
    return new Response("error: Method Not Allowed", { status: 405 });
  }
  try {
    if (req.method === "POST") {
      const validationResponse = await validateRequest(req);

      if (validationResponse) {
        return validationResponse;
      }

      // Fetch course data from Sanity CMS
      const sanityProducts =  await getProducts()

      // Transform and upsert all courses into Supabase
      const upsertPromises = sanityProducts.map(async (sanityProduct: any) => {
        const { _id, title, price } = sanityProduct;

        // Extract titles from lessons and categories arrays


        const productData: Product = {
          _id: _id, // Use the _id from Sanity as the id in Supabase
          name: title || "",
          price: price, 
          //quantity: 1

        };

        // const { data, error } = await supabaseApi
        //   .from("courses")
        //   .upsert([productData], { onConflict: "_id" }) // Specify the conflict resolution strategy here
        //   .select();

        // console.log(data);
        // if (error) {
        //   console.error("Error syncing data to Supabase:", error);
        // }
      });

      // Wait for all upserts to finish
      await Promise.all(upsertPromises);

      return NextResponse.json({
        success: "Course data synced to Supabase successfully",
        status: 200,
      });
    } else {
      return NextResponse.json({
        error: "Method not allowed, or working, please update and try again",
        status: 405,
      });
    }
  } catch (error) {
    // Handle any unexpected errors here
    console.error("Error in webhook processing:", error);
    return NextResponse.json({
      error: "Internal server error",
      status: 500,
    });
  }
}
