import { site, assets } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-brand-grey-light dark:border-white/10 dark:bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 text-center sm:px-6">
        <div className="flex items-center gap-6">
          <img src={assets.logoMediaHub} alt="شعار Media Hub" className="h-14 w-14 rounded-full object-cover" />
          <img src={assets.logoAnaMasry} alt="شعار جمعية أنا مصري" className="h-14 w-14 rounded-full object-cover" />
        </div>
        <p className="text-sm font-semibold text-brand-black dark:text-white">{site.organizer}</p>
        <p className="max-w-md text-sm text-brand-grey-text dark:text-white/60">{site.footerLine}</p>
        <p className="text-xs font-medium tracking-wide text-brand-red">{site.footerSub}</p>

        {/* توقيع المنفذ: الشعار على خلفية سودا عشان حروف PIX البيضا تبان */}
        <a
          href="https://pixelyaro.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex flex-col items-center gap-2 transition hover:opacity-80"
        >
          <span className="text-xs text-brand-grey-text dark:text-white/50">تصميم وتنفيذ الموقع</span>
          <span className="rounded-xl bg-brand-black px-4 py-2">
            <img src="/assets/pixelyaro.png" alt="PixElyaro" className="h-8 w-auto" />
          </span>
        </a>
      </div>
    </footer>
  );
}
