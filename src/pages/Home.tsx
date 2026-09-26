import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { site, aboutCards, assets } from "../data/site";
import { applications } from "../data/applications";
import { faq } from "../data/faq";
import { teaserVideo } from "../data/documentation";
import TechBackground from "../components/TechBackground";
import SectionHeading from "../components/SectionHeading";
import Accordion from "../components/Accordion";

const badges = [
  { label: site.workshopDate, icon: "calendar" },
  { label: site.workshopTime, icon: "clock" },
  { label: site.workshopLocation, icon: "pin" },
  { label: `تنظيم ${site.organizer}`, icon: "spark" },
  { label: site.audience, icon: "users" },
];

const icons: Record<string, ReactNode> = {
  calendar: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  clock: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
    </svg>
  ),
  pin: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  spark: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z" />
    </svg>
  ),
  users: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="8" r="3" /><path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6M16 8a3 3 0 1 1 0-.001M22 20c0-2.7-2.2-4.9-5-5.6" />
    </svg>
  ),
};

export default function Home() {
  return (
    <div>
      {/* ===================== Hero ===================== */}
      <section className="relative overflow-hidden bg-white dark:bg-brand-black">
        <TechBackground />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <img src={assets.logoMediaHub} alt="شعار Media Hub" className="h-11 w-11 rounded-full object-cover" />
              <img src={assets.logoAnaMasry} alt="شعار جمعية أنا مصري" className="h-11 w-11 rounded-full object-cover" />
              <span className="text-xs font-bold text-brand-red">{site.organizer}</span>
            </div>

            <h1 className="text-4xl font-black leading-tight text-brand-black sm:text-5xl lg:text-6xl dark:text-white">
              {site.workshopName}
            </h1>
            <p className="mt-3 text-xl font-bold text-brand-red sm:text-2xl">{site.tagline}</p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-grey-text sm:text-lg dark:text-white/70">
              {site.heroText}
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {badges.map((b) => (
                <span
                  key={b.label}
                  className="flex items-center gap-1.5 rounded-full border border-brand-red/30 bg-brand-red/5 px-3.5 py-1.5 text-xs font-semibold text-brand-black dark:border-brand-red/40 dark:bg-brand-red/10 dark:text-white"
                >
                  <span className="text-brand-red">{icons[b.icon]}</span>
                  {b.label}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/tools"
                className="rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-red/25 transition hover:bg-brand-red-dark"
              >
                استكشف أدوات الورشة
              </Link>
              <Link
                to="/agenda"
                className="rounded-full border-2 border-brand-black px-6 py-3 text-sm font-bold text-brand-black transition hover:border-brand-red hover:text-brand-red dark:border-white dark:text-white"
              >
                شاهد الأجندة
              </Link>
              <Link
                to="/#about"
                className="rounded-full px-6 py-3 text-sm font-bold text-brand-grey-text transition hover:text-brand-red dark:text-white/70"
              >
                اعرف عن الورشة ←
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand-red/10 blur-2xl" />
            <img
              src={assets.posterWorkshop}
              alt="تصميم إعلان ورشة الذكاء الاصطناعي"
              className="w-full rounded-2xl border border-black/10 shadow-2xl dark:border-white/10"
            />
          </div>
        </div>

        <div className="border-t border-brand-red/20 bg-brand-black">
          <p className="mx-auto max-w-7xl px-4 py-3 text-center text-xs font-medium text-white/80 sm:text-sm">
            {site.updateBannerText}
          </p>
        </div>
      </section>

      {/* ===================== عن الورشة ===================== */}
      <section id="about" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 dark:bg-brand-black">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="عن الورشة" subtitle={site.aboutText} />
          <div className="grid gap-5 sm:grid-cols-3">
            {aboutCards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border-s-4 border-brand-red bg-brand-grey-light p-6 transition hover:-translate-y-1 dark:bg-white/[0.04]"
              >
                <h3 className="mb-2 font-extrabold text-brand-black dark:text-white">{c.title}</h3>
                <p className="text-sm leading-relaxed text-brand-grey-text dark:text-white/60">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== التطبيقات العملية ===================== */}
      <section id="applications" className="scroll-mt-24 bg-brand-grey-light px-4 py-16 sm:px-6 sm:py-20 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="من الورشة إلى شغل اللجان"
            subtitle="أمثلة عملية على استخدام أدوات الذكاء الاصطناعي داخل لجان نادي التطوع."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((app) => (
              <div
                key={app.task}
                className="rounded-xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <h3 className="mb-1.5 text-sm font-extrabold text-brand-black dark:text-white">{app.task}</h3>
                <p className="mb-2 text-xs leading-relaxed text-brand-grey-text dark:text-white/60">{app.howAiHelps}</p>
                <p className="mb-3 text-xs leading-relaxed text-brand-black/70 dark:text-white/50">
                  <span className="font-semibold text-brand-red">مثال: </span>
                  {app.example}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {app.suitableTools.map((t) => (
                    <span key={t} className="rounded-full bg-brand-red/10 px-2.5 py-1 text-[11px] font-semibold text-brand-red">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== قسم التشويق والفيديو ===================== */}
      <section id="teaser" className="scroll-mt-24 bg-brand-black px-4 py-16 text-center sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">مفاجأة Media Hub</h2>
          {teaserVideo.isReady && teaserVideo.url ? (
            <div className="mt-8 aspect-video overflow-hidden rounded-2xl border border-white/10">
              <iframe src={teaserVideo.url} title="فيديو الورشة" className="h-full w-full" allowFullScreen />
            </div>
          ) : (
            <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-brand-red/40 bg-white/5 px-6 py-14">
              <span className="text-3xl">🤖</span>
              <p className="text-lg font-bold text-white">مفاجأة Media Hub قيد التجهيز… ترقبوها قريبًا 🤖</p>
              <p className="text-sm text-white/50">سيتم تحديث هذا القسم بالفيديو التشويقي أو فيديو توثيق الورشة عند جاهزيته.</p>
            </div>
          )}
        </div>
      </section>

      {/* ===================== الأسئلة الشائعة ===================== */}
      <section id="faq" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 dark:bg-brand-black">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="أسئلة شائعة" />
          <Accordion items={faq} />
        </div>
      </section>
    </div>
  );
}
