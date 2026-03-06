import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Volume2, Leaf, Clock, BatteryCharging, Heart, Shield } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-40 pb-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Sobre nós</p>
            <h1 className="text-5xl md:text-6xl text-foreground font-light max-w-lg" style={{ fontFamily: 'DM Sans' }}>
              Menos ruído,<br />mais presença
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-muted-foreground leading-[1.8] font-light text-lg">
                A Stille nasceu de uma ideia simples: o trajeto não precisa ser um intervalo
                entre dois lugares. Ele pode ser um momento de pausa, de silêncio intencional,
                de bem-estar real.
              </p>

              <p className="text-muted-foreground leading-[1.8] font-light text-lg">
                Inspirados pelo design escandinavo — onde menos é sempre mais — construímos
                um serviço de transporte executivo que prioriza a experiência humana. Frotas
                híbridas com isolamento acústico, interiores em materiais naturais, motoristas
                treinados para respeitar o seu silêncio.
              </p>

              <p className="text-muted-foreground leading-[1.8] font-light text-lg">
                Cada detalhe é pensado para reduzir estímulos e ampliar a sensação de calma.
                Porque acreditamos que chegar bem é tão importante quanto chegar pontualmente.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-3 md:grid-cols-6 gap-8 mt-20"
            >
              {[
                { icon: Volume2, label: "Silêncio" },
                { icon: Leaf, label: "Sustentável" },
                { icon: Clock, label: "Pontual" },
                { icon: BatteryCharging, label: "Conectado" },
                { icon: Heart, label: "Bem-estar" },
                { icon: Shield, label: "Seguro" },
              ].map((d) => (
                <div key={d.label} className="text-center">
                  <d.icon size={20} className="text-foreground mx-auto mb-2" strokeWidth={1.5} />
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{d.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
