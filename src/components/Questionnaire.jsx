import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Clock3, ClipboardList, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import content, { createWhatsAppLink } from "../data/content";

function Questionnaire() {
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", treatment: "", objective: "", action: "" });
  const currentStep = useMemo(() => content.questionnaire.steps[step - 1], [step]);

  const updateField = (field, value) => {
    setError("");
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep = () => {
    if (step === 1 && (!formData.name.trim() || !formData.phone.trim())) {
      setError("Preencha nome completo e WhatsApp para continuar.");
      return false;
    }
    if (step === 2 && !formData.treatment) {
      setError("Selecione um tratamento para continuar.");
      return false;
    }
    if (step === 3 && !formData.objective) {
      setError("Selecione seu objetivo principal.");
      return false;
    }
    if (step === 4 && !formData.action) {
      setError("Selecione como podemos te ajudar agora.");
      return false;
    }
    setError("");
    return true;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setError("");
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    if (!validateStep()) return;
    const message = `Olá! Vim pela landing page da VittaPrime.\nMeu nome é ${formData.name}.\nMeu WhatsApp é ${formData.phone}.\nTenho interesse em ${formData.treatment}.\nMeu objetivo é ${formData.objective}.\nGostaria de ${formData.action}.`;
    window.open(createWhatsAppLink(message), "_blank");
  };

  return (
    <section id="questionario" className="section questionnaire-section">
      <div className="container">
        <div className="questionnaire-shell">
          <motion.div className="questionnaire-grid" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <div className="questionnaire-copy">
              <span className="eyebrow light">{content.questionnaire.eyebrow}</span>
              <h2 className="section-title light">{content.questionnaire.title}</h2>
              <p className="section-description light">{content.questionnaire.description}</p>
              <div className="questionnaire-benefits">
                <div className="benefit-item"><div className="icon-circle outlined"><Clock3 size={18} /></div><span>{content.questionnaire.benefits[0]}</span></div>
                <div className="benefit-item"><div className="icon-circle outlined"><ClipboardList size={18} /></div><span>{content.questionnaire.benefits[1]}</span></div>
                <div className="benefit-item"><div className="icon-circle outlined"><ShieldCheck size={18} /></div><span>{content.questionnaire.benefits[2]}</span></div>
              </div>
            </div>

            <div className="questionnaire-card">
              <div className="step-indicator">
                {[1, 2, 3, 4].map((item) => <div key={item} className={`step-badge ${step >= item ? "active" : ""}`}>{item}</div>)}
              </div>
              <h3 className="form-step-title">{currentStep.title}</h3>

              {step === 1 && (
                <div className="form-fields">
                  <label className="field-group"><span>Nome completo</span><input type="text" placeholder="Ex: Maria da Silva" value={formData.name} onChange={(e) => updateField("name", e.target.value)} /></label>
                  <label className="field-group"><span>WhatsApp</span><input type="tel" placeholder="(33) 99999-9999" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} /></label>
                </div>
              )}

              {step === 2 && <div className="option-grid">{currentStep.options.map((option) => <button key={option} type="button" className={`option-chip ${formData.treatment === option ? "selected" : ""}`} onClick={() => updateField("treatment", option)}>{option}</button>)}</div>}
              {step === 3 && <div className="option-grid">{currentStep.options.map((option) => <button key={option} type="button" className={`option-chip ${formData.objective === option ? "selected" : ""}`} onClick={() => updateField("objective", option)}>{option}</button>)}</div>}
              {step === 4 && <div className="option-grid">{currentStep.options.map((option) => <button key={option} type="button" className={`option-chip ${formData.action === option ? "selected" : ""}`} onClick={() => updateField("action", option)}>{option}</button>)}</div>}

              {error && <p className="form-error">{error}</p>}

              <div className="form-actions">
                <button type="button" className="btn btn-outline" onClick={handleBack} disabled={step === 1}><ChevronLeft size={18} />Voltar</button>
                {step < 4 ? <button type="button" className="btn btn-primary" onClick={handleNext}>Continuar<ChevronRight size={18} /></button> : <button type="button" className="btn btn-primary" onClick={handleSubmit}>Enviar e falar no WhatsApp</button>}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Questionnaire;
