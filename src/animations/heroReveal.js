import { gsap, SplitText } from "@/lib/gsap";

// Splits `titleEls` into chars and reveals them alongside a scale-in/parallax
// on `bgEl`, scoped to `triggerEl`. Returns a cleanup function that reverts
// the split and kills the animations.
function heroReveal({ titleEls, bgEl, triggerEl, delay = 0 }) {
  const splits = titleEls.map((el) =>
    SplitText.create(el, {
      type: "chars",
      charsClass: "char",
      mask: "chars",
    }),
  );
  const chars = splits.flatMap((split) => split.chars);

  const ctx = gsap.context(() => {
    gsap.set(chars, { xPercent: -110 });
    gsap.set(bgEl, { scale: 1.15 });

    gsap
      .timeline({ delay, defaults: { ease: "power3.out" } })
      .to(bgEl, { scale: 1, duration: 1.6 })
      .to(chars, { xPercent: 0, duration: 1, stagger: 0.02 }, 0.2);

    gsap.to(bgEl, {
      yPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: triggerEl,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, triggerEl);

  return () => {
    ctx.revert();
    splits.forEach((split) => split.revert());
  };
}

export default heroReveal;
