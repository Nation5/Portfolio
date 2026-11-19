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
  photo: `${BASE}photo.jpg`, // fichier dans /public
  initials: "N5",
};

export const content = {
  fr: {
    name: "Nation5",
    role: "ICT Officer & Coach en IA",
    tagline: "Réseaux et systèmes · Intelligence artificielle · Développement · Données · Gestion de projet",
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
        icon: "network",
        title: "Réseaux et infrastructure IT",
        text: "Conception, déploiement et maintenance de réseaux d'entreprise, administration des systèmes, support technique et sécurisation de l'environnement informatique.",
        tools: ["LAN / WAN", "Routage et commutation", "Wi-Fi", "Cisco Packet Tracer", "Administration systèmes", "Support IT"],
      },
      {
        icon: "ai",
        title: "Coaching en intelligence artificielle",
        text: "Accompagnement des équipes et des organisations dans l'adoption de l'IA générative : formation, bonnes pratiques et automatisation des tâches du quotidien.",
        tools: ["IA générative", "Prompt engineering", "Automatisation", "Formation"],
      },
      {
        icon: "code",
        title: "Développement et programmation",
        text: "Applications web et outils sur mesure pour automatiser les processus, collecter les données et les présenter clairement.",
        tools: ["React", "Angular", "Python", "SQL", "C++"],
      },
      {
        icon: "database",
        title: "Données, analyse et SIG",
        text: "Collecte mobile, nettoyage, systèmes d'information, tableaux de bord et cartographie pour transformer les données en décisions.",
        tools: ["DHIS2", "KoboToolbox", "ODK", "Power BI", "Excel avancé", "QGIS"],
      },
      {
        icon: "project",
        title: "Suivi-évaluation et gestion de projet",
        text: "Pilotage de projets de bout en bout : planification, coordination des équipes, suivi des indicateurs, évaluation des résultats et rapportage aux partenaires.",
        tools: ["Gestion de projet", "Suivi-évaluation (S&E)", "Cadre logique", "Indicateurs", "Rapportage"],
      },
      {
        icon: "chip",
        title: "Électronique, télécoms et IoT",
        text: "Systèmes embarqués, capteurs et communications sans fil, de la conception du prototype à la simulation des performances.",
        tools: ["IoT", "Arduino", "MATLAB", "Proteus", "Télécommunications"],
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
        text: "Gestion et analyse des données de la riposte en Ituri : tableaux de bord Power BI, cartographie et rapports pour la coordination.",
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
      {
        icon: "mobile",
        title: "Enquêtes de terrain mobiles",
        text: "Formulaires de collecte avec logique de saut et validations, déployés hors ligne, puis analyse des résultats.",
        tools: ["KoboToolbox", "ODK"],
      },
      {
        icon: "chart",
        title: "Suivi épidémiologique MVE-17",
        text: "Courbes épidémiques et tableau de bord Power BI mis à jour pour les réunions de coordination de la riposte.",
        tools: ["Power BI", "DHIS2"],
      },
      {
        icon: "map",
        title: "Carte de risque par aire de santé",
        text: "Classement des aires de santé en trois niveaux de risque pour planifier les déplacements et interventions des équipes.",
        tools: ["QGIS", "Analyse spatiale"],
      },
      {
        icon: "table",
        title: "Base agrégée alertes et contacts",
        text: "Structuration et mise à jour quotidienne de la base des alertes et du suivi des contacts de la zone de santé de Niania.",
        tools: ["Excel", "Contrôle qualité"],
      },
    ],

    languagesTitle: "Langues",
    languages: [
      ["Français", "Courant"],
      ["Swahili", "Langue maternelle"],
      ["Anglais", "Professionnel"],
    ],

    contactTitle: "Contact",
    contactText: "Disponible pour des postes TIC, coaching en IA, développement, gestion de l'information, suivi-évaluation et gestion de projets, en RDC, en Afrique et à l'international.",
    emailCta: "M'écrire",
    footer: "Tous droits réservés.",
  },

  en: {
    name: "Nation5",
    role: "ICT Officer & AI Coach",
    tagline: "Networks & systems · Artificial intelligence · Development · Data · Project management",
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
        icon: "network",
        title: "Networking & IT infrastructure",
        text: "Designing, deploying and maintaining enterprise networks, administering systems, providing technical support and securing the IT environment.",
        tools: ["LAN / WAN", "Routing & switching", "Wi-Fi", "Cisco Packet Tracer", "Systems administration", "IT support"],
      },
      {
        icon: "ai",
        title: "AI coaching",
        text: "Helping teams and organisations adopt generative AI: training, good practices and automating everyday tasks.",
        tools: ["Generative AI", "Prompt engineering", "Automation", "Training"],
      },
      {
        icon: "code",
        title: "Development & programming",
        text: "Web applications and custom tools that automate processes, collect data and present it clearly.",
        tools: ["React", "Angular", "Python", "SQL", "C++"],
      },
      {
        icon: "database",
        title: "Data, analysis & GIS",
        text: "Mobile data collection, cleaning, information systems, dashboards and mapping that turn data into decisions.",
        tools: ["DHIS2", "KoboToolbox", "ODK", "Power BI", "Advanced Excel", "QGIS"],
      },
      {
        icon: "project",
        title: "M&E and project management",
        text: "End-to-end project delivery: planning, team coordination, indicator monitoring, results evaluation and reporting to partners.",
        tools: ["Project management", "Monitoring & evaluation", "Logframe", "Indicators", "Reporting"],
      },
      {
        icon: "chip",
        title: "Electronics, telecoms & IoT",
        text: "Embedded systems, sensors and wireless communications, from prototype design to performance simulation.",
        tools: ["IoT", "Arduino", "MATLAB", "Proteus", "Telecommunications"],
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
        text: "Managed and analysed response data in Ituri: Power BI dashboards, mapping and reports for coordination.",
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
      {
        icon: "mobile",
        title: "Mobile field surveys",
        text: "Data collection forms with skip logic and validation, deployed offline, followed by analysis of results.",
        tools: ["KoboToolbox", "ODK"],
      },
      {
        icon: "chart",
        title: "MVE-17 epidemiological monitoring",
        text: "Epidemic curves and a Power BI dashboard kept up to date for response coordination meetings.",
        tools: ["Power BI", "DHIS2"],
      },
      {
        icon: "map",
        title: "Risk map by health area",
        text: "Ranked health areas into three risk levels to plan team movements and interventions.",
        tools: ["QGIS", "Spatial analysis"],
      },
      {
        icon: "table",
        title: "Aggregated alerts & contacts database",
        text: "Structured and updated daily the alerts and contact-tracing database for the Niania health zone.",
        tools: ["Excel", "Quality control"],
      },
    ],

    languagesTitle: "Languages",
    languages: [
      ["French", "Fluent"],
      ["Swahili", "Native"],
      ["English", "Professional"],
    ],

    contactTitle: "Contact",
    contactText: "Open to ICT, AI coaching, development, information management, MEAL and project management roles in the DRC, across Africa and internationally.",
    emailCta: "Email me",
    footer: "All rights reserved.",
  },
};
