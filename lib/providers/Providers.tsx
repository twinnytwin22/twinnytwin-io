"use client";
import * as React from "react";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartProviderWrapper from "./cart-provider/CartProvider";
import Script from "next/script";
const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Script defer
  src="https://unpkg.com/@tinybirdco/flock.js"
  data-host="https://api.tinybird.co"
  data-token={process.env.NEXT_PUBLIC_TINYBIRD_KEY}
/>
    <QueryClientProvider client={queryClient}>
      {/* <AuthContextProvider> */}

      <CartProviderWrapper>
        <Suspense>
          {children}
          {/* </ThemeProvider> */}
        </Suspense>
      </CartProviderWrapper>
      {/* </AuthContextProvider> */}
    </QueryClientProvider>
    </>
  );
};

export default Providers;
