import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Transfer" },
    { to: "/grupos", label: "Grupos" },
    { to: "/sobre", label: "Sobre" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <>
      {/* Asymmetric floating nav — offset left */}
      <header className="fixed top-6 left-6 md:left-10 z-50">
        <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl px-6 py-3 flex items-center gap-8 shadow-sm">
          <Link to="/" className="text-foreground font-medium tracking-[0.1em] text-sm" style={{ fontFamily: 'DM Sans', fontWeight: 500 }}>
            STILLE
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-xs tracking-[0.08em] uppercase transition-colors duration-300 ${
                  location.pathname === l.to
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block scandi-btn !py-2 !px-5 !text-xs"
          >
            Reservar
          </a>

          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-6 right-6 z-40 bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-lg"
          >
            <div className="p-6 flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm tracking-[0.06em] py-2 ${
                    location.pathname === l.to ? "text-foreground font-medium" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="scandi-btn text-center !text-xs mt-2"
              >
                Reservar
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Minimal circle anchor button */}
      <a
        href="#reserva"
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        aria-label="Ir para reserva"
      >
        <ArrowDown size={18} strokeWidth={1.5} />
      </a>
    </>
  );
};
