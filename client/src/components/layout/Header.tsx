import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useI18n } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";

const NAV_KEYS = [
  { path: "/", key: "nav.home" },
  { path: "/company", key: "nav.company" },
  { path: "/business", key: "nav.business" },
  { path: "/technology", key: "nav.technology" },
  { path: "/quality", key: "nav.quality" },
  { path: "/contact", key: "nav.contact" },
];

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer" data-testid="link-logo">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Cog className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-lg leading-tight ${isScrolled ? "text-foreground" : "text-white"}`}>
                  MnM Corp
                </span>
                <span className={`text-xs leading-tight ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>
                  Transmission Remanufacturing
                </span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <nav className="flex items-center gap-1" data-testid="nav-desktop">
              {NAV_KEYS.map((item) => (
                <Link key={item.path} href={item.path} data-testid={`link-nav-${item.key.split('.')[1]}`}>
                  <Button
                    variant="ghost"
                    className={`text-sm font-medium transition-colors ${
                      location === item.path
                        ? isScrolled
                          ? "bg-primary/10 text-primary"
                          : "bg-white/10 text-white"
                        : isScrolled
                          ? "text-foreground/80"
                          : "text-white/90"
                    }`}
                    data-testid={`button-nav-${item.key.split('.')[1]}`}
                  >
                    {t(item.key)}
                  </Button>
                </Link>
              ))}
            </nav>
            <div className="ml-2">
              <LanguageSwitcher isScrolled={isScrolled} device="desktop" />
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher isScrolled={isScrolled} device="mobile" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
            data-testid="nav-mobile"
          >
            <nav className="flex flex-col p-4 gap-1">
              {NAV_KEYS.map((item) => (
                <Link key={item.path} href={item.path} data-testid={`link-nav-mobile-${item.key.split('.')[1]}`}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-base font-medium ${
                      location === item.path
                        ? "bg-primary/10 text-primary"
                        : "text-foreground"
                    }`}
                    data-testid={`button-nav-mobile-${item.key.split('.')[1]}`}
                  >
                    {t(item.key)}
                  </Button>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
