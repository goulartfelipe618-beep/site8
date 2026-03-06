import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Contato = () => {
  const info = [
    { label: "E-mail", value: "contato@stilletransfer.com.br", href: "mailto:contato@stilletransfer.com.br" },
    { label: "Telefone", value: "(11) 99999-9999", href: "tel:+5511999999999" },
    { label: "WhatsApp", value: "(11) 99999-9999", href: "https://wa.me/5511999999999" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-40 pb-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Contato</p>
            <h1 className="text-5xl md:text-6xl text-foreground font-light max-w-lg" style={{ fontFamily: 'DM Sans' }}>
              Fale<br />conosco
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6 max-w-lg">
          <div className="scandi-card p-10 md:p-14">
            <div className="space-y-8">
              {info.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="block py-4 border-b border-border last:border-b-0 group"
                >
                  <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-foreground group-hover:text-muted-foreground transition-colors text-lg font-light" style={{ fontFamily: 'DM Sans' }}>
                    {item.value}
                  </p>
                </motion.a>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="scandi-btn block text-center w-full"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
