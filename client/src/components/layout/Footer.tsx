import { Link } from "wouter";
import { Mail, Phone, MapPin, Cog } from "lucide-react";
import { COMPANY_INFO } from "@/data/constants";
import { useI18n } from "@/lib/i18n";

const NAV_KEYS = [
  { path: "/", key: "nav.home" },
  { path: "/company", key: "nav.company" },
  { path: "/business", key: "nav.business" },
  { path: "/technology", key: "nav.technology" },
  { path: "/quality", key: "nav.quality" },
  { path: "/contact", key: "nav.contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, language } = useI18n();

  const productItems = language === "ko" 
    ? ["DCT 재제조", "EV 감속기", "A/T 변속기", "중장비 변속기"]
    : ["DCT Remanufacturing", "EV Reduction Gears", "A/T Transmission", "Heavy Machinery"];

  return (
    <footer className="bg-sidebar text-sidebar-foreground" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Cog className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-sidebar-foreground">
                  MnM Corp
                </span>
                <span className="text-xs leading-tight text-sidebar-foreground/70">
                  Transmission Remanufacturing
                </span>
              </div>
            </div>
            <p className="text-sm text-sidebar-foreground/70 leading-relaxed">
              {language === "ko" 
                ? "자동차 변속기 재제조 분야의 글로벌 리더로서, DCT, A/T 및 EV 감속기 전문 친환경 기업입니다."
                : "Global leader in automotive transmission remanufacturing, specializing in DCT, A/T, and EV reduction gears with eco-friendly practices."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 text-sidebar-foreground">
              {t("footer.quickLinks")}
            </h3>
            <nav className="flex flex-col gap-2">
              {NAV_KEYS.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className="text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors cursor-pointer"
                    data-testid={`footer-link-${item.key.split('.')[1]}`}
                  >
                    {t(item.key)}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 text-sidebar-foreground">
              {language === "ko" ? "제품 라인업" : "Our Products"}
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-sidebar-foreground/70">
              {productItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 text-sidebar-foreground">
              {t("contact.info.title")}
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
                  data-testid="footer-email"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
                  data-testid="footer-phone"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span className="text-sm text-sidebar-foreground/70" data-testid="footer-address">
                  {COMPANY_INFO.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-sidebar-foreground/60" data-testid="footer-company-name">
              {COMPANY_INFO.footerName}
            </p>
            <p className="text-sm text-sidebar-foreground/60">
              &copy; {currentYear} MnM Corp. {t("footer.rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
