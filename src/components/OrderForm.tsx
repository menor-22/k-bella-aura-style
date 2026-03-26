import { useState } from "react";
import { toast } from "sonner";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Sou ${formData.name}.\n\n📧 Email: ${formData.email}\n📱 Telefone: ${formData.phone}\n📍 Cidade: ${formData.city} - ${formData.state}\n\n📝 Pedido:\n${formData.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5585996176945?text=${encoded}`, "_blank");
    toast.success("Redirecionando para o WhatsApp...");
    setFormData({ name: "", email: "", phone: "", city: "", state: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const states = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];

  return (
    <section id="pedido" className="py-24 bg-gradient-noir">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-light mb-3">Envie seu pedido</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-primary-foreground">Faça seu Pedido</h2>
          <div className="w-16 h-px bg-gradient-gold mx-auto mt-6" />
          <p className="font-body text-sm text-secondary mt-4 max-w-lg mx-auto">
            Não está na nossa cidade? Sem problemas! Preencha o formulário abaixo e entraremos em contato para finalizar seu pedido com envio para qualquer lugar do Brasil.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text" name="name" placeholder="Seu nome" required
              value={formData.name} onChange={handleChange}
              className="w-full bg-noir-light/50 border border-gold/20 text-primary-foreground placeholder:text-secondary/50 px-5 py-3.5 font-body text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="email" name="email" placeholder="Seu e-mail" required
              value={formData.email} onChange={handleChange}
              className="w-full bg-noir-light/50 border border-gold/20 text-primary-foreground placeholder:text-secondary/50 px-5 py-3.5 font-body text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="tel" name="phone" placeholder="Telefone / WhatsApp" required
              value={formData.phone} onChange={handleChange}
              className="w-full bg-noir-light/50 border border-gold/20 text-primary-foreground placeholder:text-secondary/50 px-5 py-3.5 font-body text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="text" name="city" placeholder="Sua cidade" required
              value={formData.city} onChange={handleChange}
              className="w-full bg-noir-light/50 border border-gold/20 text-primary-foreground placeholder:text-secondary/50 px-5 py-3.5 font-body text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <select
            name="state" required value={formData.state} onChange={handleChange}
            className="w-full bg-noir-light/50 border border-gold/20 text-primary-foreground px-5 py-3.5 font-body text-sm focus:outline-none focus:border-gold transition-colors"
          >
            <option value="" className="text-noir">Selecione seu estado</option>
            {states.map((s) => (
              <option key={s} value={s} className="text-noir">{s}</option>
            ))}
          </select>
          <textarea
            name="message" placeholder="Descreva os produtos que deseja, tamanhos, cores e qualquer observação..."
            rows={5} required value={formData.message} onChange={handleChange}
            className="w-full bg-noir-light/50 border border-gold/20 text-primary-foreground placeholder:text-secondary/50 px-5 py-3.5 font-body text-sm focus:outline-none focus:border-gold transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full bg-gradient-gold text-accent-foreground py-4 font-body text-sm tracking-widest uppercase shadow-gold hover:opacity-90 transition-opacity"
          >
            Enviar Pedido
          </button>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
