'use client'
import { useCommerceContext  } from '@/context/CommerceConext'
import { Product } from '@/context/CommerceContextStore'
import React from 'react'

function AddToCart({product}:{product: Product}) {
    const { onAdd, cartItems }= useCommerceContext()
console.log(cartItems)
    const qty = 1
  return (
    <button onClick={() => onAdd(product, qty)} className="w-full border-zinc-800 border text-white py-2 px-4 rounded  font-bold hover:bg-zinc-900 ">
    Add to Cart
  </button>
  )
}

export default AddToCart