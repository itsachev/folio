import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Lenis from "lenis";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import LenisContext from "@/providers/lenisContext";

function LenisProvider({ children }) {
  const { pathname } = useLocation();
  const lenisRef = useRef(null);
  const isLoading = useSelector((state) => state.app.isLoading);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    lenis.scrollTo(0, { immediate: true, force: true });

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

  // Preloader locks scroll: Lenis drives scrolling itself (wheel/touch
  // interception + rAF), so toggling CSS overflow alone doesn't stop it.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (isLoading) lenis.stop();
    else lenis.start();
  }, [isLoading, pathname]);

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
}

export default LenisProvider;
