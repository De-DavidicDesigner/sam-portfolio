import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Cycles through `words`, typing and deleting each one.
 * `words` should be a stable reference (e.g. defined at module level).
 */
export function useTypewriter(words, { typeMs = 70, deleteMs = 35, holdMs = 1800 } = {}) {
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    const word = words[index];
    const finishedTyping = !deleting && text === word;
    const delay = finishedTyping ? holdMs : deleting ? deleteMs : typeMs;

    const timer = setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [words, index, text, deleting, reducedMotion, typeMs, deleteMs, holdMs]);

  return reducedMotion ? words[0] : text;
}
