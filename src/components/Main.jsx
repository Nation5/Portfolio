import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faArrowDown } from "./icons";

export default function Main({ t, contact }) {
  return (
    <section className="hero" id="top">
      <div className="hero-wave" aria-hidden="true" />
      <div className="hero-inner">
        <div className="avatar enter" style={{ "--d": "100ms" }}>
          {contact.photo ? <img src={contact.photo} alt={t.name} /> : <span>{contact.initials}</span>}
        </div>
        <div className="hero-content">
          <div className="socials enter" style={{ "--d": "200ms" }}>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
          <h1 className="enter" style={{ "--d": "300ms" }}>{t.name}</h1>
          <p className="hero-role enter" style={{ "--d": "450ms" }}>
            {t.role}
            <span className="role-bar" />
          </p>
          <p className="hero-tagline enter" style={{ "--d": "600ms" }}>{t.tagline}</p>
        </div>
      </div>
      <button
        className="scroll-hint"
        onClick={() => document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" })}
        aria-label={t.nav[0][0]}
      >
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
    </section>
  );
}
