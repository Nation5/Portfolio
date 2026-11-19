# Portfolio — Nation5

Portfolio professionnel en React (Vite), bilingue FR/EN, mode sombre/clair.
Mise en page adaptée du modèle [yujisatojr/react-portfolio-template](https://github.com/yujisatojr/react-portfolio-template) (licence MIT).

## Lancer en local
```bash
npm install
npm run dev      # http://localhost:5173/
```

## Modifier le contenu
Tout le texte est dans **`src/data/content.js`** (versions FR et EN) :
- `contact` : e-mail, téléphone, LinkedIn, photo
- `expertise`, `history` (parcours), `projects` (réalisations), `languages`

Fichiers à placer dans `public/` :
- `photo.jpg` (optionnel) → puis `photo: \`${BASE}photo.jpg\`` dans `contact`
- Pour illustrer une réalisation, ajoutez `image: \`${BASE}nom.png\`` à l'élément voulu.

## En ligne
Publication automatique sur https://nation5.github.io/Portfolio/ à chaque push sur `main` (GitHub Actions → Settings › Pages › Source : GitHub Actions).

## Illustrations des réalisations
Les images de `public/projects/` sont des illustrations SVG originales (motifs bogolan et kente).
Pour les remplacer par vos propres photos, placez le fichier dans `public/projects/` et changez le champ `image` dans `src/data/content.js`.

## WhatsApp, services et tarifs
- Numéro WhatsApp : champ `whatsapp` dans `contact` (format international sans « + », ex. `243973451195`).
- Services et tarifs horaires (USD) : tableau `services` dans `src/data/content.js` (FR et EN). Mettez `featured: true` sur le service à mettre en avant.
- Moyens de paiement affichés : `paymentMethods`.

Les vignettes des réalisations sont des photos Unsplash (licence Unsplash, usage gratuit) chargées depuis images.unsplash.com ; l'illustration SVG correspondante sert de secours si la photo ne charge pas. Pour mettre vos propres photos, remplacez `image:` par `` `${BASE}projects/ma-photo.jpg` `` et supprimez `credit`.
