import { motion } from "framer-motion";
import { Award, Users, ShieldCheck, Building2 } from "lucide-react";
import content from "../data/content";

const icons = [Award, Users, ShieldCheck, Building2];

function Differentials() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className="section-heading center">
          <span className="eyebrow">{content.differentials.eyebrow}</span>
          <h2 className="section-title">{content.differentials.title}</h2>
        </div>
        <div className="differentials-grid">
          {content.differentials.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article key={item.number} className="differential-card" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.07 }}>
                <div className="icon-circle"><Icon size={20} /></div>
                <h3 className="differential-title">{item.number}</h3>
                <p className="differential-text">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Differentials;
