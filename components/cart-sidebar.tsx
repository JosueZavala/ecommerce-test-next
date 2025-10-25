"use client";

import { useCart } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

export function CartSidebar() {
  const {
    items,
    total,
    itemCount /* updateQuantity, removeFromCart, clearCart */,
  } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative bg-transparent"
        >
          <ShoppingCart className="h-4 w-4" />
          {itemCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Carrito de Compras ({itemCount} items)
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Tu carrito está vacío</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-4">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-3 border rounded-lg"
                    >
                      <div className="relative h-16 w-16 flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">
                          {item.name}
                        </h4>
                        <p className="text-primary font-semibold">
                          ${item.price.toFixed(2)}
                        </p>

                        <div className="flex items-center gap-2 mt-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-transparent"
                            /* onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            } */
                          >
                            <Minus className="h-3 w-3" />
                          </Button>

                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>

                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-transparent"
                            /* onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            } */
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                          /* onClick={() => removeFromCart(item.id)} */
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <p className="text-sm font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-primary">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <div className="space-y-2">
                  <Button className="w-full" size="lg">
                    Proceder al Pago
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    /* onClick={clearCart} */
                  >
                    Vaciar Carrito
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
