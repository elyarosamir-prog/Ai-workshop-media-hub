import { documentationSections, outcomes, mediaLinks, PENDING, MEDIA_PENDING, reels, trends, type ReelItem } from "../data/documentation";
import SectionHeading from "../components/SectionHeading";

function VideoGroup({ title, items }: { title: string; items: ReelItem[] }) {
  if (items.length === 0) return null;
  return (
    <div className="mb-16">
      <h3 className="mb-4 text-lg font-extrabold text-brand-black dark:text-white">{title}</h3>
      <div className="flex flex-wrap items-start gap-6">
        {items.map((r) => (
          <div key={r.src} className={`w-full ${r.orientation === "portrait" ? "max-w-[260px]" : "max-w-md"}`}>
            <video src={r.src} poster={r.poster} controls preload="metadata" playsInline className="w-full rounded-2xl border border-black/10 bg-black dark:border-white/10" />
            <p className="mt-2 text-sm font-bold text-brand-black dark:text-white">{r.title}</p>
            <p className="text-xs text-brand-red">{r.by}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Documentation() {
  return (
    <div className="bg-brand-grey-light px-4 py-16 sm:px-6 sm:py-20 dark:bg-brand-black">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="توثيق اليوم" subtitle="يتم تحديث هذا القسم بصور وفيديوهات الورشة." />

        <div className="mb-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {documentationSections.map((label) => (
            <div
              key={label}
              className="flex h-28 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-black/15 bg-white text-center dark:border-white/15 dark:bg-white/[0.03]"
            >
              <span className="text-sm font-bold text-brand-black dark:text-white">{label}</span>
              <span className="text-xs text-brand-grey-text dark:text-white/40">{MEDIA_PENDING}</span>
            </div>
          ))}
        </div>

        <VideoGroup title="الريلز" items={reels} />
        <VideoGroup title="ترندات وطرائف الورشة" items={trends} />

        {mediaLinks.length > 0 && (
          <div className="mb-16">
            <h3 className="mb-4 text-lg font-extrabold text-brand-black dark:text-white">روابط الصور والفيديوهات</h3>
            <ul className="space-y-2">
              {mediaLinks.map((m) => (
                <li key={m.url}>
                  <a href={m.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-red hover:text-brand-red-dark">
                    {m.label} ←
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <SectionHeading title="ماذا خرجنا به؟" align="start" />
        <div className="grid gap-3 sm:grid-cols-2">
          {outcomes.map((o) => (
            <div key={o.label} className="rounded-xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
              <p className="mb-1 text-sm font-bold text-brand-black dark:text-white">{o.label}</p>
              <p className={`text-sm ${o.value === PENDING ? "italic text-brand-grey-text dark:text-white/40" : "text-brand-red font-bold"}`}>
                {o.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
