/**
 * فريق تنفيذ الورشة — عدّل الأسماء والأدوار من هنا.
 * photo: مسار صورة العضو (اختياري). مثال: "/assets/team/aziza.jpg"
 *        اتركه فارغًا لو مفيش صورة، ولن تظهر صور وهمية.
 */
export interface TeamMember {
  name: string;
  role: string;
  note?: string;
  photo?: string;
}

export const teamIntro =
  "هذا الموقع وهذه الورشة نتيجة تعاون أعضاء Media Hub، من التخطيط والتصميم والمحتوى إلى التنظيم والتنفيذ والتغطية.";

export const team: TeamMember[] = [
  { name: "عزيزة", role: "تقديم Notion" },
  { name: "إسراء", role: "تقديم Claude" },
  { name: "حمدي", role: "تقديم NotebookLM" },
  { name: "أحمد", role: "تقديم Manus وتصميم لعبة تفاعلية للورشة" },
  { name: "رحمة", role: "تقديم فقرة الـPrompt وتشكيلة أدوات الذكاء الاصطناعي" },
  { name: "هايدي", role: "تقديم Google Flow وتنفيذ فيديو الريلز", note: "قدّمت فقرة Google Flow شرحًا مباشرًا دون عرض تقديمي." },
  { name: "مريم", role: "الكشوفات وتسجيل الحضور" },
  { name: "زياد", role: "التصوير والصورة الجماعية وجمع الـFeedback" },
  { name: "اليارو", role: "اللابتوب والعرض" },
  { name: "آية سيد", role: "المتابعة والتنسيق" },
  {
    name: "جوي",
    role: "اللايف والتغطية عن بُعد",
    note: "شاركت في التغطية عن بُعد، ولم تكن موجودة في مكان الورشة.",
  },
];

export const teamGalleryPlaceholders: string[] = [];
