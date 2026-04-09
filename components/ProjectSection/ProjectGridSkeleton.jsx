export default function ProjectGridSkeleton({ count = 3 }) {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]"
        >
          {/* Cover image */}
          <div className="h-48 shrink-0 bg-white/5 animate-pulse" />

          {/* Body */}
          <div className="flex flex-col flex-1 p-5 gap-3">
            {/* Title */}
            <div className="h-5 w-2/3 rounded bg-white/10 animate-pulse" />
            {/* Description lines */}
            <div className="flex flex-col gap-2 flex-1">
              <div className="h-3 w-full rounded bg-white/[0.06] animate-pulse" />
              <div className="h-3 w-5/6 rounded bg-white/[0.06] animate-pulse" />
              <div className="h-3 w-4/6 rounded bg-white/[0.06] animate-pulse" />
            </div>
            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {Array.from({ length: 3 }).map((_, j) => (
                <div
                  key={j}
                  className="h-5 w-14 rounded-full bg-white/[0.06] animate-pulse"
                />
              ))}
            </div>
          </div>

          {/* CTA button */}
          <div className="px-5 pb-5">
            <div className="h-10 w-full rounded-lg bg-white/[0.06] animate-pulse" />
          </div>
        </div>
      ))}

      {/* Coming soon placeholder */}
      <div className="rounded-xl border border-dashed border-white/8 flex flex-col items-center justify-center min-h-[300px] text-white/15 select-none">
        <span className="text-5xl mb-3">+</span>
        <p className="text-xs tracking-[0.3em] uppercase">More coming soon</p>
      </div>
    </div>
  );
}
