import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "./icons";

export default function Main({ t, contact }) {
  const socials = (
    <>
      <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
    </>
  );

  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="avatar">
          {contact.photo ? <img src={contact.photo} alt={t.name} /> : <span>{contact.initials}</span>}
        </div>
        <div className="hero-content">
          <div className="socials">{socials}</div>
          <h1>{t.name}</h1>
          <p className="hero-role">{t.role}</p>
          <p className="hero-tagline">{t.tagline}</p>
        </div>
      </div>
    </section>
  );
}
