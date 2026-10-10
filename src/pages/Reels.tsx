import { reels, trends } from "../data/documentation";
import SectionHeading from "../components/SectionHeading";
import VideoGroup from "../components/VideoGroup";

export default function Reels() {
  return (
    <div className="bg-brand-grey-light px-4 py-16 sm:px-6 sm:py-20 dark:bg-brand-black">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="الريلز" subtitle="ريلز الكواليس وترندات وطرائف الورشة من تنفيذ الفريق والمشاركين." />
        <VideoGroup title="ريلز الورشة" items={reels} />
        <VideoGroup title="ترندات وطرائف الورشة" items={trends} />
      </div>
    </div>
  );
}
