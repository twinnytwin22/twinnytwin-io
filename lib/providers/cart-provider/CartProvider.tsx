'use client'
import * as React from "react";
import { Suspense } from "react";
import { CartProvider as CartProviders } from "use-shopping-cart";

const CartWrapper: any = CartProviders
const options = {
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
export const CartProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <CartWrapper
     {...options}
          >
      <Suspense>
        {children}
        {/* </ThemeProvider> */}
      </Suspense>
    </CartWrapper>
  );
};

export default CartProviderWrapper;
