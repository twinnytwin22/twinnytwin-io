import {create} from 'zustand'

export interface ProductCartDetails {
    selectedColor: string | null;
    setSelectedColor: (color: string) => void
    selectedSize: string | null;
    setSelectedSize: (size: string) => void
}


export const useCommerceStore = create<ProductCartDetails>((set) => ({
selectedColor: null,
selectedSize: null,
setSelectedColor: (selectedColor: string) => set({selectedColor}),
setSelectedSize: (selectedSize: string) => set({selectedSize})
}))