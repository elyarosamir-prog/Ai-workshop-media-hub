import { participantResults } from "../data/participantResults";
import SectionHeading from "../components/SectionHeading";

export default function ParticipantResults() {
  return (
    <div className="bg-brand-grey-light px-4 py-16 sm:px-6 sm:py-20 dark:bg-brand-black">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="نتائج التطبيق العملي" subtitle="شغل المشاركين بعد ما جرّبوا الأدوات: كل نتيجة بصاحبها والأداة اللي استخدمها." />
        {participantResults.length === 0 ? (
          <div className="mx-auto max-w-lg rounded-2xl border border-dashed border-brand-red/40 bg-white p-10 text-center text-sm text-brand-grey-text dark:bg-white/[0.03] dark:text-white/60">
            سيتم إضافة نتائج المشاركين هنا قريبًا.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {participantResults.map((r, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/10 dark:bg-white/[0.04]">
                {r.image && <img src={r.image} alt={r.title} className="w-full" />}
                {r.images && (
                  <div className="flex items-end gap-2 bg-brand-grey-light p-3 dark:bg-white/5">
                    {r.images.map((im) => (
                      <figure key={im.src} className="min-w-0 flex-1">
                        <img src={im.src} alt={im.label} className="w-full rounded-lg" />
                        <figcaption className="mt-1 text-center text-[11px] font-semibold text-brand-grey-text dark:text-white/60">{im.label}</figcaption>
                      </figure>
                    ))}
                  </div>
                )}
                <div className="p-5">
                  <span className="rounded-full bg-brand-red/10 px-2.5 py-1 text-[11px] font-bold text-brand-red">{r.tool}</span>
                  <h3 className="mt-2 font-extrabold text-brand-black dark:text-white">{r.title}</h3>
                  <p className="mt-1 text-sm text-brand-grey-text dark:text-white/60">{r.description}</p>
                  {r.prompt && <p dir="ltr" className="mt-2 text-xs font-bold text-brand-black dark:text-white">الأمر: {r.prompt}</p>}
                  {r.name && <p className="mt-2 text-xs font-bold text-brand-red">{r.name}</p>}
                  {r.link && (
                    <a href={r.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-bold text-brand-red hover:text-brand-red-dark">فتح النتيجة ←</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
