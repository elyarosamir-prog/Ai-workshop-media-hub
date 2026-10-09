/**
 * =========================================================
 * مواد الورشة (العروض)
 * =========================================================
 * viewUrl: رابط "فتح المادة" (يفتح في تبويب جديد)
 * downloadUrl: رابط "تحميل"
 * اتركهم "" لو الملف لسه ماتضافش، وهيظهر النص المؤقت.
 *
 * لإضافة ملف: حطه في public/materials/ وكتب مساره هنا،
 * مثال: "/materials/notion.pdf"
 */
export interface Material {
  title: string;
  presenter: string;
  description: string;
  viewUrl: string;
  downloadUrl: string;
  /** اسم الملف عند التحميل */
  fileName?: string;
}

export const MATERIAL_PENDING = "سيتم إضافة مادة الفقرة قريبًا.";

export const materials: Material[] = [
  {
    title: "عرض Notion",
    presenter: "عزيزة",
    description: "تنظيم الخطط والمهام والمعلومات باستخدام Notion.",
    viewUrl: "",
    downloadUrl: "",
  },
  {
    title: "عرض Claude",
    presenter: "إسراء",
    description: "التعرف على Claude واستخداماته في الكتابة والتحليل وتنظيم الأفكار.",
    viewUrl: "/materials/claude-esraa.pdf",
    downloadUrl: "/materials/claude-esraa.pdf",
    fileName: "Claude-Esraa.pdf",
  },
  {
    title: "عرض Prompting وتشكيلة أدوات AI",
    presenter: "رحمة",
    description: "كتابة البرومبت والتعامل مع أدوات الذكاء الاصطناعي بطريقة أفضل.",
    viewUrl: "/materials/prompting-rahma.pdf",
    downloadUrl: "/materials/prompting-rahma.pdf",
    fileName: "Prompting-Rahma.pdf",
  },
  {
    title: "عرض Manus",
    presenter: "أحمد",
    description: "استخدام Manus في بناء المواقع وتحويل الأفكار إلى تجربة عملية.",
    viewUrl: "",
    downloadUrl: "",
  },
  {
    title: "عرض NotebookLM",
    presenter: "حمدي",
    description: "التعامل مع الملفات والمصادر وتلخيص المعلومات.",
    viewUrl: "",
    downloadUrl: "",
  },
];

/** لعبة أحمد التفاعلية — لما تجهز، ضيفها كصفحة داخل الموقع أو حط رابطها هنا */
export const game = {
  title: "تجربة تفاعلية من تصميم أحمد",
  description: "لعبة تفاعلية صممها أحمد ضمن أنشطة ورشة الذكاء الاصطناعي.",
  url: "", // مثال: "/game/index.html"
  pending: "[سيتم إضافة رابط اللعبة هنا]",
};
