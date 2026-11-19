# Portfolio — Irenge Mihigo Karim

Portfolio professionnel en React (Vite), bilingue FR/EN.

## Lancer en local
```bash
npm install
npm run dev      # http://localhost:5173
```

## Modifier le contenu
Tout le texte est dans **`src/data/content.js`** (versions FR et EN).
À remplacer en priorité : `email`, `phone`, `linkedin` dans l'objet `contact`.
Pour le bouton « Télécharger le CV », placez votre PDF dans `public/cv-irenge-mihigo-karim.pdf`.

## En ligne
Le site est publié automatiquement sur https://nation5.github.io/portfolio/ à chaque push sur `main` (GitHub Actions).

## Autres hébergeurs (optionnel)
```bash
npm run build    # produit le dossier dist/
```
- **Netlify** : glissez-déposez le dossier `dist/` sur https://app.netlify.com/drop
- **Vercel** ou **GitHub Pages** : importez le dépôt, commande de build `npm run build`, dossier `dist`.
