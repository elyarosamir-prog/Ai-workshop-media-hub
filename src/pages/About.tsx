import { site, aboutCards } from "../data/site";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <div className="bg-white px-4 py-16 sm:px-6 sm:py-20 dark:bg-brand-black">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="عن الورشة" subtitle={site.aboutText} />
        <div className="grid gap-5 sm:grid-cols-3">
          {aboutCards.map((c) => (
            <div key={c.title} className="rounded-2xl border-s-4 border-brand-red bg-brand-grey-light p-6 dark:bg-white/[0.04]">
              <h3 className="mb-2 font-extrabold text-brand-black dark:text-white">{c.title}</h3>
              <p className="text-sm leading-relaxed text-brand-grey-text dark:text-white/60">{c.text}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-brand-grey-text dark:text-white/60">
          <span className="font-bold text-brand-black dark:text-white">هدف الورشة: </span>{site.goal}
        </p>
      </div>
    </div>
  );
}
