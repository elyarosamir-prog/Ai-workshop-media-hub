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
  /** فيديو النتيجة (اختياري) */
  video?: { src: string; poster?: string };
  /** ملف (عرض تقديمي مثلًا): رابط الفتح والتحميل */
  file?: { viewUrl: string; downloadUrl: string; fileName: string };
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
    tool: "ChatGPT",
    description: "عرض علبة بيبسي دايت من أكتر من زاوية في صورة واحدة.",
    prompt: "/360view",
    name: "رنا ناصر مسعود",
    images: [{ src: "/assets/results/rana-1-pepsi-angles.jpg", label: "النتيجة" }],
  },
  {
    title: "بوستر إعلاني لمنتج عناية",
    tool: "ChatGPT",
    description: "بوستر إعلاني متكامل لمنتج Tender Body Makhmarya: يد تمسك المنتج على خلفية زهور وعطر.",
    prompt: "/Poster",
    name: "رنا ناصر مسعود",
    images: [{ src: "/assets/results/rana-2-tender-poster.jpg", label: "النتيجة" }],
  },
  {
    title: "كاميرا Canon متفككة لمكوناتها",
    tool: "ChatGPT",
    description: "صورة كاميرا اتعرضت وهي متفككة، وكل جزء مكتوب اسمه (العدسة، المستشعر، البطارية، اللوحة الرئيسية...).",
    prompt: "/Explodedview",
    name: "أحمد عاطف محمد",
    images: [{ src: "/assets/results/ahmed-1-camera-exploded.jpg", label: "النتيجة" }],
  },
  {
    title: "بوستر إعلاني لباور بانك Joyroom",
    tool: "ChatGPT",
    description: "صورة باور بانك في اليد اتحولت لبوستر إعلاني احترافي بمميزات المنتج.",
    prompt: "/poster",
    name: "جورج متى أنور",
    images: [
      { src: "/assets/results/george-1-original.jpg", label: "الصورة الأصلية" },
      { src: "/assets/results/george-2-poster.jpg", label: "بوستر" },
    ],
  },
  {
    title: "بوستر بيبسي دايت على الشاطئ",
    tool: "ChatGPT",
    description: "علبة بيبسي دايت في مشهد صيفي على البحر مع ثلج وشعارات المميزات.",
    name: "هايدي عهدي وصفي",
    images: [{ src: "/assets/results/haidy-1-pepsi-beach.jpg", label: "النتيجة" }],
  },
  {
    title: "بوستر إعلاني لشاحن سريع",
    tool: "ChatGPT",
    description: "بوستر لشاحن 25 واط بتصميم أحمر وأبيض ومميزات المنتج بالعربي والإنجليزي.",
    name: "هايدي عهدي وصفي",
    images: [{ src: "/assets/results/haidy-2-charger.jpg", label: "النتيجة" }],
  },
  {
    title: "بوستر Iceburst: وردة داخل الثلج",
    tool: "ChatGPT",
    description: "بوستر إعلاني لمشروب طاقة بوردة متجمدة وثلج متطاير في شارع مثلج.",
    prompt: "/Iceburst",
    name: "آلاء أبو العباس محمد محمود",
    images: [{ src: "/assets/results/alaa-1-iceburst.jpg", label: "النتيجة" }],
  },
  {
    title: "بوستر نظارة بأجواء هادية",
    tool: "ChatGPT",
    description: "صورة نظارة اتحولت لبوستر بسيط ودافي بكلمات ملهمة وعناصر قليلة.",
    name: "نورهان محمد",
    images: [{ src: "/assets/results/nour-1-glasses.jpg", label: "النتيجة" }],
  },
  {
    title: "تصميم هوية AZ Production and Events",
    tool: "ChatGPT",
    description: "شعار ذهبي على خلفية سودا لشركة إنتاج وفعاليات، محاط بمعدات التصوير والصوت.",
    name: "زكي محمد",
    images: [{ src: "/assets/results/zaki-1-az-logo.jpg", label: "النتيجة" }],
  },
  {
    title: "بوستر «مروحتك المفضلة» بستايل بكسل",
    tool: "ChatGPT",
    description: "بوستر إعلاني لمروحة بالعربي، بمميزاتها وعبارات ترويجية وتصميم بستايل ألعاب الفيديو القديمة.",
    name: "آية سيد فهيم",
    images: [{ src: "/assets/results/aya-1-fan-poster.jpg", label: "النتيجة" }],
  },
  {
    title: "بوستر إعلاني لحلوى HoHos",
    tool: "ChatGPT",
    description: "بوستر لمنتج حلويات بعلبته وقطع الكيك بالشيكولاتة وكوب اللبن ومميزات المنتج.",
    name: "آلاء بدري محمود",
    images: [{ src: "/assets/results/alaa-badry-1-hohos.jpg", label: "النتيجة" }],
  },
  {
    title: "بوستر ريموت تكييف Midea بستايل إنستجرام",
    tool: "ChatGPT",
    description: "صورة ريموت تكييف في اليد اتحولت لبوستر بعنوان رئيسي وأيقونات للمميزات (Sleep, Turbo, Timer).",
    name: "ماريو مجدي",
    images: [{ src: "/assets/results/mario-1-midea.jpg", label: "النتيجة" }],
  },
  {
    title: "بوستر بيبسي دايت بستايل رسم يدوي",
    tool: "ChatGPT",
    description: "علبة بيبسي دايت بستايل رسم يدوي مع شروحات بخط اليد على مكونات العلبة والمميزات.",
    name: "نفيسة سيد محمد",
    images: [{ src: "/assets/results/nafisa-1-pepsi-sketch.jpg", label: "النتيجة" }],
  },
  {
    title: "بوستر إعلاني لإسورة بنجمة",
    tool: "ChatGPT",
    description: "بوستر لإسورة فضية رقيقة على يد، بعبارات ترويجية بالعربي ومميزات المنتج.",
    name: "جوليا بشرى صلاح بشرى",
    images: [{ src: "/assets/results/julia-1-bracelet.jpg", label: "النتيجة" }],
  },
  {
    title: "تصميم عطر «الخيال يزهر»",
    tool: "ChatGPT",
    description: "زجاجة عطر بتصميم خيالي بين ورود بنفسجية وزرقاء وخيوط ذهبية مضيئة على خلفية فضائية.",
    // الاسم متروك فاضي لحد ما نتأكد من صاحب النتيجة
    images: [{ src: "/assets/results/omar-1-perfume.jpg", label: "النتيجة" }],
  },
  {
    title: "عرض تقديمي «ورشة كلود»",
    tool: "Claude",
    description: "نتيجة نشاط ورشة Claude: كتبت رحمة برومبت لـClaude، فطلّع لها عرضًا تقديميًا أبيض قابل للتعديل عن استخدام كلود وأهم استخداماته ونماذجه، وكل قسم بغلاف ونشاط تفاعلي ونشاط تطبيقي.",
    name: "رحمة حسين عبد الجليل",
    images: [{ src: "/assets/results/rahma-pres-cover.jpg", label: "غلاف العرض" }],
    file: { viewUrl: "/results-files/claude-workshop-rahma-hassan.pdf", downloadUrl: "/results-files/claude-workshop-rahma-hassan.pdf", fileName: "Claude-Workshop-Rahma.pdf" },
  },
  {
    title: "عرض تقديمي «ورشة الذكاء الاصطناعي»",
    tool: "ذكاء اصطناعي",
    description: "عرض تقديمي من 11 شريحة: كيف تستخدم الذكاء الاصطناعي، وأهم استخداماته، ونشاط تفاعلي، وأبرز النماذج، ونشاط تطبيقي ختامي.",
    name: "عمر محمد",
    images: [{ src: "/assets/results/omar-pres-cover.jpg", label: "غلاف العرض" }],
    file: { viewUrl: "/results-files/ai-workshop-omar-mohamed.pdf", downloadUrl: "/results-files/ai-workshop-omar-mohamed.pdf", fileName: "AI-Workshop-Omar.pdf" },
  },
];

