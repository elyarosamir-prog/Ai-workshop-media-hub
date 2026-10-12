import { commandSlides, extraCommands, hossamResults, participantResults } from "../data/participantResults";
import SectionHeading from "../components/SectionHeading";

export default function ParticipantResults() {
  const allResults = [...participantResults, ...hossamResults];
  return (
    <div className="bg-brand-grey-light px-4 py-16 sm:px-6 sm:py-20 dark:bg-brand-black">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="نتائج التطبيق العملي" subtitle="شغل المشاركين بعد ما جرّبوا الأدوات: كل نتيجة بصاحبها والأداة اللي استخدمها." />
        <div className="mb-14">
          <h3 className="mb-1 text-lg font-extrabold text-brand-black dark:text-white">الأوامر اللي اشتغلنا عليها</h3>
          <p className="mb-4 text-sm text-brand-grey-text dark:text-white/60">السلايدات دي كانت معروضة على الشاشة، وطبّقنا النتائج اللي تحت عليها.</p>
          <div className="grid gap-4 md:grid-cols-2">
            {commandSlides.map((s) => (
              <img key={s.src} src={s.src} alt={s.alt} className="w-full rounded-2xl border border-black/10 dark:border-white/10" />
            ))}
          </div>
        </div>

        <div className="mb-14 rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
          <h3 className="mb-1 text-lg font-extrabold text-brand-black dark:text-white">أوامر إضافية</h3>
          <p className="mb-4 text-xs font-bold text-brand-red">إضافة من {extraCommands.by}</p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {extraCommands.items.map((c) => (
              <li key={c.command} className="rounded-xl bg-brand-grey-light px-4 py-3 dark:bg-white/5">
                <code dir="ltr" className="block text-left text-sm font-bold text-brand-red">{c.command}</code>
                <span className="text-sm text-brand-grey-text dark:text-white/70">{c.description}</span>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="mb-4 text-lg font-extrabold text-brand-black dark:text-white">نتائج المشاركين</h3>
        {allResults.length === 0 ? (
          <div className="mx-auto max-w-lg rounded-2xl border border-dashed border-brand-red/40 bg-white p-10 text-center text-sm text-brand-grey-text dark:bg-white/[0.03] dark:text-white/60">
            سيتم إضافة نتائج المشاركين هنا قريبًا.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {allResults.map((r, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/10 dark:bg-white/[0.04]">
                {r.image && <img src={r.image} alt={r.title} className="w-full" />}
                {r.video && (
                  <video src={r.video.src} poster={r.video.poster} controls preload="metadata" playsInline className="w-full bg-black" />
                )}
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
                  {r.file && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a href={r.file.viewUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-brand-red px-4 py-1.5 text-xs font-bold text-white hover:bg-brand-red-dark">فتح العرض</a>
                      <a href={r.file.downloadUrl} download={r.file.fileName} className="rounded-full border-2 border-brand-red px-4 py-1.5 text-xs font-bold text-brand-red hover:bg-brand-red hover:text-white">تحميل</a>
                    </div>
                  )}
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
