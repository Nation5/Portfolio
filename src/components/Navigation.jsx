import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars, faXmark } from "./icons";

export default function Navigation({ t, mode, onModeChange, lang, onLangChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Surligne la section visible
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["top", ...t.nav.map(([, id]) => id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [t]);

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
            className="icon-btn mode-btn"
            onClick={onModeChange}
            aria-label={mode === "dark" ? "Mode clair" : "Mode sombre"}
            title={mode === "dark" ? "Mode clair" : "Mode sombre"}
          >
            <FontAwesomeIcon key={mode} icon={mode === "dark" ? faSun : faMoon} className="spin-in" />
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
            <button key={id} onClick={() => go(id)} className={active === id ? "active" : ""}>{label}</button>
          ))}
          <button className="nav-cta" onClick={() => go("services")}>{t.book}</button>
        </nav>
      </div>
    </header>
  );
}
