import React from "react";

function CartPageLayout({ children }: { children: React.ReactNode }) {
  return <div className="overflow-x-hidden min-h-[75vh]">{children}</div>;
}

export default CartPageLayout;
