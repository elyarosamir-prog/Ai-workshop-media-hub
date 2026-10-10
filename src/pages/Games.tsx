import { games, GAME_PENDING } from "../data/games";

export default function Games() {
  return (
    <div className="bg-brand-black px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">الألعاب</h2>
          <span className="mx-auto mt-3 block h-1 w-14 rounded-full bg-brand-red" />
          <p className="mt-4 text-white/60">تجارب تفاعلية من أنشطة الورشة.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {games.map((g) => (
            <div key={g.title} className="rounded-2xl border border-brand-red/40 bg-white/5 p-6">
              <h3 className="mb-1 text-lg font-extrabold text-white">{g.title}</h3>
              <p className="mb-2 text-xs font-bold text-brand-red">تصميم: {g.by}</p>
              <p className="mb-5 text-sm text-white/60">{g.description}</p>
              {g.url && g.embed ? (
                <div className="space-y-3">
                  <iframe src={g.url} title={g.title} className="h-[560px] w-full rounded-xl border border-white/10 bg-black" allow="fullscreen" />
                  <a href={g.url} target="_blank" rel="noopener noreferrer" className="inline-block text-xs font-bold text-brand-red">افتح في صفحة كاملة ←</a>
                </div>
              ) : g.url ? (
                <a href={g.url} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-brand-red px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-red-dark">جرّب اللعبة</a>
              ) : (
                <span className="inline-block rounded-full border border-dashed border-white/30 px-5 py-2 text-xs text-white/60">{GAME_PENDING}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
