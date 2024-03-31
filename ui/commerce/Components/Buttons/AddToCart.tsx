'use client'
import {fullProduct as Product } from '@/context/CommerceContextStore'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

function AddToCart({product}:{product: Product | any}) {
  const { addItem } = useShoppingCart()
    const qty = 1
  return (
    <button
    aria-label={`Add ${product.name} to your cart`}
    onClick={() => addItem(product)} 
    className="w-full border-zinc-800 border text-white py-2 px-4 rounded  font-bold hover:bg-zinc-900 ">
    Add to Cart
  </button>
  )
}

export default AddToCart