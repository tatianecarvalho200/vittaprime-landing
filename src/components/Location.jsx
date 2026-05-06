import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import content from "../data/content";

function Location() {
  return (
    <section id="localizacao" className="section">
      <div className="container">
        <div className="location-grid">
          <motion.div className="location-copy" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="eyebrow">{content.location.eyebrow}</span>
            <h2 className="section-title">{content.location.title}</h2>
            <div className="location-lines">{content.location.lines.map((line) => <p key={line}>{line}</p>)}</div>
            <a href={content.location.buttonUrl} target="_blank" rel="noreferrer" className="btn btn-primary"><MapPin size={18} />{content.location.button}</a>
          </motion.div>

          <motion.div className="location-visual" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="location-map-card"><iframe src={content.location.mapEmbed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa da clínica VittaPrime" /></div>
            <div className="facade-card"><img src={content.location.facadeImage} alt="Fachada da clínica" /><div className="facade-caption"><span>{content.location.facadeCaption}</span><ArrowUpRight size={16} /></div></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Location;
