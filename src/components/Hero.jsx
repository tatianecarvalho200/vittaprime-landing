import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Users, HeartPulse, ArrowRight } from "lucide-react";
import content, { createWhatsAppLink } from "../data/content";

const icons = [ShieldCheck, Cpu, Users, HeartPulse];

function Hero() {
  return (
    <section id="inicio" className="hero section">
      <div className="container hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="badge-pill">{content.hero.badge}</span>

          <h1 className="hero-title">
            {content.hero.title.start}<span className="text-gold">{content.hero.title.highlightOne}</span>{content.hero.title.middle}<span className="text-gold">{content.hero.title.highlightTwo}</span>{content.hero.title.end}
          </h1>

          <p className="hero-description">{content.hero.description}</p>

          <div className="hero-actions-row">
            <a href={createWhatsAppLink("Olá! Quero agendar uma avaliação na VittaPrime.")} target="_blank" rel="noreferrer" className="btn btn-primary">
              {content.hero.primaryButton}
            </a>
            <a href="#questionario" className="btn btn-secondary">
              {content.hero.secondaryButton}
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="hero-highlights">
            {content.hero.highlights.map((item, index) => {
              const Icon = icons[index];
              return (
                <div className="hero-highlight-card" key={item}>
                  <div className="icon-circle small"><Icon size={18} /></div>
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, x: 36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="hero-glow hero-glow-gold" />
          <div className="hero-glow hero-glow-blue" />
          <div className="hero-image-shell">
  <img
  src={content.hero.image}
  alt="Profissionais da clínica VittaPrime"
  className="hero-image"
/>
</div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
