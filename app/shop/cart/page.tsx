"use client";
import { grandTotal } from "@/lib/constants";
import { getSanityImage } from "@/lib/providers/sanity/lib/image";
import Image from "next/image"
import React from "react";
import CheckOutButton from "ui/commerce/Components/Buttons/CheckOutButton";
import DecrementItem from "ui/commerce/Components/Buttons/DecrementItem";
import IncrementItem from "ui/commerce/Components/Buttons/IncrementItem";
import {
  useShoppingCart,
//  DebugCart,
  //formatCurrencyString,
} from "use-shopping-cart";
import {
 // Product,
  CartActions,
  CartEntry as ICartEntry,
} from "use-shopping-cart/core";
export const dynamic = "force-dynamic";

function CartEntry({
  entry,
  removeItem,
}: {
  entry: ICartEntry | any;
  removeItem: CartActions["removeItem"];
}) {

  const cumulativePrice = (entry.price * entry.quantity).toFixed(2)

 // console.group(entry, 'entry')
  return (
    <div>
      <div
        key={entry.id}
        className="justify-between mb-6 rounded-lg bg-black p-6 shadow-md sm:flex sm:justify-start"
      >
        <Image
          src={getSanityImage(entry.primaryImage)}
          width={400}
          height={500}
          alt="product-image"
          className="w-full rounded-lg sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-white">{entry.name}</h2>
            <p className="mt-1 text-xs text-zinc-200 uppercase">{(entry?.product_data?.size || '')} - {(entry?.product_data?.color || '')}</p>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-dark-100">
              <DecrementItem id={entry.id} />
              <input
                readOnly
                className="h-8 w-8 border bg-zinc-900 text-center text-xs font-bold outline-none"
                type="number"
                value={entry.quantity}
                min="1"
              />
              <IncrementItem id={entry.id} />
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm">{cumulativePrice}</p>
              <svg
                onClick={() => removeItem(entry.id)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cart() {
  const cart = useShoppingCart();
  const { removeItem, cartDetails, clearCart, totalPrice } = cart;
  const cartEntries = Object.values(cartDetails ?? {}).map((entry: any) => (
    <CartEntry key={entry._id + entry?.product_data?.size} entry={entry} removeItem={removeItem as any} />
  ));
  //console.log("cd", cartEntries.length);

  return (
    <main className="relative max-w-7xl w-full py-28 mx-auto p-8">
      <h2 className="font-owners text-3xl font-extrabold uppercase pb-2">
        Cart Items
      </h2>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cartEntries.length === 0 ? <p>Cart is empty.</p> : null}
          {cartEntries.length > 0 ? (
            <>
              <button onClick={() => clearCart()}>Clear cart</button>
              {cartEntries}
            </>
          ) : null}
        </div>
        <div className="mt-6 h-full rounded-lg border border-zinc-800 bg-black p-6 shadow-md md:mt-0 md:w-1/3 ">
          <div className="mb-2 flex justify-between">
            <p className="text-zinc-100">Subtotal</p>
            <p className="text-zinc-100">${totalPrice?.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-zinc-100">Shipping</p>
            <p className="text-zinc-100">$7.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">
                ${grandTotal(totalPrice!)} USD
              </p>
              <p className="text-sm text-zinc-100">including shipping</p>
            </div>
          </div>

          <CheckOutButton />
        </div>
      </div>
    </main>
  );
}

function Page() {

  return (
    <main className="">
      <Cart />
    </main>
  );
}

export default Page;
