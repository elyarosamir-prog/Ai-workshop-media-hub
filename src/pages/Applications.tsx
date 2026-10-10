import { applications } from "../data/applications";
import SectionHeading from "../components/SectionHeading";

export default function Applications() {
  return (
    <div className="bg-brand-grey-light px-4 py-16 sm:px-6 sm:py-20 dark:bg-brand-black">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="من الورشة إلى شغل اللجان" subtitle="أمثلة عملية على استخدام أدوات الذكاء الاصطناعي داخل لجان نادي التطوع." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((app) => (
            <div key={app.task} className="rounded-xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
              <h3 className="mb-1.5 text-sm font-extrabold text-brand-black dark:text-white">{app.task}</h3>
              <p className="mb-2 text-xs leading-relaxed text-brand-grey-text dark:text-white/60">{app.howAiHelps}</p>
              <p className="mb-3 text-xs leading-relaxed text-brand-black/70 dark:text-white/50"><span className="font-semibold text-brand-red">مثال: </span>{app.example}</p>
              <div className="flex flex-wrap gap-1.5">
                {app.suitableTools.map((t) => (
                  <span key={t} className="rounded-full bg-brand-red/10 px-2.5 py-1 text-[11px] font-semibold text-brand-red">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
