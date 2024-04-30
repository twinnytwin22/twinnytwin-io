"use client";
import React, { useState } from "react";
import { useCommerceStore } from "ui/commerce/CommerceStore";

function ColorSelectionButtons({ colors }: { colors: string[] }) {
  const {selectedColor, setSelectedColor} = useCommerceStore()

  return (
    <div className="flex items-center mt-2">
      {colors.map((color: string) => {
        return (
          <button
            onClick={() => setSelectedColor(color)}
            className={`w-6 h-6 rounded-full  mr-2  border-zinc-600 border ${color === selectedColor ? "ring ring-red-400 bg-zinc-800" : ""}`}
            style={{
              backgroundColor: color,
            }}
            key={color}
          ></button>
        );
      })}
    </div>
  );
}

export default ColorSelectionButtons;
