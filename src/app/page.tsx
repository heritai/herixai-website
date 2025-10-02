"use client";
// Test deployment - GitHub Actions CI/CD

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa6";
import { FaArrowDown, FaBrain, FaChartLine, FaRobot, FaCloud, FaShieldAlt, FaChalkboardTeacher, FaGraduationCap, FaFileAlt, FaUserGraduate, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

type Lang = "fr" | "en";
type Theme = "dark" | "light";

type Project = {
  title: string;
  description: string;
  solution: string;
  details: string;
  stack: string;
  image: string;
  demo: string;
  github: string;
  featured: boolean;
};

const t = (lang: Lang) => ({
  nav: {
    home: lang === "fr" ? "Accueil" : "Home",
    services: lang === "fr" ? "Services" : "Services",
    projects: lang === "fr" ? "Projets" : "Projects",
    about: lang === "fr" ? "À propos" : "About",
    contact: lang === "fr" ? "Contact" : "Contact",
  },
  hero: {
    title: "HerixAI",
    subtitle:
      lang === "fr"
        ? "Solutions d’Intelligence Artificielle & Machine Learning — efficaces, évolutives et responsables."
        : "Artificial Intelligence & Machine Learning Solutions — efficient, scalable, and responsible.",
    cta: lang === "fr" ? "Découvrir nos services" : "Explore our services",
    demo: lang === "fr" ? "Réserver une démo" : "Book a Demo",
  },
  services: {
    title: lang === "fr" ? "Services" : "Services",
    value:
      lang === "fr"
        ? "Chaque projet vise à créer une valeur mesurable — gain d’efficacité, réduction des coûts, conformité réglementaire et adoption responsable de l’IA."
        : "Each project is designed to create measurable value — improved efficiency, cost reduction, regulatory compliance, and responsible AI adoption.",
    items: [
      {
        icon: <FaBrain className="text-electric text-2xl" />,
        title: lang === "fr" ? "Développement IA & ML" : "AI & ML Development",
        headline: lang === "fr" ? "Décisions plus rapides et plus précises" : "Faster and more accurate decisions",
        subtitle: lang === "fr" ? "Modèles fiables et sur mesure pour vos besoins métiers" : "Reliable, tailored models for your business needs",
        desc:
          lang === "fr"
            ? "• Classification clients pour cibler les offres marketing\n• Prévision de la demande pour optimiser les stocks\n• Détection de fraude et systèmes de recommandation"
            : "• Customer classification for targeted marketing\n• Demand forecasting to optimize inventory\n• Fraud detection and recommender systems",
      },
      {
        icon: <FaChartLine className="text-electric text-2xl" />,
        title: lang === "fr" ? "Science des données & Analytique" : "Data Science & Analytics",
        headline: lang === "fr" ? "Visibilité accrue et décisions guidées par les données" : "Greater visibility and data-driven decision-making",
        subtitle: lang === "fr" ? "Donnez du sens à vos données et pilotez par la valeur" : "Unlock insights and drive value from your data",
        desc:
          lang === "fr"
            ? "• Nettoyage et structuration de grandes bases de données\n• Segmentation clients et tableaux de bord KPI\n• Détection d'anomalies et suivi en temps réel"
            : "• Cleaning and structuring large datasets\n• Customer segmentation and KPI dashboards\n• Anomaly detection and real-time monitoring",
      },
      {
        icon: <FaRobot className="text-electric text-2xl" />,
        title: lang === "fr" ? "IA Générative & LLMs" : "Generative AI & LLMs",
        headline: lang === "fr" ? "Productivité accrue et meilleure qualité de service" : "Higher productivity and service quality",
        subtitle: lang === "fr" ? "Exploitez la puissance des modèles de langage et de l'IA générative" : "Harness the power of large language models and generative AI",
        desc:
          lang === "fr"
            ? "• Assistants virtuels pour le support client\n• Résumés automatiques de documents réglementaires\n• Génération de contenus (rapports, réponses, prototypes)"
            : "• Virtual assistants for customer support\n• Automated summarization of regulatory documents\n• Content generation (reports, responses, prototypes)",
      },
      {
        icon: <FaCloud className="text-electric text-2xl" />,
        title: lang === "fr" ? "Intégration & Déploiement IA" : "AI Integration & Deployment",
        headline: lang === "fr" ? "Une IA fiable et prête à monter en charge" : "Reliable and scalable AI",
        subtitle: lang === "fr" ? "De l'algorithme au produit, des solutions prêtes à l'usage" : "From algorithm to product, ready-to-use AI solutions",
        desc:
          lang === "fr"
            ? "• Déploiement sur AWS (SageMaker, Lambda)\n• Création d'APIs scalables et workflows MLOps\n• Pipelines de déploiement continu"
            : "• Deployment on AWS (SageMaker, Lambda)\n• Scalable APIs and MLOps workflows\n• Continuous deployment pipelines",
      },
      {
        icon: <FaShieldAlt className="text-electric text-2xl" />,
        title: lang === "fr" ? "IA Responsable & Conformité" : "Responsible AI & Compliance",
        headline: lang === "fr" ? "Réduction des risques et confiance accrue" : "Reduced risks and stronger trust",
        subtitle: lang === "fr" ? "Une IA éthique et conforme aux réglementations émergentes" : "Ethical AI aligned with emerging regulations",
        desc:
          lang === "fr"
            ? "• Audits de biais, d'explicabilité et de conformité\n• Préparation au RGPD et à l'AI Act\n• Évaluations de risques et dispositifs de contrôle"
            : "• Bias, explainability, and compliance audits\n• GDPR and AI Act readiness\n• Risk assessments and control mechanisms",
      },
      {
        icon: <FaChalkboardTeacher className="text-electric text-2xl" />,
        title: lang === "fr" ? "Formation & Conseil" : "Training & Consulting",
        headline: lang === "fr" ? "Montée en compétences rapide et adoption durable" : "Rapid upskilling and sustainable adoption",
        subtitle: lang === "fr" ? "Accompagner vos équipes pour adopter l'IA efficacement" : "Empowering your teams for effective AI adoption",
        desc:
          lang === "fr"
            ? "• Formations ciblées pour dirigeants et équipes techniques\n• Ateliers pratiques sur l'IA générative appliquée aux métiers\n• Mentorat et accompagnement personnalisé"
            : "• Targeted training for leadership and technical teams\n• Hands-on workshops on business-focused generative AI\n• Mentoring and personalized consulting",
      },
    ],
  },
  projects: {
    title: lang === "fr" ? "Projets" : "Projects",
    items: [
      { 
        title: lang === "fr" ? "Réduire les coûts en éliminant les ruptures et surstocks" : "Cut costs by reducing stockouts and overstocking",
        description: lang === "fr" 
          ? "Beaucoup de détaillants perdent des ventes quand les rayons sont vides, et gaspillent de l'argent en stockage quand les produits s'accumulent."
          : "Many retailers lose sales when shelves are empty, and waste money on storage when products pile up.",
        solution: lang === "fr"
          ? "La solution est un tableau de bord de prévision de la demande et d'optimisation des stocks."
          : "The solution is a demand forecasting and stock optimization dashboard.",
        details: lang === "fr"
          ? "NovaMart a amélioré la disponibilité des stocks, réduit les coûts d'inventaire et pris des décisions d'achat plus intelligentes avec des prévisions alimentées par l'IA."
          : "NovaMart improved stock availability, reduced inventory costs, and made smarter purchasing decisions with AI-driven forecasts.",
        stack: "Streamlit, Prophet, ARIMA, Python", 
        image: "/images/novamart.png",
        demo: "https://novamart.streamlit.app/",
        github: "https://github.com/heritai/novamart-dashboard",
        featured: true
      },
      { 
        title: lang === "fr" ? "Augmenter les ventes avec des recommandations personnalisées" : "Boost sales with personalized recommendations",
        description: lang === "fr" 
          ? "Beaucoup de boutiques en ligne échouent à faire de l'upsell ou du cross-sell parce que les clients n'achètent qu'un seul article à la fois."
          : "Many e-commerce shops fail to upsell or cross-sell because customers only buy one item at a time.",
        solution: lang === "fr"
          ? "La solution est un système de recommandation de produits."
          : "The solution is a product recommendation system.",
        details: lang === "fr"
          ? "StyleHive a augmenté la taille moyenne du panier et découvert de nouvelles opportunités de cross-sell, menant à plus de revenus par client."
          : "StyleHive increased average basket size and uncovered new cross-sell opportunities, leading to more revenue per customer.",
        stack: "Streamlit, Association Rules, Collaborative Filtering, Python", 
        image: "/images/stylehive.png",
        demo: "https://stylehive.streamlit.app/",
        github: "https://github.com/heritai/stylehive-dashboard",
        featured: true
      },
      { 
        title: lang === "fr" ? "Améliorer la rétention client et réduire les risques de churn" : "Improve customer retention and reduce churn risks",
        description: lang === "fr"
          ? "Beaucoup d'entreprises gaspillent de l'argent sur du marketing non ciblé et perdent des clients sans comprendre pourquoi."
          : "Many companies waste money on unfocused marketing and lose customers without understanding why.",
        solution: lang === "fr"
          ? "La solution est un tableau de bord qui segmente les clients avec du clustering et prédit la probabilité de churn avec du ML."
          : "The solution is a dashboard that segments customers with clustering and predicts churn probability with ML.",
        details: lang === "fr"
          ? "InsightBank a réduit le churn et amélioré la rétention en ciblant les bons clients avec les bonnes actions."
          : "InsightBank reduced churn and improved retention by targeting the right customers with the right actions.",
        stack: "Streamlit, Clustering, ML, Python", 
        image: "/images/insightbank.png",
        demo: "https://insightbank.streamlit.app/",
        github: "https://github.com/heritai/insightbank-churn-dashboard",
        featured: true
      },
      { 
        title: lang === "fr" ? "Maximiser les revenus avec un tarification dynamique alimentée par l'IA" : "Maximize revenue with AI-driven dynamic pricing",
        description: lang === "fr"
          ? "Beaucoup d'hôtels perdent de l'argent avec des prix statiques : chambres vides en basse saison, ou vendues trop bon marché en haute saison."
          : "Many hotels lose money with static prices: empty rooms in low season, or sold too cheaply in peak season.",
        solution: lang === "fr"
          ? "La solution est un moteur de tarification dynamique qui prédit la demande et recommande des prix optimaux."
          : "A dynamic pricing engine that predicts demand and recommends optimal prices.",
        details: lang === "fr"
          ? "Roomify a augmenté l'occupation et les revenus en ajustant les prix intelligemment selon la demande."
          : "Roomify increased occupancy and revenue by adjusting prices intelligently based on demand.",
        stack: "Streamlit, Time Series, ML, Python", 
        image: "/images/roomify.png",
        demo: "https://roomify-pricing.streamlit.app/",
        github: "https://github.com/heritai/roomify-pricing-dashboard",
        featured: true
      },
      { 
        title: lang === "fr" ? "Rester en avance sur les risques avec la détection d'anomalies alimentée par l'IA" : "Stay ahead of risks with AI-powered anomaly detection",
        description: lang === "fr"
          ? "Beaucoup d'entreprises perdent de l'argent à cause de la fraude, d'erreurs système ou de pics de transactions inhabituels car elles manquent d'outils de surveillance en temps réel."
          : "Many companies lose money to fraud, system errors, or unusual transaction spikes because they lack real-time monitoring tools.",
        solution: lang === "fr"
          ? "La solution est un tableau de bord qui surveille les transactions en temps réel, signale les anomalies et fournit des insights métier clairs."
          : "A dashboard that monitors transactions in real time, flags anomalies, and provides clear business insights.",
        details: lang === "fr"
          ? "TransacGuard a aidé à réduire les risques financiers, détecter la fraude plus tôt et améliorer la fiabilité opérationnelle avec des insights transparents pour les décideurs."
          : "TransacGuard helped reduce financial risks, detect fraud earlier, and improve operational reliability with transparent insights for decision-makers.",
        stack: "Streamlit, Anomaly Detection, ML, Python", 
        image: "/images/transacguard.png",
        demo: "https://transacguard.streamlit.app/",
        github: "https://github.com/heritai/transacguard-anomaly-dashboard",
        featured: true
      },
      { 
        title: lang === "fr" ? "Maximiser les ventes et le ROI avec l'optimisation marketing alimentée par l'IA" : "Maximize sales and ROI with AI-powered marketing optimization",
        description: lang === "fr"
          ? "Beaucoup d'entreprises dépensent trop sur des campagnes qui ne convertissent pas, gaspillant une grande partie de leur budget marketing."
          : "Many companies overspend on campaigns that don't convert, wasting large portions of their marketing budget.",
        solution: lang === "fr"
          ? "La solution est un tableau de bord qui lie les dépenses marketing aux ventes, prédit le ROI et suggère de meilleures allocations budgétaires par canal."
          : "A dashboard that links marketing spend to sales, predicts ROI, and suggests better budget allocations across channels.",
        details: lang === "fr"
          ? "AdOptima a amélioré le ROI et boosté les ventes en réallouant les budgets basés sur des insights alimentés par l'IA."
          : "AdOptima improved ROI and boosted sales by reallocating budgets based on AI-driven insights.",
        stack: "Streamlit, Marketing Analytics, ML, Python", 
        image: "/images/adoptima.png",
        demo: "https://adoptima.streamlit.app/",
        github: "https://github.com/heritai/adoptima-marketing-dashboard",
        featured: true
      },
      { 
        title: lang === "fr" ? "Réduire les coûts de main-d'œuvre et améliorer l'efficacité avec la planification de personnel alimentée par l'IA" : "Cut labor costs and improve efficiency with AI-driven workforce scheduling",
        description: lang === "fr"
          ? "La planification manuelle cause des heures supplémentaires, une mauvaise couverture et des employés mécontents."
          : "Manual scheduling causes overtime, poor coverage, and unhappy employees.",
        solution: lang === "fr"
          ? "La solution est un tableau de bord qui génère des plannings optimisés basés sur la demande, la disponibilité et les règles de travail."
          : "A dashboard that generates optimized schedules based on demand, availability, and labor rules.",
        details: lang === "fr"
          ? "ShiftWise a réduit les coûts de main-d'œuvre, amélioré la couverture des équipes et libéré les managers de heures de planification manuelle."
          : "ShiftWise reduced labor costs, improved shift coverage, and freed managers from hours of manual planning.",
        stack: "Streamlit, Optimization, ML, Python", 
        image: "/images/shiftwise.png",
        demo: "https://shiftwise.streamlit.app/",
        github: "https://github.com/heritai/shiftwise-scheduling-dashboard",
        featured: true
      },
      { 
        title: lang === "fr" ? "Gagner du temps et booster les ventes avec du contenu marketing alimenté par l'IA" : "Save time and boost sales with AI-powered marketing content",
        description: lang === "fr"
          ? "Créer des descriptions de produits, emails et posts cohérents prend des heures et épuise les équipes marketing."
          : "Creating consistent product descriptions, emails, and posts takes hours and drains marketing teams.",
        solution: lang === "fr"
          ? "La solution est un tableau de bord qui génère instantanément du contenu marketing sur tous les canaux et tons, alimenté par Mistral 7B."
          : "A dashboard that generates instant marketing content across channels and tones, powered by Mistral 7B.",
        details: lang === "fr"
          ? "BrandBoost a réduit le temps de préparation des campagnes et produit du contenu engageant et cohérent à grande échelle en anglais et français."
          : "BrandBoost reduced campaign preparation time and produced engaging, consistent content at scale in both English and French.",
        stack: "Hugging Face, Mistral 7B, Streamlit, Python", 
        image: "/images/brandboost.png",
        demo: "https://huggingface.co/spaces/youtah/brandboost-content-generator",
        github: "https://github.com/heritai/brandboost-content-generator",
        featured: true
      },
      { 
        title: lang === "fr" ? "Assurer la conformité et réduire les risques avec l'audit IA automatisé" : "Ensure compliance and reduce risks with automated AI auditing",
        description: lang === "fr"
          ? "Les entreprises peinent à auditer leurs systèmes IA pour la conformité RGPD et l'AI Act, exposant à des risques réglementaires et financiers."
          : "Companies struggle to audit their AI systems for GDPR and AI Act compliance, exposing them to regulatory and financial risks.",
        solution: lang === "fr"
          ? "La solution est un outil d'audit automatisé sur AWS qui évalue la conformité, détecte les biais et génère des rapports de conformité."
          : "An automated AWS-based audit tool that evaluates compliance, detects biases, and generates compliance reports.",
        details: lang === "fr"
          ? "L'outil d'audit a identifié des problèmes de conformité critiques, réduit les risques réglementaires et automatisé les processus d'audit IA complexes."
          : "The audit tool identified critical compliance issues, reduced regulatory risks, and automated complex AI auditing processes.",
        stack: "AWS, SageMaker, Python, Compliance", 
        image: "/images/audit-tool.png",
        demo: "https://ml-audit.streamlit.app/",
        github: "https://github.com/heritai/ml-cloud-audit",
        featured: true
      },
      { 
        title: lang === "fr" ? "Accélérer la conformité avec des assistants IA multi-agents intelligents" : "Accelerate compliance with intelligent multi-agent AI assistants",
        description: lang === "fr"
          ? "Les équipes juridiques et de conformité sont submergées par la complexité des réglementations IA et ont besoin d'assistance intelligente."
          : "Legal and compliance teams are overwhelmed by AI regulation complexity and need intelligent assistance.",
        solution: lang === "fr"
          ? "La solution est un système multi-agents basé sur LLM qui guide les équipes à travers les processus de conformité avec des réponses contextuelles."
          : "A multi-agent LLM-based system that guides teams through compliance processes with contextual responses.",
        details: lang === "fr"
          ? "L'assistant multi-agents a accéléré les processus de conformité, réduit les erreurs et fourni des conseils personnalisés pour chaque cas d'usage."
          : "The multi-agent assistant accelerated compliance processes, reduced errors, and provided personalized guidance for each use case.",
        stack: "LLM, Multi-Agent, Python, Compliance", 
        image: "/images/multi-agent.png",
        demo: "https://compliance-assistant.streamlit.app/",
        github: "https://github.com/heritai/llm-multi-agent-assistant",
        featured: true
      },
    ],
  },
  about: {
    title: lang === "fr" ? "À propos" : "About",
    text:
      lang === "fr"
        ? "HerixAI est une micro-entreprise de conseil en intelligence artificielle basée à Paris. Elle est dirigée par Yousef Taheri, docteur en Intelligence Artificielle (Sorbonne Université). En tant que consultant indépendant, il aide startups, PME et institutions à intégrer des solutions IA efficaces, évolutives et conformes aux réglementations."
        : "HerixAI is an independent AI consulting practice based in Paris, France. It is led by Yousef Taheri, PhD in Artificial Intelligence (Sorbonne University). As an independent consultant, he helps startups, SMEs, and institutions adopt AI solutions that are efficient, scalable, and compliant with regulations.",
  },
  publications: {
    title: lang === "fr" ? "Publications & Insights" : "Publications & Insights",
    items: [
      {
        icon: <FaGraduationCap className="text-electric text-2xl" />,
        title: lang === "fr" ? "Thèse de doctorat" : "Doctoral Thesis",
        description: lang === "fr" ? "Intelligence Artificielle - Sorbonne Université" : "Artificial Intelligence - Sorbonne University",
        href: "http://theses.fr/2024SORUS225",
        type: "academic"
      },
      {
        icon: <FaFileAlt className="text-electric text-2xl" />,
        title: lang === "fr" ? "IA Responsable dans le Cloud" : "Responsible AI in the Cloud",
        description: lang === "fr" ? "Automatisation des audits ML sur AWS" : "Automating ML audits on AWS",
        href: "https://medium.com/p/responsible-ai-in-the-cloud-automating-ml-audits-on-aws-872b761093cb",
        type: "article"
      },
      {
        icon: <FaUserGraduate className="text-electric text-2xl" />,
        title: lang === "fr" ? "Profil Google Scholar" : "Google Scholar Profile",
        description: lang === "fr" ? "Publications et citations académiques" : "Academic publications and citations",
        href: "http://scholar.google.com/citations?user=IN72HckAAAAJ",
        type: "profile"
      }
    ]
  },
  contact: {
    title: lang === "fr" ? "Contact" : "Contact",
    text: lang === "fr" ? "Travaillons ensemble pour construire une IA de confiance." : "Let’s work together to build AI you can trust.",
    name: lang === "fr" ? "Nom" : "Name",
    email: "Email",
    message: lang === "fr" ? "Message" : "Message",
    send: lang === "fr" ? "Envoyer" : "Send",
  },
  footer: {
    rights: lang === "fr" ? "© 2025 HerixAI. Tous droits réservés." : "© 2025 HerixAI. All rights reserved.",
  },
});

export default function Home() {
  const [lang, setLang] = useState<Lang>("fr");
  const [theme, setTheme] = useState<Theme>("dark");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const i = useMemo(() => t(lang), [lang]);

  useEffect(() => {
    // Init from localStorage
    const storedLang = typeof window !== "undefined" ? (localStorage.getItem("herixai_lang") as Lang | null) : null;
    const storedTheme = typeof window !== "undefined" ? (localStorage.getItem("herixai_theme") as Theme | null) : null;
    if (storedLang) setLang(storedLang);
    if (storedTheme) setTheme(storedTheme);
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    
    if (selectedProject) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme === "light" ? "light" : "dark");
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("herixai_theme", theme);
    }
  }, [theme]);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="parallax-bg">
        <motion.div aria-hidden className="absolute -top-40 right-0 h-[40rem] w-[40rem] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, #00BFFF33, transparent 60%)" }} animate={{ y: [0, 20, 0] }} transition={{ duration: 12, repeat: Infinity }} />
        <motion.div aria-hidden className="absolute -bottom-40 -left-20 h-[36rem] w-[36rem] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, #9D4EDD33, transparent 60%)" }} animate={{ y: [0, -20, 0] }} transition={{ duration: 14, repeat: Infinity }} />
      </div>

      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl font-medium neon-text">HerixAI</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#home" className="hover:text-electric">{i.nav.home}</a>
            <a href="#services" className="hover:text-electric">{i.nav.services}</a>
            <a href="#projects" className="hover:text-electric">{i.nav.projects}</a>
            <a href="#about" className="hover:text-electric">{i.nav.about}</a>
            <a href="#publications" className="hover:text-electric">{i.publications.title}</a>
            <a href="#contact" className="hover:text-electric">{i.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              aria-label="Switch color theme"
              className="glass-card px-3 py-1 text-sm hover:glow-electric"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            >
              {theme === "dark" ? (lang === "fr" ? "Mode clair" : "Light mode") : (lang === "fr" ? "Mode sombre" : "Dark mode")}
            </button>
            <a
              href="https://calendly.com/ytaheris/30min"
              target="_blank"
              rel="noreferrer noopener"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-electric text-electric hover:bg-electric hover:text-black glow-electric transition"
            >
              {i.hero.demo}
            </a>
            <button aria-label="Switch language" className="glass-card glow-electric px-3 py-1 text-sm" onClick={() => setLang((l) => (l === "fr" ? "en" : "fr"))}>
              {lang === "fr" ? "🇫🇷 FR" : "🇬🇧 EN"}
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="section relative">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-28">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight">
              <span className="neon-text">HerixAI</span>
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-foreground/80 max-w-3xl mx-auto">{i.hero.subtitle}</p>
            <div className="flex items-center justify-center gap-4 mt-10">
              <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-electric text-black font-medium glow-electric hover:scale-[1.02] transition">
                {i.hero.cta} <FaArrowDown />
              </a>
              <a
                href="https://calendly.com/ytaheris/30min"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-electric text-electric hover:bg-electric hover:text-black glow-electric transition"
              >
                {i.hero.demo}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Highlight #1 */}
      <section className="section py-12">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h3 className="text-2xl md:text-4xl font-medium tracking-tight neon-text">
            {lang === "fr"
              ? "HerixAI transforme des données complexes en solutions intelligentes qui créent de la valeur mesurable."
              : "HerixAI transforms complex data into intelligent solutions that create measurable business value."}
          </h3>
        </div>
      </section>

      <section id="services" className="section py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-medium mb-10">{i.services.title}</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {i.services.items.map((s, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }} className="glass-card p-6 rounded-2xl border border-foreground/10 hover:border-electric/40 hover:glow-electric transition">
                <div className="flex items-center gap-3 mb-4">
                  {s.icon}
                  <div className="text-electric text-xl font-medium">{s.title}</div>
                </div>
                <div className="text-lg font-medium text-foreground mb-2">{s.headline}</div>
                <div className="text-foreground/70 mb-4">{s.subtitle}</div>
                <div className="text-foreground/80 leading-relaxed whitespace-pre-line">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Highlight #2 */}
      <section className="section py-12">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h3 className="text-2xl md:text-4xl font-medium tracking-tight neon-text">
            {lang === "fr"
              ? "De la recherche au déploiement : des systèmes d’IA scalables qui améliorent l’efficacité, réduisent les coûts et stimulent l’innovation."
              : "From research to deployment: scalable AI systems that improve efficiency, reduce costs, and drive innovation."}
          </h3>
        </div>
      </section>

      <section id="projects" className="section py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-medium mb-10">{i.projects.title}</motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            {(showAllProjects ? i.projects.items : i.projects.items.slice(0, 8)).map((p, idx) => (
              <motion.div
                key={p.github.split('/').pop()}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedProject(p)}
                className="group glass-card p-4 rounded-2xl border border-foreground/10 hover:border-electric/40 hover:glow-electric transition-all duration-300 cursor-pointer"
                layout
              >
                <Image src={p.image} alt={p.title} width={1200} height={800} className="h-32 w-full rounded-xl object-cover mb-3" />
                
                <div className="text-lg font-medium mb-2 text-foreground line-clamp-2">{p.title}</div>
                
                <div className="text-foreground/60 text-xs mb-3">{p.stack}</div>
                
                <div className="flex items-center justify-between">
                  <span className="text-electric text-sm font-medium">
                    {lang === "fr" ? "En savoir plus" : "Learn More"}
                  </span>
                  <FaExternalLinkAlt className="text-electric text-xs" />
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {i.projects.items.length > 8 && (
            <motion.div 
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="glass-card px-8 py-4 rounded-2xl border border-electric/40 hover:border-electric hover:glow-electric transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-electric font-medium text-lg">
                    {showAllProjects 
                      ? (lang === "fr" ? "Voir moins" : "Show Less")
                      : (lang === "fr" ? "Voir plus de projets" : "Show More Projects")
                    }
                  </span>
                  <motion.div
                    animate={{ rotate: showAllProjects ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-electric"
                  >
                    <FaArrowDown />
                  </motion.div>
                </div>
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-background max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-electric/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full border border-foreground/20 hover:border-electric/40 hover:glow-electric transition-all duration-300"
            >
              <FaTimes className="text-foreground/60 hover:text-electric transition-colors" />
            </button>
            
            {/* Modal Header */}
            <div className="p-8 pb-4">
              <Image 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                width={1200} 
                height={800} 
                className="h-80 w-full rounded-2xl object-cover mb-6" 
              />
              
              <h3 className="text-3xl font-medium mb-4 text-foreground">{selectedProject.title}</h3>
              
              {selectedProject.description && (
                <div className="text-foreground/80 text-lg mb-4 font-medium">{selectedProject.description}</div>
              )}
              
              {selectedProject.solution && (
                <div className="text-electric text-lg mb-4 font-medium bg-gradient-to-r from-electric/10 to-transparent py-3 px-4 rounded-xl">
                  {selectedProject.solution}
                </div>
              )}
              
              {selectedProject.details && (
                <div className="text-foreground/70 text-base mb-6 leading-relaxed">{selectedProject.details}</div>
              )}
              
              <div className="text-foreground/60 text-sm mb-6 font-medium">{selectedProject.stack}</div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-8 pt-4 border-t border-foreground/10">
              <div className="flex gap-4">
                {selectedProject.demo && (
                  <a 
                    href={selectedProject.demo} 
                    target="_blank" 
                    rel="noreferrer noopener"
                    className="flex-1 bg-electric text-black font-medium px-6 py-3 rounded-xl text-center hover:bg-electric/90 transition flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt />
                    {lang === "fr" ? "Voir la démo" : "View Demo"}
                  </a>
                )}
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noreferrer noopener"
                  className={`${selectedProject.demo ? 'flex-1' : 'w-full'} border border-electric text-electric font-medium px-6 py-3 rounded-xl text-center hover:bg-electric hover:text-black transition flex items-center justify-center gap-2`}
                >
                  <FaGithub />
                  {lang === "fr" ? "Voir sur GitHub" : "View on GitHub"}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Value Highlight #3 */}
      <section className="section py-12">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h3 className="text-2xl md:text-4xl font-medium tracking-tight neon-text">
            {lang === "fr"
              ? "Allier machine learning avancé, IA générative et expertise conformité pour une adoption de l’IA digne de confiance."
              : "Bringing together advanced machine learning, generative AI, and compliance expertise for trustworthy AI adoption."}
          </h3>
        </div>
      </section>

      <section id="about" className="section py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-medium mb-10">{i.about.title}</motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl overflow-hidden">
              <Image src="/images/yousef.png" alt="Yousef Taheri" width={800} height={1000} className="h-72 md:h-96 w-full object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-4">
              <p className="text-foreground/80 text-lg leading-relaxed">{i.about.text}</p>
              <div className="flex items-center gap-4">
                <a className="glass-card p-3 rounded-2xl hover:glow-electric" href="https://www.linkedin.com/in/yousef-taheri" target="_blank" rel="noreferrer noopener" aria-label="Yousef Taheri LinkedIn">
                  <FaLinkedin className="text-electric" />
                </a>
                <span className="text-foreground/60 text-sm">
                  {lang === "fr" ? "Connectez-vous avec Yousef sur LinkedIn" : "Connect with Yousef on LinkedIn"}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Highlight #4 */}
      <section className="section py-12">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h3 className="text-2xl md:text-4xl font-medium tracking-tight neon-text">
            {lang === "fr"
              ? "HerixAI veille à ce que votre IA soit non seulement puissante — mais aussi transparente, équitable et conforme aux réglementations internationales."
              : "HerixAI ensures your AI is not only powerful — but also transparent, fair, and compliant with global regulations."}
          </h3>
        </div>
      </section>

      {/* Publications & Insights */}
      <section id="publications" className="section py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-medium mb-10">{i.publications.title}</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {i.publications.items.map((p, idx) => (
              <motion.a
                href={p.href}
                key={p.title}
                target="_blank"
                rel="noreferrer noopener"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group glass-card p-6 rounded-2xl border border-foreground/10 hover:border-electric/40 hover:glow-electric transition block"
              >
                <div className="flex items-center gap-3 mb-4">
                  {p.icon}
                  <div className="text-electric text-xl font-medium">{p.title}</div>
                </div>
                <div className="text-foreground/80 leading-relaxed">{p.description}</div>
                <div className="mt-4 text-electric text-sm group-hover:text-electric/80 transition">
                  {lang === "fr" ? "Voir →" : "View →"}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Value Highlight #5 */}
      <section className="section py-12">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h3 className="text-2xl md:text-4xl font-medium tracking-tight neon-text">
            {lang === "fr"
              ? "Aider les entreprises à accélérer leur croissance avec des solutions d'IA pratiques, fiables et pérennes."
              : "Helping companies accelerate growth with AI solutions that are practical, reliable, and future-proof."}
          </h3>
        </div>
      </section>

      <section id="contact" className="section py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-medium mb-10">{i.contact.title}</motion.h2>
          <p className="text-foreground/80 max-w-2xl">{i.contact.text}</p>
          <form 
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4" 
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              
              // Check honeypot field for bots
              if (formData.get('_gotcha')) {
                console.log('Bot detected, ignoring submission');
                return;
              }
              
              try {
                const response = await fetch('https://formspree.io/f/meoreqdv', {
                  method: 'POST',
                  body: formData,
                  headers: {
                    'Accept': 'application/json'
                  }
                });
                
                if (response.ok) {
                  setFormSubmitted(true);
                  // Reset form
                  (e.target as HTMLFormElement).reset();
                } else {
                  console.error('Form submission failed');
                }
              } catch (error) {
                console.error('Error:', error);
              }
            }}
          >
            <input type="hidden" name="_subject" value="New contact from HerixAI website" />
            {/* Honeypot field - hidden from users, catches bots */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
            <input name="name" placeholder={i.contact.name} required className="glass-card rounded-2xl px-4 py-3 bg-card/60 border border-foreground/10 focus:outline-none focus:border-electric" />
            <input name="email" type="email" placeholder={i.contact.email} required className="glass-card rounded-2xl px-4 py-3 bg-card/60 border border-foreground/10 focus:outline-none focus:border-electric" />
            <textarea name="message" placeholder={i.contact.message} required className="glass-card rounded-2xl px-4 py-3 bg-card/60 border border-foreground/10 focus:outline-none focus:border-electric md:col-span-2 h-36" />
            <div className="md:col-span-2">
              <button type="submit" className="px-6 py-3 rounded-2xl bg-electric text-black font-medium glow-electric hover:scale-[1.02] transition">{i.contact.send}</button>
            </div>
          </form>
          {formSubmitted ? (
            <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-400">
              {lang === "fr" 
                ? "✅ Message envoyé avec succès ! Merci pour votre intérêt." 
                : "✅ Message sent successfully! Thank you for your interest."
              }
            </div>
          ) : (
            <div className="mt-4 text-sm text-foreground/60">
              {lang === "fr" 
                ? "Votre message sera envoyé directement à contact@herixai.com" 
                : "Your message will be sent directly to contact@herixai.com"
              }
            </div>
          )}
          <div className="flex items-center gap-4 mt-8">
            <a className="glass-card p-3 rounded-2xl hover:glow-electric" href="https://www.linkedin.com/company/herixai/" target="_blank" rel="noreferrer noopener" aria-label="HerixAI LinkedIn"><FaLinkedin /></a>
            <a className="glass-card p-3 rounded-2xl hover:glow-electric" href="https://github.com/heritai" target="_blank" rel="noreferrer noopener" aria-label="GitHub"><FaGithub /></a>
            <a className="glass-card p-3 rounded-2xl hover:glow-electric" href="https://herixai.com" target="_blank" rel="noreferrer noopener" aria-label="Website"><FaGlobe /></a>
          </div>
        </div>
      </section>

      <footer className="border-t border-foreground/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-foreground/70">
          <div>{i.footer.rights}</div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-electric">{i.nav.services}</a>
            <a href="#projects" className="hover:text-electric">{i.nav.projects}</a>
            <a href="#publications" className="hover:text-electric">{i.publications.title}</a>
            <a href="#contact" className="hover:text-electric">{i.nav.contact}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
