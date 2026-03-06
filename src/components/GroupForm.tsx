import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const GroupForm = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Solicitação enviada", description: "Entraremos em contato para organizar seu grupo." });
    setStep(1);
  };

  const labelClass = "text-[11px] uppercase tracking-[0.1em] text-muted-foreground mb-2 block font-medium";

  return (
    <div className="scandi-card p-10 md:p-14">
      <div className="mb-10">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Grupos</p>
        <p className="text-2xl text-foreground font-light" style={{ fontFamily: 'DM Sans' }}>
          Solicite para seu grupo
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {step === 1 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Tipo de Veículo</label>
                <select className="scandi-input">
                  <option value="">Selecione</option>
                  <option value="van">Van Executiva</option>
                  <option value="micro">Micro-ônibus</option>
                  <option value="onibus">Ônibus Executivo</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Passageiros</label>
                <input type="number" min={1} placeholder="Nº" required className="scandi-input" />
              </div>
            </div>
            <div>
              <label className={labelClass}>Embarque</label>
              <input placeholder="Endereço de partida" required className="scandi-input" />
            </div>
            <div>
              <label className={labelClass}>Destino</label>
              <input placeholder="Para onde seguirão" required className="scandi-input" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Data/Hora Ida</label>
                <input type="datetime-local" required className="scandi-input" />
              </div>
              <div>
                <label className={labelClass}>Data/Hora Retorno</label>
                <input type="datetime-local" className="scandi-input" />
              </div>
            </div>
            <div>
              <label className={labelClass}>Detalhes</label>
              <textarea placeholder="Descreva o evento" rows={3} className="scandi-input resize-none" />
            </div>
            <div className="pt-4">
              <button type="button" onClick={() => setStep(2)} className="scandi-btn w-full">Próximo</button>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Nome</label>
                <input placeholder="Seu nome" required className="scandi-input" />
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
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>
            <div className="pt-4 flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="scandi-btn-outline flex-1">Voltar</button>
              <button type="submit" className="scandi-btn flex-1">Solicitar</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
