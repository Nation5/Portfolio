import { useEffect, useRef, useState } from "react";

// Fait apparaître un élément en douceur quand il entre à l'écran.
// variant : "up" (par défaut), "left", "right", "fade"
export default function Reveal({ as: Tag = "div", variant = "up", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setShown(true); return; }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setShown(true); obs.disconnect(); }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant}${shown ? " is-visible" : ""}${done ? " revealed" : ""} ${className}`}
      style={done ? undefined : { transitionDelay: `${delay}ms` }}
      onTransitionEnd={(e) => { if (shown && e.target === ref.current) setDone(true); }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
