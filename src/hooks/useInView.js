import { useEffect, useRef, useState } from "react";

export function useInView(options = { threshold: 0.15, triggerOnce: true }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.triggerOnce) observer.disconnect();
      } else if (!options.triggerOnce) {
        setInView(false);
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [options.triggerOnce, options.threshold]);

  return [ref, inView];
}
