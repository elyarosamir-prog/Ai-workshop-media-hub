import { faq } from "../data/faq";
import SectionHeading from "../components/SectionHeading";
import Accordion from "../components/Accordion";

export default function Faq() {
  return (
    <div className="bg-white px-4 py-16 sm:px-6 sm:py-20 dark:bg-brand-black">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="أسئلة شائعة" />
        <Accordion items={faq} />
      </div>
    </div>
  );
}
