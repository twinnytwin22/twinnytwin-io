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

export async function POST(
  req: NextRequest,
  { params }: { params: { storedId: string } },
) {
  try {
    const inventory = await getProducts();
    const cartProducts = await req.json();
    const line_items = validateCartItems(inventory, cartProducts);
    console.log("line_items", line_items);
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "payment",
      submit_type: "pay",
      line_items,
      success_url: `${headers().get("origin")}/`,
      cancel_url: `${headers().get("origin")}/`,
      shipping_options: [{
        shipping_rate: 'shr_1P0fIIDhPOOQLr7HK08n5zya'
      }]
    });
    return NextResponse.json(
      { sessionId: checkoutSession.id, ok: true, status: 200 },
      { headers: corsHeaders },
    );
  } catch (error) {
    console.error("Error processing checkout:", error);
    return NextResponse.json({
      error: "Error processing checkout",
      status: 500,
    });
  }
}
