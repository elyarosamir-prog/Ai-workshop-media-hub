import type { ReelItem } from "../data/documentation";

export default function VideoGroup({ title, items }: { title: string; items: ReelItem[] }) {
  if (items.length === 0) return null;
  return (
    <div className="mb-14">
      <h3 className="mb-4 text-lg font-extrabold text-brand-black dark:text-white">{title}</h3>
      <div className="flex flex-wrap items-start gap-6">
        {items.map((r) => (
          <div key={r.src} className={`w-full ${r.orientation === "portrait" ? "max-w-[260px]" : "max-w-md"}`}>
            <video src={r.src} poster={r.poster} controls preload="metadata" playsInline className="w-full rounded-2xl border border-black/10 bg-black dark:border-white/10" />
            <p className="mt-2 text-sm font-bold text-brand-black dark:text-white">{r.title}</p>
            <p className="text-xs text-brand-red">{r.by}</p>
            {r.caption && <p className="mt-2 whitespace-pre-line text-xs leading-relaxed text-brand-grey-text dark:text-white/60">{r.caption}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
