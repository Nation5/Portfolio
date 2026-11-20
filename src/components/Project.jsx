import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { topicIcons } from "./icons";
import Reveal from "./Reveal";

export default function Project({ t }) {
  return (
    <section className="section" id="projects">
      <Reveal as="h2" className="section-title">{t.projectsTitle}</Reveal>

      {t.featured && (
        <Reveal as="article" className="featured-project">
          <div className="fp-visual" aria-hidden="true">
            <div className="fp-grid" />
            <span className="fp-pin p1" /><span className="fp-pin p2" /><span className="fp-pin p3" />
            <div className="fp-logo"><FontAwesomeIcon icon={topicIcons.mapfold} /></div>
            <strong>{t.featured.name}</strong>
            <small>{t.featured.tagline}</small>
          </div>
          <div className="fp-body">
            <span className="fp-label">{t.featuredLabel}</span>
            <h3>{t.featured.name}</h3>
            <p>{t.featured.text}</p>
            <ul className="fp-features">
              {t.featured.features.map((f) => (
                <li key={f.label}>
                  <span><FontAwesomeIcon icon={f.icon === "map" ? topicIcons.mapfold : topicIcons[f.icon]} /></span>
                  {f.label}
                </li>
              ))}
            </ul>
            <div className="chips">
              {t.featured.tools.map((tool) => <span className="chip" key={tool}>{tool}</span>)}
            </div>
          </div>
        </Reveal>
      )}
      <div className="projects-grid">
        {t.projects.map((p, i) => (
          <Reveal as="article" className="project" key={p.title} delay={(i % 3) * 120}>
            <div className="project-thumb-wrap">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="project-thumb"
                  loading="lazy"
                  onError={(e) => {
                    if (p.fallback && !e.currentTarget.dataset.fb) {
                      e.currentTarget.dataset.fb = "1";
                      e.currentTarget.src = p.fallback;
                    }
                  }}
                />
              ) : (
                <div className="project-thumb placeholder" aria-hidden="true">
                  <FontAwesomeIcon icon={topicIcons[p.icon]} />
                </div>
              )}
              {p.credit && (
                <a className="photo-credit" href={p.credit.url} target="_blank" rel="noreferrer">
                  {p.credit.author} · Unsplash
                </a>
              )}
            </div>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <div className="chips">
              {p.tools.map((tool) => <span className="chip" key={tool}>{tool}</span>)}
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal as="p" variant="fade" className="note">{t.projectsNote}</Reveal>
    </section>
  );
}
