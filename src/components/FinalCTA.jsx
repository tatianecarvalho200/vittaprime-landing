import { motion } from "framer-motion";
import content, { createWhatsAppLink } from "../data/content";

function FinalCTA() {
  return (
    <section className="section final-cta-section">
      <div className="container">
        <motion.div className="final-cta-box" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <div className="final-cta-image-wrap">
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="final-cta-image-shell">
              <img src={content.finalCta.image} alt="Equipe VittaPrime" />
            </motion.div>
          </div>
          <div className="final-cta-content">
            <h2 className="section-title light">{content.finalCta.title}</h2>
            <p className="section-description light">{content.finalCta.description}</p>
            <div className="hero-actions-row">
              <a href={createWhatsAppLink("Olá! Quero minha avaliação agora na VittaPrime.")} target="_blank" rel="noreferrer" className="btn btn-primary">{content.finalCta.button}</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;
