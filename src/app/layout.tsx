import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/providers/StoreProvider";

export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple and functional todo app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans antialiased">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
