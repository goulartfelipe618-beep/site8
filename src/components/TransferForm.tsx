import { useState } from "react";
import { toast } from "@/hooks/use-toast";

type TripType = "ida" | "ida-volta" | "hora";

export const TransferForm = () => {
  const [step, setStep] = useState(1);
  const [tripType, setTripType] = useState<TripType>("ida");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Reserva confirmada", description: "Entraremos em contato para os detalhes." });
    setStep(1);
  };

  const labelClass = "text-[11px] uppercase tracking-[0.1em] text-muted-foreground mb-2 block font-medium";

  return (
    <div className="scandi-card p-10 md:p-14">
      <div className="mb-10">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Reserva</p>
        <p className="text-2xl text-foreground font-light" style={{ fontFamily: 'DM Sans' }}>
          Agende seu transfer
        </p>
      </div>

      <div className="flex gap-2 mb-10">
        {([["ida", "Somente Ida"], ["ida-volta", "Ida e Volta"], ["hora", "Por Hora"]] as const).map(
          ([val, label]) => (
            <button
              key={val}
              type="button"
              onClick={() => setTripType(val)}
              className={`flex-1 py-3 text-xs tracking-[0.06em] rounded-full transition-all duration-300 ${
                tripType === val
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          )
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {step === 1 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>Passageiros</label>
                <input type="number" min={1} placeholder="Nº" required className="scandi-input" />
              </div>
              <div>
                <label className={labelClass}>Data</label>
                <input type="date" required className="scandi-input" />
              </div>
              <div>
                <label className={labelClass}>Hora</label>
                <input type="time" required className="scandi-input" />
              </div>
            </div>

            {tripType === "hora" && (
              <div>
                <label className={labelClass}>Horas de Serviço</label>
                <input type="number" min={1} placeholder="Quantas horas?" required className="scandi-input" />
              </div>
            )}

            <div>
              <label className={labelClass}>Embarque</label>
              <input placeholder="Endereço de partida" required className="scandi-input" />
            </div>
            <div>
              <label className={labelClass}>Destino</label>
              <input placeholder="Para onde deseja ir" required className="scandi-input" />
            </div>

            {tripType === "ida-volta" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Data de Retorno</label>
                  <input type="date" className="scandi-input" />
                </div>
                <div>
                  <label className={labelClass}>Hora de Retorno</label>
                  <input type="time" className="scandi-input" />
                </div>
              </div>
            )}

            <div>
              <label className={labelClass}>Observações</label>
              <textarea placeholder="Alguma preferência?" rows={2} className="scandi-input resize-none" />
            </div>

            <div className="pt-4">
              <button type="button" onClick={() => setStep(2)} className="scandi-btn w-full">
                Próximo
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Nome</label>
                <input placeholder="Seu nome completo" required className="scandi-input" />
              </div>
              <div>
                <label className={labelClass}>E-mail</label>
                <input type="email" placeholder="seu@email.com" required className="scandi-input" />
              </div>
              <div>
                <label className={labelClass}>WhatsApp</label>
                <input placeholder="(00) 00000-0000" required className="scandi-input" />
              </div>
              <div>
                <label className={labelClass}>Como nos encontrou?</label>
                <select className="scandi-input">
                  <option value="">Selecione</option>
                  <option value="indicacao">Indicação</option>
                  <option value="google">Google</option>
                  <option value="instagram">Instagram</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="scandi-btn-outline flex-1">
                Voltar
              </button>
              <button type="submit" className="scandi-btn flex-1">
                Confirmar
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
