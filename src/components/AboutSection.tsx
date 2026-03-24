import { Truck, Shield, Heart } from "lucide-react";

const features = [
  { icon: Truck, title: "Entrega Nacional", desc: "Enviamos para todo o Brasil com rastreamento completo." },
  { icon: Shield, title: "Compra Segura", desc: "Pagamento protegido e garantia de qualidade em todas as peças." },
  { icon: Heart, title: "Feito com Amor", desc: "Cada peça é selecionada pensando na mulher moderna e elegante." },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-sage-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-sage-dark mb-3">Quem somos</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Sobre a K Bella Aura</h2>
          <div className="w-16 h-px bg-gradient-gold mx-auto mt-6" />
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-body text-base leading-relaxed text-muted-foreground">
            A K Bella Aura nasceu do desejo de oferecer moda feminina sofisticada e acessível.
            Acreditamos que toda mulher merece se sentir bela e confiante. Nossa curadoria traz peças
            que combinam tendência, elegância e conforto — perfeitas para qualquer ocasião.
            Atendemos clientes de todo o Brasil com entrega rápida e segura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="text-center p-8 bg-background shadow-elegant">
              <div className="w-14 h-14 mx-auto mb-5 bg-gradient-gold rounded-full flex items-center justify-center">
                <f.icon size={24} className="text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl mb-2 text-foreground">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
