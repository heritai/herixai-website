"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaTimes } from "react-icons/fa";
import Link from "next/link";

type Lang = "fr" | "en";

type Project = {
  title: string;
  description: string;
  solution: string;
  details: string;
  stack: string;
  image: string;
  gif?: string;
  demo: string;
  github: string;
};

const t = (lang: Lang) => ({
  nav: {
    back: lang === "fr" ? "Retour à l'accueil" : "Back to Home",
  },
  hero: {
    title: lang === "fr" ? "IA Responsable & Conforme" : "Responsible & Compliant AI",
    subtitle: lang === "fr" 
      ? "Fiable, auditable, prêt pour la réglementation" 
      : "Trustworthy, auditable, regulation-ready",
    description: lang === "fr"
      ? "HerixAI garantit que les systèmes d'IA respectent les normes éthiques et réglementaires. Les solutions incluent des audits de biais, des évaluations de conformité RGPD et AI Act, et des tableaux de bord d'explicabilité pour renforcer la confiance et réduire les risques."
      : "HerixAI ensures AI systems meet ethical and regulatory standards. Solutions include bias audits, GDPR and AI Act compliance assessments, and explainability dashboards to build trust and reduce risks.",
  },
  capabilities: {
    title: lang === "fr" ? "Capacités" : "Capabilities",
    items: [
      lang === "fr" ? "Évaluation de biais et d'équité avec monitoring" : "Bias and fairness assessment with monitoring",
      lang === "fr" ? "Tableaux de bord d'explicabilité et documentation" : "Explainability dashboards and documentation",
      lang === "fr" ? "Vérifications automatisées pour la gouvernance" : "Automated checks for governance",
      lang === "fr" ? "Préparation au RGPD et à l'AI Act européen" : "GDPR and European AI Act readiness",
    ]
  },
  caseStudies: {
    title: lang === "fr" ? "Études de cas" : "Case Studies",
  },
  projects: [
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
      image: "/images/audit_tool.png",
      gif: "/images/audit_tool.gif",
      demo: "https://ml-audit.streamlit.app/",
      github: "https://github.com/heritai/ml-cloud-audit",
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
      gif: "/images/multi-agent.gif",
      demo: "https://compliance-assistant.streamlit.app/",
      github: "https://github.com/heritai/llm-multi-agent-assistant",
    },
  ],
});

export default function ResponsibleAIPage() {
  const [lang, setLang] = useState<Lang>("fr");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const i = t(lang);

  return (
    <main className="relative min-h-screen overflow-x-hidden" data-theme="dark">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-electric hover:text-electric/80 transition">
            <FaArrowLeft />
            {i.nav.back}
          </Link>
          <button 
            aria-label="Switch language" 
            className="glass-card glow-electric px-3 py-1 text-sm" 
            onClick={() => setLang((l) => (l === "fr" ? "en" : "fr"))}
          >
            {lang === "fr" ? "🇫🇷 FR" : "🇬🇧 EN"}
          </button>
        </div>
      </header>

      {/* Hero Section - Two Column Layout */}
      <section className="section relative pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold neon-text">
                {i.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-electric font-medium">
                {i.hero.subtitle}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {i.hero.description}
              </p>
            </motion.div>

            {/* Right: Capabilities */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-electric">
                {i.capabilities.title}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {i.capabilities.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    className="glass-card p-4 hover:scale-[1.02] transition"
                  >
                    <p className="text-sm text-foreground/90">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 neon-text">
            {i.caseStudies.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {i.projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="glass-card p-4 cursor-pointer hover:scale-[1.02] transition group"
              >
                <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base font-bold text-electric group-hover:text-electric/80 transition line-clamp-2">
                  {project.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-md rounded-3xl border border-electric/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-background/80 hover:bg-electric/20 transition"
              aria-label="Close modal"
            >
              <FaTimes className="text-electric text-xl" />
            </button>

            <div className="p-8">
              {selectedProject.gif && (
                <div className="relative w-full mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={selectedProject.gif}
                    alt={selectedProject.title}
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
              )}

              <h2 className="text-3xl font-bold mb-4 text-electric">
                {selectedProject.title}
              </h2>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground/90 mb-2">
                    {lang === "fr" ? "Problème" : "Problem"}
                  </h3>
                  <p className="text-foreground/70">{selectedProject.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-electric mb-2">
                    {lang === "fr" ? "Solution" : "Solution"}
                  </h3>
                  <p className="text-foreground/70">{selectedProject.solution}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground/90 mb-2">
                    {lang === "fr" ? "Résultats" : "Results"}
                  </h3>
                  <p className="text-foreground/70">{selectedProject.details}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground/90 mb-2">
                    {lang === "fr" ? "Technologies" : "Tech Stack"}
                  </h3>
                  <p className="text-foreground/70">{selectedProject.stack}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-electric text-black font-medium hover:scale-[1.02] transition"
                >
                  <FaExternalLinkAlt /> {lang === "fr" ? "Voir la démo" : "View Demo"}
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-electric text-electric hover:bg-electric hover:text-black transition"
                >
                  <FaGithub /> {lang === "fr" ? "Voir sur GitHub" : "View on GitHub"}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="section py-12 border-t border-foreground/10">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-electric hover:text-electric/80 transition">
            <FaArrowLeft />
            {i.nav.back}
          </Link>
        </div>
      </footer>
    </main>
  );
}

