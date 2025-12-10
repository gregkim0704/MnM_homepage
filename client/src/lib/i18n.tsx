import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Language = "ko" | "en";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ko: {
    // Navigation
    "nav.home": "홈",
    "nav.company": "회사소개",
    "nav.business": "사업영역",
    "nav.technology": "기술현황",
    "nav.quality": "품질경영",
    "nav.contact": "문의하기",
    
    // Hero Section
    "hero.title": "자동차 변속기",
    "hero.titleHighlight": "재제조 전문기업",
    "hero.subtitle": "DCT, A/T 변속기 및 EV 감속기 재제조 분야의 선도 기업으로서, 최첨단 기술과 친환경 공정으로 자동차 산업의 지속가능성을 선도합니다.",
    "hero.exploreProducts": "제품 보기",
    "hero.contactUs": "문의하기",
    
    // Metrics
    "metrics.title": "주요 실적",
    "metrics.subtitle": "신뢰할 수 있는 품질과 성과로 고객과 함께합니다",
    "metrics.production": "연간 생산량",
    "metrics.defectRate": "불량률",
    "metrics.facilities": "생산시설 면적",
    "metrics.experience": "업계 경력",
    "metrics.units": "대",
    "metrics.ppm": "ppm 미만",
    "metrics.sqm": "m²",
    "metrics.years": "년+",
    
    // Certifications
    "cert.title": "인증 현황",
    "cert.subtitle": "국제 품질 표준을 충족하는 인증을 보유하고 있습니다",
    "cert.iatf": "IATF 16949",
    "cert.iatfDesc": "자동차 산업 품질경영시스템 국제 표준 인증",
    "cert.iso": "ISO 45001",
    "cert.isoDesc": "안전보건경영시스템 국제 표준 인증",
    
    // Products
    "products.title": "제품 라인업",
    "products.subtitle": "다양한 변속기 재제조 솔루션을 제공합니다",
    "products.learnMore": "자세히 보기",
    "products.dct": "DCT (듀얼클러치 변속기)",
    "products.dctDesc": "7단 습식 DCT 재제조 - 현대기아 적용 모델 포함",
    "products.ev": "EV 감속기",
    "products.evDesc": "전기차 감속기 재제조 - 현대 아이오닉, 기아 EV6 등",
    "products.at": "A/T (자동변속기)",
    "products.atDesc": "6단, 8단 자동변속기 재제조",
    "products.heavy": "중장비 변속기",
    "products.heavyDesc": "산업용 중장비 변속기 재제조 솔루션",
    
    // CTA Section
    "cta.title": "비즈니스 문의",
    "cta.subtitle": "재제조 솔루션에 대해 상담받으세요",
    "cta.getInTouch": "문의하기",
    "cta.callNow": "전화하기",
    
    // Company Page
    "company.title": "회사소개",
    "company.subtitle": "MnM Co., Ltd.는 자동차 변속기 재제조 전문 기업입니다",
    "company.about": "회사 개요",
    "company.aboutDesc": "2018년 설립 이래, MnM은 자동차 변속기 재제조 분야에서 기술 혁신과 품질 향상을 위해 노력해왔습니다. 친환경 재제조 공정을 통해 자원 순환에 기여하고, 고객에게 신제품 수준의 품질을 제공합니다.",
    "company.timeline": "연혁",
    "company.location": "오시는 길",
    "company.address": "주소",
    
    // Business Page
    "business.title": "사업영역",
    "business.subtitle": "다양한 변속기 재제조 솔루션을 제공합니다",
    "business.requestQuote": "견적 문의",
    "business.capabilities": "생산 역량",
    
    // Technology Page
    "technology.title": "기술현황",
    "technology.subtitle": "최첨단 시설과 검증된 공정으로 품질을 보장합니다",
    "technology.facilities": "생산시설",
    "technology.process": "제조 공정",
    "technology.cleanRoom": "클린룸",
    
    // Quality Page
    "quality.title": "품질경영",
    "quality.subtitle": "MES 시스템과 품질 관리 체계로 완벽한 품질을 보장합니다",
    "quality.systems": "품질 관리 시스템",
    "quality.equipment": "검사 장비",
    "quality.mes": "MES 시스템",
    "quality.mesDesc": "실시간 생산 관리 및 품질 모니터링",
    "quality.interlock": "인터락 시스템",
    "quality.interlockDesc": "공정 간 품질 연동 및 자동 검사",
    
    // Contact Page
    "contact.title": "문의하기",
    "contact.subtitle": "재제조 솔루션에 대해 상담받으세요",
    "contact.form.name": "이름",
    "contact.form.namePlaceholder": "성함을 입력하세요",
    "contact.form.company": "회사명",
    "contact.form.companyPlaceholder": "회사명을 입력하세요",
    "contact.form.email": "이메일",
    "contact.form.emailPlaceholder": "이메일을 입력하세요",
    "contact.form.message": "문의 내용",
    "contact.form.messagePlaceholder": "문의 내용을 입력하세요",
    "contact.form.submit": "문의하기",
    "contact.form.submitting": "전송 중...",
    "contact.form.success": "문의가 성공적으로 전송되었습니다!",
    "contact.info.title": "연락처 정보",
    "contact.info.phone": "전화",
    "contact.info.email": "이메일",
    "contact.info.address": "주소",
    
    // Footer
    "footer.company": "한국인프라연구원(주)",
    "footer.rights": "All rights reserved.",
    "footer.quickLinks": "바로가기",
    "footer.contact": "연락처",
    
    // Common
    "common.viewAll": "전체 보기",
    "common.learnMore": "자세히 보기",
    "common.certified": "인증",
    "common.download": "다운로드",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.company": "Company",
    "nav.business": "Business",
    "nav.technology": "Technology",
    "nav.quality": "Quality",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.title": "Automotive Transmission",
    "hero.titleHighlight": "Remanufacturing Experts",
    "hero.subtitle": "As a leading company in DCT, A/T transmission and EV reduction gear remanufacturing, we lead sustainability in the automotive industry with cutting-edge technology and eco-friendly processes.",
    "hero.exploreProducts": "Explore Products",
    "hero.contactUs": "Contact Us",
    
    // Metrics
    "metrics.title": "Key Metrics",
    "metrics.subtitle": "Trusted quality and performance for our partners",
    "metrics.production": "Annual Production",
    "metrics.defectRate": "Defect Rate",
    "metrics.facilities": "Facility Area",
    "metrics.experience": "Industry Experience",
    "metrics.units": "units",
    "metrics.ppm": "ppm",
    "metrics.sqm": "m²",
    "metrics.years": "years+",
    
    // Certifications
    "cert.title": "Certifications",
    "cert.subtitle": "Holding international quality standard certifications",
    "cert.iatf": "IATF 16949",
    "cert.iatfDesc": "Automotive Industry Quality Management System International Certification",
    "cert.iso": "ISO 45001",
    "cert.isoDesc": "Occupational Health and Safety Management System International Certification",
    
    // Products
    "products.title": "Product Lineup",
    "products.subtitle": "Comprehensive transmission remanufacturing solutions",
    "products.learnMore": "Learn More",
    "products.dct": "DCT (Dual Clutch Transmission)",
    "products.dctDesc": "7-speed wet DCT remanufacturing - Including Hyundai/Kia models",
    "products.ev": "EV Reduction Gear",
    "products.evDesc": "Electric vehicle reduction gear remanufacturing - Hyundai IONIQ, Kia EV6, etc.",
    "products.at": "A/T (Automatic Transmission)",
    "products.atDesc": "6-speed, 8-speed automatic transmission remanufacturing",
    "products.heavy": "Heavy Equipment Transmission",
    "products.heavyDesc": "Industrial heavy equipment transmission remanufacturing solutions",
    
    // CTA Section
    "cta.title": "Business Inquiry",
    "cta.subtitle": "Get a consultation for remanufacturing solutions",
    "cta.getInTouch": "Get in Touch",
    "cta.callNow": "Call Now",
    
    // Company Page
    "company.title": "About Us",
    "company.subtitle": "MnM Co., Ltd. is a specialist in automotive transmission remanufacturing",
    "company.about": "Company Overview",
    "company.aboutDesc": "Since our founding in 2018, MnM has been committed to technological innovation and quality improvement in the automotive transmission remanufacturing field. Through eco-friendly remanufacturing processes, we contribute to resource circulation and provide customers with OEM-quality products.",
    "company.timeline": "History",
    "company.location": "Location",
    "company.address": "Address",
    
    // Business Page
    "business.title": "Business Areas",
    "business.subtitle": "Comprehensive transmission remanufacturing solutions",
    "business.requestQuote": "Request Quote",
    "business.capabilities": "Production Capabilities",
    
    // Technology Page
    "technology.title": "Technology",
    "technology.subtitle": "Ensuring quality with state-of-the-art facilities and proven processes",
    "technology.facilities": "Production Facilities",
    "technology.process": "Manufacturing Process",
    "technology.cleanRoom": "Clean Room",
    
    // Quality Page
    "quality.title": "Quality Management",
    "quality.subtitle": "Ensuring perfect quality through MES system and quality management framework",
    "quality.systems": "Quality Management Systems",
    "quality.equipment": "Inspection Equipment",
    "quality.mes": "MES System",
    "quality.mesDesc": "Real-time production management and quality monitoring",
    "quality.interlock": "Interlock System",
    "quality.interlockDesc": "Inter-process quality integration and automatic inspection",
    
    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "Get a consultation for remanufacturing solutions",
    "contact.form.name": "Name",
    "contact.form.namePlaceholder": "Enter your name",
    "contact.form.company": "Company",
    "contact.form.companyPlaceholder": "Enter your company name",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "Enter your email",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Enter your message",
    "contact.form.submit": "Submit Inquiry",
    "contact.form.submitting": "Submitting...",
    "contact.form.success": "Your inquiry has been submitted successfully!",
    "contact.info.title": "Contact Information",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.address": "Address",
    
    // Footer
    "footer.company": "Korea Infrastructure Research Institute Co., Ltd.",
    "footer.rights": "All rights reserved.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    
    // Common
    "common.viewAll": "View All",
    "common.learnMore": "Learn More",
    "common.certified": "Certified",
    "common.download": "Download",
  },
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language");
      if (saved === "ko" || saved === "en") return saved;
    }
    return "ko";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
