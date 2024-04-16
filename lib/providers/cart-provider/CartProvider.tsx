'use client'
import * as React from "react";
import { Suspense } from "react";
import { CartProvider as CartProviders } from "use-shopping-cart";

const CartWrapper: any = CartProviders
const clientOptions = {
  mode: "payment",
  cartMode:"client-only",
  stripe: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE as string,
  successUrl: "https://twinnytwin.io",
  cancelUrl: "https://twinnytwin.io/shop",
  currency: "USD",
  allowedCountries: ["US","CA"],
  billingAddressCollection: true,
  shouldPersist: true,
}

const serverOptions = {
  mode: 'payment',
  cartMode:'checkout-session',
  currency: 'USD',
  stripe: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE as string,
  billingAddressCollection: true

}
export const CartProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <CartWrapper
    {...clientOptions}
    // {...serverOptions}
          >
      <Suspense>
        {children}
        {/* </ThemeProvider> */}
      </Suspense>
    </CartWrapper>
  );
};

export default CartProviderWrapper;
