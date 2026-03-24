import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-noir py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl text-primary-foreground mb-4">
              K <span className="text-gradient-gold">BELLA</span> AURA
            </h3>
            <p className="font-body text-sm text-secondary/60 leading-relaxed">
              Moda feminina elegante e sofisticada. Peças selecionadas com carinho para mulheres que brilham.
            </p>
          </div>
          <div>
            <h4 className="font-body text-sm tracking-widest uppercase text-gold-light mb-4">Links</h4>
            <div className="space-y-2">
              <a href="#colecao" className="block font-body text-sm text-secondary/60 hover:text-gold-light transition-colors">Coleção</a>
              <a href="#sobre" className="block font-body text-sm text-secondary/60 hover:text-gold-light transition-colors">Sobre</a>
              <a href="#pedido" className="block font-body text-sm text-secondary/60 hover:text-gold-light transition-colors">Fazer Pedido</a>
            </div>
          </div>
          <div>
            <h4 className="font-body text-sm tracking-widest uppercase text-gold-light mb-4">Contato</h4>
            <div className="space-y-3">
              <a href="https://instagram.com/kbellaaura" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-body text-sm text-secondary/60 hover:text-gold-light transition-colors">
                <Instagram size={16} /> @kbellaaura
              </a>
              <a href="https://wa.me/5585996176945" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-body text-sm text-secondary/60 hover:text-gold-light transition-colors">
                <Phone size={16} /> (85) 9 9617-6945
              </a>
              <a href="mailto:contato@kbellaaura.com" className="flex items-center gap-3 font-body text-sm text-secondary/60 hover:text-gold-light transition-colors">
                <Mail size={16} /> contato@kbellaaura.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-noir-light pt-8 text-center">
          <p className="font-body text-xs text-secondary/40">
            © 2026 K Bella Aura. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
