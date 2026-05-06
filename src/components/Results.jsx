import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import content from "../data/content";

function Results() {
  return (
    <section id="resultados" className="section">
      <div className="container">
        <div className="section-heading center">
          <span className="eyebrow">{content.results.eyebrow}</span>
          <h2 className="section-title">{content.results.title}</h2>
        </div>
        <div className="results-grid">
          {content.results.cases.map((item, index) => (
            <motion.article key={item.title} className="result-card" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }}>
              <div className="compare-grid">
  <div className="compare-image">
    <img src={item.beforeImage} alt={`${item.title} antes`} />
    <span className="compare-tag">{item.before}</span>
  </div>

  <div className="compare-image">
    <img src={item.afterImage} alt={`${item.title} depois`} />
    <span className="compare-tag">{item.after}</span>
  </div>
</div>
              <h3 className="card-title centered">{item.title}</h3>
            </motion.article>
          ))}
          <motion.article className="testimonial-card" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.16 }}>
            <Quote size={28} className="quote-icon" />
            <p className="testimonial-text">{content.results.testimonial.text}</p>
            <span className="testimonial-author">{content.results.testimonial.author}</span>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default Results;
