import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { topicIcons } from "./icons";

export default function Project({ t }) {
  return (
    <section className="section" id="projects">
      <h2>{t.projectsTitle}</h2>
      <div className="projects-grid">
        {t.projects.map((p) => (
          <article className="project" key={p.title}>
            {p.image ? (
              <img src={p.image} alt="" className="project-thumb" />
            ) : (
              <div className="project-thumb placeholder" aria-hidden="true">
                <FontAwesomeIcon icon={topicIcons[p.icon]} />
              </div>
            )}
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <div className="chips">
              {p.tools.map((tool) => <span className="chip" key={tool}>{tool}</span>)}
            </div>
          </article>
        ))}
      </div>
      <p className="note">{t.projectsNote}</p>
    </section>
  );
}
