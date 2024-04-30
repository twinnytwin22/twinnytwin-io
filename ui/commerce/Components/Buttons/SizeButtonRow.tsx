"use client";
import { useCommerceStore } from "ui/commerce/CommerceStore";

function SizeButtonRow({ sizes }: { sizes: string[] }) {
  const {selectedSize, setSelectedSize} = useCommerceStore()

  console.log(selectedSize);

  return (
    <div className="flex items-center mt-2">
      {sizes.map((size: string) => (
        <button
          key={size}
          onClick={() => setSelectedSize(size)}
          className={`text-white py-2 px-4 rounded font-bold mr-2 hover:bg-zinc-900 border-zinc-800 border ${size === selectedSize ? "ring ring-red-400 bg-zinc-800" : ""}`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

export default SizeButtonRow;
