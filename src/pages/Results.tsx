import { outcomes, PENDING } from "../data/documentation";
import SectionHeading from "../components/SectionHeading";

export default function Results() {
  return (
    <div className="bg-white px-4 py-16 sm:px-6 sm:py-20 dark:bg-brand-black">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="ماذا خرجنا به؟" subtitle="أرقام ونتائج الورشة بعد مراجعة بياناتها." />
        <div className="grid gap-3 sm:grid-cols-2">
          {outcomes.map((o) => (
            <div key={o.label} className="rounded-xl border border-black/10 bg-brand-grey-light p-5 dark:border-white/10 dark:bg-white/[0.04]">
              <p className="mb-1 text-sm font-bold text-brand-black dark:text-white">{o.label}</p>
              <p className={`text-sm ${o.value === PENDING ? "italic text-brand-grey-text dark:text-white/40" : "font-bold text-brand-red"}`}>{o.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
