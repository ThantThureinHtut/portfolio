"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const certificates = [
  {
    title: "Vue + Laravel",
    issuer: "Code Lab",
    tag: "Vue + Laravel",
    src: "/certificate/Thant Thurein Htut Vue JS Certificate.jpg",
  },
  {
    title: "Web Design",
    issuer: "Code Lab",
    tag: "Web Design",
    src: "/certificate/Thant Thurein Htut Web Design Certificate.jpg",
  },
];

export default function CertificateLightbox() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="flex gap-3 flex-wrap">
        {certificates.map((cert, i) => (
          <button
            key={i}
            onClick={() => setSelected(cert)}
            className="group relative overflow-hidden rounded-lg border border-accent/40 hover:border-accent transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,37,118,0.3)] cursor-pointer"
            style={{ width: 160, height: 110 }}
          >
            <Image
              src={cert.src}
              alt={cert.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2">
              <span className="text-white text-xs font-bold tracking-wide">
                #{cert.tag}
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-xs bg-accent/80 px-2 py-1 rounded">
                View
              </span>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-12 right-0 flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-sm"
            >
              <X size={16} />
              Close
            </button>
            <div className="border border-accent/50 rounded-xl overflow-hidden shadow-[0_0_60px_rgba(251,37,118,0.2)]">
              <Image
                src={selected.src}
                alt={selected.title}
                width={900}
                height={640}
                className="w-full object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <p className="text-white font-bold">{selected.title}</p>
              <p className="text-white/40 text-sm">Issued by {selected.issuer}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
