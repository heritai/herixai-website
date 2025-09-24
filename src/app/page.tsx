"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa6";
import { FaArrowDown, FaBrain, FaChartLine, FaRobot, FaCloud, FaShieldAlt, FaChalkboardTeacher, FaGraduationCap, FaFileAlt, FaUserGraduate } from "react-icons/fa";

type Lang = "fr" | "en";
type Theme = "dark" | "light";

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
        title: "NovaMart — Demand Forecasting & Stock Optimization Dashboard", 
        description: lang === "fr" 
          ? "Tableau de bord interactif qui prévoit la demande et optimise les niveaux de stock pour un détaillant en ligne fictif."
          : "Interactive dashboard that forecasts demand and optimizes stock levels for a fictive online retailer.",
        details: lang === "fr"
          ? "Construit avec Streamlit, Prophet et ARIMA sur un jeu de données synthétique mais réaliste, ce projet démontre comment les PME peuvent réduire les ruptures de stock et les risques de surstockage. Le tableau de bord inclut des résumés de ventes globales, des prévisions par produit et des recommandations de stock, avec des rapports PDF exportables."
          : "Built with Streamlit, Prophet, and ARIMA on a synthetic but realistic dataset, this project demonstrates how SMEs can reduce stockouts and overstocking risks. The dashboard includes global sales summaries, product-level forecasts, and stock recommendations, with exportable PDF reports.",
        stack: "Streamlit, Prophet, ARIMA, Python", 
        image: "/images/novamart.png",
        demo: "https://novamart.streamlit.app/",
        github: "https://github.com/heritai/novamart-dashboard",
        featured: true
      },
      { 
        title: "StyleHive — Fashion Recommender Dashboard", 
        description: lang === "fr" 
          ? "Système de recommandation alimenté par l'IA pour un détaillant de mode en ligne afin d'augmenter les ventes par cross-sell et up-sell."
          : "AI-powered recommendation system for an online fashion retailer to boost sales through cross-sell and up-sell.",
        details: lang === "fr"
          ? "Pour StyleHive, un détaillant de mode en ligne, j'ai construit un système de recommandation de produits qui suggère des articles complémentaires basés sur l'historique d'achat des clients. Utilisant des données synthétiques mais réalistes, le tableau de bord applique des règles d'association et du filtrage collaboratif pour découvrir des patterns d'achat. Livré comme une app Streamlit interactive, il aide les détaillants à augmenter la taille du panier, découvrir des opportunités de cross-sell et améliorer l'expérience client."
          : "For StyleHive, an online fashion retailer, I built a product recommendation system that suggests complementary items based on customer purchase history. Using synthetic but realistic data, the dashboard applies association rules and collaborative filtering to uncover shopping patterns. Delivered as an interactive Streamlit app, it helps retailers increase basket size, discover cross-sell opportunities, and improve customer experience.",
        stack: "Streamlit, Association Rules, Collaborative Filtering, Python", 
        image: "/images/stylehive.png",
        demo: "https://stylehive.streamlit.app/",
        github: "https://github.com/heritai/stylehive-dashboard",
        featured: true
      },
      { 
        title: lang === "fr" ? "Outil d'audit IA/ML sur AWS (GDPR)" : "AI/ML Audit Tool on AWS (GDPR)", 
        description: lang === "fr"
          ? "Solution automatisée d'audit et de conformité pour les modèles IA/ML déployés sur AWS avec focus sur le RGPD."
          : "Automated audit and compliance solution for AI/ML models deployed on AWS with GDPR focus.",
        details: lang === "fr"
          ? "Cet outil développé en Python permet d'auditer automatiquement les modèles IA/ML déployés sur AWS pour assurer la conformité RGPD. Il analyse les données d'entrée, les prédictions et les métadonnées des modèles pour détecter les risques de non-conformité. L'outil génère des rapports détaillés et des recommandations pour améliorer la transparence et la conformité des systèmes d'IA en production."
          : "This Python tool automatically audits AI/ML models deployed on AWS to ensure GDPR compliance. It analyzes input data, predictions, and model metadata to detect non-compliance risks. The tool generates detailed reports and recommendations to improve transparency and compliance of AI systems in production.",
        stack: "AWS, Python, Compliance", 
        image: "/images/ml-cloud-audit.png",
        demo: null,
        github: "https://github.com/heritai/ml-cloud-audit",
        featured: false
      },
      { 
        title: lang === "fr" ? "Assistant conformité multi-agents (LLM)" : "Multi-agent compliance assistant (LLM)", 
        description: lang === "fr"
          ? "Système multi-agents basé sur des LLM pour automatiser les processus de conformité réglementaire et d'audit."
          : "Multi-agent LLM-based system for automating regulatory compliance and audit processes.",
        details: lang === "fr"
          ? "Cette solution utilise plusieurs agents LLM spécialisés pour automatiser les tâches de conformité réglementaire. Chaque agent a un rôle spécifique : analyse de documents, évaluation des risques, génération de rapports. Le système coordonne ces agents pour fournir une assistance complète en matière de conformité, réduisant les erreurs humaines et accélérant les processus d'audit pour les organisations."
          : "This solution uses multiple specialized LLM agents to automate regulatory compliance tasks. Each agent has a specific role: document analysis, risk assessment, report generation. The system coordinates these agents to provide comprehensive compliance assistance, reducing human errors and accelerating audit processes for organizations.",
        stack: "LLM, Agents, Python", 
        image: "/images/llm-multi-agent-assistant.png",
        demo: null,
        github: "https://github.com/heritai/llm-multi-agent-assistant",
        featured: false
      },
      { 
        title: lang === "fr" ? "Réseaux de graphes pour détection de malware" : "Graph NNs for malware detection", 
        description: lang === "fr"
          ? "Modèle de détection de malware utilisant des réseaux de neurones de graphes pour analyser les relations entre fichiers et processus."
          : "Malware detection model using graph neural networks to analyze relationships between files and processes.",
        details: lang === "fr"
          ? "Ce projet développe un système de détection de malware basé sur des réseaux de neurones de graphes (GNN). Il modélise les interactions entre fichiers, processus et registres système comme un graphe, permettant de détecter des patterns malveillants complexes. L'approche GNN capture les relations structurelles que les méthodes traditionnelles manquent, améliorant significativement la précision de détection des menaces avancées."
          : "This project develops a malware detection system based on Graph Neural Networks (GNN). It models interactions between files, processes, and system registry as a graph, enabling detection of complex malicious patterns. The GNN approach captures structural relationships that traditional methods miss, significantly improving detection accuracy for advanced threats.",
        stack: "GNN, Security, Python", 
        image: "/images/graph-nn-malware-detection.png",
        demo: null,
        github: "https://github.com/heritai/graph-nn-malware-detection",
        featured: false
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
  const i = useMemo(() => t(lang), [lang]);

  useEffect(() => {
    // Init from localStorage
    const storedLang = typeof window !== "undefined" ? (localStorage.getItem("herixai_lang") as Lang | null) : null;
    const storedTheme = typeof window !== "undefined" ? (localStorage.getItem("herixai_theme") as Theme | null) : null;
    if (storedLang) setLang(storedLang);
    if (storedTheme) setTheme(storedTheme);
  }, []);

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
            <span className="text-2xl font-semibold neon-text">HerixAI</span>
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
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              <span className="neon-text">HerixAI</span>
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-foreground/80 max-w-3xl mx-auto">{i.hero.subtitle}</p>
            <div className="flex items-center justify-center gap-4 mt-10">
              <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-electric text-black font-semibold glow-electric hover:scale-[1.02] transition">
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
          <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight neon-text">
            {lang === "fr"
              ? "HerixAI transforme des données complexes en solutions intelligentes qui créent de la valeur mesurable."
              : "HerixAI transforms complex data into intelligent solutions that create measurable business value."}
          </h3>
        </div>
      </section>

      <section id="services" className="section py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold mb-10">{i.services.title}</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {i.services.items.map((s, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }} className="glass-card p-6 rounded-2xl border border-foreground/10 hover:border-electric/40 hover:glow-electric transition">
                <div className="flex items-center gap-3 mb-4">
                  {s.icon}
                  <div className="text-electric text-xl font-semibold">{s.title}</div>
                </div>
                <div className="text-lg font-bold text-foreground mb-2">{s.headline}</div>
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
          <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight neon-text">
            {lang === "fr"
              ? "De la recherche au déploiement : des systèmes d’IA scalables qui améliorent l’efficacité, réduisent les coûts et stimulent l’innovation."
              : "From research to deployment: scalable AI systems that improve efficiency, reduce costs, and drive innovation."}
          </h3>
        </div>
      </section>

      <section id="projects" className="section py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold mb-10">{i.projects.title}</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {i.projects.items.map((p, idx) => (
              <motion.div
                key={p.featured ? (p.title.toLowerCase().includes('novamart') ? 'novamart' : 'stylehive') : p.github.split('/').pop()}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group glass-card p-6 rounded-2xl border border-foreground/10 hover:border-electric/40 hover:glow-electric transition block"
              >
                
                <Image src={p.image} alt={p.title} width={1200} height={800} className="h-36 w-full rounded-xl object-cover mb-4" />
                
                <div className="text-xl font-semibold mb-2">{p.title}</div>
                
                {p.description && (
                  <div className="text-foreground/80 text-sm mb-3">{p.description}</div>
                )}
                
                {p.details && (
                  <div className="text-foreground/70 text-sm mb-3 leading-relaxed">{p.details}</div>
                )}
                
                <div className="text-foreground/70 text-sm mb-4">{p.stack}</div>
                
                <div className="flex gap-3">
                  {p.demo && (
                    <a 
                      href={p.demo} 
                      target="_blank" 
                      rel="noreferrer noopener"
                      className="flex-1 bg-electric text-black font-semibold px-4 py-2 rounded-xl text-center text-sm hover:bg-electric/90 transition"
                    >
                      {lang === "fr" ? "Voir la démo" : "View Demo"}
                    </a>
                  )}
                  <a 
                    href={p.github} 
                    target="_blank" 
                    rel="noreferrer noopener"
                    className={`${p.demo ? 'flex-1' : 'w-full'} border border-electric text-electric font-semibold px-4 py-2 rounded-xl text-center text-sm hover:bg-electric hover:text-black transition`}
                  >
                    {lang === "fr" ? "GitHub" : "GitHub"}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Highlight #3 */}
      <section className="section py-12">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight neon-text">
            {lang === "fr"
              ? "Allier machine learning avancé, IA générative et expertise conformité pour une adoption de l’IA digne de confiance."
              : "Bringing together advanced machine learning, generative AI, and compliance expertise for trustworthy AI adoption."}
          </h3>
        </div>
      </section>

      <section id="about" className="section py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold mb-10">{i.about.title}</motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl overflow-hidden">
              <Image src="/images/yousef.png" alt="Yousef Taheri" width={800} height={1000} className="h-72 md:h-96 w-full object-cover" />
            </motion.div>
            <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-foreground/80 text-lg leading-relaxed">{i.about.text}</motion.p>
          </div>
        </div>
      </section>

      {/* Value Highlight #4 */}
      <section className="section py-12">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight neon-text">
            {lang === "fr"
              ? "HerixAI veille à ce que votre IA soit non seulement puissante — mais aussi transparente, équitable et conforme aux réglementations internationales."
              : "HerixAI ensures your AI is not only powerful — but also transparent, fair, and compliant with global regulations."}
          </h3>
        </div>
      </section>

      {/* Publications & Insights */}
      <section id="publications" className="section py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold mb-10">{i.publications.title}</motion.h2>
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
                  <div className="text-electric text-xl font-semibold">{p.title}</div>
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
          <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight neon-text">
            {lang === "fr"
              ? "Aider les entreprises à accélérer leur croissance avec des solutions d'IA pratiques, fiables et pérennes."
              : "Helping companies accelerate growth with AI solutions that are practical, reliable, and future-proof."}
          </h3>
        </div>
      </section>

      <section id="contact" className="section py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold mb-10">{i.contact.title}</motion.h2>
          <p className="text-foreground/80 max-w-2xl">{i.contact.text}</p>
          <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4" action={`mailto:ytaheris@gmail.com`} method="post" encType="text/plain">
            <input name="name" placeholder={i.contact.name} className="glass-card rounded-2xl px-4 py-3 bg-card/60 border border-foreground/10 focus:outline-none focus:border-electric" />
            <input name="email" placeholder={i.contact.email} className="glass-card rounded-2xl px-4 py-3 bg-card/60 border border-foreground/10 focus:outline-none focus:border-electric" />
            <textarea name="message" placeholder={i.contact.message} className="glass-card rounded-2xl px-4 py-3 bg-card/60 border border-foreground/10 focus:outline-none focus:border-electric md:col-span-2 h-36" />
            <div className="md:col-span-2">
              <button type="submit" className="px-6 py-3 rounded-2xl bg-electric text-black font-semibold glow-electric hover:scale-[1.02] transition">{i.contact.send}</button>
            </div>
          </form>
          <div className="flex items-center gap-4 mt-8">
            <a className="glass-card p-3 rounded-2xl hover:glow-electric" href="https://www.linkedin.com/in/yousef-taheri" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn"><FaLinkedin /></a>
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
