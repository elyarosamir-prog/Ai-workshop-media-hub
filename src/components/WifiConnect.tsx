import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { wifi } from "../data/site";

export default function WifiConnect() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const wifiString = `WIFI:T:WPA;S:${wifi.ssid};P:${wifi.password};H:false;;`;

  useEffect(() => {
    if (open && canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, wifiString, {
        width: 220,
        margin: 1,
        color: { dark: "#111111", light: "#FFFFFF" },
      });
    }
  }, [open, wifiString]);

  const copyPassword = async () => {
    try {
      await navigator.clipboard.writeText(wifi.password);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 rounded-full border border-brand-red/30 bg-brand-red/5 px-3 py-2 text-xs font-bold text-brand-red transition hover:bg-brand-red hover:text-white dark:border-brand-red/40 dark:bg-brand-red/10"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0M12 20h.01" />
        </svg>
        <span className="hidden sm:inline">واي فاي المكان</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4" onClick={() => setOpen(false)}>
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-xs rounded-2xl bg-white p-6 text-center shadow-2xl dark:bg-brand-black dark:border dark:border-white/10">
            <h3 className="mb-1 text-lg font-extrabold text-brand-black dark:text-white">اتصل بواي فاي المكان</h3>
            <p className="mb-4 text-xs text-brand-grey-text dark:text-white/50">افتح كاميرا موبايلك ووجّهها على الكود</p>

            <div className="mx-auto mb-4 w-fit rounded-xl border border-black/10 bg-white p-2 dark:border-white/10">
              <canvas ref={canvasRef} />
            </div>

            <div className="mb-4 space-y-1.5 text-sm">
              <p className="text-brand-grey-text dark:text-white/60">
                اسم الشبكة: <span className="font-bold text-brand-black dark:text-white">{wifi.ssid}</span>
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-brand-grey-text dark:text-white/60">كلمة السر:</span>
                <span className="font-bold text-brand-black dark:text-white">{wifi.password}</span>
                <button onClick={copyPassword} className="rounded-full bg-brand-red/10 px-2.5 py-1 text-[11px] font-bold text-brand-red hover:bg-brand-red hover:text-white">
                  {copied ? "تم النسخ ✓" : "نسخ"}
                </button>
              </div>
            </div>

            <button onClick={() => setOpen(false)} className="w-full rounded-full bg-brand-red py-2.5 text-sm font-bold text-white hover:bg-brand-red-dark">
              تمام
            </button>
          </div>
        </div>
      )}
    </>
  );
}
