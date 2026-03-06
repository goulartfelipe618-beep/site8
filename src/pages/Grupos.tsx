import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GroupForm } from "@/components/GroupForm";
import { motion } from "framer-motion";
import scandiFleet from "@/assets/scandi-fleet.jpg";
import scandiSedan from "@/assets/scandi-sedan.jpg";
import scandiInterior from "@/assets/scandi-interior.jpg";

const galleryItems = [
  {
    img: scandiFleet,
    title: "A Frota",
    desc: "Veículos híbridos mantidos com o mesmo cuidado que dedicamos ao seu conforto.",
  },
  {
    img: scandiSedan,
    title: "O Trajeto",
    desc: "Cada percurso é uma oportunidade de desacelerar. Silêncio, espaço e serenidade.",
  },
  {
    img: scandiInterior,
    title: "O Interior",
    desc: "Madeira clara, tecidos em tons neutros e uma sensação de calma que começa ao entrar.",
  },
];

const Grupos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-40 pb-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Serviço para grupos</p>
            <h1 className="text-5xl md:text-6xl text-foreground font-light max-w-lg" style={{ fontFamily: 'DM Sans' }}>
              Juntos, com<br />mais tranquilidade
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Gallery — large cards with lots of breathing room */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl space-y-16">
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  i % 2 === 1 ? "md:ml-auto" : ""
                }`}
              >
                <div className={`scandi-card overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <img src={item.img} alt={item.title} className="w-full aspect-[4/3] object-cover" />
                </div>
                <div className={`py-4 ${i % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">0{i + 1}</p>
                  <h3 className="text-3xl text-foreground mb-4 font-light" style={{ fontFamily: 'DM Sans' }}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light max-w-sm ${i % 2 === 1 ? 'md:ml-auto' : ''}">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3">Serviços</p>
            <h2 className="text-4xl text-foreground font-light" style={{ fontFamily: 'DM Sans' }}>
              Para cada ocasião
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            {[
              { title: "Casamentos", desc: "Transporte sereno para o dia mais especial. Sem pressa, sem ruído." },
              { title: "Corporativo", desc: "Pontualidade e discrição para eventos de qualquer escala." },
              { title: "Turismo", desc: "Roteiros personalizados com foco em conforto e bem-estar." },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="scandi-card p-10"
              >
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">0{i + 1}</p>
                <h3 className="text-xl text-foreground mb-3 font-light" style={{ fontFamily: 'DM Sans' }}>
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <GroupForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grupos;
