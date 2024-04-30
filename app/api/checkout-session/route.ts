import { NextRequest, NextResponse } from "next/server";
import { validateCartItems, formatLineItems } from "use-shopping-cart/utilities";
import { stripe } from "@/lib/providers/stripe/stripe";
import { headers } from "next/headers";
import { getProducts } from "@/utils/db";


export const dynamic = "force-dynamic";

// const corsHeaders = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE, OPTIONS",
//   "Access-Control-Allow-Headers": "Content-Type, Authorization",
// };

// export async function OPTIONS() {
//   return NextResponse.json({}, { headers: corsHeaders });
// }

export async function POST(req: NextRequest) {
  let checkoutSession: any = null; // Initialize checkoutSession as null
  const cartProducts = await req.json();
  console.log(formatLineItems(cartProducts), 'FORMATTED LINE ITEMS')

  try {
    // Fetch inventory
   // const inventory = await getProducts();

    // Parse request body
    //const cartProducts = await req.json();

    // Validate cart items
    const line_items = formatLineItems(cartProducts);

    // Prepare options for checkout session
    const options: any = {
      line_items,
      mode: "payment",
      success_url: `${headers().get("origin")}/`,
      cancel_url: `${headers().get("origin")}/`,
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      shipping_options: [
        {
          shipping_rate: "shr_1P0fIIDhPOOQLr7HK08n5zya",
        },
      ],
    };

    // Create checkout session with error handling
    try {
      checkoutSession = await stripe.checkout.sessions.create(options);
    } catch (stripeError) {
      console.error("Error processing checkout:", stripeError);
      return NextResponse.json({
        error: JSON.stringify(stripeError),
        status: 500,
        cartProducts
      });
    }

    // Return response with session ID
    return NextResponse.json(
      { sessionId: checkoutSession.id, ok: true, status: 200 },
     // { headers: corsHeaders },
    );
  } catch (error) {

    // Handle errors
    console.error("Error processing checkout:", error);
    return NextResponse.json({
      error: error,
      status: 500,
     // cartProducts: JSON.stringify(cartProducts)
    });
  }
}
