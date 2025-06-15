import type { Metadata } from "next";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';

import Navbar from "@/ui/nagivation/navbar";
import Providers from "@/lib/providers/Providers";
import LinkModal from "ui/Components/LinkModal";
import Footer from "ui/nagivation/footer";

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
      <head>
        <meta name='impact-site-verification' content='9e7e8bd5-68e2-4fe1-88e4-16b7b3720ca9' />
      </head>
      <body className="overflow-x-hidden h-full relative">
        <Providers>
          <Navbar />
          <LinkModal />
          {children}
          <br />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
