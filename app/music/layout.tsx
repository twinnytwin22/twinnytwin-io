import React from "react";

function MusicPageLayout({ children }: { children: React.ReactNode }) {
  return <div className="overflow-x-hidden">{children}</div>;
}

export default MusicPageLayout;
