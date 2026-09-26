/**
 * خلفية بصرية تقنية للـHero (شبكة + خطوط بيانات + دوائر رقمية)
 * مرسومة بالكامل بـ CSS/SVG بدون أي صورة خارجية.
 */
export default function TechBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* شبكة تقنية */}
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(#E31E24 1px, transparent 1px), linear-gradient(90deg, #E31E24 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at 70% 30%, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 70% 30%, black 0%, transparent 70%)",
        }}
      />

      {/* دوائر رقمية متوهجة */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-red/10 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-brand-red/10 blur-3xl" />

      {/* خط بيانات ماسح، حركة واحدة عند تحميل الصفحة فقط */}
      <div className="tech-scan absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-brand-red/70 to-transparent" />

      <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12%" cy="18%" r="2" fill="#E31E24" />
        <circle cx="85%" cy="22%" r="3" fill="#E31E24" />
        <circle cx="70%" cy="70%" r="2" fill="#111111" className="dark:fill-white" />
        <circle cx="20%" cy="80%" r="2.5" fill="#E31E24" />
        <line x1="12%" y1="18%" x2="30%" y2="35%" stroke="#E31E24" strokeWidth="1" />
        <line x1="85%" y1="22%" x2="68%" y2="40%" stroke="#E31E24" strokeWidth="1" />
      </svg>
    </div>
  );
}
