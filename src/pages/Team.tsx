import { team, teamIntro, teamGalleryPlaceholders } from "../data/team";
import SectionHeading from "../components/SectionHeading";

export default function Team() {
  return (
    <div className="bg-white px-4 py-16 sm:px-6 sm:py-20 dark:bg-brand-black">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="فريق تنفيذ الورشة" subtitle={teamIntro} />

        <div className="grid gap-3 sm:grid-cols-2">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex items-center justify-between gap-3 rounded-xl border border-black/10 bg-brand-grey-light px-5 py-4 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <div className="flex items-center gap-3">
                {member.photo && <img src={member.photo} alt={member.name} className="h-11 w-11 rounded-full object-cover" />}
                <div>
                <p className="font-extrabold text-brand-black dark:text-white">{member.name}</p>
                {member.note && (
                  <p className="mt-1 text-xs leading-relaxed text-brand-grey-text dark:text-white/50">{member.note}</p>
                )}
                </div>
              </div>
              <span className="shrink-0 rounded-full bg-brand-red/10 px-3 py-1.5 text-xs font-bold text-brand-red">
                {member.role}
              </span>
            </div>
          ))}
        </div>

        {/* صور الفريق ولقطات التنفيذ — أضف المسارات في src/data/team.ts */}
        <div className="mt-14 rounded-3xl border-2 border-brand-red/40 bg-brand-red/5 p-6 sm:p-8 dark:bg-brand-red/10">
          <h3 className="mb-1 text-center text-xl font-black text-brand-black sm:text-2xl dark:text-white">صور الفريق ولقطات التنفيذ</h3>
          <p className="mb-6 text-center text-sm text-brand-grey-text dark:text-white/60">لحظات من التجهيز والتنفيذ.</p>
          {teamGalleryPlaceholders.length === 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex aspect-square items-center justify-center rounded-2xl border-2 border-dashed border-brand-red/40 bg-white p-2 text-center text-xs font-semibold text-brand-red dark:bg-white/5">
                  سيتم إضافة المادة قريبًا.
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {teamGalleryPlaceholders.map((src) => (
                <img key={src} src={src} alt="لقطة من فريق التنفيذ" className="aspect-square w-full rounded-2xl object-cover" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
