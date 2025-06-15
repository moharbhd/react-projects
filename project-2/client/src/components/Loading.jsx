import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

export default function LoadingPage() {
  const container = useRef();
  const textRef = useRef();

  useGSAP(
    () => {
      if (!textRef.current) return;

      const split = new SplitText(textRef.current, {
        type: "chars",
        charsClass: "char",
      });

      gsap.set(split.chars, {
        opacity: 0,
        y: 40,
        rotationX: 90,
        transformOrigin: "0% 50% -50",
      });

      const tl = gsap.timeline({
        repeat: -1,
        onComplete: () => {
          console.log("Complete");
        },
      });

      tl.to(split.chars, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: "back.out(1.2)",
      });

      return () => split.revert();
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="min-h-screen flex items-center justify-center"
    >
      <h1
        ref={textRef}
        className="text-3xl font-bold text-center text-blue-600 leading-tight tracking-tight"
      >
        Loading
      </h1>
    </div>
  );
}
