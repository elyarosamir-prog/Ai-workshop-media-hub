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
              <div>
                <p className="font-extrabold text-brand-black dark:text-white">{member.name}</p>
                {member.note && (
                  <p className="mt-1 text-xs leading-relaxed text-brand-grey-text dark:text-white/50">{member.note}</p>
                )}
              </div>
              <span className="shrink-0 rounded-full bg-brand-red/10 px-3 py-1.5 text-xs font-bold text-brand-red">
                {member.role}
              </span>
            </div>
          ))}
        </div>

        {/* مكان مخصص لصور الفريق ولقطات التنفيذ — سيُضاف لاحقًا */}
        <div className="mt-14">
          <h3 className="mb-4 text-lg font-extrabold text-brand-black dark:text-white">صور الفريق ولقطات التنفيذ</h3>
          {teamGalleryPlaceholders.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-black/15 bg-brand-grey-light p-10 text-center dark:border-white/15 dark:bg-white/[0.03]">
              <p className="text-sm text-brand-grey-text dark:text-white/50">
                سيتم إضافة صور الفريق ولقطات التنفيذ هنا بعد الورشة.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {teamGalleryPlaceholders.map((src) => (
                <img key={src} src={src} alt="لقطة من فريق التنفيذ" className="aspect-square w-full rounded-xl object-cover" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
