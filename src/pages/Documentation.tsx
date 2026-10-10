import { documentationSections, mediaLinks, MEDIA_PENDING } from "../data/documentation";
import SectionHeading from "../components/SectionHeading";

export default function Documentation() {
  return (
    <div className="bg-brand-grey-light px-4 py-16 sm:px-6 sm:py-20 dark:bg-brand-black">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="توثيق اليوم" subtitle="صور الورشة ولقطاتها. يتم تحديث هذا القسم بالمواد أولًا بأول." />

        <div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {documentationSections.map((label) => (
            <div key={label} className="flex h-28 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-black/15 bg-white text-center dark:border-white/15 dark:bg-white/[0.03]">
              <span className="text-sm font-bold text-brand-black dark:text-white">{label}</span>
              <span className="text-xs text-brand-grey-text dark:text-white/40">{MEDIA_PENDING}</span>
            </div>
          ))}
        </div>

        {mediaLinks.length > 0 && (
          <div>
            <h3 className="mb-4 text-lg font-extrabold text-brand-black dark:text-white">روابط الصور والفيديوهات</h3>
            <ul className="space-y-2">
              {mediaLinks.map((m) => (
                <li key={m.url}>
                  <a href={m.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-red hover:text-brand-red-dark">{m.label} ←</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
