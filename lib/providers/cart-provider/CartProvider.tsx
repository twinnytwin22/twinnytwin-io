"use client";
import * as React from "react";
import { Suspense } from "react";
import { CartProvider as CartProviders } from 'use-shopping-cart'




export const CartProviderWrapper= ({ children }: { children: React.ReactNode }) => {
  return (
    <CartProviders
    mode="payment"
    cartMode="client-only"
    stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string}
    successUrl="http://localhost:3000"
    cancelUrl="https://twitter.com/djtwinnytwin"
    currency="USD"
    allowedCountries={['US', 'GB', 'CA']}
    billingAddressCollection={true}
    shouldPersist={true}
  >
        <Suspense>
          {/* <ThemeProvider
            enableSystem={true}
            attribute="class"
            defaultTheme="dark"
          > */}
            {children}
          {/* </ThemeProvider> */}
        </Suspense>
        </CartProviders>
  );
};

export default CartProviderWrapper ;
