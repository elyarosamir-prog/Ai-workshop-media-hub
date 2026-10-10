import { teaserVideo } from "../data/documentation";

export default function Teaser() {
  return (
    <div className="bg-brand-black px-4 py-16 text-center sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">مفاجأة Media Hub</h2>
        <p className="mt-2 text-sm text-white/60">فيديو من تجهيزات وتغطية ورشة الذكاء الاصطناعي.</p>
        {teaserVideo.isReady && teaserVideo.url ? (
          teaserVideo.url.startsWith("http") ? (
            <div className="mt-8 aspect-video overflow-hidden rounded-2xl border border-white/10">
              <iframe src={teaserVideo.url} title="فيديو الورشة" className="h-full w-full" allowFullScreen />
            </div>
          ) : (
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
              <video src={teaserVideo.url} poster={teaserVideo.poster} controls preload="metadata" playsInline className="w-full">
                <a href={teaserVideo.url}>افتح الفيديو</a>
              </video>
            </div>
          )
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-brand-red/40 bg-white/5 px-6 py-14 text-white/70">
            سيتم إضافة الفيديو قريبًا.
          </div>
        )}
      </div>
    </div>
  );
}
