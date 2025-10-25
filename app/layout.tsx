import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { CartProvider } from "@/contexts/cart-context";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechStore - Carrito de Ecommerce",
  description: "Tienda online con carrito de compras usando Context API",
  generator: "v0.app",
};
// HOC -> High Order Component
// Hook ->
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <CartProvider>{children}</CartProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
