/**
 * =========================================================
 * التوثيق والنتائج
 * =========================================================
 * هذا الملف فارغ ومُجهّز للتعبئة بعد انتهاء الورشة.
 * لا تضع أرقامًا أو روابط وهمية — استبدل القيم الفارغة بعد اليوم فقط.
 * =========================================================
 */

export interface MediaLink {
  label: string;
  url: string;
}

/** روابط الصور والفيديوهات (Google Drive / YouTube / Facebook) — أضفها بعد الورشة */
export const mediaLinks: MediaLink[] = [
  // مثال بعد التعبئة:
  // { label: "ألبوم صور الورشة", url: "https://drive.google.com/..." },
];

/** أقسام التوثيق المرئي التي سيتم تحديثها */
export const documentationSections = [
  "صور الورشة",
  "الصورة الجماعية",
  "صور الأنشطة",
  "صور الـFeedback",
  "فيديو الإعلان",
  "كشف أو ملخص الحضور",
  "أبرز تعليقات المشاركين",
];

/**
 * "ماذا خرجنا به؟" — أرقام ونتائج الورشة
 * القيمة الافتراضية "سيتم التحديث بعد الورشة." ولا يجب استبدالها بأرقام وهمية
 */
export const PENDING = "سيتم التحديث بعد مراجعة بيانات الورشة.";
export const MEDIA_PENDING = "سيتم إضافة المادة قريبًا.";

export const outcomes = [
  { label: "عدد الحاضرين", value: PENDING },
  { label: "عدد الأدوات التي تم شرحها", value: PENDING },
  { label: "عدد الأنشطة المنفذة", value: PENDING },
  { label: "أكثر أداة نالت اهتمام المشاركين", value: PENDING },
  { label: "أهم التطبيقات التي نفذها المشاركون", value: PENDING },
  { label: "متوسط تقييم الورشة", value: PENDING },
  { label: "أبرز تعليقات الحضور", value: PENDING },
];

/** رابط فيديو المفاجأة/التشويق أو التوثيق — أضفه بعد جاهزيته
 *  لو الفيديو ملف محلي في public/assets حط مساره هنا (زي المثال)
 *  ولو رابط يوتيوب/درايف Embed حطه بدل كده وهيتفتح في iframe تلقائيًا
 */
export const teaserVideo = {
  url: "/assets/teaser-video.mp4",
  poster: "/assets/teaser-poster.jpg",
  isReady: true,
};

/** ريلز الورشة — أضف فيديو جديد بنفس الشكل. poster صورة الغلاف (اختيارية) */
export interface ReelItem {
  title: string;
  by: string;
  src: string;
  poster?: string;
  /** portrait = بالطول، landscape = بالعرض */
  orientation: "portrait" | "landscape";
}

export const reels: ReelItem[] = [
  {
    orientation: "portrait",
    title: "ريلز كواليس وتنظيم الورشة",
    by: "تنفيذ هايدي",
    src: "/media/reel-haidy.mp4",
    poster: "/media/reel-haidy-poster.jpg",
  },
];

/** ترندات وطرائف الورشة (تيك توك) — من تنفيذ الفريق والمشاركين */
export const trends: ReelItem[] = [
  {
    title: "ترند الاستيكر في ورشة الـAI",
    by: "من تنفيذ الفريق والمشاركين",
    src: "/media/trend-sticker.mp4",
    poster: "/media/trend-sticker-poster.jpg",
    orientation: "portrait",
  },
  {
    title: "فيديو ترند من ورشة الـAI",
    by: "من تنفيذ الفريق والمشاركين",
    src: "/media/trend-video.mp4",
    poster: "/media/trend-video-poster.jpg",
    orientation: "landscape",
  },
];
