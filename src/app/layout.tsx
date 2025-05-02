import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "DeCirco : Decentralised Recycling - Rewarding Recyclers for a Sustainable Future",
  description: "DeCirco is a blockchain-powered recycling rewards platform that verifies disposal and tracks waste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="bg-[#f2fef6] text-gray-900 font-sans">
      {children}
    </body>
    </html>
  );
}
