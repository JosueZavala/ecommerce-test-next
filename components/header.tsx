"use client"

import { useCart } from "@/contexts/cart-context"
import { CartSidebar } from "./cart-sidebar"
import { Store } from "lucide-react"

export function Header() {
  const { itemCount, total } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Store className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold text-foreground">TechStore</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
            <span>{itemCount} items</span>
            <span>•</span>
            <span className="font-semibold text-primary">${total.toFixed(2)}</span>
          </div>

          <CartSidebar />
        </div>
      </div>
    </header>
  )
}
