import { Cog, Zap, Settings, Wrench, Shield, CheckCircle, Factory, Award, Users, Globe } from "lucide-react";

export const COMPANY_INFO = {
  name: "MnM Co., Ltd.",
  footerName: "한국인프라연구원(주)",
  email: "infrastructure@kakao.com",
  phone: "010-9143-0800",
  address: "198, Seongyeon 4-ro, Seongyeon-myeon, Seosan-si, Chungnam, Korea",
  addressKr: "충청남도 서산시 성연면 성연4로 198",
  location: "Seosan-si, Chungnam",
  founded: 2018,
};

export const NAV_ITEMS = [
  { title: "Home", path: "/" },
  { title: "Company", path: "/company" },
  { title: "Business", path: "/business" },
  { title: "Technology", path: "/technology" },
  { title: "Quality", path: "/quality" },
  { title: "Contact", path: "/contact" },
];

export const KEY_METRICS = [
  {
    value: 15100,
    suffix: "",
    label: "Production Capacity",
    sublabel: "units/year",
  },
  {
    value: 1600,
    prefix: "<",
    suffix: "ppm",
    label: "Defect Rate",
    sublabel: "industry leading",
  },
  {
    value: 7,
    suffix: "+",
    label: "Years Experience",
    sublabel: "since 2018",
  },
  {
    value: 50,
    suffix: "+",
    label: "Global Partners",
    sublabel: "worldwide",
  },
];

export const CERTIFICATIONS = [
  {
    name: "IATF 16949",
    description: "International Automotive Task Force Quality Management System",
    icon: Award,
  },
  {
    name: "ISO 45001",
    description: "Occupational Health and Safety Management System",
    icon: Shield,
  },
];

export const COMPANY_HISTORY = [
  {
    year: 2018,
    title: "Company Founded",
    description: "MnM Co., Ltd. established in Seosan-si, Chungnam, specializing in automotive transmission remanufacturing.",
  },
  {
    year: 2019,
    title: "DCT Production Launch",
    description: "Started mass production of Double Clutch Transmission (DCT) remanufacturing for major automotive OEMs.",
  },
  {
    year: 2020,
    title: "IATF 16949 Certification",
    description: "Achieved international automotive quality management certification, establishing global standards compliance.",
  },
  {
    year: 2022,
    title: "EV Gear Mass Production",
    description: "Launched mass production of EV Reduction Gears, expanding into the electric vehicle market.",
  },
  {
    year: 2023,
    title: "ISO 45001 Certification",
    description: "Obtained occupational health and safety management certification, ensuring worker safety excellence.",
  },
  {
    year: 2025,
    title: "Gen2 DCT Development",
    description: "Initiated development of next-generation DCT technology with improved efficiency and performance.",
  },
];

export const PRODUCTS = [
  {
    id: "dct",
    name: "DCT (Double Clutch Transmission)",
    types: ["Dry Type", "Wet Type"],
    description: "High-performance double clutch transmission remanufacturing with OEM-quality standards. Provides seamless gear shifts and improved fuel efficiency.",
    features: ["OEM-spec components", "Full inspection process", "12-month warranty", "Fast turnaround"],
    icon: Cog,
  },
  {
    id: "ev-gear",
    name: "EV Reduction Gears",
    types: ["Integrated Type", "Separated Type"],
    description: "Specialized remanufacturing for electric vehicle reduction gears. Key growth area supporting the EV transition.",
    features: ["Clean room assembly", "Precision testing", "EV-optimized", "Sustainable process"],
    badge: "Key Growth Area",
    icon: Zap,
  },
  {
    id: "at",
    name: "A/T (Automatic Transmission)",
    types: ["Front-wheel 8-speed"],
    description: "Complete automatic transmission remanufacturing with comprehensive testing and quality assurance.",
    features: ["8-speed capability", "Front-wheel drive", "Complete overhaul", "Performance tested"],
    icon: Settings,
  },
  {
    id: "heavy",
    name: "Heavy Machinery",
    types: ["Disassembly", "Assembly"],
    description: "Transmission disassembly and assembly services for heavy machinery and industrial equipment.",
    features: ["Industrial grade", "Custom solutions", "Expert technicians", "Large capacity"],
    icon: Wrench,
  },
];

export const PROCESS_STEPS = [
  { step: 1, name: "RO Check", description: "Receiving and initial order verification" },
  { step: 2, name: "Motor Test", description: "Motor functionality and performance testing" },
  { step: 3, name: "Disassembly", description: "Careful disassembly of transmission components" },
  { step: 4, name: "Inspection", description: "Detailed inspection of all parts" },
  { step: 5, name: "Cleaning", description: "Industrial cleaning and preparation" },
  { step: 6, name: "Parts Replace", description: "Replacement of worn components" },
  { step: 7, name: "Assembly", description: "Precision reassembly in clean room" },
  { step: 8, name: "Testing", description: "Comprehensive functionality testing" },
  { step: 9, name: "EOL Test", description: "End-of-line quality verification" },
  { step: 10, name: "Shipping", description: "Final packaging and delivery" },
];

export const FACILITIES = [
  {
    name: "Clean Room Class 20k",
    description: "Controlled environment for V/Body assembly operations",
    spec: "Class 20,000",
  },
  {
    name: "Clean Room Class 3k",
    description: "Ultra-clean environment for precision component assembly",
    spec: "Class 3,000",
  },
  {
    name: "Production Floor",
    description: "Main manufacturing area with modern equipment",
    spec: "5,000+ sqm",
  },
];

