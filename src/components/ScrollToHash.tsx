import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * يتكفّل بالتمرير التلقائي إلى القسم المطلوب عند وجود hash في الرابط
 * (مثال: /#agenda-teaser) أو التمرير لأعلى الصفحة عند تغيير المسار.
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // تأخير بسيط حتى يكتمل رسم الصفحة الجديدة
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname, hash]);

  return null;
}
