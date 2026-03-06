import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TransferForm } from "@/components/TransferForm";
import { motion } from "framer-motion";
import { Volume2, Leaf, Clock, BatteryCharging } from "lucide-react";
import scandiSedan from "@/assets/scandi-sedan.jpg";
import scandiInterior from "@/assets/scandi-interior.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero — lots of whitespace */}
      <section className="relative min-h-screen flex items-end overflow-hidden pb-24">
        <div className="absolute inset-0">
          <img src={scandiSedan} alt="Sedã híbrido em ambiente escandinavo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative container mx-auto px-6"
        >
          <div className="max-w-lg">
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Transporte executivo</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 text-foreground font-light" style={{ fontFamily: 'DM Sans' }}>
              Silêncio.<br />
              Bem-estar.<br />
              Movimento.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-sm font-light">
              Frotas híbridas, cabines silenciosas e um compromisso genuíno com o seu conforto e o meio ambiente.
            </p>
            <a href="#reserva" className="scandi-btn inline-block">
              Reservar transfer
            </a>
          </div>
        </motion.div>
      </section>

      {/* Fleet — large airy cards */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3">Nossa frota</p>
            <h2 className="text-4xl md:text-5xl text-foreground font-light" style={{ fontFamily: 'DM Sans' }}>
              Pensada para o<br />seu bem-estar
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="scandi-card overflow-hidden"
            >
              <img src={scandiSedan} alt="Sedã híbrido" className="w-full aspect-[16/10] object-cover" />
              <div className="p-8">
                <h3 className="text-xl text-foreground mb-2 font-light" style={{ fontFamily: 'DM Sans' }}>Sedã Híbrido</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Motor silencioso, cabine isolada acusticamente. O trajeto se torna um momento de pausa.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="scandi-card overflow-hidden"
            >
              <img src={scandiInterior} alt="Interior minimalista" className="w-full aspect-[16/10] object-cover" />
              <div className="p-8">
                <h3 className="text-xl text-foreground mb-2 font-light" style={{ fontFamily: 'DM Sans' }}>Interior Minimalista</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Madeira clara, tecidos naturais e espaço generoso. Menos estímulos, mais presença.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { icon: Volume2, title: "Silêncio\na bordo", desc: "Cabines com isolamento acústico premium" },
                { icon: Leaf, title: "Frota\nhíbrida", desc: "Compromisso com o meio ambiente" },
                { icon: Clock, title: "Pontualidade\nsempre", desc: "Chegamos antes, nunca depois" },
                { icon: BatteryCharging, title: "Carregadores\nUSB-C", desc: "Conectividade sem fios" },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <f.icon size={24} className="text-foreground mx-auto mb-4" strokeWidth={1.5} />
                  <p className="text-sm text-foreground whitespace-pre-line leading-relaxed mb-2 font-medium">{f.title}</p>
                  <p className="text-xs text-muted-foreground font-light">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="reserva" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <TransferForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
