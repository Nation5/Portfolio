import { Children, useEffect, useState } from "react";

// Apparition progressive des sections (repris du modèle d'origine, simplifié)
export default function FadeIn({ children, delay = 60, duration = 600 }) {
  const [visible, setVisible] = useState(0);
  const count = Children.count(children);

  useEffect(() => {
    if (visible >= count) return;
    const t = setTimeout(() => setVisible((v) => v + 1), delay);
    return () => clearTimeout(t);
  }, [visible, count, delay]);

  return Children.map(children, (child, i) => (
    <div
      style={{
        transition: `opacity ${duration}ms, transform ${duration}ms`,
        opacity: visible > i ? 1 : 0,
        transform: visible > i ? "none" : "translateY(16px)",
      }}
    >
      {child}
    </div>
  ));
}
