import { useState } from "react";
import { agenda } from "../data/agenda";
import { assets } from "../data/site";
import SectionHeading from "../components/SectionHeading";

export default function Agenda() {
  const [zoom, setZoom] = useState(false);
  return (
    <div className="bg-white px-4 py-16 sm:px-6 sm:py-20 dark:bg-brand-black">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="أجندة الورشة" subtitle="بدأت الأجندة الساعة 11:00 صباحًا وانتهت 2:00 ظهرًا." />

        <div className="mx-auto mb-12 max-w-md rounded-2xl border border-black/10 bg-brand-grey-light p-3 dark:border-white/10 dark:bg-white/[0.04]">
          <button onClick={() => setZoom(true)} className="block w-full" aria-label="تكبير تصميم الأجندة">
            <img src={assets.agendaDesign} alt="تصميم أجندة ورشة الذكاء الاصطناعي" className="h-auto w-full rounded-xl" />
          </button>
          <p className="mt-2 text-center text-xs text-brand-grey-text dark:text-white/50">اضغط على التصميم لتكبيره</p>
        </div>
        {zoom && (
          <div className="fixed inset-0 z-[100] overflow-auto bg-black/85 p-4" onClick={() => setZoom(false)}>
            <img src={assets.agendaDesign} alt="تصميم الأجندة بحجم كبير" className="mx-auto h-auto w-full max-w-2xl rounded-xl" />
          </div>
        )}

        <ol className="relative border-e-2 border-brand-red/25 ps-6">
          {agenda.map((item, i) => (
            <li key={i} className="relative pb-9 last:pb-0">
              <span className="absolute -end-[2.05rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-brand-red bg-white dark:bg-brand-black" />
              <div className="rounded-2xl border border-black/10 bg-brand-grey-light p-5 transition hover:border-brand-red/40 dark:border-white/10 dark:bg-white/[0.04]">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span dir="ltr" className="rounded-full bg-brand-red px-3 py-1 text-xs font-bold text-white" style={{ unicodeBidi: "isolate" }}>{item.time}</span>
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
