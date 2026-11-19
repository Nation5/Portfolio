// Lien WhatsApp avec message pré-rempli (fonctionne sur mobile et ordinateur)
export const waLink = (number, text) =>
  `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
