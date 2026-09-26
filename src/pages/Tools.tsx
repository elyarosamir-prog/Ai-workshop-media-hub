import { useMemo, useState } from "react";
import { tools, additionalTools, PLACEHOLDER_LINK, type Tool } from "../data/tools";
import SectionHeading from "../components/SectionHeading";

function ToolCard({ tool }: { tool: Tool }) {
  const hasRealLink = tool.link && tool.link !== PLACEHOLDER_LINK;
  return (
    <div className="flex flex-col rounded-2xl border-s-4 border-brand-red bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:bg-white/[0.04]">
      <span className="mb-3 w-fit rounded-full bg-brand-red/10 px-3 py-1 text-[11px] font-bold text-brand-red">
        {tool.category}
      </span>
      <h3 className="mb-2 text-lg font-extrabold text-brand-black dark:text-white">{tool.name}</h3>
      <p className="mb-3 text-sm leading-relaxed text-brand-grey-text dark:text-white/60">{tool.whatItDoes}</p>
      <p className="mb-3 text-sm leading-relaxed text-brand-black/70 dark:text-white/50">
        <span className="font-semibold text-brand-black dark:text-white">تفيد لجان النادي: </span>
        {tool.howItHelpsCommittees}
      </p>
      <p className="mb-4 text-sm leading-relaxed text-brand-black/70 dark:text-white/50">
        <span className="font-semibold text-brand-red">مثال عملي: </span>
        {tool.example}
      </p>

      <div className="mt-auto pt-2">
        {tool.link === "" ? null : hasRealLink ? (
          <a
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-red px-4 py-2 text-sm font-bold text-white transition hover:bg-brand-red-dark"
          >
            افتح الأداة
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M8 7h9v9" />
            </svg>
          </a>
        ) : (
          <span className="inline-block rounded-full border border-dashed border-black/20 px-4 py-2 text-xs font-medium text-brand-grey-text dark:border-white/20 dark:text-white/50">
            {PLACEHOLDER_LINK}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Tools() {
  const [query, setQuery] = useState("");
  const all = [...tools, ...additionalTools];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return all;
    return all.filter(
      (t) => t.name.toLowerCase().includes(q) || t.category.toLowerCase().includes(q)
    );
  }, [query]);

  const coreFiltered = filtered.filter((t) => t.isCore);
  const extraFiltered = filtered.filter((t) => !t.isCore);

  return (
    <div className="bg-brand-grey-light px-4 py-16 sm:px-6 sm:py-20 dark:bg-brand-black">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="أدوات الورشة" subtitle="الأدوات التي نتعرف عليها ونجربها خلال يوم الورشة." />

        <div className="mx-auto mb-10 max-w-md">
          <div className="relative">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 text-brand-grey-text dark:text-white/40"
            >
              <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث عن أداة أو تصنيف..."
              className="w-full rounded-full border border-black/10 bg-white px-5 py-3 pe-11 text-sm outline-none transition focus:border-brand-red dark:border-white/15 dark:bg-white/5 dark:text-white"
            />
          </div>
        </div>

        {coreFiltered.length > 0 && (
          <div className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreFiltered.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        )}

        {extraFiltered.length > 0 && (
          <>
            <h3 className="mb-5 text-lg font-extrabold text-brand-black dark:text-white">أدوات إضافية للاستكشاف لاحقًا</h3>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {extraFiltered.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </div>
          </>
        )}

        {filtered.length === 0 && (
          <p className="py-12 text-center text-sm text-brand-grey-text dark:text-white/50">
            لا توجد أدوات مطابقة لبحثك.
          </p>
        )}
      </div>
    </div>
  );
}
