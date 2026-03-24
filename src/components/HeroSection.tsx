import heroImage from "@/assets/hero-fashion.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="K Bella Aura - Moda feminina elegante"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/70 via-noir/40 to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 py-32">
        <div className="max-w-xl space-y-6">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold-light opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Nova Coleção 2026
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-tight text-primary-foreground opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Elegância que <br />
            <span className="text-gradient-gold font-medium italic">inspira</span>
          </h1>
          <p className="font-body text-base md:text-lg text-secondary leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Descubra peças únicas que celebram a beleza e a sofisticação feminina. Entregamos para todo o Brasil.
          </p>
          <div className="flex gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <a
              href="#colecao"
              className="inline-block bg-gradient-gold text-accent-foreground px-8 py-3.5 font-body text-sm tracking-widest uppercase shadow-gold hover:opacity-90 transition-opacity"
            >
              Ver Coleção
            </a>
            <a
              href="#pedido"
              className="inline-block border border-gold-light/40 text-gold-light px-8 py-3.5 font-body text-sm tracking-widest uppercase hover:bg-gold-light/10 transition-colors"
            >
              Fazer Pedido
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
