import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
