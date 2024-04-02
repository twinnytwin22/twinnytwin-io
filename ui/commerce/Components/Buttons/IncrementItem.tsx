'use client'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

function IncrementItem({id}: {id: string}) {
    const { incrementItem } = useShoppingCart()

return(
    <div  key={id} onClick={() => incrementItem(id)}>
                  <span className="cursor-pointer rounded-r bg-zinc-950 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                {" "}
                +{" "}
              </span>
             
    </div>
)
}

export default IncrementItem