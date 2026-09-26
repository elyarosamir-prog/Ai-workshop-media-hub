import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../data/site";
import ThemeToggle from "./ThemeToggle";

/**
 * روابط التنقل. الروابط التي تبدأ بـ "/#" هي أقسام داخل الصفحة الرئيسية،
 * والباقي صفحات مستقلة لها مسار خاص بها.
 */
const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "عن الورشة", href: "/#about" },
  { label: "الأجندة", href: "/agenda" },
  { label: "الأدوات", href: "/tools" },
  { label: "التطبيقات العملية", href: "/#applications" },
  { label: "فريق التنفيذ", href: "/team" },
  { label: "التشويق", href: "/#teaser" },
  { label: "التوثيق والنتائج", href: "/documentation" },
  { label: "الأسئلة الشائعة", href: "/#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/" && !location.hash;
    if (href.startsWith("/#")) return location.pathname === "/" && location.hash === href.slice(1);
    return location.pathname === href;
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-black/5 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-brand-black/90"
          : "border-transparent bg-white dark:bg-brand-black"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={assets.logoMediaHub} alt="شعار Media Hub" className="h-10 w-10 rounded-full object-cover" />
          <span className="hidden text-sm font-bold leading-tight sm:block">
            <span className="block text-brand-black dark:text-white">AI Workshop</span>
            <span className="block text-brand-red">Media Hub</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-brand-red text-white"
                  : "text-brand-black hover:bg-brand-grey-light dark:text-white dark:hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="فتح قائمة التنقل"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 lg:hidden dark:border-white/15"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-black/5 bg-white px-4 py-3 lg:hidden dark:border-white/10 dark:bg-brand-black">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                    isActive(link.href)
                      ? "bg-brand-red text-white"
                      : "text-brand-black hover:bg-brand-grey-light dark:text-white dark:hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
