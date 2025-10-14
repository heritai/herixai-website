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
    title: lang === "fr" ? "IA Agentique & Générative" : "Agentic & Generative AI",
    subtitle: lang === "fr" 
      ? "Automatisation intelligente et assistance autonome" 
      : "Intelligent automation and autonomous assistance",
    description: lang === "fr"
      ? "HerixAI développe des systèmes d'IA qui comprennent, raisonnent et agissent de manière autonome. Ces solutions transforment des processus complexes en workflows automatisés, augmentent la productivité et permettent aux équipes de se concentrer sur des tâches à forte valeur ajoutée."
      : "HerixAI develops AI systems that understand, reason, and act autonomously. These solutions transform complex processes into automated workflows, boost productivity, and enable teams to focus on high-value tasks.",
  },
  capabilities: {
    title: lang === "fr" ? "Capacités" : "Capabilities",
    items: [
      lang === "fr" ? "Assistants virtuels multi-agents pour l'analyse de documents" : "Multi-agent virtual assistants for document analysis",
      lang === "fr" ? "Pipelines génératifs pour la création de contenu" : "Generative pipelines for content creation",
      lang === "fr" ? "Copilots LLM intégrés aux outils métier" : "LLM copilots integrated with business tools",
      lang === "fr" ? "Workflows automatisés avec étapes traçables" : "Automated workflows with traceable steps",
    ]
  },
  caseStudies: {
    title: lang === "fr" ? "Études de cas" : "Case Studies",
  },
  projects: [
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
      gif: "/images/brandboost.gif",
      demo: "https://huggingface.co/spaces/youtah/brandboost-content-generator",
      github: "https://github.com/heritai/brandboost-content-generator",
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

export default function AgenticAIPage() {
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

