import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "../data/content";

function FloatingWhatsApp() {
  return (
    <a href={createWhatsAppLink("Olá! Vim pela landing page da VittaPrime.")} target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="Falar no WhatsApp">
      <MessageCircle size={22} />
      <span>WhatsApp</span>
    </a>
  );
}

export default FloatingWhatsApp;