export const QUALITY_SYSTEMS = [
  {
    name: "MES",
    fullName: "Manufacturing Execution System",
    description: "Real-time production monitoring and control system ensuring traceability and quality at every step.",
    icon: Factory,
  },
  {
    name: "Interlocking System",
    fullName: "Error Prevention System",
    description: "Advanced interlocking mechanism preventing assembly errors and ensuring process compliance.",
    icon: Shield,
  },
];

export const QUALITY_EQUIPMENT = [
  {
    name: "Air Leak Testers",
    description: "Precision leak detection for sealed components",
  },
  {
    name: "EOL Testers",
    description: "End-of-line comprehensive testing equipment",
  },
  {
    name: "Fool-proof Systems",
    description: "Error-prevention mechanisms throughout production",
  },
  {
    name: "Torque Monitoring",
    description: "Real-time torque verification systems",
  },
];

export const HERO_STATS = [
  { icon: Factory, label: "Production Lines", value: "6+" },
  { icon: Users, label: "Expert Engineers", value: "100+" },
  { icon: Globe, label: "Countries Served", value: "15+" },
  { icon: CheckCircle, label: "Quality Rate", value: "99.8%" },
];

export const TESTIMONIALS = [
  {
    id: "testimonial-1",
    quoteKr: "MnM Corp의 재제조 DCT는 OEM 품질과 동등하면서도 비용 효율적입니다. 우리 서비스 센터에서 가장 신뢰하는 공급업체입니다.",
    quoteEn: "MnM Corp's remanufactured DCTs match OEM quality while being cost-effective. They're our most trusted supplier for service centers.",
    authorKr: "김철수",
    authorEn: "Cheolsu Kim",
    titleKr: "수석 엔지니어",
    titleEn: "Senior Engineer",
    companyKr: "현대자동차 서비스",
    companyEn: "Hyundai Motor Service",
  },
  {
    id: "testimonial-2",
    quoteKr: "전기차 감속기 재제조 분야에서 MnM은 업계 리더입니다. 정밀한 공정과 철저한 품질 관리가 인상적입니다.",
    quoteEn: "MnM leads the industry in EV reduction gear remanufacturing. Their precision process and thorough quality control are impressive.",
    authorKr: "이정민",
    authorEn: "Jungmin Lee",
    titleKr: "구매 담당 이사",
    titleEn: "Procurement Director",
    companyKr: "기아 서비스 센터",
    companyEn: "Kia Service Center",
  },
  {
    id: "testimonial-3",
    quoteKr: "7년 간의 협력을 통해 MnM Corp는 항상 일관된 품질과 신속한 납품을 보장해왔습니다. 최고의 파트너입니다.",
    quoteEn: "Through 7 years of partnership, MnM Corp has consistently delivered quality and timely delivery. They're our top partner.",
    authorKr: "박영호",
    authorEn: "Youngho Park",
    titleKr: "기술 부장",
    titleEn: "Technical Manager",
    companyKr: "르노코리아 AS",
    companyEn: "Renault Korea AS",
  },
];

export const PARTNER_LOGOS = [
  { id: "partner-1", nameKr: "현대자동차", nameEn: "Hyundai Motor" },
  { id: "partner-2", nameKr: "기아", nameEn: "Kia Motors" },
  { id: "partner-3", nameKr: "르노코리아", nameEn: "Renault Korea" },
  { id: "partner-4", nameKr: "쌍용자동차", nameEn: "SsangYong Motor" },
  { id: "partner-5", nameKr: "한국GM", nameEn: "GM Korea" },
  { id: "partner-6", nameKr: "볼보트럭코리아", nameEn: "Volvo Trucks Korea" },
];

export const DOWNLOADABLE_RESOURCES = [
  {
    id: "company-brochure",
    titleKr: "회사 소개서",
    titleEn: "Company Brochure",
    descriptionKr: "MnM Corp의 회사 개요, 비전, 시설 및 역량에 대한 종합 소개 자료",
    descriptionEn: "Comprehensive overview of MnM Corp including our vision, facilities, and capabilities",
    type: "brochure",
    format: "PDF",
    size: "2.5 MB",
  },
  {
    id: "dct-spec",
    titleKr: "DCT 제품 사양서",
    titleEn: "DCT Product Specifications",
    descriptionKr: "듀얼 클러치 변속기 재제조 제품의 상세 기술 사양서",
    descriptionEn: "Detailed technical specifications for our DCT remanufacturing products",
    type: "specification",
    format: "PDF",
    size: "1.8 MB",
  },
  {
    id: "ev-gear-spec",
    titleKr: "EV 감속기 사양서",
    titleEn: "EV Reduction Gear Specifications",
    descriptionKr: "전기차 감속기 재제조 제품의 상세 기술 사양서",
    descriptionEn: "Technical specifications for EV reduction gear remanufacturing",
    type: "specification",
    format: "PDF",
    size: "1.5 MB",
  },
  {
    id: "quality-certification",
    titleKr: "품질 인증서",
    titleEn: "Quality Certifications",
    descriptionKr: "IATF 16949 및 ISO 45001 인증 관련 문서",
    descriptionEn: "Documentation for IATF 16949 and ISO 45001 certifications",
    type: "certification",
    format: "PDF",
    size: "800 KB",
  },
  {
    id: "process-overview",
    titleKr: "재제조 공정 안내",
    titleEn: "Remanufacturing Process Overview",
    descriptionKr: "10단계 재제조 공정에 대한 상세 안내 자료",
    descriptionEn: "Detailed guide to our 10-step remanufacturing process",
    type: "brochure",
    format: "PDF",
    size: "3.2 MB",
  },
];
