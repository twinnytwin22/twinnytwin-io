import { create} from 'zustand';

export interface Product {
    _id: string;
    name: string;
    price: number;
    quantity?: number;
  }
  
  export interface CommerceState {
    showCart: boolean;
    setShowCart: (show: boolean) => void;
    cartItems: Product[];
    setCartItems: (items: Product[]) => void;
    totalPrice: number;
    setTotalPrice: (price: number) => void;
    totalQuantities: number;
    setTotalQuantities: (quantities: number) => void;
    qty: number;
    setQty: (qty: number) => void;
    incQty: () => void;
    decQty: () => void;
    onAdd: (product: Product, quantity: number) => void;
    toggleCartItemQuantity: (id: string, value: 'inc' | 'dec') => void;
    removeCartItem: (id: string) => void;
  }

  export const useCommerceStore = create<CommerceState>((set) => ({
    showCart: false,
    setShowCart: (show) => set({ showCart: show }),
    cartItems: [],
    setCartItems: (items) => set({ cartItems: items }),
    totalPrice: 0,
    setTotalPrice: (price) => set({ totalPrice: price }),
    totalQuantities: 0,
    setTotalQuantities: (quantities) => set({ totalQuantities: quantities }),
    qty: 1,
    setQty: (qty) => set({ qty: qty }),
    incQty: () => set((state) => ({ qty: state.qty + 1 })),
    decQty: () =>
      set((state) => ({ qty: state.qty <= 1 ? 1 : state.qty - 1 })),
    onAdd: (product, quantity) => {
      // Your logic for adding product to cart
      // Update state accordingly
    },
    toggleCartItemQuantity: (id, value) => {
      // Your logic for toggling cart item quantity
      // Update state accordingly
    },
    removeCartItem: (id) => {
      // Your logic for removing item from cart
      // Update state accordingly
    },
  }));
  