/** حسام حسن: نتائجه (بوسترين + فيديو) */
export const hossamResults: ParticipantResult[] = [
  {
    title: "إعلان برفان «تركيب فخم»",
    tool: "ChatGPT",
    description: "إعلان لعطر بتصميم أسود وذهبي: السعة، مدة الثبات، التوصيل المجاني وزرار الطلب.",
    name: "حسام حسن موسى",
    images: [{ src: "/assets/results/hossam-1-perfume-ad.jpg", label: "النتيجة" }],
  },
  {
    title: "بوستر عطر Maison Élégant «شياكة»",
    tool: "ChatGPT",
    description: "بوستر فاخر لعطر رجالي بإطار ذهبي على خلفية سودا.",
    name: "حسام حسن موسى",
    images: [{ src: "/assets/results/hossam-2-sheeka.jpg", label: "النتيجة" }],
  },
  {
    title: "فيديو: رحلة على ظهر تنين",
    tool: "فيديو بالذكاء الاصطناعي",
    description: "مقطع قصير (5 ثواني) لشخصين يركبان تنينًا فوق الجبال.",
    name: "حسام حسن موسى",
    video: { src: "/assets/results/hossam-dragon.mp4", poster: "/assets/results/hossam-dragon-poster.jpg" },
  },
];

/** سلايدات الأوامر اللي كانت معروضة على الشاشة وطبّقنا عليها أثناء الورشة */
export const commandSlides = [
  { src: "/assets/results/prompts-slide-1.jpg", alt: "أوامر الصور الشائعة (1)" },
  { src: "/assets/results/prompts-slide-2.jpg", alt: "أوامر الصور الشائعة (2)" },
];

/** أوامر إضافية اتضافت من المشاركين (مصدرها: ماريو) */
export const extraCommands = {
  by: "ماريو مجدي",
  items: [
    { command: "/topview", description: "زاوية عالية للصور الشخصية" },
    { command: "/motionblur", description: "تحويل الخلفية إلى عزل (طمس حركة)" },
    { command: "/passportphoto", description: "تحويل الصورة إلى صورة تقديم بخلفية بيضاء" },
    { command: "/goldenhour", description: "يخلّي الإضاءة نهارية" },
    { command: "/3dbillboard", description: "صور مناسبة للمنتج بشكل احترافي" },
    { command: "/3dmetaads", description: "صور مناسبة للإعلانات" },
    { command: "/showcase", description: "صور مناسبة لعرض منتج باحترافية" },
  ],
};
