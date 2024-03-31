"use client";
import * as React from "react";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartProviderWrapper from "./cart-provider/CartProvider";
import { AuthContextProvider } from "@/context/auth";
const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
            {/* <AuthContextProvider> */}

      <CartProviderWrapper>
        <Suspense>
          {/* <ThemeProvider
            enableSystem={true}
            attribute="class"
            defaultTheme="dark"
          > */}
            {children}
          {/* </ThemeProvider> */}
        </Suspense>
        </CartProviderWrapper>
        {/* </AuthContextProvider> */}
    </QueryClientProvider>
  );
};

export default Providers;
