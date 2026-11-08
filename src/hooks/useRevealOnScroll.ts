import { useEffect, useRef, useState } from "react";

import { PRELOADER_DONE_EVENT } from "@/components/Preloader/events";

// Turns true once, the first time the element scrolls into view after the intro screen ends.
export function useRevealOnScroll<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return
      observer.disconnect()
      setRevealed(true)
    }, { threshold })

    const start = () => observer.observe(element)
    if (document.documentElement.dataset.preloaded) start()
    else window.addEventListener(PRELOADER_DONE_EVENT, start, { once: true })

    return () => {
      window.removeEventListener(PRELOADER_DONE_EVENT, start)
      observer.disconnect()
    }
  }, [threshold])

  return { ref, revealed }
}
