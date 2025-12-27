"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function LaptopMan() {
  // 1. Create a ref for the container
  const container = useRef();

  // 2. The Animation Hook
  useGSAP(
    () => {
      // Because we used 'scope', we can just use className selectors!
      // This finds any element with class 'box' INSIDE 'container'.
      gsap.fromTo(
        ".box",
        { opacity: 0, x: -10, y: -10 }, // Start here (The "From" part)
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 2,
          repeat: -1,
          yoyoEase: true,
          ease: "bounce.out",
          delay: 0.5,
        } // End here (The "To" part)
      );
    },
    { scope: container }
  ); // <--- 3. Set the scope here

  return (
    <div ref={container} className="relative">
      {/* 1. The Glass Circle (Background) */}
      <div className="box absolute -top-4 -right-12 w-44 h-44 rounded-full bg-accent/20 backdrop-blur-sm rotate-24 border border-accent"></div>

      {/* 2. The Man (Foreground) */}
      <div className="box absolute -top-4 -right-12 w-44 h-44 flex items-center justify-center rotate-24">
        <Image
          src="/svg/laptopMan.svg"
          alt="Laptop Man"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
}
