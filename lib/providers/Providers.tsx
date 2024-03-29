"use client";
import * as React from "react";
import { Suspense } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { CommerceStateContext } from "@/context/CommerceConext";
const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
  <CommerceStateContext>
        <Suspense>
          {/* <ThemeProvider
            enableSystem={true}
            attribute="class"
            defaultTheme="dark"
          > */}
            {children}
          {/* </ThemeProvider> */}
        </Suspense>
        </CommerceStateContext>
    </QueryClientProvider>
  );
};

export default Providers;
