"use client"

import type { Product } from "@/contexts/cart-context"
import { ProductCard } from "./product-card"

// Productos de ejemplo
const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Smartphone Pro",
    price: 899.99,
    image: "/modern-smartphone.png",
    description: "Último modelo con cámara avanzada y procesador de alta velocidad",
  },
  {
    id: 2,
    name: "Laptop Gaming",
    price: 1299.99,
    image: "/gaming-laptop.png",
    description: "Laptop para gaming con tarjeta gráfica dedicada y pantalla 144Hz",
  },
  {
    id: 3,
    name: "Auriculares Bluetooth",
    price: 199.99,
    image: "/bluetooth-headphones.png",
    description: "Auriculares inalámbricos con cancelación de ruido activa",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 299.99,
    image: "/modern-smartwatch.png",
    description: "Reloj inteligente con monitor de salud y GPS integrado",
  },
  {
    id: 5,
    name: "Tablet Pro",
    price: 649.99,
    image: "/modern-tablet.png",
    description: "Tablet profesional con stylus incluido y pantalla de alta resolución",
  },
  {
    id: 6,
    name: "Cámara Digital",
    price: 799.99,
    image: "/digital-camera.png",
    description: "Cámara mirrorless con lente intercambiable y grabación 4K",
  },
]

export function ProductGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Nuestros Productos</h2>
        <p className="text-muted-foreground">Descubre nuestra selección de productos tecnológicos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
