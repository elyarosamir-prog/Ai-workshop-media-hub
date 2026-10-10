import { materials, MATERIAL_PENDING } from "../data/materials";
import SectionHeading from "../components/SectionHeading";

export default function Materials() {
  return (
    <div className="bg-brand-grey-light px-4 py-16 sm:px-6 sm:py-20 dark:bg-brand-black">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="مواد الورشة"
          subtitle="عروض الفقرات التي تم تقديمها، ليستفيد منها الحاضرون وباقي أعضاء نادي التطوع."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {materials.map((m) => {
            const ready = m.viewUrl || m.downloadUrl;
            return (
              <div key={m.title} className="flex flex-col rounded-2xl border-s-4 border-brand-red bg-white p-6 shadow-sm dark:bg-white/[0.04]">
                <h3 className="mb-1 text-lg font-extrabold text-brand-black dark:text-white">{m.title}</h3>
                <p className="mb-2 text-xs font-bold text-brand-red">تقديم: {m.presenter}</p>
                <p className="mb-4 text-sm leading-relaxed text-brand-grey-text dark:text-white/60">{m.description}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {ready ? (
                    <>
                      {m.viewUrl && (
                        <a href={m.viewUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-brand-red px-4 py-2 text-sm font-bold text-white hover:bg-brand-red-dark">
                          فتح المادة
                        </a>
                      )}
                      {m.downloadUrl && (
                        <a href={m.downloadUrl} download={m.fileName ?? true} className="rounded-full border-2 border-brand-red px-4 py-2 text-sm font-bold text-brand-red hover:bg-brand-red hover:text-white">
                          تحميل
                        </a>
                      )}
                    </>
                  ) : (
                    <span className="rounded-full border border-dashed border-black/20 px-4 py-2 text-xs text-brand-grey-text dark:border-white/20 dark:text-white/50">
                      {MATERIAL_PENDING}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
