import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "./icons";
import Reveal from "./Reveal";

export default function Timeline({ t }) {
  return (
    <section className="section" id="history">
      <Reveal as="h2" className="section-title">{t.historyTitle}</Reveal>
      <Reveal as="ol" variant="line" className="timeline">
        {t.history.map((item, i) => {
          const side = i % 2 ? "right" : "left";
          return (
            <li key={item.title} className={`tl-item ${side}`}>
              <Reveal variant="pop" className={`tl-icon ${item.type}`} delay={100}>
                <FontAwesomeIcon icon={item.type === "school" ? faGraduationCap : faBriefcase} />
              </Reveal>
              <Reveal variant={side} className="tl-card card" delay={150}>
                <span className="tl-date">{item.date}</span>
                <h3>{item.title}</h3>
                <h4>{item.org} · {item.place}</h4>
                {item.text && <p>{item.text}</p>}
              </Reveal>
            </li>
          );
        })}
      </Reveal>
    </section>
  );
}
