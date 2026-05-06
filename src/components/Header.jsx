import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import content, { createWhatsAppLink } from "../data/content";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = createWhatsAppLink("Olá! Quero agendar uma avaliação na VittaPrime.");

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="logo-wrap" aria-label="Ir para o início">
          <img src={content.brand.logo} alt="Logo VittaPrime" className="logo" />
        </a>

        <nav className="nav desktop-nav">
          {content.nav.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary header-cta">
            <MessageCircle size={18} />
            Agendar no WhatsApp
          </a>

          <button className="menu-toggle" onClick={() => setIsOpen((prev) => !prev)} aria-label="Abrir menu">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <div className="container mobile-menu-inner">
            {content.nav.map((item) => (
              <a key={item.label} href={item.href} className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary mobile-menu-cta" onClick={() => setIsOpen(false)}>
              <MessageCircle size={18} />
              Agendar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
