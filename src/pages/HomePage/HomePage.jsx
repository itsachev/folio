import { useEffect, useRef } from "react";
/* utils */
import splitText from "@/utils/splitText";

import "./HomePage.scss";

function HomePage() {
  const headingRef = useRef(null);
  const headingRefTwo = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const titleOne = headingRef.current;
    const titleTwo = headingRefTwo.current;
    const subtitle = subtitleRef.current;

    splitText("Ivaylo", titleOne);
    splitText("Tsachev", titleTwo);
    splitText("Frontend Developer", subtitle);

    return () => {
      titleOne.innerHTML = "";
      titleTwo.innerHTML = "";
      subtitle.innerHTML = "";
    };
  }, []);

  return (
    <div className="page">
      <section className="hero-section">
        <div className="hero-section__titles-container flex-center flex-col ais">
          <h1 className="hero-section__title flex" ref={headingRef} />
          <h1 className="hero-section__title flex" ref={headingRefTwo} />
          <p className="hero-section__subtitle flex" ref={subtitleRef}></p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
