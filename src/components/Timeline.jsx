import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "./icons";

export default function Timeline({ t }) {
  return (
    <section className="section" id="history">
      <h2>{t.historyTitle}</h2>
      <ol className="timeline">
        {t.history.map((item, i) => (
          <li key={item.title} className={`tl-item ${i % 2 ? "right" : "left"}`}>
            <span className={`tl-icon ${item.type}`}>
              <FontAwesomeIcon icon={item.type === "school" ? faGraduationCap : faBriefcase} />
            </span>
            <div className="tl-card">
              <span className="tl-date">{item.date}</span>
              <h3>{item.title}</h3>
              <h4>{item.org} · {item.place}</h4>
              {item.text && <p>{item.text}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
