/**
 * الألعاب — أضف لعبة جديدة بنفس الشكل.
 * url: مسار اللعبة داخل الموقع (مثال "/game/index.html" بعد ما تحط ملفاتها في public/game/)
 *      أو رابط خارجي. اتركه "" لحد ما تجهز.
 */
export interface Game {
  title: string;
  by: string;
  description: string;
  url: string;
  /** true = تتعرض جوه الصفحة (iframe) بدل ما تفتح في تبويب جديد */
  embed?: boolean;
}

export const GAME_PENDING = "[سيتم إضافة اللعبة هنا]";

export const games: Game[] = [
  {
    title: "تجربة تفاعلية من تصميم أحمد",
    by: "أحمد",
    description: "لعبة تفاعلية صممها أحمد ضمن أنشطة ورشة الذكاء الاصطناعي.",
    url: "",
    embed: true,
  },
];
