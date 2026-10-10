import { useState } from "react";
import { feedback, feedbackWall } from "../data/feedback";
import SectionHeading from "../components/SectionHeading";

export default function Feedback() {
  const [zoom, setZoom] = useState(false);
  return (
    <div className="bg-white px-4 py-16 sm:px-6 sm:py-20 dark:bg-brand-black">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="الفيدباك" subtitle="كلمات الحضور والمدربين بعد الورشة." />

        <figure className="mb-14">
          <button onClick={() => setZoom(true)} className="block w-full cursor-zoom-in" aria-label="تكبير حائط الفيدباك">
            <img src={feedbackWall.src} alt="حائط الفيدباك بعد الورشة" className="w-full rounded-2xl border border-black/10 shadow-lg dark:border-white/10" />
          </button>
          <figcaption className="mt-2 text-center text-xs text-brand-grey-text dark:text-white/50">{feedbackWall.caption} (اضغط على الصورة للتكبير)</figcaption>
        </figure>
        {zoom && (
          <div className="fixed inset-0 z-[100] overflow-auto bg-black/90 p-3" onClick={() => setZoom(false)}>
            <img src={feedbackWall.src} alt="حائط الفيدباك بحجم كبير" className="mx-auto h-auto min-w-[900px] max-w-none rounded-xl sm:min-w-0 sm:w-full sm:max-w-6xl" />
            <p className="mt-3 text-center text-xs text-white/60">اضغط في أي مكان للإغلاق</p>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          {feedback.map((f, i) => (
            <blockquote key={i} className="rounded-2xl border-s-4 border-brand-red bg-brand-grey-light p-5 dark:bg-white/[0.04]">
              <p className="mb-3 text-sm leading-relaxed text-brand-black dark:text-white/90">{f.text}</p>
              <footer className="text-xs font-bold text-brand-red">
                {f.name}
                {f.role && <span className="font-medium text-brand-grey-text dark:text-white/50"> — {f.role}</span>}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </div>
  );
}
