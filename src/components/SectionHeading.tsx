interface Props {
  title: string;
  subtitle?: string;
  align?: "center" | "start";
}

export default function SectionHeading({ title, subtitle, align = "center" }: Props) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center mx-auto max-w-2xl" : "text-start"}`}>
      <h2 className="text-2xl font-extrabold text-brand-black sm:text-3xl dark:text-white">
        {title}
        <span className="mt-3 block h-1 w-14 rounded-full bg-brand-red" style={align === "center" ? { marginInline: "auto" } : undefined} />
      </h2>
      {subtitle && <p className="mt-4 text-brand-grey-text dark:text-white/60">{subtitle}</p>}
    </div>
  );
}
