import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/ui/nagivation/navbar";
import Providers from "@/lib/providers/Providers";
import LinkModal from "ui/Components/LinkModal";

export const metadata: Metadata = {
  title: "TwinnyTwin,io",
  description: "Home of Twinny Twin creator of CRIB Music / DJ / Producer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <LinkModal />

          {children}
        </Providers>
      </body>
    </html>
  );
}
