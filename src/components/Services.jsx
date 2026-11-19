import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { topicIcons } from "./icons";
import { waLink } from "./whatsapp";
import Reveal from "./Reveal";

const payClass = (m) =>
  m.startsWith("M-Pesa") ? "mpesa" : m.startsWith("Airtel") ? "airtel" : m.startsWith("Orange") ? "orange" : "bank";

export default function Services({ t, contact }) {
  return (
    <section className="section" id="services">
      <Reveal as="h2" className="section-title">{t.servicesTitle}</Reveal>
      <Reveal as="p" variant="fade" className="lead services-intro">{t.servicesIntro}</Reveal>

      <div className="pricing-grid">
        {t.services.map((s, i) => (
          <Reveal as="article" key={s.name} delay={i * 110} className={`price-card card${s.featured ? " featured" : ""}`}>
            {s.featured && <span className="badge">{t.popular}</span>}
            <span className="price-icon"><FontAwesomeIcon icon={topicIcons[s.icon]} /></span>
            <h3>{s.name}</h3>
            <p className="price">
              <span className="amount">${s.price}</span>
              <span className="unit">{t.perHour}</span>
            </p>
            <ul className="price-list">
              {s.items.map((it) => (
                <li key={it}><FontAwesomeIcon icon={faCheck} />{it}</li>
              ))}
            </ul>
            <a
              className="btn wa full"
              href={waLink(contact.whatsapp, t.bookMessage(s.name, s.price))}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> {t.bookService}
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="payments card">
        <div className="payments-head">
          <FontAwesomeIcon icon={faShieldHalved} />
          <h3>{t.paymentTitle}</h3>
        </div>
        <ul className="pay-list">
          {t.paymentMethods.map((m) => (
            <li key={m} className={`pay ${payClass(m)}`}>{m}</li>
          ))}
        </ul>
        <p className="pay-note">{t.paymentNote}</p>
      </Reveal>
    </section>
  );
}
