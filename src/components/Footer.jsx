import { Camera, Phone, MapPin } from "lucide-react";
import content, { createWhatsAppLink } from "../data/content";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={content.brand.logo} alt="Logo Vitta Prime" className="footer-logo" />
          <p>{content.footer.description}</p>
        </div>

        <div className="footer-contact">
          <a href={content.brand.instagramUrl} target="_blank" rel="noreferrer" className="footer-contact-item"><Camera size={18} />{content.brand.instagramHandle}</a>
          <a href={createWhatsAppLink("Olá! Vim pela landing page da VittaPrime.")} target="_blank" rel="noreferrer" className="footer-contact-item"><Phone size={18} />{content.brand.whatsappDisplay}</a>
          <span className="footer-contact-item"><MapPin size={18} />Minas Novas/MG</span>
        </div>

        <div className="footer-links">
          {content.footer.links.map((link) => (
            <a key={link.label} href={link.href} target={link.label === "WhatsApp" ? "_blank" : undefined} rel={link.label === "WhatsApp" ? "noreferrer" : undefined}>{link.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
