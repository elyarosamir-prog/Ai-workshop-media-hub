import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../data/site";
import ThemeToggle from "./ThemeToggle";
import WifiConnect from "./WifiConnect";

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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/" && !location.hash;
    if (href.startsWith("/#")) return location.pathname === "/" && location.hash === href.slice(1);
    return location.pathname === href;
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-black/5 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-brand-black/95"
          : "border-transparent bg-white dark:bg-brand-black"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img src={assets.logoMediaHub} alt="شعار Media Hub" className="h-10 w-10 rounded-full object-cover" />
          <span className="hidden text-sm font-bold leading-tight sm:block">
            <span className="block text-brand-black dark:text-white">AI Workshop</span>
            <span className="block text-brand-red">Media Hub</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <WifiConnect />
          <ThemeToggle />
        </div>
      </div>

      <nav className="border-t border-black/5 dark:border-white/10">
        <ul className="scrollbar-none flex max-w-7xl gap-1 overflow-x-auto px-3 py-2 sm:mx-auto sm:px-6">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <Link
                to={link.href}
                className={`block whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-bold transition-colors sm:text-sm ${
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
    </header>
  );
}
