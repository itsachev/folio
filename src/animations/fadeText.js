import { gsap, SplitText } from "@/lib/gsap";

// Splits every matched element into chars and fades them in as they scroll into view.
// Returns a cleanup function that reverts the split and kills the animations.
function fadeText(selector = ".fade-text") {
  const splits = Array.from(document.querySelectorAll(selector)).map((el) =>
    SplitText.create(el, {
      type: "chars",
      charsClass: "char",
      mask: "chars",
    }),
  );

  const ctx = gsap.context(() => {
    splits.forEach((split) => {
      gsap.fromTo(
        split.chars,
        { opacity: 0.1 },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.02,
          scrollTrigger: {
            trigger: split.elements[0],
            start: "top 80%",
            end: "bottom 40%",
            scrub: true,
          },
        },
      );
    });
  });

  return () => {
    ctx.revert();
    splits.forEach((split) => split.revert());
  };
}

export default fadeText;
