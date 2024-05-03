"use client";
import { useCommerceStore } from "ui/commerce/CommerceStore";
import { useShoppingCart } from "use-shopping-cart";
import React, { useState } from "react";

export const BuyNowButton = ({ product }: any) => {
  const { redirectToCheckout }: any = useShoppingCart()
  const {selectedColor, selectedSize} = useCommerceStore()
  const [status, setStatus] = useState("idle");

  async function buyNow(product: any) {
   // // console.log("beginning checkout");
   // event.preventDefault();
    if (selectedColor && selectedSize) {
      setStatus("loading");
     // console.log(cartDetails)
      try {
        const res = await fetch("/api/checkout-session", {
          method: "POST",
          body: JSON.stringify([product, { product_metadata: { size: selectedSize, color: selectedColor } }]),
           headers: {
             "Content-Type": "application/json",
           },
           cache: "no-cache",
         });
         const data = await res.json();
       //  alert(JSON.stringify(data))
        // console.log(data)
        const result = await redirectToCheckout(data.sessionId);
        if (result?.error) {
          console.error(result);
          setStatus("redirect-error");
        }
      } catch (error) {
        console.error(error);
        setStatus("redirect-error");
      }
    } else {
      setStatus("no-items");
    }
  }

  return selectedColor && selectedSize && (
    <button
      disabled={!selectedColor && !selectedSize || status == 'loading' }
      onClick={() => buyNow(product)}
      className="w-full border border-zinc-800  text-white py-2 px-4 rounded font-bold hover:bg-zinc-900"
    >
      Buy Now
    </button>
  );
};
