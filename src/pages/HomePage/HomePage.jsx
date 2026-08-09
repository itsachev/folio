import { useEffect, useRef } from "react";
import heroBg from "@/assets/me_2.jpg";
import { useSelector } from "react-redux";
import { gsap, SplitText } from "@/lib/gsap";
import { PRELOADER_END } from "@/components/preloader/Preloader";

import "./HomePage.scss";

function HomePage() {
  const heroRef = useRef(null);
  const heroBgRef = useRef(null);
  const headingRef = useRef(null);
  const headingRefTwo = useRef(null);
  const subtitleRef = useRef(null);

  const isLoading = useSelector((state) => state.app.isLoading);

  useEffect(() => {
    console.error("isloading changed", isLoading);
  }, [isLoading]);

  useEffect(() => {
    const titleOne = headingRef.current;
    const titleTwo = headingRefTwo.current;
    const subtitle = subtitleRef.current;

    const splits = [titleOne, titleTwo, subtitle].map((el) =>
      SplitText.create(el, {
        type: "chars",
        charsClass: "char",
        mask: "chars",
      }),
    );
    const chars = splits.flatMap((split) => split.chars);

    const ctx = gsap.context(() => {
      gsap.set(chars, { xPercent: -110 });
      gsap.set(heroBgRef.current, { scale: 1.15 });

      gsap
        .timeline({
          delay: !isLoading ? 0 : PRELOADER_END - 0.5,
          defaults: { ease: "power3.out" },
        })
        .to(heroBgRef.current, { scale: 1, duration: 1.6 })
        .to(chars, { xPercent: 0, duration: 1, stagger: 0.02 }, 0.2);

      gsap.to(heroBgRef.current, {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => {
      ctx.revert();
      splits.forEach((split) => split.revert());
    };
  }, []);

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
        <h2>
          I`m a selectively skilled <span>developer</span> with strong focus on
          frontend technologies, producing high quality & impactful digital
          experiences.
        </h2>
      </section>
    </div>
  );
}

export default HomePage;
