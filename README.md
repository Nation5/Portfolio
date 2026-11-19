# Portfolio — Irenge Mihigo Karim

Portfolio professionnel en React (Vite), bilingue FR/EN, mode sombre/clair.
Mise en page adaptée du modèle [yujisatojr/react-portfolio-template](https://github.com/yujisatojr/react-portfolio-template) (licence MIT).

## Lancer en local
```bash
npm install
npm run dev      # http://localhost:5173/
```

## Modifier le contenu
Tout le texte est dans **`src/data/content.js`** (versions FR et EN) :
- `contact` : e-mail, téléphone, LinkedIn, photo, CV
- `expertise`, `history` (parcours), `projects` (réalisations), `languages`

Fichiers à placer dans `public/` :
- `cv-irenge-mihigo-karim.pdf` → bouton « Télécharger le CV »
- `photo.jpg` (optionnel) → puis `photo: \`${BASE}photo.jpg\`` dans `contact`
- Pour illustrer une réalisation, ajoutez `image: \`${BASE}nom.png\`` à l'élément voulu.

## En ligne
Publication automatique sur https://nation5.github.io/Portfolio/ à chaque push sur `main` (GitHub Actions → Settings › Pages › Source : GitHub Actions).
