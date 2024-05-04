"use client";
import { fullProduct as Product } from "@/context/CommerceContextStore";
import React from "react";
import { toast } from "react-toastify";
import { useCommerceStore } from "ui/commerce/CommerceStore";2
import { useShoppingCart } from "use-shopping-cart";

function AddToCart({ product }: { product: Product | any }) {
  const { addItem }: any = useShoppingCart();
  const {selectedColor, selectedSize} = useCommerceStore()
  //console.log(product)
  const qty = 1;
  return selectedColor && selectedSize && (
    <button
      disabled={!selectedColor && !selectedSize}
      aria-label={`Add ${product.name} to your cart`}
      onClick={() => {
        addItem(product, { product_metadata: { size: selectedSize, color: selectedColor } })
       // useCommerceStore.setState({selectedColor: null, selectedSize: null})
       toast.success(product.name + " added to Cart!")
      }
    }
      className="w-full border-zinc-800 border text-white py-2 px-4 rounded  font-bold hover:bg-zinc-900 "
    >
      Add to Cart
    </button>
  );
}

export default AddToCart;
