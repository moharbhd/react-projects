import { useGSAP } from "@gsap/react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { user } = useAuth();
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
        y: -10,
        x: () => gsap.utils.random(-5, 5, 2),
        rotation: () => gsap.utils.random(-15, 15),
        transformOrigin: "50% 50%",
      });

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 5,
      });

      tl.to(
        split.chars,
        {
          opacity: 1,
          y: 0,
          x: 0,
          rotation: 0,
          duration: 1.2,
          yoyo: true,
          stagger: {
            each: 0.08,
            from: "random",
            grid: "auto",
          },
          ease: "elastic.out(1.2, 1)",
        },
        0
      );

      return () => {
        tl.kill();
        split.revert();
      };
    },
    { scope: container }
  );

  return (
    <nav className="h-16 flex items-center bg-white shadow-sm">
      <div
        ref={container}
        className="container mx-auto px-6 py-3 flex justify-between items-center"
      >
        <div ref={textRef}>
          <Link to="/todos" className="text-xl font-bold text-blue-600">
            TodoApp
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex flex-row gap-4">
              <Link to="/todos" className="hover:text-blue-600">
                Todos
              </Link>
              <Link to="/profile" className="hover:text-blue-600">
                Profile
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
}
