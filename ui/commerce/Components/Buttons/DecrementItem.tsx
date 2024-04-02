'use client'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

function DecrementItem() {
    const { decrementItem, cartDetails } = useShoppingCart()

    const entries = []
    for (const id in cartDetails) {
      const entry = cartDetails[id]
      entries.push(
    <div    onClick={() => decrementItem(id)}
    >
           <span className="cursor-pointer rounded-l bg-zinc-950 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                {" "}
                -{" "}
              </span>
           
    </div>
  )

      }
      if (entries.length) return <div>{entries}</div>
      return <p>You currently don't have any items in your cart.</p>
}

export default DecrementItem