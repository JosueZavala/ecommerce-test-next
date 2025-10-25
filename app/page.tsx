import { Header } from "@/components/header"
import { ProductGrid } from "@/components/product-grid"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductGrid />
      </main>
    </div>
  )
}
