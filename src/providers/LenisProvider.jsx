import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import LenisContext from "@/providers/lenisContext";

function LenisProvider({ children }) {
  const { pathname } = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [pathname]);

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
}

export default LenisProvider;
