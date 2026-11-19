// ─────────────────────────────────────────────────────────────
// Tout le contenu du portfolio est ici. Modifiez ce fichier
// uniquement : le reste du site s'adapte automatiquement.
// ─────────────────────────────────────────────────────────────

export const contact = {
  email: "votre.email@exemple.com", // ← à remplacer
  phone: "+243 000 000 000", // ← à remplacer
  linkedin: "https://www.linkedin.com/in/votre-profil", // ← à remplacer
  location: "Bunia, Ituri — RDC",
  cv: `${import.meta.env.BASE_URL}cv-irenge-mihigo-karim.pdf`, // placez votre CV dans /public
};

export const content = {
  fr: {
    name: "Irenge Mihigo Karim",
    role: "Gestionnaire des données",
    tagline:
      "Je transforme les données de terrain en informations fiables pour la décision humanitaire et sanitaire.",
    nav: { about: "À propos", experience: "Expérience", skills: "Compétences", education: "Formation", contact: "Contact" },
    about: [
      "Gestionnaire des données basé à Bunia, en République démocratique du Congo, je travaille à l'intersection de la santé publique, de la riposte aux épidémies et des systèmes d'information.",
      "Mon travail consiste à collecter, nettoyer et analyser les données de surveillance, puis à les restituer sous une forme directement exploitable : tableaux de bord, courbes épidémiques, cartes de risque et briefings pour les équipes de coordination.",
      "Formé en électronique et télécommunications, je poursuis actuellement un Master en génie électrique et électronique à l'Université Medipol d'Istanbul.",
    ],
    experienceTitle: "Expérience",
    experience: [
      {
        period: "Août 2026 — Nov. 2026",
        title: "Gestionnaire des données",
        org: "IQVIA, en appui à l'OMS — Riposte MVE-17 (Ebola)",
        place: "Ituri, RDC",
        points: [
          "Gestion des données de surveillance pour les zones de santé de Bunia, Lita et Niania.",
          "Mise à jour quotidienne de la base agrégée des alertes et des contacts.",
          "Production des courbes épidémiques et tableaux de bord sous Power BI.",
          "Cartographie du risque par aire de santé pour orienter les équipes de terrain.",
          "Préparation des analyses, rapports et briefings pour la coordination.",
        ],
        tags: ["DHIS2", "Power BI", "Excel", "QGIS"],
      },
      {
        period: "Sept. 2021 — Déc. 2025",
        title: "Responsable TIC",
        org: "BDOM Bukavu",
        place: "Sud-Kivu, RDC",
        points: [
          "Gestion de l'infrastructure informatique et des réseaux de l'organisation.",
          "Appui à la gestion des données et au système d'information sanitaire (DHIS2).",
          "Conception de rapports et tableaux d'analyse pour la direction.",
        ],
        tags: ["Réseaux", "DHIS2", "SQL", "Power BI"],
      },
      {
        period: "Depuis 2020",
        title: "Consultant indépendant — collecte de données",
        org: "Missions pour ONG et partenaires",
        place: "RDC",
        points: [
          "Conception de formulaires de collecte mobile et déploiement sur le terrain.",
          "Formation des enquêteurs, contrôle qualité et nettoyage des données.",
          "Analyse et cartographie des résultats d'enquêtes.",
        ],
        tags: ["KoboToolbox", "ODK", "QGIS", "Excel avancé"],
      },
    ],
    skillsTitle: "Compétences",
    skills: [
      { group: "Systèmes d'information", items: ["DHIS2", "KoboToolbox", "ODK"] },
      { group: "Analyse et visualisation", items: ["Power BI", "Excel avancé", "SQL"] },
      { group: "Cartographie", items: ["QGIS", "Cartes de risque", "Analyse spatiale"] },
      { group: "Contexte", items: ["Surveillance épidémiologique", "Riposte aux urgences", "Rapportage humanitaire"] },
    ],
    educationTitle: "Formation",
    education: [
      { period: "2026 — en cours", title: "Master en génie électrique et électronique", org: "İstanbul Medipol University, Turquie — 1re année" },
      { period: "2021", title: "Licence en technologies de l'électronique et des télécommunications", org: "Université Libre de Kigali (ULK), Institut polytechnique — Rwanda" },
    ],
    languagesTitle: "Langues",
    languages: [
      ["Français", "Courant"],
      ["Swahili", "Langue maternelle"],
      ["Anglais", "Professionnel"],
    ],
    contactTitle: "Contact",
    contactText: "Disponible pour des postes en gestion de l'information, données et suivi-évaluation dans le secteur humanitaire, en RDC et en Afrique.",
    contactCta: "M'écrire",
    cvCta: "Télécharger le CV",
    footer: "Conçu et développé avec React.",
  },

  en: {
    name: "Irenge Mihigo Karim",
    role: "Data Manager",
    tagline:
      "I turn field data into reliable information for humanitarian and public health decisions.",
    nav: { about: "About", experience: "Experience", skills: "Skills", education: "Education", contact: "Contact" },
    about: [
      "I am a data manager based in Bunia, Democratic Republic of the Congo, working where public health, outbreak response and information systems meet.",
      "My work is to collect, clean and analyse surveillance data, then deliver it in a form teams can act on: dashboards, epidemic curves, risk maps and briefings for coordination.",
      "Trained in electronics and telecommunications, I am currently pursuing a Master's in Electrical and Electronics Engineering at İstanbul Medipol University.",
    ],
    experienceTitle: "Experience",
    experience: [
      {
        period: "Aug 2026 — Nov 2026",
        title: "Data Manager",
        org: "IQVIA, in support of WHO — Ebola (MVE-17) response",
        place: "Ituri, DRC",
        points: [
          "Managed surveillance data for the Bunia, Lita and Niania health zones.",
          "Updated the aggregated alerts and contacts database daily.",
          "Produced epidemic curves and dashboards in Power BI.",
          "Mapped risk by health area to guide field teams.",
          "Prepared analyses, reports and briefings for coordination.",
        ],
        tags: ["DHIS2", "Power BI", "Excel", "QGIS"],
      },
      {
        period: "Sep 2021 — Dec 2025",
        title: "ICT Manager",
        org: "BDOM Bukavu",
        place: "South Kivu, DRC",
        points: [
          "Managed the organisation's IT infrastructure and networks.",
          "Supported data management and the health information system (DHIS2).",
          "Built reports and analysis tables for management.",
        ],
        tags: ["Networks", "DHIS2", "SQL", "Power BI"],
      },
      {
        period: "Since 2020",
        title: "Independent Consultant — Data Collection",
        org: "Assignments for NGOs and partners",
        place: "DRC",
        points: [
          "Designed mobile data collection forms and deployed them in the field.",
          "Trained enumerators, ran quality control and cleaned datasets.",
          "Analysed and mapped survey results.",
        ],
        tags: ["KoboToolbox", "ODK", "QGIS", "Advanced Excel"],
      },
    ],
    skillsTitle: "Skills",
    skills: [
      { group: "Information systems", items: ["DHIS2", "KoboToolbox", "ODK"] },
      { group: "Analysis & visualisation", items: ["Power BI", "Advanced Excel", "SQL"] },
      { group: "Mapping", items: ["QGIS", "Risk mapping", "Spatial analysis"] },
      { group: "Context", items: ["Epidemiological surveillance", "Emergency response", "Humanitarian reporting"] },
    ],
    educationTitle: "Education",
    education: [
      { period: "2026 — ongoing", title: "Master in Electrical and Electronics Engineering", org: "İstanbul Medipol University, Türkiye — 1st year" },
      { period: "2021", title: "Bachelor in Electronics and Telecommunications Technologies", org: "Université Libre de Kigali (ULK), Polytechnic Institute — Rwanda" },
    ],
    languagesTitle: "Languages",
    languages: [
      ["French", "Fluent"],
      ["Swahili", "Native"],
      ["English", "Professional"],
    ],
    contactTitle: "Contact",
    contactText: "Open to information management, data and MEAL roles in the humanitarian sector, in the DRC and across Africa.",
    contactCta: "Get in touch",
    cvCta: "Download CV",
    footer: "Designed and built with React.",
  },
};
