import { NextRequest, NextResponse } from "next/server";
import { validateCartItems } from "use-shopping-cart/utilities";
import { stripe } from "@/lib/providers/stripe/stripe";
import { headers } from "next/headers";
import { getProducts } from "@/utils/db";
export const dynamic = "force-dynamic";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  try {
    const inventory = await getProducts();
    const cartProducts = await req.json();
    const line_items = validateCartItems(inventory, cartProducts);
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
    }
    const checkoutSession = await stripe.checkout.sessions.create(options);

    return NextResponse.json(
      { sessionId: checkoutSession.id, ok: true, status: 200 },
      { headers: corsHeaders }
    );

  } catch (error) {
    console.error("Error processing checkout:", error);
    return NextResponse.json({
      error: JSON.stringify(error),
      status: 500,
    });
  }
}
