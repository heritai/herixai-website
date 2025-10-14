"use client";
// Test deployment - GitHub Actions CI/CD

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa6";
import { FaArrowDown, FaChartLine, FaRobot, FaShieldAlt, FaFileAlt, FaBrain } from "react-icons/fa";

type Lang = "fr" | "en";

const t = (lang: Lang) => ({
  nav: {
    home: lang === "fr" ? "Accueil" : "Home",
    expertise: lang === "fr" ? "Expertise" : "Expertise",
    collaboration: lang === "fr" ? "Collaboration" : "Collaboration",
    insights: lang === "fr" ? "Insights" : "Insights",
    about: lang === "fr" ? "À propos" : "About",
    contact: lang === "fr" ? "Contact" : "Contact",
  },
  hero: {
    title: "HerixAI",
    subtitle:
      lang === "fr"
        ? "HerixAI conçoit des systèmes intelligents autonomes et responsables. Une intelligence qui raisonne, crée et s'aligne avec les valeurs humaines."
        : "HerixAI designs autonomous and responsible intelligent systems. Intelligence that reasons, creates, and aligns with human values.",
    cta: lang === "fr" ? "Découvrir l'expertise" : "Explore the expertise",
    demo: lang === "fr" ? "Réserver une démo" : "Book a Demo",
  },
  expertise: {
    title: lang === "fr" ? "Expertise" : "Expertise",
    subtitle: lang === "fr"
      ? "Transformer les défis complexes en opportunités avec l'IA"
      : "Transforming complex challenges into opportunities with AI",
    description: lang === "fr"
      ? "HerixAI combine expertise technique de pointe et vision stratégique pour créer des solutions d'IA qui génèrent de la valeur mesurable, tout en respectant les plus hauts standards éthiques et réglementaires."
      : "HerixAI combines cutting-edge technical expertise with strategic vision to create AI solutions that deliver measurable value while meeting the highest ethical and regulatory standards.",
    learnMore: lang === "fr" ? "En savoir plus" : "Learn More",
    items: [
      {
        icon: <FaRobot className="text-electric text-3xl" />,
        title: lang === "fr" ? "IA Agentique & Générative" : "Agentic & Generative AI",
        headline: lang === "fr" ? "Automatisation intelligente et assistance autonome" : "Intelligent automation and autonomous assistance",
        subtitle: lang === "fr" ? "Systèmes qui comprennent, raisonnent et agissent de manière autonome" : "Systems that understand, reason, and act autonomously",
        desc:
          lang === "fr"
            ? "• Assistants virtuels multi-agents pour l'analyse de documents\n• Pipelines génératifs pour la création de contenu\n• Copilots LLM intégrés aux outils métier\n• Workflows automatisés avec étapes traçables"
            : "• Multi-agent virtual assistants for document analysis\n• Generative pipelines for content creation\n• LLM copilots integrated with business tools\n• Automated workflows with traceable steps",
        link: "/agentic-ai",
      },
      {
        icon: <FaShieldAlt className="text-electric text-3xl" />,
        title: lang === "fr" ? "IA Responsable & Conforme" : "Responsible & Compliant AI",
        headline: lang === "fr" ? "Fiable, auditable, prêt pour la réglementation" : "Trustworthy, auditable, regulation-ready",
        subtitle: lang === "fr" ? "Conception éthique et alignement avec les standards internationaux" : "Ethical design and alignment with international standards",
        desc:
          lang === "fr"
            ? "• Évaluation de biais et d'équité avec monitoring\n• Tableaux de bord d'explicabilité et documentation\n• Vérifications automatisées pour la gouvernance\n• Préparation au RGPD et à l'AI Act européen"
            : "• Bias and fairness evaluation with monitoring\n• Explainability dashboards and documentation\n• Automated checks for governance\n• GDPR and EU AI Act readiness",
        link: "/responsible-ai",
      },
      {
        icon: <FaChartLine className="text-electric text-3xl" />,
        title: lang === "fr" ? "Intelligence Appliquée & Science des Données" : "Applied Intelligence & Data Science",
        headline: lang === "fr" ? "Impact mesurable à partir des données" : "Measurable impact from data",
        subtitle: lang === "fr" ? "Prévision, optimisation et analytique pour les opérations" : "Forecasting, optimization, and analytics for operations",
        desc:
          lang === "fr"
            ? "• Prévision de demande et optimisation d'inventaire\n• Détection d'anomalies et monitoring de risques\n• Pipelines ML cloud, APIs et tableaux de bord\n• Segmentation clients et analyse comportementale"
            : "• Demand forecasting and inventory optimization\n• Anomaly detection and risk monitoring\n• Cloud ML pipelines, APIs, and dashboards\n• Customer segmentation and behavioral analysis",
        link: "/applied-intelligence",
      },
    ],
  },
  collaboration: {
    title: lang === "fr" ? "Modèles de Collaboration" : "Collaboration Models",
    subtitle: lang === "fr"
      ? "Des partenariats flexibles pour chaque étape de votre parcours IA"
      : "Flexible partnerships for every stage of your AI journey",
    description: lang === "fr"
      ? "HerixAI s'adapte à vos besoins spécifiques avec des modèles de collaboration sur mesure — du développement de prototypes à l'accompagnement stratégique, en passant par le renforcement des compétences internes."
      : "HerixAI adapts to your specific needs with tailored collaboration models — from prototype development to strategic guidance and internal capability building.",
    items: [
      {
        title: lang === "fr" ? "Design & Développement de Produits" : "Product Design & Development",
        description: lang === "fr"
          ? "Création de solutions IA sur mesure, du prototype au déploiement en production"
          : "Building custom AI solutions from prototype to production deployment",
        bullets: [
          lang === "fr"
            ? "Conception de systèmes agentiques et génératifs pour automatiser les workflows complexes"
            : "Design agentic and generative systems to automate complex workflows",
          lang === "fr"
            ? "Développement de tableaux de bord ML et APIs scalables sur AWS"
            : "Develop ML dashboards and scalable APIs on AWS",
          lang === "fr"
            ? "Intégration de pipelines MLOps avec monitoring et conformité intégrés"
            : "Integrate MLOps pipelines with built-in monitoring and compliance",
        ],
      },
      {
        title: lang === "fr" ? "Conseil & Accompagnement Stratégique" : "Consultancy & Advisory",
        description: lang === "fr"
          ? "Accompagnement stratégique pour intégrer l'IA de manière responsable et efficace"
          : "Strategic guidance to integrate AI responsibly and effectively",
        bullets: [
          lang === "fr"
            ? "Audit de conformité et évaluation des risques IA (RGPD, AI Act)"
            : "Compliance audits and AI risk assessment (GDPR, AI Act)",
          lang === "fr"
            ? "Feuille de route IA adaptée à vos objectifs métier et contraintes"
            : "AI roadmap tailored to your business objectives and constraints",
          lang === "fr"
            ? "Revue d'architecture et recommandations pour systèmes IA responsables"
            : "Architecture review and recommendations for responsible AI systems",
        ],
      },
      {
        title: lang === "fr" ? "Transfert de Connaissances & Formation" : "Knowledge Transfer & Training",
        description: lang === "fr"
          ? "Formation et mentorat pour développer les compétences IA de vos équipes"
          : "Training and mentoring to build AI capabilities within your teams",
        bullets: [
          lang === "fr"
            ? "Ateliers pratiques sur l'IA générative et les systèmes multi-agents"
            : "Hands-on workshops on generative AI and multi-agent systems",
          lang === "fr"
            ? "Formation à l'IA responsable, explicabilité et conformité réglementaire"
            : "Training on responsible AI, explainability, and regulatory compliance",
          lang === "fr"
            ? "Mentorat technique pour le déploiement de solutions IA en production"
            : "Technical mentoring for deploying AI solutions to production",
        ],
      },
    ],
  },
  insights: {
    title: lang === "fr" ? "Insights" : "Insights",
    subtitle: lang === "fr"
      ? "Partager connaissances et perspectives sur l'IA responsable"
      : "Sharing knowledge and perspectives on responsible AI",
    description: lang === "fr"
      ? "HerixAI contribue à l'écosystème IA en partageant recherches, expériences pratiques et réflexions sur les enjeux de l'intelligence artificielle responsable et performante."
      : "HerixAI contributes to the AI ecosystem by sharing research, practical experiences, and insights on responsible and high-performance artificial intelligence.",
    items: [
      {
        icon: <FaFileAlt className="text-electric text-2xl" />,
        title: lang === "fr" ? "IA Responsable dans le Cloud" : "Responsible AI in the Cloud",
        description: lang === "fr" ? "Automatisation des audits ML sur AWS" : "Automating ML audits on AWS",
        href: "https://medium.com/p/responsible-ai-in-the-cloud-automating-ml-audits-on-aws-872b761093cb",
        type: "article"
      }
    ]
  },
  contact: {
    title: lang === "fr" ? "Contact" : "Contact",
    subtitle: lang === "fr"
      ? "Construisons ensemble votre projet IA"
      : "Let's build your AI project together",
    description: lang === "fr"
      ? "HerixAI est prêt à discuter de vos besoins en IA — que ce soit pour un projet spécifique, un audit de conformité, ou simplement échanger sur les possibilités de l'intelligence artificielle pour votre entreprise."
      : "HerixAI is ready to discuss your AI needs — whether for a specific project, compliance audit, or simply exploring AI possibilities for your organization.",
    text: lang === "fr" ? "Travaillons ensemble pour construire une IA de confiance." : "Let's work together to build AI you can trust.",
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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const i = useMemo(() => t(lang), [lang]);

  useEffect(() => {
    // Init from localStorage
    const storedLang = typeof window !== "undefined" ? (localStorage.getItem("herixai_lang") as Lang | null) : null;
    if (storedLang) setLang(storedLang);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 0.01);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Generate particle positions with movement
  const particles = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      baseX: (i * 137.5) % 100,
      baseY: (i * 67.3) % 100,
      size: 3 + (i % 3),
      color: i % 2 === 0 ? '#3B82F6' : '#22D3EE',
      speedX: (Math.sin(i * 0.5) * 0.3) + 0.2,
      speedY: (Math.cos(i * 0.7) * 0.3) + 0.2,
      radiusX: 5 + (i % 3) * 2,
      radiusY: 5 + ((i + 1) % 3) * 2,
    }));
  }, []);

  // Calculate current particle positions
  const currentPositions = useMemo(() => {
    return particles.map((p) => ({
      ...p,
      x: p.baseX + Math.sin(time * p.speedX) * p.radiusX,
      y: p.baseY + Math.cos(time * p.speedY) * p.radiusY,
    }));
  }, [particles, time]);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Particle Network Background */}
      <div className="parallax-bg">
        <svg className="absolute inset-0 w-full h-full" style={{ minHeight: '200vh' }}>
          <defs>
            <filter id="particleGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Connecting Lines */}
          {currentPositions.map((p1, i) => 
            currentPositions.slice(i + 1).map((p2, j) => {
              const dx = p2.x - p1.x;
              const dy = p2.y - p1.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              // Only connect nearby particles (dynamic connections!)
              if (distance < 15) {
                return (
                  <motion.line
                    key={`line-${i}-${j}`}
                    x1={`${p1.x}%`}
                    y1={`${p1.y}%`}
                    x2={`${p2.x}%`}
                    y2={`${p2.y}%`}
                    stroke={p1.color}
                    strokeWidth="0.5"
                    opacity={0.2}
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.2 }}
                    exit={{ pathLength: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                );
              }
              return null;
            })
          )}
          
          {/* Particles */}
          {currentPositions.map((p) => {
            return (
              <motion.circle
                key={`particle-${p.id}`}
                cx={`${p.x}%`}
                cy={`${p.y}%`}
                r={p.size}
                fill={p.color}
                filter="url(#particleGlow)"
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + (p.id % 4),
                  repeat: Infinity,
                  delay: p.id * 0.1,
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </svg>
        
        {/* Subtle gradient overlays */}
        <motion.div aria-hidden className="absolute -top-40 right-0 h-[40rem] w-[40rem] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.08), transparent 60%)" }} animate={{ y: [0, 20, 0] }} transition={{ duration: 12, repeat: Infinity }} />
        <motion.div aria-hidden className="absolute -bottom-40 -left-20 h-[36rem] w-[36rem] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(6, 182, 212, 0.08), transparent 60%)" }} animate={{ y: [0, -20, 0] }} transition={{ duration: 14, repeat: Infinity }} />
      </div>

      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-electric/20 shadow-lg shadow-electric/5">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logos/logo-hx-3d-icon.svg" alt="HerixAI" className="h-10 w-10" />
            <span className="text-2xl font-bold text-white">HerixAI</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#home" className="hover:text-electric">{i.nav.home}</a>
            <a href="#expertise" className="hover:text-electric">{i.nav.expertise}</a>
            <a href="#collaboration" className="hover:text-electric">{i.nav.collaboration}</a>
            <a href="#insights" className="hover:text-electric">{i.nav.insights}</a>
            <Link href="/about" className="hover:text-electric">{i.nav.about}</Link>
            <a href="#contact" className="hover:text-electric">{i.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://calendly.com/ytaheris/30min"
            target="_blank"
              rel="noreferrer noopener"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-electric text-electric hover:bg-electric hover:text-white transition"
          >
              {i.hero.demo}
          </a>
            <button aria-label="Switch language" className="glass-card px-3 py-1 text-sm" onClick={() => setLang((l) => (l === "fr" ? "en" : "fr"))}>
              {lang === "fr" ? "🇫🇷 FR" : "🇬🇧 EN"}
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="section relative">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Side - Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-5xl md:text-7xl font-medium tracking-tight"
                >
                  <span className="neon-text">HerixAI</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-2xl text-foreground/80 leading-relaxed"
                >
                  {i.hero.subtitle}
                </motion.p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <a href="#expertise" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-electric text-white font-medium hover:scale-[1.02] transition shadow-lg shadow-electric/30">
                  {i.hero.cta} <FaArrowDown />
        </a>
        <a
                  href="https://calendly.com/ytaheris/30min"
          target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-electric text-electric hover:bg-electric hover:text-white transition"
                >
                  {i.hero.demo}
                </a>
              </motion.div>
            </motion.div>

            {/* Right Side - AI Solar System Animation */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-96 flex items-center justify-center overflow-visible"
            >
              <svg
                className="w-full h-full max-w-lg"
                viewBox="0 0 600 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Glow Filters */}
                  <filter id="sunGlow">
                    <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="planetGlow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="starGlow">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  
                  {/* Gradients for 3D effect */}
                  <radialGradient id="sunGradient" cx="35%" cy="35%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1"/>
                    <stop offset="40%" stopColor="#80F6FF" stopOpacity="1"/>
                    <stop offset="70%" stopColor="#00F0FF" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#00D0E8" stopOpacity="0.95"/>
                  </radialGradient>
                  <radialGradient id="planetGradient" cx="30%" cy="30%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1"/>
                    <stop offset="50%" stopColor="#D893FF" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#B026FF" stopOpacity="1"/>
                  </radialGradient>
                </defs>
                
                {/* Background Stars */}
                {[...Array(50)].map((_, i) => {
                  const x = (i * 73 + 50) % 600;
                  const y = (i * 97 + 30) % 600;
                  const size = 1.5 + (i % 3);
                  const colors = ['#00F0FF', '#B026FF', '#7B2CBF', '#C4B5FD'];
                  const color = colors[i % 4];
                  return (
                    <motion.circle
                      key={`star-${i}`}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 1.5 + (i % 5) * 0.3,
                        repeat: Infinity,
                        delay: i * 0.03,
                        ease: "easeInOut"
                      }}
                      cx={x}
                      cy={y}
                      r={size}
                      fill={color}
                      filter="url(#starGlow)"
                    />
                  );
                })}
                
                {/* Orbit Path */}
                <motion.circle
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  cx="300"
                  cy="300"
                  r="210"
                  fill="none"
                  stroke="#B026FF"
                  strokeWidth="1.5"
                  strokeDasharray="8,6"
                />
                
                {/* Central Sun - Agentic AI (Big 3D Circle) */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                  {/* Sun Glow Rings */}
                  <motion.circle
                    animate={{ 
                      r: [70, 95, 70],
                      opacity: [0.3, 0.1, 0.3]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    cx="300"
                    cy="300"
                    fill="none"
                    stroke="url(#sunGradient)"
                    strokeWidth="3"
                  />
                  <motion.circle
                    animate={{ 
                      r: [70, 120, 70],
                      opacity: [0.2, 0.05, 0.2]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    cx="300"
                    cy="300"
                    fill="none"
                    stroke="url(#sunGradient)"
                    strokeWidth="2"
                  />
                  
                  {/* Main Sun Body - 3D effect */}
                  <circle
                    cx="300"
                    cy="300"
                    r="70"
                    fill="url(#sunGradient)"
                    filter="url(#sunGlow)"
                  />
                  
                  {/* Sun Rotation Effect - Animated Spots */}
                  {[0, 120, 240].map((angle, i) => (
                    <motion.ellipse
                      key={`sun-spot-${i}`}
                      animate={{
                        rotate: [angle, angle + 360]
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      cx="300"
                      cy="300"
                      rx="68"
                      ry="65"
                      fill="none"
                      stroke="#00C0D0"
                      strokeWidth="2"
                      opacity="0.4"
                      style={{ transformOrigin: "300px 300px" }}
                    />
                  ))}
                  
                  {/* Brain Icon on Agentic AI */}
                  <motion.foreignObject
                    x="250"
                    y="250"
                    width="100"
                    height="100"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    style={{ overflow: 'visible' }}
                  >
                    <div className="flex items-center justify-center w-full h-full">
                      <FaBrain className="text-white" style={{ fontSize: '70px', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.7))' }} />
                    </div>
                  </motion.foreignObject>
                </motion.g>
                
                {/* Orbiting Planet - Responsible AI (Bigger, Slower Circle) */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  {/* Planet Glow */}
                  <motion.circle
                    animate={{
                      cx: [
                        300 + 210 * Math.cos(0),
                        300 + 210 * Math.cos(Math.PI / 4),
                        300 + 210 * Math.cos(Math.PI / 2),
                        300 + 210 * Math.cos(3 * Math.PI / 4),
                        300 + 210 * Math.cos(Math.PI),
                        300 + 210 * Math.cos(5 * Math.PI / 4),
                        300 + 210 * Math.cos(3 * Math.PI / 2),
                        300 + 210 * Math.cos(7 * Math.PI / 4),
                        300 + 210 * Math.cos(2 * Math.PI)
                      ],
                      cy: [
                        300 + 210 * Math.sin(0),
                        300 + 210 * Math.sin(Math.PI / 4),
                        300 + 210 * Math.sin(Math.PI / 2),
                        300 + 210 * Math.sin(3 * Math.PI / 4),
                        300 + 210 * Math.sin(Math.PI),
                        300 + 210 * Math.sin(5 * Math.PI / 4),
                        300 + 210 * Math.sin(3 * Math.PI / 2),
                        300 + 210 * Math.sin(7 * Math.PI / 4),
                        300 + 210 * Math.sin(2 * Math.PI)
                      ]
                    }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    r="40"
                    fill="url(#planetGradient)"
                    filter="url(#planetGlow)"
                  />
                  
                  {/* Planet Rotation - Surface Details */}
                  <motion.circle
                    animate={{
                      cx: [
                        300 + 210 * Math.cos(0),
                        300 + 210 * Math.cos(Math.PI / 4),
                        300 + 210 * Math.cos(Math.PI / 2),
                        300 + 210 * Math.cos(3 * Math.PI / 4),
                        300 + 210 * Math.cos(Math.PI),
                        300 + 210 * Math.cos(5 * Math.PI / 4),
                        300 + 210 * Math.cos(3 * Math.PI / 2),
                        300 + 210 * Math.cos(7 * Math.PI / 4),
                        300 + 210 * Math.cos(2 * Math.PI)
                      ],
                      cy: [
                        300 + 210 * Math.sin(0),
                        300 + 210 * Math.sin(Math.PI / 4),
                        300 + 210 * Math.sin(Math.PI / 2),
                        300 + 210 * Math.sin(3 * Math.PI / 4),
                        300 + 210 * Math.sin(Math.PI),
                        300 + 210 * Math.sin(5 * Math.PI / 4),
                        300 + 210 * Math.sin(3 * Math.PI / 2),
                        300 + 210 * Math.sin(7 * Math.PI / 4),
                        300 + 210 * Math.sin(2 * Math.PI)
                      ]
                    }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    r="36"
                    fill="none"
                    stroke="#7B2CBF"
                    strokeWidth="2"
                    strokeDasharray="4,5"
                    opacity="0.5"
                  />
                  
                  {/* Shield Icon on Responsible AI - Orbits with the planet */}
                  <motion.foreignObject
                    width="60"
                    height="60"
                    animate={{
                      x: [
                        300 + 210 * Math.cos(0) - 30,
                        300 + 210 * Math.cos(Math.PI / 4) - 30,
                        300 + 210 * Math.cos(Math.PI / 2) - 30,
                        300 + 210 * Math.cos(3 * Math.PI / 4) - 30,
                        300 + 210 * Math.cos(Math.PI) - 30,
                        300 + 210 * Math.cos(5 * Math.PI / 4) - 30,
                        300 + 210 * Math.cos(3 * Math.PI / 2) - 30,
                        300 + 210 * Math.cos(7 * Math.PI / 4) - 30,
                        300 + 210 * Math.cos(2 * Math.PI) - 30
                      ],
                      y: [
                        300 + 210 * Math.sin(0) - 30,
                        300 + 210 * Math.sin(Math.PI / 4) - 30,
                        300 + 210 * Math.sin(Math.PI / 2) - 30,
                        300 + 210 * Math.sin(3 * Math.PI / 4) - 30,
                        300 + 210 * Math.sin(Math.PI) - 30,
                        300 + 210 * Math.sin(5 * Math.PI / 4) - 30,
                        300 + 210 * Math.sin(3 * Math.PI / 2) - 30,
                        300 + 210 * Math.sin(7 * Math.PI / 4) - 30,
                        300 + 210 * Math.sin(2 * Math.PI) - 30
                      ]
                    }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ overflow: 'visible' }}
                  >
                    <div className="flex items-center justify-center w-full h-full">
                      <FaShieldAlt className="text-white" style={{ fontSize: '48px', filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.6))' }} />
                    </div>
                  </motion.foreignObject>
                </motion.g>
                
                {/* Small Orbiting Circles/Moons */}
                {[0, 90, 180, 270].map((startAngle, idx) => (
                  <motion.g
                    key={`moon-${idx}`}
                    animate={{
                      rotate: [startAngle, startAngle + 360]
                    }}
                    transition={{
                      duration: 6 + idx * 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ transformOrigin: "300px 300px" }}
                  >
                    <motion.circle
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + idx * 0.1 }}
                      cx={300 + 100 * Math.cos((startAngle * Math.PI) / 180)}
                      cy={300 + 100 * Math.sin((startAngle * Math.PI) / 180)}
                      r="6"
                      fill={idx % 2 === 0 ? '#00F0FF' : '#B026FF'}
                      filter="url(#starGlow)"
                    />
                  </motion.g>
                ))}
                
                {/* Floating Particles */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30);
                  const distance = 180 + (i % 3) * 30;
                  const particleColors = ['#00F0FF', '#B026FF', '#7B2CBF'];
                  return (
                    <motion.circle
                      key={`particle-${i}`}
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.5, 1],
                        x: [0, Math.random() * 20 - 10, 0],
                        y: [0, Math.random() * 20 - 10, 0]
                      }}
                      transition={{
                        duration: 3 + i * 0.2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                      cx={300 + distance * Math.cos((angle * Math.PI) / 180)}
                      cy={300 + distance * Math.sin((angle * Math.PI) / 180)}
                      r="2"
                      fill={particleColors[i % 3]}
                      filter="url(#starGlow)"
                    />
                  );
                })}
                
                {/* Labels */}
                <motion.text
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  x="300"
                  y="400"
                  textAnchor="middle"
                  fill="url(#sunGradient)"
                  fontSize="20"
                  fontWeight="700"
                  filter="url(#sunGlow)"
                >
                  {lang === "fr" ? "IA Agentique" : "Agentic AI"}
                </motion.text>
                
                <motion.text
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    x: [
                      300 + 210 * Math.cos(0),
                      300 + 210 * Math.cos(Math.PI / 4),
                      300 + 210 * Math.cos(Math.PI / 2),
                      300 + 210 * Math.cos(3 * Math.PI / 4),
                      300 + 210 * Math.cos(Math.PI),
                      300 + 210 * Math.cos(5 * Math.PI / 4),
                      300 + 210 * Math.cos(3 * Math.PI / 2),
                      300 + 210 * Math.cos(7 * Math.PI / 4),
                      300 + 210 * Math.cos(2 * Math.PI)
                    ],
                    y: [
                      300 + 210 * Math.sin(0) + 60,
                      300 + 210 * Math.sin(Math.PI / 4) + 60,
                      300 + 210 * Math.sin(Math.PI / 2) + 60,
                      300 + 210 * Math.sin(3 * Math.PI / 4) + 60,
                      300 + 210 * Math.sin(Math.PI) + 60,
                      300 + 210 * Math.sin(5 * Math.PI / 4) + 60,
                      300 + 210 * Math.sin(3 * Math.PI / 2) + 60,
                      300 + 210 * Math.sin(7 * Math.PI / 4) + 60,
                      300 + 210 * Math.sin(2 * Math.PI) + 60
                    ]
                  }}
                  transition={{
                    opacity: { duration: 0.8, delay: 1.8 },
                    x: { duration: 25, repeat: Infinity, ease: "linear" },
                    y: { duration: 25, repeat: Infinity, ease: "linear" }
                  }}
                  textAnchor="middle"
                  fill="url(#planetGradient)"
                  fontSize="17"
                  fontWeight="700"
                  filter="url(#planetGlow)"
                >
                  {lang === "fr" ? "IA Responsable" : "Responsible AI"}
                </motion.text>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="expertise" className="section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 neon-text">{i.expertise.title}</h2>
            <p className="text-xl md:text-2xl text-electric font-medium mb-4">{i.expertise.subtitle}</p>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-4xl">{i.expertise.description}</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {i.expertise.items.map((s, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }} className="glass-card p-8 rounded-2xl border border-foreground/10 hover:border-electric/50 transition-all duration-300 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  {s.icon}
                  <div className="text-electric text-xl font-medium">{s.title}</div>
                </div>
                <div className="text-lg font-medium text-foreground mb-2">{s.headline}</div>
                <div className="text-foreground/70 mb-4">{s.subtitle}</div>
                <div className="text-foreground/80 leading-relaxed whitespace-pre-line mb-6 flex-grow">{s.desc}</div>
                <Link 
                  href={s.link} 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-electric text-electric hover:bg-electric hover:text-black transition self-start"
                >
                  {i.expertise.learnMore} <FaArrowDown className="rotate-[-90deg]" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Models */}
      <section id="collaboration" className="section py-20 bg-gradient-to-b from-transparent via-electric/5 to-transparent">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 neon-text">{i.collaboration.title}</h2>
            <p className="text-xl md:text-2xl text-electric font-medium mb-4">{i.collaboration.subtitle}</p>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-4xl">{i.collaboration.description}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {i.collaboration.items.map((model, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl border border-foreground/10 hover:border-neon-purple/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-electric mb-3">{model.title}</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">{model.description}</p>
                <ul className="space-y-3">
                  {model.bullets.map((bullet, bidx) => (
                    <li key={bidx} className="flex items-start gap-3">
                      <span className="text-electric text-lg mt-0.5">•</span>
                      <span className="text-foreground/80 text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 neon-text">{i.insights.title}</h2>
            <p className="text-xl md:text-2xl text-electric font-medium mb-4">{i.insights.subtitle}</p>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-4xl">{i.insights.description}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {i.insights.items.map((p, idx) => (
              <motion.a
                href={p.href}
                key={p.title}
          target="_blank"
                rel="noreferrer noopener"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group glass-card p-6 rounded-2xl border border-foreground/10 hover:border-accent/50 transition block"
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

      <section id="contact" className="section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 neon-text">{i.contact.title}</h2>
            <p className="text-xl md:text-2xl text-electric font-medium mb-4">{i.contact.subtitle}</p>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-4xl mb-6">{i.contact.description}</p>
          </motion.div>
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
              <button type="submit" className="px-6 py-3 rounded-2xl bg-electric text-white font-medium hover:scale-[1.02] transition shadow-lg shadow-electric/30">{i.contact.send}</button>
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
            <a className="glass-card p-3 rounded-2xl hover:border-electric transition" href="https://www.linkedin.com/company/herixai/" target="_blank" rel="noreferrer noopener" aria-label="HerixAI LinkedIn"><FaLinkedin /></a>
            <a className="glass-card p-3 rounded-2xl hover:border-electric transition" href="https://github.com/heritai" target="_blank" rel="noreferrer noopener" aria-label="GitHub"><FaGithub /></a>
            <a className="glass-card p-3 rounded-2xl hover:border-electric transition" href="https://herixai.com" target="_blank" rel="noreferrer noopener" aria-label="Website"><FaGlobe /></a>
          </div>
        </div>
      </section>

      <footer className="border-t border-foreground/10 py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-foreground/70">
          <div>{i.footer.rights}</div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#expertise" className="hover:text-electric">{i.nav.expertise}</a>
            <a href="#collaboration" className="hover:text-electric">{i.nav.collaboration}</a>
            <a href="#insights" className="hover:text-electric">{i.nav.insights}</a>
            <Link href="/about" className="hover:text-electric">{i.nav.about}</Link>
            <a href="#contact" className="hover:text-electric">{i.nav.contact}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
