import { motion } from "framer-motion";
import { Sparkles, Heart, Zap, Smile, ShieldCheck, Droplets } from "lucide-react";
import content, { createWhatsAppLink } from "../data/content";

const iconMap = [Sparkles, Heart, Zap, Smile, ShieldCheck, Droplets];

function Treatments() {
  return (
    <section id="tratamentos" className="section">
      <div className="container">
        <div className="section-heading center">
          <span className="eyebrow">{content.treatments.eyebrow}</span>
          <h2 className="section-title">{content.treatments.title}</h2>
        </div>

        <div className="treatments-grid">
          {content.treatments.items.map((item, index) => {
            const Icon = iconMap[index];
            return (
              <motion.article key={item.title} className="treatment-card" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.06 }}>
                <div className="treatment-image-wrap">
                  <img src={item.image} alt={item.title} className="treatment-image" />
                </div>
                <div className="treatment-body">
                  <div className="icon-circle"><Icon size={20} /></div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="center-button">
          <a href={createWhatsAppLink("Olá! Quero saber mais sobre os tratamentos da VittaPrime.")} target="_blank" rel="noreferrer" className="btn btn-primary">
            {content.treatments.button}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Treatments;
