import React, { ReactNode } from "react";
export const dynamic = "force-dynamic";

function ProductLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export default ProductLayout;
