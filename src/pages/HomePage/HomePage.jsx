import { useEffect, useRef } from "react";
import heroBg from "@/assets/me_2.jpg";
import { useSelector } from "react-redux";
import heroReveal from "@/animations/heroReveal";
import fadeText from "@/animations/fadeText";
import { PRELOADER_END } from "@/components/preloader/Preloader";

import "./HomePage.scss";

function HomePage() {
  const heroRef = useRef(null);
  const heroBgRef = useRef(null);
  const headingRef = useRef(null);
  const headingRefTwo = useRef(null);
  const subtitleRef = useRef(null);

  const isLoading = useSelector((state) => state.app.isLoading);
  const initialIsLoadingRef = useRef(isLoading);

  useEffect(() => {
    return heroReveal({
      titleEls: [
        headingRef.current,
        headingRefTwo.current,
        subtitleRef.current,
      ],
      bgEl: heroBgRef.current,
      triggerEl: heroRef.current,
      delay: initialIsLoadingRef.current ? PRELOADER_END - 0.5 : 0,
    });
  }, []);

  useEffect(() => fadeText(), []);

  return (
    <div className="page" style={{ height: "300dvh" }}>
      <section className="hero-section" ref={heroRef}>
        <img className="hero-section__bg" ref={heroBgRef} src={heroBg} alt="" />
        <div className="hero-section__titles-container flex-center flex-col ais">
          <h1 className="hero-section__title flex" ref={headingRef}>
            Ivaylo
          </h1>
          <h1 className="hero-section__title flex" ref={headingRefTwo}>
            Tsachev
          </h1>
          <p className="hero-section__subtitle flex" ref={subtitleRef}>
            Frontend Developer
          </p>
        </div>
      </section>

      <section className="about-section">
        <p className="fade-text">
          I`m a selectively skilled <span>developer</span> with strong focus on
          frontend technologies, producing high quality & impactful digital
          experiences.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
