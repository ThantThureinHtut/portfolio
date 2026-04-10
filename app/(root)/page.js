import LaptopMan from "@/components/AboutSection/LaptopMan";
import ShowOffMan from "@/components/AboutSection/ShowOffMan";
import MyPhotoAvatar from "@/components/HomeSection/MyPhotoAvatar";
import RotatingText from "@/components/RotatingText";
import PixelTransition from "@/components/AboutSection/PixelTransition";
import DotGrid from "@/components/DotGrid";
import Squares from "@/components/Squares";
import ProjectGridSkeleton from "@/components/ProjectSection/ProjectGridSkeleton";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowSmallDown } from "react-icons/hi2";
import { Suspense } from "react";
import CertificateSkeleton from "@/components/AboutSection/CertificateSkeleton";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import CertificateSection from "@/components/AboutSection/CertificateSection";
const skills = [
  "Laravel 11",
  "React",
  "Vue",
  "JavaScript",
  "Tailwind CSS",
  "Bootstrap",
  "MySQL",
  "WebSockets",
];

export default function asyHome() {
  return (
    <div>
      {/* ════════════════════════════════
          HERO SECTION
      ════════════════════════════════ */}
      <section
        id="home"
        className="relative w-full h-screen overflow-hidden bg-[#060606]"
      >
        {/* Animated grid background */}
        <div className="absolute inset-0 w-full h-full opacity-20">
          <Squares
            speed={0.5}
            squareSize={40}
            direction="diagonal"
            borderColor="#fff"
            hoverFillColor="#222"
          />
        </div>

        {/* Accent radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(251,37,118,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex items-center justify-center min-h-screen pt-14 px-6 md:px-12">
          <div className="w-full max-w-6xl  flex flex-col gap-12">
            {/* ── Right: avatar ── */}

            {/* ── Left: text ── */}
            <div className="flex flex-col justify-around items-center gap-5 text-center ">
              <div className="flex justify-center">
                <MyPhotoAvatar />
              </div>

              <p className="font-share text-white/40 tracking-[0.25em] text-xs uppercase">
                Hi, I&apos;m
              </p>

              <div className="flex flex-col gap-1">
                <h1 className="font-bartle font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-accent leading-none drop-shadow-[0_0_30px_rgba(251,37,118,0.4)]">
                  JACK
                </h1>
                <h2 className="font-bartle text-sm sm:text-base md:text-lg text-white/50 tracking-[0.15em] uppercase">
                  Full-Stack Web Developer
                </h2>
              </div>

              {/* Rotating tagline */}
              <div className="flex justify-center items-center  gap-2 text-sm sm:text-base text-white font-share">
                <span>Building,</span>
                <RotatingText
                  texts={["Fast", "Scalable", "Modern"]}
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden px-3 py-1 text-accent rounded btn-box w-20 sm:w-24 flex justify-center items-center"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
                <span>web apps.</span>
              </div>

              <p className="text-white/40 text-xs sm:text-sm font-light leading-relaxed max-w-sm mx-auto md:mx-0">
                Experienced in frontend, backend, APIs &amp; databases. Focused
                on clean code, performance, and real-world solutions.
              </p>

              <div className="flex gap-3 justify-center mt-1">
                <a
                  href="#project"
                  className="px-5 py-2.5 bg-accent text-white text-xs font-bold rounded  hover:bg-accent/80 transition-all duration-300 font-share tracking-widest uppercase"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="px-5 py-2.5 border border-accent/60 text-accent text-xs font-bold rounded hover:bg-accent hover:text-white transition-all duration-300 font-share tracking-widest uppercase"
                >
                  Contact
                </a>
              </div>
              {/* Scroll indicator */}
              <div className=" flex flex-col items-center gap-1 text-white/25 animate-bounce">
                <HiArrowSmallDown size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          ABOUT SECTION
      ════════════════════════════════ */}
      <section
        id="about"
        className="py-24 px-4 md:px-10 text-white flex flex-col md:flex-row gap-16 justify-center items-center md:justify-around w-full min-h-screen overflow-hidden"
      >
        {/* Left — text content */}
        <div className="flex flex-col gap-8 w-full md:w-1/2 max-w-lg">
          {/* Section heading */}
          <div className="flex items-center gap-3">
            <span className="text-accent text-3xl font-black leading-none">
              #
            </span>
            <h2 className="font-bartle text-3xl text-white">About Me</h2>
            <div className="flex-1 h-px bg-linear-to-r from-accent/50 to-transparent" />
          </div>

          <p className="text-white/65 text-sm md:text-base leading-relaxed">
            I&apos;m <strong>Jack</strong> — a full-stack developer who turns
            ideas into fast, functional web apps. I specialise in{" "}
            <strong>Laravel</strong>, <strong>React</strong>,{" "}
            <strong>Vue</strong>, and <strong>Tailwind CSS</strong>, with a
            focus on clean code, real-world impact, and constantly levelling up.
          </p>

          {/* Tech stack */}
          <div>
            <p className="font-share text-xs text-white/35 tracking-[0.2em] uppercase mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1 rounded-full border border-accent/25 text-white/60 hover:border-accent hover:text-white transition-colors duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <p className="font-share text-xs text-white/35 tracking-[0.2em] uppercase mb-3">
              Certificates — click to view
            </p>
            <Suspense fallback={<CertificateSkeleton />}>
              <CertificateSection />
            </Suspense>
          </div>
        </div>

        {/* Right — photo (DO NOT TOUCH) */}
        <div className="relative flex justify-center mb-14">
          <PixelTransition
            firstContent={
              <Image
                src="/myPhoto.jpg"
                alt=""
                width={250}
                height={250}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <Image
                src="/cartoonMyPhoto.png"
                alt="cartoon"
                width={250}
                height={250}
                loading="eager"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            gridSize={12}
            pixelColor="#ffff"
            once={false}
            animationStepDuration={0.4}
            className="custom-pixel-card h-96"
          />
          <LaptopMan />
          <ShowOffMan />
        </div>
      </section>

      {/* ════════════════════════════════
          PROJECT SECTION
      ════════════════════════════════ */}
      <section
        id="project"
        className="py-24 px-4 md:px-10 min-h-screen w-full text-white flex flex-col gap-10 md:w-11/12 md:mx-auto"
      >
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-accent text-3xl font-black leading-none">
              #
            </span>
            <h2 className="font-bartle text-3xl text-white">Projects</h2>
            <div className="flex-1 h-px bg-linear-to-r from-accent/50 to-transparent" />
          </div>
          <p className="font-share text-white/35 text-xs tracking-[0.15em]">
            Click any card to explore the full story &amp; screenshots.
          </p>
        </div>
        <Suspense fallback={<ProjectGridSkeleton />}>
          <ProjectSection />
        </Suspense>
      </section>

      {/* ════════════════════════════════
          CONTACT SECTION
      ════════════════════════════════ */}
      <section
        id="contact"
        className="relative min-h-screen w-full overflow-hidden"
      >
        {/* DotGrid background */}
        <div className="absolute inset-0 opacity-20">
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#FB2576"
            activeColor="#FB2576"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        {/* Accent top glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(251,37,118,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row gap-14 items-start min-h-screen">
          {/* Left — info */}
          <div className="flex flex-col gap-8 lg:w-1/2 text-white">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent text-3xl font-black leading-none">
                  #
                </span>
                <h2 className="font-bartle text-3xl text-white">
                  Get In Touch
                </h2>
              </div>
              <p className="font-share text-white/50 text-sm leading-relaxed max-w-sm">
                Got a project in mind? Let&apos;s build something awesome
                together. I&apos;m always happy to chat about web development,
                new tech, or just say hi.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:coderjackmyanmar@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/8 hover:border-accent/50 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 backdrop-blur-sm"
              >
                <div className="p-2.5 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <MdEmail className="size-5 text-accent" />
                </div>
                <div>
                  <p className="font-share text-xs text-white/35 tracking-[0.2em] uppercase mb-0.5">
                    Email
                  </p>
                  <p className="text-white text-sm group-hover:text-accent transition-colors">
                    coderjackmyanmar@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/ThantThureinHtut"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/8 hover:border-accent/50 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 backdrop-blur-sm"
              >
                <div className="p-2.5 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  <FaGithub className="size-5 text-white" />
                </div>
                <div>
                  <p className="font-share text-xs text-white/35 tracking-[0.2em] uppercase mb-0.5">
                    GitHub
                  </p>
                  <p className="text-white text-sm group-hover:text-accent transition-colors">
                    ThantThureinHtut
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/thant-thurein-htut-42b02a350/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/8 hover:border-blue-400/40 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 backdrop-blur-sm"
              >
                <div className="p-2.5 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <FaLinkedin className="size-5 text-blue-400" />
                </div>
                <div>
                  <p className="font-share text-xs text-white/35 tracking-[0.2em] uppercase mb-0.5">
                    LinkedIn
                  </p>
                  <p className="text-white text-sm group-hover:text-blue-400 transition-colors">
                    Thant Thurein Htut
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — email form */}
          <div className="lg:w-1/2 w-full">
            <div className="p-6 md:p-8 rounded-2xl border border-white/8 bg-white/[0.02] backdrop-blur-sm shadow-[0_0_60px_rgba(0,0,0,0.5)]">
              <h3 className="font-bartle text-xl text-white mb-6">
                Send a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
