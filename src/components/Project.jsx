import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { topicIcons } from "./icons";
import Reveal from "./Reveal";

export default function Project({ t }) {
  return (
    <section className="section" id="projects">
      <Reveal as="h2" className="section-title">{t.projectsTitle}</Reveal>
      <div className="projects-grid">
        {t.projects.map((p, i) => (
          <Reveal as="article" className="project" key={p.title} delay={(i % 3) * 120}>
            <div className="project-thumb-wrap">
              {p.image ? (
                <img src={p.image} alt="" className="project-thumb" />
              ) : (
                <div className="project-thumb placeholder" aria-hidden="true">
                  <FontAwesomeIcon icon={topicIcons[p.icon]} />
                </div>
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
