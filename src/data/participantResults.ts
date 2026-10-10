/**
 * نتائج التطبيق العملي (شغل المشاركين).
 * أضف عنصر لكل نتيجة. اتركه فاضي لحد ما تيجي النتايج.
 * image: مسار صورة داخل public/assets/results/  (اختياري)
 * link: رابط النتيجة لو موجود (اختياري)
 * name: اسم صاحب النتيجة (حطه بس لو وافق، ومن الحاضرين)
 */
export interface ParticipantResult {
  title: string;
  tool: string;
  description: string;
  name?: string;
  image?: string;
  /** لو النتيجة مراحل (قبل ← بعد): صور بعناوين */
  images?: { src: string; label: string }[];
  /** الأمر/البرومبت المستخدم (اختياري) */
  prompt?: string;
  link?: string;
}

export const participantResults: ParticipantResult[] = [
  {
    title: "من صورة علبة بيبسي إلى بكسل آرت وبوستر",
    tool: "ChatGPT",
    description: "صورة حقيقية لعلبة بيبسي دايت اتحولت بأوامر الصور: أولًا بكسل آرت، وبعدها بوستر إعلاني.",
    prompt: "/pixelart ثم /poster",
    name: "اليارو سمير",
    images: [
      { src: "/assets/results/pepsi-1-original.jpg", label: "الصورة الأصلية" },
      { src: "/assets/results/pepsi-2-pixelart.jpg", label: "بكسل آرت" },
      { src: "/assets/results/pepsi-3-poster.jpg", label: "بوستر" },
    ],
  },
  {
    title: "تصميم هندسي توضيحي لعلبة بيبسي",
    tool: "ChatGPT",
    description: "نفس العلبة اتعرضت كتصميم هندسي: رسم تخطيطي وتفكيك للمكونات وعرض للمنتج.",
    name: "اليارو سمير",
    images: [{ src: "/assets/results/pepsi-4-blueprint.jpg", label: "النتيجة" }],
  },
  {
    title: "ريموت سامسونج في بوستر مينيمال",
    tool: "ChatGPT",
    description: "صورة ريموت تلفزيون بالموبايل اتحولت لبوستر بسيط وأنيق بعناصر قليلة.",
    prompt: "/Minimalposter",
    name: "اليارو سمير",
    images: [
      { src: "/assets/results/samsung-1-original.jpg", label: "الصورة الأصلية" },
      { src: "/assets/results/samsung-2-minimal.jpg", label: "بوستر مينيمال" },
    ],
  },
  {
    title: "علبة بيبسي من زوايا مختلفة",
    tool: "فقرة الـPrompting",
    description: "عرض علبة بيبسي دايت من أكتر من زاوية في صورة واحدة.",
    name: "رنا نصر",
    images: [{ src: "/assets/results/rana-1-pepsi-angles.jpg", label: "النتيجة" }],
  },
  {
    title: "بوستر إعلاني لمنتج عناية",
    tool: "فقرة الـPrompting",
    description: "بوستر إعلاني متكامل لمنتج Tender Body Makhmarya: يد تمسك المنتج على خلفية زهور وعطر.",
    name: "رنا نصر",
    images: [{ src: "/assets/results/rana-2-tender-poster.jpg", label: "النتيجة" }],
  },
  {
    title: "كاميرا Canon متفككة لمكوناتها",
    tool: "فقرة الـPrompting",
    description: "صورة كاميرا اتعرضت وهي متفككة، وكل جزء مكتوب اسمه (العدسة، المستشعر، البطارية، اللوحة الرئيسية...).",
    name: "أحمد عاطف",
    images: [{ src: "/assets/results/ahmed-1-camera-exploded.jpg", label: "النتيجة" }],
  },
  {
    title: "بوستر إعلاني لباور بانك Joyroom",
    tool: "ChatGPT",
    description: "صورة باور بانك في اليد اتحولت لبوستر إعلاني احترافي بمميزات المنتج.",
    prompt: "/poster",
    name: "جورج متى",
    images: [
      { src: "/assets/results/george-1-original.jpg", label: "الصورة الأصلية" },
      { src: "/assets/results/george-2-poster.jpg", label: "بوستر" },
    ],
  },
  {
    title: "بوستر بيبسي دايت على الشاطئ",
    tool: "فقرة الـPrompting",
    description: "علبة بيبسي دايت في مشهد صيفي على البحر مع ثلج وشعارات المميزات.",
    name: "هايدي عهدي",
    images: [{ src: "/assets/results/haidy-1-pepsi-beach.jpg", label: "النتيجة" }],
  },
  {
    title: "بوستر إعلاني لشاحن سريع",
    tool: "فقرة الـPrompting",
    description: "بوستر لشاحن 25 واط بتصميم أحمر وأبيض ومميزات المنتج بالعربي والإنجليزي.",
    name: "هايدي عهدي",
    images: [{ src: "/assets/results/haidy-2-charger.jpg", label: "النتيجة" }],
  },
];
