"use client";

import { type Product, useCart } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = () => {
    /* addToCart(product) */
  };

  return (
    <Card className="w-full max-w-sm mx-auto hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold text-foreground mb-2">
          {product.name}
        </CardTitle>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full flex items-center gap-2 hover:bg-primary/90 transition-colors"
        >
          <ShoppingCart className="h-4 w-4" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
}
