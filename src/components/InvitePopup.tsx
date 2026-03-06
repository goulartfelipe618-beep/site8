import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const InvitePopup = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/15 backdrop-blur-sm"
        onClick={() => setVisible(false)}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="scandi-card p-12 md:p-16 max-w-md mx-6 text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">Bem-vindo</p>
          <h3 className="text-3xl md:text-4xl text-foreground mb-4 font-light" style={{ fontFamily: 'DM Sans' }}>
            Stille
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8 font-light">
            Transporte executivo pensado para o seu bem-estar.
            Frotas híbridas, silêncio a bordo e o conforto que você merece.
          </p>
          <button onClick={() => setVisible(false)} className="scandi-btn w-full">
            Começar
          </button>
          <button onClick={() => setVisible(false)} className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors">
            <X size={18} strokeWidth={1.5} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
