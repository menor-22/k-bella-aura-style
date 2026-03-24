import { X, Minus, Plus, Trash2 } from "lucide-react";
import { Product } from "./ProductCard";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: number, delta: number) => void;
  onRemove: (productId: number) => void;
}

const CartDrawer = ({ open, onClose, items, onUpdateQuantity, onRemove }: CartDrawerProps) => {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <>
      {open && <div className="fixed inset-0 bg-noir/50 z-50" onClick={onClose} />}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-elegant transform transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="font-display text-2xl text-foreground">Sacola</h2>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <p className="font-body text-sm text-muted-foreground text-center mt-12">Sua sacola está vazia</p>
            ) : (
              items.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <h3 className="font-display text-lg text-foreground">{item.product.name}</h3>
                    <p className="font-body text-sm text-sage-dark font-semibold">
                      R$ {item.product.price.toFixed(2).replace(".", ",")}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button onClick={() => onUpdateQuantity(item.product.id, -1)} className="text-muted-foreground hover:text-foreground">
                        <Minus size={14} />
                      </button>
                      <span className="font-body text-sm text-foreground">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.product.id, 1)} className="text-muted-foreground hover:text-foreground">
                        <Plus size={14} />
                      </button>
                      <button onClick={() => onRemove(item.product.id)} className="ml-auto text-destructive hover:text-destructive/80">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="p-6 border-t border-border space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-body text-sm uppercase tracking-wider text-muted-foreground">Total</span>
                <span className="font-display text-2xl text-foreground">
                  R$ {total.toFixed(2).replace(".", ",")}
                </span>
              </div>
              <a
                href="#pedido"
                onClick={onClose}
                className="block text-center bg-gradient-gold text-accent-foreground py-3.5 font-body text-sm tracking-widest uppercase shadow-gold hover:opacity-90 transition-opacity"
              >
                Finalizar Pedido
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
