import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars, faXmark } from "./icons";

export default function Navigation({ t, mode, onModeChange, lang, onLangChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-inner">
        <div className="navbar-left">
          <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label={t.menu} aria-expanded={open}>
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </button>
          <button
            className="icon-btn"
            onClick={onModeChange}
            aria-label={mode === "dark" ? "Mode clair" : "Mode sombre"}
            title={mode === "dark" ? "Mode clair" : "Mode sombre"}
          >
            <FontAwesomeIcon icon={mode === "dark" ? faSun : faMoon} />
          </button>
          <div className="lang" role="group" aria-label="Langue">
            {["fr", "en"].map((l) => (
              <button key={l} className={lang === l ? "on" : ""} onClick={() => onLangChange(l)} aria-pressed={lang === l}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <nav className={`navbar-links${open ? " open" : ""}`}>
          {t.nav.map(([label, id]) => (
            <button key={id} onClick={() => go(id)}>{label}</button>
          ))}
        </nav>
      </div>
    </header>
  );
}
