// ─────────────────────────────────────────────────────────────
// Tout le contenu du portfolio est ici (FR et EN).
// Modifiez uniquement ce fichier : le site s'adapte tout seul.
// ─────────────────────────────────────────────────────────────

const BASE = import.meta.env.BASE_URL;

export const contact = {
  email: "votre.email@exemple.com", // ← à remplacer
  phone: "+243 000 000 000", // ← à remplacer
  linkedin: "https://www.linkedin.com/in/votre-profil", // ← à remplacer
  github: "https://github.com/Nation5",
  location: "Bunia, Ituri — RDC",
  cv: `${BASE}cv-irenge-mihigo-karim.pdf`, // placez votre CV PDF dans /public
  photo: null, // ex. `${BASE}photo.jpg` après avoir placé photo.jpg dans /public
  initials: "IK",
};

export const content = {
  fr: {
    name: "Irenge Mihigo Karim",
    role: "Gestionnaire des données",
    tagline: "Santé publique · Riposte aux épidémies · Systèmes d'information",
    nav: [
      ["Expertise", "expertise"],
      ["Parcours", "history"],
      ["Réalisations", "projects"],
      ["Contact", "contact"],
    ],
    menu: "Menu",
    toTop: "Retour en haut",

    expertiseTitle: "Expertise",
    toolsLabel: "Outils :",
    expertise: [
      {
        icon: "database",
        title: "Gestion des données et SIS",
        text: "Collecte, nettoyage et consolidation des données de surveillance et de programme, avec un contrôle qualité quotidien et des bases agrégées fiables.",
        tools: ["DHIS2", "KoboToolbox", "ODK", "SQL", "Excel avancé"],
      },
      {
        icon: "chart",
        title: "Analyse et visualisation",
        text: "Tableaux de bord, courbes épidémiques et indicateurs clés pour les équipes de coordination, avec des analyses claires pour les briefings et rapports.",
        tools: ["Power BI", "Excel", "Indicateurs de suivi", "Rapportage"],
      },
      {
        icon: "map",
        title: "Cartographie et riposte",
        text: "Cartes de risque par aire de santé et analyses spatiales pour orienter les équipes de terrain dans des contextes d'urgence et d'insécurité.",
        tools: ["QGIS", "Cartes de risque", "Surveillance épidémiologique"],
      },
    ],

    historyTitle: "Parcours",
    history: [
      {
        type: "work",
        date: "Août 2026 — Nov. 2026",
        title: "Gestionnaire des données",
        org: "IQVIA, en appui à l'OMS — Riposte MVE-17 (Ebola)",
        place: "Ituri, RDC",
        text: "Données de surveillance des zones de santé de Bunia, Lita et Niania ; base agrégée des alertes et contacts ; courbes épidémiques Power BI ; cartes de risque ; briefings et rapports.",
      },
      {
        type: "work",
        date: "Sept. 2021 — Déc. 2025",
        title: "Responsable TIC",
        org: "BDOM Bukavu",
        place: "Sud-Kivu, RDC",
        text: "Infrastructure informatique et réseaux ; appui à la gestion des données et au système d'information sanitaire (DHIS2) ; rapports d'analyse pour la direction.",
      },
      {
        type: "work",
        date: "Depuis 2020",
        title: "Consultant indépendant — collecte de données",
        org: "Missions pour ONG et partenaires",
        place: "RDC",
        text: "Conception de formulaires KoboToolbox / ODK, formation des enquêteurs, contrôle qualité, analyse et cartographie des résultats.",
      },
      {
        type: "school",
        date: "2026 — en cours",
        title: "Master en génie électrique et électronique",
        org: "İstanbul Medipol University",
        place: "Turquie — 1re année",
        text: "",
      },
      {
        type: "school",
        date: "2021",
        title: "Licence en électronique et télécommunications",
        org: "Université Libre de Kigali (ULK), Institut polytechnique",
        place: "Rwanda",
        text: "",
      },
    ],

    projectsTitle: "Réalisations",
    projectsNote: "Les données opérationnelles restent confidentielles ; les exemples sont présentés sans données nominatives.",
    projects: [
      {
        icon: "chart",
        title: "Suivi épidémiologique MVE-17",
        text: "Courbes épidémiques et tableau de bord Power BI mis à jour pour les réunions de coordination de la riposte.",
        tools: ["Power BI", "DHIS2"],
      },
      {
        icon: "table",
        title: "Base agrégée alertes et contacts",
        text: "Structuration et mise à jour quotidienne de la base des alertes et du suivi des contacts de la zone de santé de Niania.",
        tools: ["Excel", "Contrôle qualité"],
      },
      {
        icon: "map",
        title: "Carte de risque par aire de santé",
        text: "Classement des aires de santé en trois niveaux de risque pour planifier les déplacements et interventions des équipes.",
        tools: ["QGIS", "Analyse spatiale"],
      },
      {
        icon: "mobile",
        title: "Enquêtes de terrain mobiles",
        text: "Formulaires de collecte avec logique de saut et validations, déployés hors ligne, puis analyse des résultats.",
        tools: ["KoboToolbox", "ODK"],
      },
    ],

    languagesTitle: "Langues",
    languages: [
      ["Français", "Courant"],
      ["Swahili", "Langue maternelle"],
      ["Anglais", "Professionnel"],
    ],

    contactTitle: "Contact",
    contactText: "Disponible pour des postes en gestion de l'information, données et suivi-évaluation dans le secteur humanitaire, en RDC et en Afrique.",
    emailCta: "M'écrire",
    cvCta: "Télécharger le CV",
    footer: "Tous droits réservés.",
  },

  en: {
    name: "Irenge Mihigo Karim",
    role: "Data Manager",
    tagline: "Public health · Outbreak response · Information systems",
    nav: [
      ["Expertise", "expertise"],
      ["Career", "history"],
      ["Work", "projects"],
      ["Contact", "contact"],
    ],
    menu: "Menu",
    toTop: "Back to top",

    expertiseTitle: "Expertise",
    toolsLabel: "Tools:",
    expertise: [
      {
        icon: "database",
        title: "Data management & HIS",
        text: "Collecting, cleaning and consolidating surveillance and programme data, with daily quality control and reliable aggregated databases.",
        tools: ["DHIS2", "KoboToolbox", "ODK", "SQL", "Advanced Excel"],
      },
      {
        icon: "chart",
        title: "Analysis & visualisation",
        text: "Dashboards, epidemic curves and key indicators for coordination teams, with clear analysis for briefings and reports.",
        tools: ["Power BI", "Excel", "Monitoring indicators", "Reporting"],
      },
      {
        icon: "map",
        title: "Mapping & response",
        text: "Risk maps by health area and spatial analysis to guide field teams in emergency and insecure settings.",
        tools: ["QGIS", "Risk mapping", "Epidemiological surveillance"],
      },
    ],

    historyTitle: "Career",
    history: [
      {
        type: "work",
        date: "Aug 2026 — Nov 2026",
        title: "Data Manager",
        org: "IQVIA, in support of WHO — Ebola (MVE-17) response",
        place: "Ituri, DRC",
        text: "Surveillance data for the Bunia, Lita and Niania health zones; aggregated alerts and contacts database; Power BI epidemic curves; risk maps; briefings and reports.",
      },
      {
        type: "work",
        date: "Sep 2021 — Dec 2025",
        title: "ICT Manager",
        org: "BDOM Bukavu",
        place: "South Kivu, DRC",
        text: "IT infrastructure and networks; support to data management and the health information system (DHIS2); analytical reports for management.",
      },
      {
        type: "work",
        date: "Since 2020",
        title: "Independent Consultant — Data Collection",
        org: "Assignments for NGOs and partners",
        place: "DRC",
        text: "KoboToolbox / ODK form design, enumerator training, quality control, analysis and mapping of results.",
      },
      {
        type: "school",
        date: "2026 — ongoing",
        title: "Master in Electrical and Electronics Engineering",
        org: "İstanbul Medipol University",
        place: "Türkiye — 1st year",
        text: "",
      },
      {
        type: "school",
        date: "2021",
        title: "Bachelor in Electronics and Telecommunications",
        org: "Université Libre de Kigali (ULK), Polytechnic Institute",
        place: "Rwanda",
        text: "",
      },
    ],

    projectsTitle: "Selected work",
    projectsNote: "Operational data remains confidential; examples are described without personal data.",
    projects: [
      {
        icon: "chart",
        title: "MVE-17 epidemiological monitoring",
        text: "Epidemic curves and a Power BI dashboard kept up to date for response coordination meetings.",
        tools: ["Power BI", "DHIS2"],
      },
      {
        icon: "table",
        title: "Aggregated alerts & contacts database",
        text: "Structured and updated daily the alerts and contact-tracing database for the Niania health zone.",
        tools: ["Excel", "Quality control"],
      },
      {
        icon: "map",
        title: "Risk map by health area",
        text: "Ranked health areas into three risk levels to plan team movements and interventions.",
        tools: ["QGIS", "Spatial analysis"],
      },
      {
        icon: "mobile",
        title: "Mobile field surveys",
        text: "Data collection forms with skip logic and validation, deployed offline, followed by analysis of results.",
        tools: ["KoboToolbox", "ODK"],
      },
    ],

    languagesTitle: "Languages",
    languages: [
      ["French", "Fluent"],
      ["Swahili", "Native"],
      ["English", "Professional"],
    ],

    contactTitle: "Contact",
    contactText: "Open to information management, data and MEAL roles in the humanitarian sector, in the DRC and across Africa.",
    emailCta: "Email me",
    cvCta: "Download CV",
    footer: "All rights reserved.",
  },
};
