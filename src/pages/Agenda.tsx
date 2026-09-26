import { agenda } from "../data/agenda";
import SectionHeading from "../components/SectionHeading";

export default function Agenda() {
  return (
    <div className="bg-white px-4 py-16 sm:px-6 sm:py-20 dark:bg-brand-black">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="أجندة الورشة" subtitle="الأجندة تبدأ الساعة 11:00 صباحًا وتستمر حتى 2:00 ظهرًا." />

        <ol className="relative border-e-2 border-brand-red/25 ps-6">
          {agenda.map((item, i) => (
            <li key={i} className="relative pb-9 last:pb-0">
              <span className="absolute -end-[2.05rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-brand-red bg-white dark:bg-brand-black" />
              <div className="rounded-2xl border border-black/10 bg-brand-grey-light p-5 transition hover:border-brand-red/40 dark:border-white/10 dark:bg-white/[0.04]">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-brand-red px-3 py-1 text-xs font-bold text-white">{item.time}</span>
                  {item.responsible && (
                    <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-brand-grey-text dark:border-white/15 dark:text-white/60">
                      المسؤول: {item.responsible}
                    </span>
                  )}
                </div>
                <h3 className="mb-1.5 text-lg font-extrabold text-brand-black dark:text-white">{item.title}</h3>
                <p className="mb-1.5 text-sm leading-relaxed text-brand-grey-text dark:text-white/60">{item.description}</p>
                <p className="text-xs leading-relaxed text-brand-black/60 dark:text-white/45">
                  <span className="font-semibold text-brand-red">الهدف: </span>
                  {item.goal}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand-red hover:text-brand-red-dark"
                  >
                    فتح الأداة
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M8 7h9v9" />
                    </svg>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
