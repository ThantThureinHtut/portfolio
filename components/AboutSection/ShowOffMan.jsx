"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
export default function ShowOffMan() {
  // 1. Create a ref for the container
  const container = useRef();

  // 2. The Animation Hook
  useGSAP(
    () => {
      // Because we used 'scope', we can just use className selectors!
      // This finds any element with class 'box' INSIDE 'container'.
      gsap.fromTo(
        ".box",
        { opacity: 0 , scale:0.8}, // Start here (The "From" part)
        {
          opacity: 1,
          scale:1.1,
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
      <div className="box absolute top-72 right-44 w-36 h-36 rounded-full bg-accent/20 backdrop-blur-sm -rotate-24 border border-accent"></div>

      {/* 2. The Man (Foreground) */}
      <div className="box absolute top-72 right-44 w-36 h-36 flex items-center justify-center -rotate-24 ">
        <Image
          src="/svg/showoffMan.svg"
          alt="Laptop Man"
          width={250}
          height={250}
        />
      </div>
    </div>

  );
}
