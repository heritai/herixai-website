"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaGlobe, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

type Lang = "fr" | "en";

const t = (lang: Lang) => ({
  nav: {
    back: lang === "fr" ? "Retour à l'accueil" : "Back to Home",
  },
  hero: {
    title: lang === "fr" ? "À propos" : "About",
    subtitle: lang === "fr" 
      ? "Intelligence Artificielle — Conseil indépendant basé à Paris" 
      : "Artificial Intelligence — Independent consulting based in Paris",
  },
  content: {
    text: lang === "fr"
      ? "HerixAI est une micro-entreprise de conseil en intelligence artificielle basée à Paris. Elle est dirigée par Yousef Taheri, docteur en Intelligence Artificielle (Sorbonne Université). En tant que consultant indépendant, il aide startups, PME et institutions à intégrer des solutions IA efficaces, évolutives et conformes aux réglementations."
      : "HerixAI is an independent AI consulting practice based in Paris, France. It is led by Yousef Taheri, PhD in Artificial Intelligence (Sorbonne University). As an independent consultant, he helps startups, SMEs, and institutions adopt AI solutions that are efficient, scalable, and compliant with regulations.",
    
    background: {
      title: lang === "fr" ? "Formation & Expérience" : "Background & Experience",
      items: [
        lang === "fr" 
          ? "Doctorat en Intelligence Artificielle — Sorbonne Université, Paris"
          : "PhD in Artificial Intelligence — Sorbonne University, Paris",
        lang === "fr"
          ? "Recherche en IA responsable, apprentissage automatique et audits de conformité"
          : "Research in responsible AI, machine learning, and compliance auditing",
        lang === "fr"
          ? "Expertise en IA générative, systèmes multi-agents et science des données appliquée"
          : "Expertise in generative AI, multi-agent systems, and applied data science",
        lang === "fr"
          ? "Déploiement de solutions IA sur AWS et développement de pipelines MLOps"
          : "AI solution deployment on AWS and MLOps pipeline development",
      ]
    },
    
    approach: {
      title: lang === "fr" ? "Approche" : "Approach",
      text: lang === "fr"
        ? "HerixAI combine recherche académique et expérience pratique pour livrer des solutions IA qui créent de la valeur mesurable. Chaque projet est conçu pour être efficace, évolutif, et conforme aux standards éthiques et réglementaires."
        : "HerixAI combines academic research and practical experience to deliver AI solutions that create measurable value. Each project is designed to be efficient, scalable, and compliant with ethical and regulatory standards.",
    },
    
    connections: {
      title: lang === "fr" ? "Connexions" : "Connect",
      linkedin: "https://www.linkedin.com/in/yousef-taheri/",
      personal: "https://heritai.github.io",
      github: "https://github.com/heritai",
    },
    
    academic: {
      title: lang === "fr" ? "Profil Académique" : "Academic Profile",
      items: [
        {
          title: lang === "fr" ? "Thèse de doctorat" : "Doctoral Thesis",
          description: lang === "fr" ? "Intelligence Artificielle - Sorbonne Université" : "Artificial Intelligence - Sorbonne University",
          href: "http://theses.fr/2024SORUS225",
        },
        {
          title: lang === "fr" ? "Profil Google Scholar" : "Google Scholar Profile",
          description: lang === "fr" ? "Publications et citations académiques" : "Academic publications and citations",
          href: "http://scholar.google.com/citations?user=IN72HckAAAAJ",
        },
      ]
    }
  },
});

export default function AboutPage() {
  const [lang, setLang] = useState<Lang>("fr");
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

      {/* Hero Section */}
      <section className="section relative pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold neon-text">
              {i.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-electric font-medium">
              {i.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 rounded-2xl mb-12"
          >
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              {i.content.text}
            </p>
          </motion.div>

          {/* Background & Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-12 rounded-2xl mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-electric">
              {i.content.background.title}
            </h2>
            <ul className="space-y-4">
              {i.content.background.items.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-electric text-xl mt-1">•</span>
                  <span className="text-lg text-foreground/80">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 md:p-12 rounded-2xl mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-electric">
              {i.content.approach.title}
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {i.content.approach.text}
            </p>
          </motion.div>

          {/* Connections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-electric">
              {i.content.connections.title}
            </h2>
            <div className="flex justify-center items-center gap-6">
              <a
                href={i.content.connections.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 glass-card px-6 py-3 rounded-2xl hover:border-electric/40 hover:glow-electric transition"
              >
                <FaLinkedin className="text-electric text-2xl" />
                <span className="text-foreground/80">LinkedIn</span>
              </a>
              <a
                href={i.content.connections.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 glass-card px-6 py-3 rounded-2xl hover:border-electric/40 hover:glow-electric transition"
              >
                <FaGithub className="text-electric text-2xl" />
                <span className="text-foreground/80">GitHub</span>
              </a>
              <a
                href={i.content.connections.personal}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 glass-card px-6 py-3 rounded-2xl hover:border-electric/40 hover:glow-electric transition"
              >
                <FaGlobe className="text-electric text-2xl" />
                <span className="text-foreground/80">{lang === "fr" ? "Site personnel" : "Personal Site"}</span>
              </a>
            </div>
          </motion.div>

          {/* Academic Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-electric">
              {i.content.academic.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {i.content.academic.items.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="glass-card p-6 rounded-2xl hover:border-electric/40 hover:glow-electric transition group"
                >
                  <h3 className="text-lg font-bold text-electric group-hover:text-electric/80 mb-2 transition">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70">{item.description}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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

