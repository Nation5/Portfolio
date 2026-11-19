import { useEffect, useState } from "react";
import { content, contact } from "./data/content.js";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Expertise from "./components/Expertise";
import Timeline from "./components/Timeline";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";

const read = (key, fallback) => {
  try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
};
const save = (key, value) => {
  try { localStorage.setItem(key, value); } catch { /* stockage indisponible */ }
};

export default function App() {
  const [mode, setMode] = useState(() => read("mode", "dark"));
  const [lang, setLang] = useState(() => read("lang", "fr"));
  const t = content[lang];

  useEffect(() => { save("mode", mode); }, [mode]);
  useEffect(() => { save("lang", lang); document.documentElement.lang = lang; }, [lang]);

  return (
    <div className={`main-container ${mode}-mode`}>
      <Navigation
        t={t}
        mode={mode}
        onModeChange={() => setMode(mode === "dark" ? "light" : "dark")}
        lang={lang}
        onLangChange={setLang}
      />
      <FadeIn>
        <Main t={t} contact={contact} />
        <Expertise t={t} />
        <Timeline t={t} />
        <Project t={t} />
        <Contact t={t} contact={contact} />
      </FadeIn>
      <Footer t={t} contact={contact} />
    </div>
  );
}
