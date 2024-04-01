"use client";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

export const BuyNowButton = ({ product }: any) => {
  const { redirectToCheckout, checkoutSingleItem } = useShoppingCart();

  async function buyNow(priceId: string) {
    checkoutSingleItem(priceId);

    //     console.log('buying')
    // const { name, image, description, currency } = product
    // const price = formatCurrencyString({ value: product.price, currency: 'USD', language: 'en-US' })

    // const response = await fetch("http://localhost:3000/api/create-checkout-session", {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ [product._id]: { ...product, quantity: 1 } }),
    // })
    // const data = await response.json()
    // console.log(data)
    // redirectToCheckout(data.sessionId)
  }

  return (
    <button
      onClick={() => buyNow(product.price_id)}
      className="w-full border border-zinc-800  text-white py-2 px-4 rounded font-bold hover:bg-zinc-900"
    >
      Buy Now
    </button>
  );
};
