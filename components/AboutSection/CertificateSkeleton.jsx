export default function CertificateSkeleton({ count = 2 }) {
  return (
    <div className="flex gap-3 flex-wrap">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="relative rounded-lg border border-white/10 bg-white/[0.04] overflow-hidden animate-pulse"
          style={{ width: 160, height: 110 }}
        >
          {/* Image area */}
          <div className="absolute inset-0 bg-white/[0.06]" />
          {/* Bottom tag bar */}
          <div className="absolute bottom-0 left-0 right-0 h-7 bg-gradient-to-t from-black/60 to-transparent flex items-end px-2 pb-1.5">
            <div className="h-2.5 w-16 rounded bg-white/20" />
          </div>
        </div>
      ))}
    </div>
  );
}
