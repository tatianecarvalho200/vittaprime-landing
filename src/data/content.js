import logo from "../assets/logo-vittaprime.png";
import heroImage from "../assets/logo-vittaprime.png";
import esteticaFacial from "../assets/estetica-facial.jpg";
import esteticaCorporal from "../assets/estetica-corporal.jpg";
import depilacaoLaser from "../assets/depilacao-laser.jpg";
import odontologia from "../assets/odontologia.jpg";
import implantes from "../assets/implantes.jpg";
import hidragloss from "../assets/hidragloss.jpg";
import facialAntes from "../assets/resultado-1.jpg";
import facialDepois from "../assets/resultado-2.jpg";
import odontoAntes from "../assets/antes-dente.jpg";
import odontoDepois from "../assets/depois-dente.jpg";
import fachada from "../assets/fachada.2.jpg";
import finalCtaImage from "../assets/equipe.jpg";

export const WHATSAPP_NUMBER = "5533999999999";

export const createWhatsAppLink = (message = "") => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodedMessage}` : ""}`;
};

const content = {
  brand: {
    name: "VittaPrime",
    subtitle: "Clínica de Saúde e Estética",
    logo,
    instagramHandle: "@vittaprimeclinica",
    instagramUrl: "https://www.instagram.com/vittaprimeclinica/",
    whatsappDisplay: "(33) 99999-9999"
  },

  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "Sobre nós", href: "#sobre" },
    { label: "Resultados", href: "#resultados" },
    { label: "Localização", href: "#localizacao" }
  ],

  hero: {
    badge: "+15 anos de referência em Minas Novas e região",
    title: {
      start: "Realce sua ",
      highlightOne: "beleza",
      middle: " e tenha o ",
      highlightTwo: "sorriso",
      end: " que você sempre quis"
    },
    description:
      "Odontologia, estética, implantes e tratamentos personalizados para cuidar de você por inteiro, com segurança, tecnologia e atendimento humanizado.",
    primaryButton: "Agendar avaliação pelo WhatsApp",
    secondaryButton: "Responder questionário rápido",
    image: heroImage,
    highlights: [
      "Clínica especializada",
      "Equipamentos modernos",
      "Profissionais experientes",
      "Atendimento humanizado"
    ]
  },

  treatments: {
    eyebrow: "NOSSOS TRATAMENTOS",
    title: "Soluções completas para sua saúde, beleza e autoestima",
    button: "Ver todos os tratamentos",
    items: [
      {
        title: "Estética Facial",
        description: "Botox, preenchimento, limpeza de pele, hidratação e rejuvenescimento.",
        image: esteticaFacial
      },
      {
        title: "Estética Corporal",
        description: "Criomodelagem, protocolos corporais e cuidados para celulite e flacidez.",
        image: esteticaCorporal
      },
      {
        title: "Depilação a Laser",
        description: "Pele lisa, mais conforto e praticidade para sua rotina.",
        image: depilacaoLaser
      },
      {
        title: "Odontologia",
        description: "Clareamento, restaurações, prevenção e cuidado completo com seu sorriso.",
        image: odontologia
      },
      {
        title: "Implantes Dentários",
        description: "Recupere sua mastigação, segurança e autoestima com planejamento profissional.",
        image: implantes
      },
      {
        title: "HidraGloss",
        description: "Hidratação profunda para lábios mais bonitos, suaves e revitalizados.",
        image: hidragloss
      }
    ]
  },

  questionnaire: {
    eyebrow: "AVALIAÇÃO PERSONALIZADA",
    title: "Responda em menos de 1 minuto e receba orientação da nossa equipe",
    description: "Queremos entender o que você precisa para indicar o melhor caminho para você.",
    benefits: [
      "Atendimento rápido pelo WhatsApp",
      "Plano de cuidado personalizado",
      "Sigilo e segurança dos dados"
    ],
    steps: [
      { title: "Para começarmos, me conta:" },
      {
        title: "Qual tratamento você procura?",
        options: [
          "Estética Facial",
          "Estética Corporal",
          "Depilação a Laser",
          "Odontologia",
          "Implantes Dentários",
          "HidraGloss",
          "Ainda não sei, quero avaliação"
        ]
      },
      {
        title: "Qual seu principal objetivo?",
        options: [
          "Melhorar o sorriso",
          "Cuidar da pele",
          "Reduzir medidas",
          "Tratar celulite/estrias",
          "Remover pelos",
          "Recuperar autoestima"
        ]
      },
      {
        title: "Como podemos te ajudar agora?",
        options: ["Agendar avaliação", "Tirar dúvidas", "Saber valores"]
      }
    ]
  },

  differentials: {
    eyebrow: "POR QUE ESCOLHER A VITTAPRIME",
    title: "Experiência, tecnologia e cuidado em cada detalhe",
    items: [
      { number: "+15 anos", text: "de referência em Minas Novas e região" },
      { number: "Cuidado completo", text: "da avaliação ao pós-atendimento" },
      { number: "Equipe especializada", text: "profissionais atualizados e qualificados" },
      { number: "Estrutura moderna", text: "ambiente acolhedor e equipamentos avançados" }
    ]
  },

 results: {
  eyebrow: "RESULTADOS REAIS",
  title: "Histórias que nos inspiram todos os dias",
  cases: [
    {
      title: "Estética facial",
      beforeImage: facialAntes,
      afterImage: facialDepois,
      before: "Antes",
      after: "Depois"
    },
    {
      title: "Odontologia estética",
      beforeImage: odontoAntes,
      afterImage: odontoDepois,
      before: "Antes",
      after: "Depois"
    }
  ],
  testimonial: {
    text: "Atendimento impecável, equipe maravilhosa e cuidado em cada detalhe. Me senti segura do início ao fim.",
    author: "Paciente VittaPrime"
  }
},
    

  location: {
    eyebrow: "ONDE ESTAMOS",
    title: "Visite nossa clínica",
    lines: ["Rua Israel Pinheiro, 192 - Centro", "Minas Novas/MG", "Em frente ao Banco do Brasil"],
    button: "Abrir rota no Google Maps",
    buttonUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Israel+Pinheiro+192+Centro+Minas+Novas+MG",
    mapEmbed: "https://www.google.com/maps?q=Rua+Israel+Pinheiro+192+Centro+Minas+Novas+MG&output=embed",
    facadeImage: fachada,
    facadeCaption: "Estrutura moderna em localização privilegiada"
  },

  finalCta: {
    title: "Sua melhor versão começa com uma decisão.",
    description: "Responda ao questionário ou fale com nossa equipe pelo WhatsApp e dê o primeiro passo hoje mesmo.",
    button: "Quero minha avaliação agora",
    image: finalCtaImage
  },

  footer: {
    description: "VittaPrime Clínica de Saúde e Estética",
    links: [
      { label: "Início", href: "#inicio" },
      { label: "Tratamentos", href: "#tratamentos" },
      { label: "Localização", href: "#localizacao" },
      { label: "WhatsApp", href: createWhatsAppLink("Olá! Vim pela landing page da VittaPrime.") }
    ]
  }
};

export default content;
