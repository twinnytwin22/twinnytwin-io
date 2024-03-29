'use client'
import React, { createContext, useContext, useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useCommerceStore } from './CommerceContextStore';

const CommerceContext = createContext<any>({});

export const CommerceStateContext = ({ children }: { children: React.ReactNode }) => {
  const store = useCommerceStore();

  const setCartToCookies = useCallback(() => {
    document.cookie = `cartItems=${JSON.stringify(store.cartItems)}; path=/;`;
  }, [store.cartItems]);

  // Function to get the cart state from cookies
  const getCartFromCookies = useCallback(() => {
    const cookies = document.cookie.split('; ');
    const cartCookie = cookies.find(cookie => cookie.startsWith('cartItems='));
    if (cartCookie) {
      const cartItems = cartCookie.split('=')[1];
      store.setCartItems(JSON.parse(cartItems));
    }
  }, [store.setCartItems]);

  useEffect(() => {
    // On component mount, get the cart state from cookies
    getCartFromCookies();
  }, []);


  const onAdd = useCallback(
    (product: any, quantity: any) => {
      const checkProductInCart = store.cartItems.find((item: any) => item._id === product._id);

      if (checkProductInCart) {
        const updatedCartItems = store.cartItems.map((cartProduct: any) => {
          if (cartProduct._id === product._id)
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity,
            };
          return cartProduct;
        });

        store.setCartItems(updatedCartItems);
      } else {
        product.quantity = quantity;
        store.setCartItems([...store.cartItems, { ...product }]);
      }
      setCartToCookies();
      toast.success(`${quantity} ${product.name} added to cart`);
    },
    [store]
  );

  const toggleCartItemQuantity = useCallback(
    (id: any, value: any) => {
      const index = store.cartItems.findIndex((product: any) => product._id === id);
      const newCartItems = [...store.cartItems];

      if (value === 'inc') {
        const foundProduct = {
          ...newCartItems[index],
          quantity: (newCartItems[index].quantity || 0) + 1,
        };
        newCartItems.splice(index, 1, foundProduct);
        store.setCartItems(newCartItems);
      } else if (value === 'dec') {
        if ((newCartItems[index].quantity || 0) > 1) {
          const foundProduct = {
            ...newCartItems[index],
            quantity: (newCartItems[index].quantity || 0) - 1,
          };
          newCartItems.splice(index, 1, foundProduct);
          store.setCartItems(newCartItems);
        }
      }
    },
    [store]
  );

  const removeCartItem = useCallback(
    (id: any) => {
      const index = store.cartItems.findIndex((product: any) => product._id === id);
      const newCartItems = [...store.cartItems];
      newCartItems.splice(index, 1);
      store.setCartItems(newCartItems);
    },
    [store]
  );

  const incQty = useCallback(() => {
    store.setQty(store.qty + 1);
  }, [store]);

  const decQty = useCallback(() => {
    store.setQty(store.qty <= 1 ? 1 : store.qty - 1);
  }, [store]);

  return (
    <CommerceContext.Provider
      value={{
        showCart: store.showCart,
        setShowCart: store.setShowCart,
        cartItems: store.cartItems,
        totalPrice: store.totalPrice,
        totalQuantities: store.totalQuantities,
        qty: store.qty,
        onAdd,
        toggleCartItemQuantity,
        removeCartItem,
        incQty,
        decQty,
        setCartItems: store.setCartItems,
        setTotalPrice: store.setTotalPrice,
        setTotalQuantities: store.setTotalQuantities,
        setQty: store.setQty,
      }}
    >
      {children}
    </CommerceContext.Provider>
  );
};

// Custom hook to use the context
export const useCommerceContext = () => useContext(CommerceContext);
