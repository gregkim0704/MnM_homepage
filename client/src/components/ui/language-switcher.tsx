import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useI18n, type Language } from "@/lib/i18n";

interface LanguageSwitcherProps {
  variant?: "header" | "footer";
  isScrolled?: boolean;
  device?: "desktop" | "mobile";
}

export function LanguageSwitcher({ variant = "header", isScrolled = false, device = "desktop" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useI18n();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "ko", label: "한국어", flag: "KR" },
    { code: "en", label: "English", flag: "EN" },
  ];

  const currentLang = languages.find((l) => l.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`gap-1.5 ${
            variant === "header" && !isScrolled
              ? "text-white/90 hover:text-white hover:bg-white/10"
              : ""
          }`}
          data-testid={`button-language-switcher-${device}`}
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">{currentLang?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`gap-2 cursor-pointer ${
              language === lang.code ? "bg-primary/10 text-primary" : ""
            }`}
            data-testid={`button-lang-${lang.code}`}
          >
            <span className="text-xs font-medium w-6">{lang.flag}</span>
            <span>{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
