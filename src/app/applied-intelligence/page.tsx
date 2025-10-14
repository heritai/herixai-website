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
    title: lang === "fr" ? "Intelligence Appliquée & Science des Données" : "Applied Intelligence & Data Science",
    subtitle: lang === "fr" 
      ? "Impact mesurable à partir des données" 
      : "Measurable impact from data",
    description: lang === "fr"
      ? "HerixAI transforme les données en insights actionnables et en solutions opérationnelles. De la prévision de demande à la détection d'anomalies, les solutions HerixAI optimisent les processus métier, réduisent les coûts et améliorent la prise de décision."
      : "HerixAI transforms data into actionable insights and operational solutions. From demand forecasting to anomaly detection, HerixAI solutions optimize business processes, reduce costs, and improve decision-making.",
  },
  capabilities: {
    title: lang === "fr" ? "Capacités" : "Capabilities",
    items: [
      lang === "fr" ? "Prévision de demande et optimisation d'inventaire" : "Demand forecasting and inventory optimization",
      lang === "fr" ? "Détection d'anomalies et monitoring de risques" : "Anomaly detection and risk monitoring",
      lang === "fr" ? "Pipelines ML cloud, APIs et tableaux de bord" : "Cloud ML pipelines, APIs, and dashboards",
      lang === "fr" ? "Segmentation clients et analyse comportementale" : "Customer segmentation and behavioral analytics",
    ]
  },
  caseStudies: {
    title: lang === "fr" ? "Études de cas" : "Case Studies",
  },
  projects: [
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
      gif: "/images/novamart.gif",
      demo: "https://novamart.streamlit.app/",
      github: "https://github.com/heritai/novamart-dashboard",
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
      gif: "/images/stylehive.gif",
      demo: "https://stylehive.streamlit.app/",
      github: "https://github.com/heritai/stylehive-dashboard",
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
      gif: "/images/insightbank.gif",
      demo: "https://insightbank.streamlit.app/",
      github: "https://github.com/heritai/insightbank-churn-dashboard",
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
      gif: "/images/roomify.gif",
      demo: "https://roomify-pricing.streamlit.app/",
      github: "https://github.com/heritai/roomify-pricing-dashboard",
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
      gif: "/images/transacguard.gif",
      demo: "https://transacguard.streamlit.app/",
      github: "https://github.com/heritai/transacguard-anomaly-dashboard",
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
      gif: "/images/adoptima.gif",
      demo: "https://adoptima.streamlit.app/",
      github: "https://github.com/heritai/adoptima-marketing-dashboard",
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
      gif: "/images/ShiftWise.gif",
      demo: "https://shiftwise.streamlit.app/",
      github: "https://github.com/heritai/shiftwise-scheduling-dashboard",
    },
  ],
});

export default function AppliedIntelligencePage() {
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

