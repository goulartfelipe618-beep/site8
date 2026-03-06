import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-14">
        <p className="text-2xl tracking-[0.15em] font-light" style={{ fontFamily: 'DM Sans' }}>STILLE</p>
        <p className="text-xs text-primary-foreground/40 mt-2 tracking-wider">Bem-estar em movimento</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left max-w-3xl mx-auto">
        <div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-primary-foreground/30 mb-4">Navegação</p>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Transfer" },
              { to: "/grupos", label: "Grupos" },
              { to: "/sobre", label: "Sobre" },
              { to: "/contato", label: "Contato" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-primary-foreground/30 mb-4">Contato</p>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/50">
            <span>contato@stilletransfer.com.br</span>
            <span>(11) 99999-9999</span>
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-primary-foreground/30 mb-4">Filosofia</p>
          <p className="text-sm text-primary-foreground/50 font-light leading-relaxed">
            Menos ruído.<br />Mais presença.<br />Cada trajeto, um momento de paz.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="scandi-line opacity-20 mb-8 max-w-md mx-auto" style={{ background: 'hsla(0,0%,100%,0.1)' }} />
        <p className="text-[10px] text-primary-foreground/25 tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} Stille Transfer
        </p>
      </div>
    </div>
  </footer>
);
