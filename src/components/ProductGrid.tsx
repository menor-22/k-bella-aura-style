import ProductCard, { Product } from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export const products: Product[] = [
  { id: 1, name: "Blusa Sálvia Seda", price: 189.90, image: product1, category: "Blusas", sizes: ["P", "M", "G"] },
  { id: 2, name: "Vestido Noir Elegance", price: 349.90, image: product2, category: "Vestidos", sizes: ["P", "M", "G", "GG"] },
  { id: 3, name: "Conjunto Nude Power", price: 429.90, image: product3, category: "Conjuntos", sizes: ["P", "M", "G"] },
  { id: 4, name: "Saia Plissada Verde", price: 229.90, image: product4, category: "Saias", sizes: ["P", "M", "G"] },
  { id: 5, name: "Regata Gold Cetim", price: 159.90, image: product5, category: "Blusas", sizes: ["P", "M", "G", "GG"] },
  { id: 6, name: "Sobretudo Noir Gold", price: 589.90, image: product6, category: "Casacos", sizes: ["P", "M", "G"] },
];

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  return (
    <section id="colecao" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">Curadoria exclusiva</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Nossa Coleção</h2>
          <div className="w-16 h-px bg-gradient-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
