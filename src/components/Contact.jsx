import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import Reveal from "./Reveal";

// Sur ordinateur, les liens tel: ne font rien et mailto: dépend d'un logiciel de messagerie.
// On copie donc aussi la coordonnée et on le signale à l'utilisateur.
const isDesktop = () =>
  typeof window !== "undefined" && window.matchMedia?.("(hover: hover) and (pointer: fine)").matches;

async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export default function Contact({ t, contact }) {
  const c = t.contactCards;
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(null), 2500);
    return () => clearTimeout(id);
  }, [copied]);

  const cards = [
    { key: "call", icon: faPhone, ...c.call, value: contact.phone, href: `tel:+${contact.whatsapp}`, copyValue: contact.phone, blockOnDesktop: true },
    { key: "email", icon: faEnvelope, ...c.email, value: contact.email, href: `mailto:${contact.email}`, copyValue: contact.email, blockOnDesktop: false },
  ];

  const onClick = async (e, card) => {
    if (!isDesktop()) return; // mobile : appel / messagerie natifs
    if (card.blockOnDesktop) e.preventDefault();
    if (await copy(card.copyValue)) setCopied(card.key);
  };

  return (
    <section className="section" id="contact">
      <div className="contact-head">
        <Reveal>
          <span className="eyebrow">{t.contactEyebrow}</span>
          <h2 className="contact-title">{t.contactTitle}</h2>
        </Reveal>
        <Reveal as="p" variant="fade" className="contact-sub" delay={150}>{t.contactText}</Reveal>
      </div>

      <div className="contact-cards">
        {cards.map((card, i) => (
          <Reveal as="article" key={card.key} delay={i * 110} className={`contact-card card ${card.key}`}>
            <span className="contact-icon"><FontAwesomeIcon icon={card.icon} /></span>
            <h3>{card.title}</h3>
            <p className="contact-text">{card.text}</p>
            <p className="contact-value">{card.value}</p>
            <a className="contact-btn" href={card.href} onClick={(e) => onClick(e, card)}>
              {copied === card.key ? (
                <><FontAwesomeIcon icon={faCheck} /> {t.copied}</>
              ) : (
                card.cta
              )}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
