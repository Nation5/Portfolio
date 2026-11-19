import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { topicIcons } from "./icons";
import Reveal from "./Reveal";

export default function Expertise({ t }) {
  return (
    <section className="section" id="expertise">
      <Reveal as="h2" className="section-title">{t.expertiseTitle}</Reveal>
      <div className="skills-grid">
        {t.expertise.map((s, i) => (
          <Reveal as="article" className="skill card" key={s.title} delay={i * 120}>
            <span className="skill-icon"><FontAwesomeIcon icon={topicIcons[s.icon]} /></span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <div className="chips">
              <span className="chip-title">{t.toolsLabel}</span>
              {s.tools.map((tool) => <span className="chip" key={tool}>{tool}</span>)}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
