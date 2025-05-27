import { useEffect, useRef, useState } from "react";
import smoothScrollTo from "../utils/smoothScrollAnimation";

export default function AutoScrollHandler() {
  const hasScrolled = useRef(false);
  const isScrolling = useRef(false);
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current || hasScrolled.current || e.deltaY <= 0) return;
      const scrollAmount = window.innerHeight * 0.75;
      const newY = scrollY + scrollAmount;

      setScrollY(newY);

      isScrolling.current = true;
      hasScrolled.current = true;
      smoothScrollTo(newY, 900);

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [scrollY]);

  return null;
}
