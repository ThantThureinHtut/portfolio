"use client";
import { useState } from "react";
import Image from "next/image";
import { X, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Yaycha.blog",
    url: "https://www.yaycha.blog",
    shortDesc:
      "A full-featured blogging platform with real-time notifications, live view counts, and an AI title generator.",
    fullDesc:
      "Yaycha.blog is the biggest project I've built so far. It's a blogging platform featuring real-time view counts and a notification system for likes, follows, and interactions. I even integrated an AI title generator for Bluecheck verified users. This project was my first deep dive into complex database design and relationships. It taught me so much about Laravel and React, especially working with real-time data using WebSockets (Laravel Reverb and Echo). This project truly pushed my skills to the next level.",
    tech: [
      "Laravel 11",
      "React",
      "WebSockets",
      "MySQL",
      "Tailwind CSS",
      "Laravel Reverb",
    ],
    coverImage: "/homePage.png",
    images: [
      { src: "/loginPage.png", label: "Login Page" },
      { src: "/homePage.png", label: "Home Page" },
      { src: "/createPage.png", label: "Create Page" },
      { src: "/adminPage.png", label: "Admin Page" },
    ],
  },
];

export default function ProjectSection() {
  const [selected, setSelected] = useState(null);
  const [activeImg, setActiveImg] = useState(0);

  const openModal = (project) => {
    setSelected(project);
    setActiveImg(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelected(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      {/* ── Cards grid ── */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-xl border border-white/10 hover:border-accent/50 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,37,118,0.1)] hover:-translate-y-1"
          >
            {/* Cover image */}
            <div className="relative h-48 overflow-hidden shrink-0">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-5 gap-3">
              <h3 className="font-bartle text-xl text-white">
                {project.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed flex-1">
                {project.shortDesc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full border border-accent/25 text-accent/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA button */}
            <div className="px-5 pb-5">
              <button
                onClick={() => openModal(project)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-accent text-accent text-sm font-bold tracking-wide hover:bg-accent hover:text-white transition-all duration-300"
              >
                View Project <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        ))}

        {/* Coming soon placeholder */}
        <div className="rounded-xl border border-dashed border-white/8 flex flex-col items-center justify-center min-h-[300px] text-white/15 select-none">
          <span className="text-5xl mb-3">+</span>
          <p className="text-xs tracking-[0.3em] uppercase">More coming soon</p>
        </div>
      </div>

      {/* ── Modal ── */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/*
            Max height modal with internal scroll — keeps the header + close
            button always visible regardless of content length.
          */}
          <div
            className="w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border border-white/10 bg-[#0c0c0c] shadow-[0_0_80px_rgba(251,37,118,0.1)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Sticky header — never scrolls away ── */}
            <div className="shrink-0 flex items-center justify-between px-6 py-4 border-b border-white/8 bg-[#0c0c0c]">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-accent font-black text-xl leading-none">
                    #
                  </span>
                  <h2 className="font-bartle text-2xl text-white">
                    {selected.title}
                  </h2>
                </div>
                <div className="flex items-center gap-4 ">
                  <a
                    href={selected.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-accent hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={14} />
                    Live Site
                  </a>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="flex items-center justify-center size-8 rounded-full border border-white/10 text-white/40 hover:border-accent hover:text-accent transition-all duration-200"
              >
                <X size={16} />
              </button>
            </div>

            {/* ── Scrollable body ── */}
            <div className="overflow-y-auto">
              {/* Main preview image */}
              <div className="relative h-64 md:h-80 shrink-0">
                <Image
                  src={selected.images[activeImg].src}
                  alt={selected.images[activeImg].label}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0c0c0c] via-transparent to-transparent" />
                <span className="font-share absolute bottom-3 left-5 text-white/40 text-xs tracking-widest uppercase">
                  {selected.images[activeImg].label}
                </span>
              </div>

              {/* Thumbnail strip */}
              <div className="flex gap-2 px-6 py-3 border-b border-white/8 overflow-x-auto">
                {selected.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      activeImg === i
                        ? "border-accent shadow-[0_0_10px_rgba(251,37,118,0.35)]"
                        : "border-white/10 opacity-50 hover:opacity-80"
                    }`}
                    style={{ width: 80, height: 56 }}
                  >
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Description & tech */}
              <div className="px-6 py-6">
                <p className="text-white/60 leading-relaxed text-sm md:text-base mb-6">
                  {selected.fullDesc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
