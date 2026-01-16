import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ManaBall - MTG Deck Analytics",
  description: "AI-powered deck analysis and simulation results",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
