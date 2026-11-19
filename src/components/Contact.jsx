import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Reveal from "./Reveal";

export default function Contact({ t, contact }) {
  const c = t.contactCards;
  const cards = [
    { key: "call", icon: faPhone, ...c.call, value: contact.phone, href: `tel:+${contact.whatsapp}` },
    { key: "email", icon: faEnvelope, ...c.email, value: contact.email, href: `mailto:${contact.email}` },
  ];

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
            <a
              className="contact-btn"
              href={card.href}
              {...(card.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {card.cta}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
