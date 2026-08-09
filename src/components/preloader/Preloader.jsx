import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "@/store/appSlice";
import gsap from "gsap";

import "./Preloader.scss";

const PRELOADER_KEY = "preloader";
export const PRELOADER_DURATION = 3;
export const PRELOADER_STAGGER = 0.2;
export const PRELOADER_END = PRELOADER_DURATION + PRELOADER_STAGGER * 2;

function Preloader() {
  const dispatch = useDispatch();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".preloader h1", {
        opacity: 0,
        duration: PRELOADER_DURATION,
        ease: "power3.out",
        stagger: PRELOADER_STAGGER,
        onComplete: () => {
          gsap.to(".preloader", {
            yPercent: -100,
            duration: 0.5,
            onComplete: () => {
              dispatch(setLoading(false));
            },
          });
        },
      });
    });

    return () => ctx.revert();
  }, [dispatch]);
  return (
    <div className="preloader">
      <div className="preloader__container">
        <h1>welcome</h1>
        <h1>to my</h1>
        <h1>website</h1>
      </div>
    </div>
  );
}

export default Preloader;
