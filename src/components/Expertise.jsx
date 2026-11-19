import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { topicIcons } from "./icons";

export default function Expertise({ t }) {
  return (
    <section className="section" id="expertise">
      <h2>{t.expertiseTitle}</h2>
      <div className="skills-grid">
        {t.expertise.map((s) => (
          <article className="skill" key={s.title}>
            <FontAwesomeIcon icon={topicIcons[s.icon]} className="skill-icon" />
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <div className="chips">
              <span className="chip-title">{t.toolsLabel}</span>
              {s.tools.map((tool) => <span className="chip" key={tool}>{tool}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
