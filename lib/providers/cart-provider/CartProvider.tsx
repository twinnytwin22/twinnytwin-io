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
  shipping_address_collection: {
    allowed_countries: ["US", "CA"],
  },
  shipping_options: [
    {
      shipping_rate: "shr_1P0fIIDhPOOQLr7HK08n5zya",
    },
  ],
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
