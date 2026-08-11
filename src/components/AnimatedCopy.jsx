import React, { useRef } from "react";
import { gsap, SplitText, ScrollTrigger, useGSAP } from "@/lib/gsap";

const ACCENT_BAND = 6;
const TRANSITION_DURATION = 0.4;
const INITIAL = 0;
const ACCENT = 1;
const FINAL = 2;

export default function AnimatedCopy({
  children,
  colorInitial = "#ddd",
  colorAccent = "#abff02",
  colorFinal = "#000",
}) {
  const containerRef = useRef(null);
  const splitRefs = useRef([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      splitRefs.current = [];

      let elements = [];

      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        const wordSplit = SplitText.create(element, {
          type: "words",
          wordsClass: "word",
        });

        const charSplit = SplitText.create(wordSplit.words, {
          type: "chars",
          charsClass: "char",
        });

        splitRefs.current.push({ wordSplit, charSplit });
      });

      const allChars = splitRefs.current.flatMap(
        ({ charSplit }) => charSplit.chars,
      );

      gsap.set(allChars, { color: colorInitial });

      const totalChars = allChars.length;
      const zoneColor = {
        [INITIAL]: colorInitial,
        [ACCENT]: colorAccent,
        [FINAL]: colorFinal,
      };
      const charZones = allChars.map(() => INITIAL);

      const setZone = (char, index, zone) => {
        if (charZones[index] === zone) return;
        charZones[index] = zone;
        gsap.to(char, {
          color: zoneColor[zone],
          duration: TRANSITION_DURATION,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 60%",
        end: "top 10%",
        scrub: 1,
        onUpdate: (self) => {
          const sweepIndex = Math.floor(
            self.progress * (totalChars + ACCENT_BAND),
          );
          const finalBoundary = sweepIndex - ACCENT_BAND;
          const isScrollingDown = self.direction === 1;

          allChars.forEach((char, index) => {
            if (!isScrollingDown) {
              setZone(char, index, index < finalBoundary ? FINAL : INITIAL);
              return;
            }

            if (index >= sweepIndex) {
              setZone(char, index, INITIAL);
            } else if (index >= finalBoundary) {
              setZone(char, index, ACCENT);
            } else {
              setZone(char, index, FINAL);
            }
          });
        },
      });
    },
    {
      scope: containerRef,
      dependencies: [colorInitial, colorAccent, colorFinal],
    },
  );

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, {
      ref: containerRef,
    });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}
