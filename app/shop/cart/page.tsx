'use client'
import { useCommerceContext } from '@/context/CommerceConext'
import { getSanityImage } from '@/lib/providers/sanity/lib/image'
import Image from 'next/image'
import React from 'react'

const shipping = 7.99

function subTotal(cartItems: any[]) {
  return cartItems.reduce((total: number, item: { price: number; quantity: number }) => {
    return total + (item.price * 1);
  }, 0).toFixed(2);
}
const grandTotal = (cartItems: any[]) => {
  return (parseFloat(subTotal(cartItems)) + shipping).toFixed(2); // Parse to float
};

function Page() {
    const {cartItems, totalPrice} = useCommerceContext()
  return (

<main className=''>
  <div className="h-screen bg-black pt-24 font-owners">
    <h1 className="mb-10 text-center text-2xl font-bold font-owners-wide">Cart Items</h1>
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
    
      <div className="rounded-lg md:w-2/3">
       {cartItems.map((product: any) => ( <div key={product._id} className="justify-between mb-6 rounded-lg bg-black p-6 shadow-md sm:flex sm:justify-start">
          <Image src={getSanityImage(product.primaryImage)} width={400} height={500} alt="product-image" className="w-full rounded-lg sm:w-40" />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-white">{product.name}</h2>
              <p className="mt-1 text-xs text-zinc-200">size</p>
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <span className="cursor-pointer rounded-l bg-zinc-950 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <input readOnly className="h-8 w-8 border bg-zinc-900 text-center text-xs font-bold outline-none" type="number" value="1" min="1" />
                <span className="cursor-pointer rounded-r bg-zinc-950 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm">{product.price}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
       ))} 
      </div>
      <div className="mt-6 h-full rounded-lg border border-zinc-800 bg-black p-6 shadow-md md:mt-0 md:w-1/3 ">
        <div className="mb-2 flex justify-between">
          <p className="text-zinc-100">Subtotal</p>
          <p className="text-zinc-100">${subTotal(cartItems)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-zinc-100">Shipping</p>
          <p className="text-zinc-100">$7.99</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">${grandTotal(cartItems)} USD</p>
            <p className="text-sm text-zinc-100">including VAT</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-red-600 py-1.5  text-blue-50 hover:bg-blue-600 font-owners font-bold">Check out</button>
      </div>
    </div>
  </div>
</main>  )
}

export default Page