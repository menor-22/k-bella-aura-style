import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header = ({ cartCount, onCartClick }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-2xl md:text-3xl font-semibold tracking-wider text-foreground">
          K <span className="text-gradient-gold">BELLA</span> AURA
        </a>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm tracking-widest uppercase">
          <a href="#colecao" className="text-muted-foreground hover:text-foreground transition-colors">Coleção</a>
          <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">Sobre</a>
          <a href="#pedido" className="text-muted-foreground hover:text-foreground transition-colors">Pedido</a>
          <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors">Contato</a>
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={onCartClick} className="relative text-foreground hover:text-accent transition-colors">
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-body font-semibold">
                {cartCount}
              </span>
            )}
          </button>
          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-background border-b border-border px-6 py-6 flex flex-col gap-4 font-body text-sm tracking-widest uppercase animate-fade-in">
          <a href="#colecao" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Coleção</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Sobre</a>
          <a href="#pedido" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Pedido</a>
          <a href="#contato" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Contato</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
