import { useState } from "react";
import { X, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "./ProductCard";

interface ProductDetailModalProps {
  product: Product;
  open: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductDetailModal = ({ product, open, onClose, onAddToCart }: ProductDetailModalProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!open) return null;

  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-noir/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-background w-full max-w-4xl max-h-[90vh] overflow-y-auto mx-4 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-foreground hover:text-accent transition-colors bg-background/80 rounded-full p-2"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="aspect-[3/4] bg-card">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="p-8 md:p-10 flex flex-col justify-center space-y-6">
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-2">
                {product.category}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground">
                {product.name}
              </h2>
            </div>

            <p className="font-display text-2xl text-sage-dark font-semibold">
              R$ {product.price.toFixed(2).replace(".", ",")}
            </p>

            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Peça exclusiva da coleção K Bella Aura. Confeccionada com tecidos de alta qualidade, 
              proporcionando conforto e elegância para todas as ocasiões. Caimento impecável e 
              acabamento premium.
            </p>

            {/* Sizes */}
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">
                Tamanho
              </p>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border font-body text-sm transition-all ${
                      selectedSize === size
                        ? "border-accent bg-accent/10 text-foreground"
                        : "border-border text-muted-foreground hover:border-accent/50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gradient-gold text-accent-foreground py-4 font-body text-sm tracking-widest uppercase shadow-gold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <ShoppingBag size={18} />
              Adicionar à Sacola
            </button>

            {/* Extra info */}
            <div className="border-t border-border pt-6 space-y-3">
              <p className="font-body text-xs text-muted-foreground">
                ✦ Enviamos para todo o Brasil
              </p>
              <p className="font-body text-xs text-muted-foreground">
                ✦ Troca grátis na primeira compra
              </p>
              <p className="font-body text-xs text-muted-foreground">
                ✦ Pagamento via Pix, cartão ou boleto
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
