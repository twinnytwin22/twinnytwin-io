"use client";
import { grandTotal } from "@/lib/constants";
import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

function CheckOutButton() {
  const [status, setStatus] = useState("idle");

  const { redirectToCheckout, cartCount, totalPrice, cartDetails } =
    useShoppingCart();
  async function handleClick(event: any) {
    console.log("beginning checkout");
    event.preventDefault();
    if (cartCount && cartCount > 0) {
      setStatus("loading");
      try {
        const res = await fetch("/api/checkout-session", {
          method: "POST",
          body: JSON.stringify(cartDetails),
        });
        const data = await res.json();
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
  return (
    <button
      onClick={(e) => handleClick(e)}
      disabled={status == "no-items" ? true : false}
      className="mt-6 w-full rounded-md bg-red-600 py-1.5  text-blue-50 hover:bg-blue-600 font-owners font-bold"
    >
      Check out ${grandTotal(totalPrice!)}
    </button>
  );
}

export default CheckOutButton;
