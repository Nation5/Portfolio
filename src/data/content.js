// ─────────────────────────────────────────────────────────────
// Tout le contenu du portfolio est ici (FR et EN).
// Modifiez uniquement ce fichier : le site s'adapte tout seul.
// ─────────────────────────────────────────────────────────────

const BASE = import.meta.env.BASE_URL;

export const contact = {
  email: "karimnation23@gmail.com",
  phone: "+243 973 451 195",
  linkedin: "https://www.linkedin.com/in/karimnation/",
  github: "https://github.com/Nation5",
  location: "Bunia, Ituri — RDC",
  photo: null, // ex. `${BASE}photo.jpg` après avoir placé photo.jpg dans /public
  initials: "IK",
};

export const content = {
  fr: {
    name: "Irenge Mihigo Karim",
    role: "Gestionnaire des données",
    tagline: "Données · Suivi-évaluation · Réseaux et systèmes d'information",
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
      {
        icon: "project",
        title: "Suivi-évaluation et gestion de projet",
        text: "Suivi des indicateurs, évaluation des résultats et pilotage de projets : planification, coordination des équipes, suivi des activités et rapportage aux partenaires.",
        tools: ["Suivi-évaluation (S&E)", "Cadre logique", "Indicateurs", "Planification", "Coordination"],
      },
      {
        icon: "network",
        title: "Réseaux et infrastructure",
        text: "Conception, déploiement et maintenance de réseaux d'entreprise, diagnostic de connectivité et administration des systèmes informatiques.",
        tools: ["LAN / WAN", "Routage et commutation", "Wi-Fi", "Cisco Packet Tracer", "Administration systèmes"],
      },
      {
        icon: "code",
        title: "Développement et programmation",
        text: "Applications web et outils d'automatisation pour faciliter la collecte, le traitement et la présentation des données.",
        tools: ["React", "Angular", "Python", "SQL", "C++"],
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
        text: "Administration de l'infrastructure informatique et des réseaux (LAN, Wi-Fi, connectivité) ; support technique ; appui à la gestion des données et au système d'information sanitaire (DHIS2) ; rapports d'analyse pour la direction.",
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
      {
        icon: "network",
        title: "Infrastructure réseau BDOM",
        text: "Maintenance et dépannage du réseau et des équipements informatiques d'une organisation de santé, pour une connectivité fiable des équipes.",
        tools: ["Réseaux", "Support IT"],
      },
      {
        icon: "chip",
        title: "Système IoT de surveillance des déchets",
        text: "Projet de fin d'études : capteurs et modules Wi-Fi pour suivre en temps réel le remplissage des poubelles, firmware en C++ et simulations MATLAB.",
        tools: ["IoT", "C++", "Arduino", "MATLAB"],
      },
    ],

    languagesTitle: "Langues",
    languages: [
      ["Français", "Courant"],
      ["Swahili", "Langue maternelle"],
      ["Anglais", "Professionnel"],
    ],

    contactTitle: "Contact",
    contactText: "Disponible pour des postes en gestion de l'information, données, suivi-évaluation, gestion de projets et TIC dans le secteur humanitaire, en RDC et en Afrique.",
    emailCta: "M'écrire",
    footer: "Tous droits réservés.",
  },

  en: {
    name: "Irenge Mihigo Karim",
    role: "Data Manager",
    tagline: "Data · Monitoring & evaluation · Networks and information systems",
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
      {
        icon: "project",
        title: "M&E and project management",
        text: "Indicator monitoring, results evaluation and project management: planning, team coordination, activity follow-up and reporting to partners.",
        tools: ["Monitoring & evaluation", "Logframe", "Indicators", "Planning", "Coordination"],
      },
      {
        icon: "network",
        title: "Networking & infrastructure",
        text: "Designing, deploying and maintaining enterprise networks, troubleshooting connectivity and administering IT systems.",
        tools: ["LAN / WAN", "Routing & switching", "Wi-Fi", "Cisco Packet Tracer", "Systems administration"],
      },
      {
        icon: "code",
        title: "Development & programming",
        text: "Web applications and automation tools that make data collection, processing and presentation easier.",
        tools: ["React", "Angular", "Python", "SQL", "C++"],
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
        text: "Administered IT infrastructure and networks (LAN, Wi-Fi, connectivity); technical support; support to data management and the health information system (DHIS2); analytical reports for management.",
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
      {
        icon: "network",
        title: "BDOM network infrastructure",
        text: "Maintained and troubleshot the network and IT equipment of a health organisation to keep teams reliably connected.",
        tools: ["Networking", "IT support"],
      },
      {
        icon: "chip",
        title: "IoT waste monitoring system",
        text: "Final-year project: sensors and Wi-Fi modules to track bin fill levels in real time, C++ firmware and MATLAB simulations.",
        tools: ["IoT", "C++", "Arduino", "MATLAB"],
      },
    ],

    languagesTitle: "Languages",
    languages: [
      ["French", "Fluent"],
      ["Swahili", "Native"],
      ["English", "Professional"],
    ],

    contactTitle: "Contact",
    contactText: "Open to information management, data, MEAL, project management and ICT roles in the humanitarian sector, in the DRC and across Africa.",
    emailCta: "Email me",
    footer: "All rights reserved.",
  },
};
