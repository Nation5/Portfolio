import { useEffect, useState } from "react";
import { content, contact } from "./data/content.js";

const SECTIONS = ["about", "experience", "skills", "education", "contact"];

function useActiveSection() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

export default function App() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lang") || "fr";
    } catch {
      return "fr";
    }
  });
  const t = content[lang];
  const active = useActiveSection();

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  return (
    <div className="layout">
      <header className="side">
        <div>
          <div className="lang" role="group" aria-label="Language">
            {["fr", "en"].map((l) => (
              <button key={l} className={lang === l ? "on" : ""} onClick={() => setLang(l)} aria-pressed={lang === l}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <h1 className="name">{t.name}</h1>
          <p className="role">{t.role}</p>
          <p className="tagline">{t.tagline}</p>

          <nav className="nav" aria-label="Sections">
            {SECTIONS.map((id) => (
              <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
                <span className="line" />
                {t.nav[id]}
              </a>
            ))}
          </nav>
        </div>

        <ul className="links">
          <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
          <li><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li className="muted">{contact.location}</li>
        </ul>
      </header>

      <main className="main">
        <section id="about">
          <h2 className="label">{t.nav.about}</h2>
          {t.about.map((p, i) => <p key={i} className="prose">{p}</p>)}
        </section>

        <section id="experience">
          <h2 className="label">{t.experienceTitle}</h2>
          <ol className="timeline">
            {t.experience.map((job) => (
              <li key={job.title + job.period} className="item">
                <div className="period">{job.period}</div>
                <div>
                  <h3 className="title">{job.title}</h3>
                  <p className="org">{job.org} · {job.place}</p>
                  <ul className="points">
                    {job.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                  <ul className="tags">
                    {job.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="skills">
          <h2 className="label">{t.skillsTitle}</h2>
          <dl className="skills">
            {t.skills.map((s) => (
              <div key={s.group} className="skill-row">
                <dt>{s.group}</dt>
                <dd>{s.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="education">
          <h2 className="label">{t.educationTitle}</h2>
          <ol className="timeline">
            {t.education.map((e) => (
              <li key={e.title} className="item">
                <div className="period">{e.period}</div>
                <div>
                  <h3 className="title">{e.title}</h3>
                  <p className="org">{e.org}</p>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="sublabel">{t.languagesTitle}</h3>
          <dl className="skills">
            {t.languages.map(([l, lvl]) => (
              <div key={l} className="skill-row">
                <dt>{l}</dt>
                <dd>{lvl}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contact">
          <h2 className="label">{t.contactTitle}</h2>
          <p className="prose">{t.contactText}</p>
          <div className="actions">
            <a className="btn primary" href={`mailto:${contact.email}`}>{t.contactCta}</a>
            <a className="btn" href={contact.cv} download>{t.cvCta}</a>
          </div>
          <p className="contact-line">{contact.phone} · {contact.location}</p>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} {t.name}. {t.footer}
        </footer>
      </main>
    </div>
  );
}
