import { ShoppingBag } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  sizes: string[];
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart, onViewDetails }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer" onClick={() => onViewDetails(product)}>
      <div className="relative overflow-hidden bg-card aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={1000}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/20 transition-colors duration-500" />
        <button
          onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
          className="absolute bottom-4 left-4 right-4 bg-gradient-gold text-accent-foreground py-3 font-body text-xs tracking-widest uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center gap-2 shadow-gold"
        >
          <ShoppingBag size={16} />
          Adicionar
        </button>
      </div>
      <div className="mt-4 space-y-1">
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">{product.category}</p>
        <h3 className="font-display text-xl text-foreground">{product.name}</h3>
        <p className="font-body text-sm font-semibold text-sage-dark">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </p>
        <div className="flex gap-1 mt-2">
          {product.sizes.map((size) => (
            <span key={size} className="text-xs font-body text-muted-foreground border border-border px-2 py-0.5">
              {size}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
