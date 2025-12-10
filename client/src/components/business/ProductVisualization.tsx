import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState } from "react";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { Cog, Zap, Settings, RotateCcw } from "lucide-react";

interface ProductView {
  id: string;
  nameEn: string;
  nameKr: string;
  descriptionEn: string;
  descriptionKr: string;
  color: string;
  icon: typeof Cog;
}

const PRODUCT_VIEWS: ProductView[] = [
  {
    id: "dct",
    nameEn: "Dual Clutch Transmission",
    nameKr: "듀얼 클러치 변속기",
    descriptionEn: "Two-clutch system for seamless gear transitions",
    descriptionKr: "원활한 기어 전환을 위한 이중 클러치 시스템",
    color: "hsl(var(--primary))",
    icon: Cog,
  },
  {
    id: "ev-gear",
    nameEn: "EV Reduction Gear",
    nameKr: "EV 감속기",
    descriptionEn: "High-efficiency gear system for electric vehicles",
    descriptionKr: "전기차용 고효율 기어 시스템",
    color: "hsl(var(--accent))",
    icon: Zap,
  },
  {
    id: "at",
    nameEn: "Automatic Transmission",
    nameKr: "자동 변속기",
    descriptionEn: "8-speed automatic with precision control",
    descriptionKr: "정밀 제어 8단 자동 변속기",
    color: "hsl(215, 60%, 50%)",
    icon: Settings,
  },
];

function GearSVG({ 
  size = 100, 
  teeth = 12, 
  innerRadius = 0.3,
  rotation = 0,
  color = "hsl(var(--primary))",
  className = ""
}: {
  size?: number;
  teeth?: number;
  innerRadius?: number;
  rotation?: number;
  color?: string;
  className?: string;
}) {
  const outerRadius = size / 2 - 2;
  const toothDepth = outerRadius * 0.15;
  const toothWidth = (2 * Math.PI) / teeth / 2;
  
  let pathData = "";
  
  for (let i = 0; i < teeth; i++) {
    const angle = (i / teeth) * 2 * Math.PI;
    const nextAngle = ((i + 0.5) / teeth) * 2 * Math.PI;
    
    const outerX1 = Math.cos(angle - toothWidth / 2) * outerRadius;
    const outerY1 = Math.sin(angle - toothWidth / 2) * outerRadius;
    const outerX2 = Math.cos(angle + toothWidth / 2) * outerRadius;
    const outerY2 = Math.sin(angle + toothWidth / 2) * outerRadius;
    
    const innerX1 = Math.cos(nextAngle - toothWidth / 2) * (outerRadius - toothDepth);
    const innerY1 = Math.sin(nextAngle - toothWidth / 2) * (outerRadius - toothDepth);
    const innerX2 = Math.cos(nextAngle + toothWidth / 2) * (outerRadius - toothDepth);
    const innerY2 = Math.sin(nextAngle + toothWidth / 2) * (outerRadius - toothDepth);
    
    if (i === 0) {
      pathData = `M ${outerX1} ${outerY1}`;
    }
    
    pathData += ` L ${outerX2} ${outerY2} L ${innerX1} ${innerY1} L ${innerX2} ${innerY2}`;
  }
  
  pathData += " Z";
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox={`${-size/2} ${-size/2} ${size} ${size}`}
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <defs>
        <linearGradient id={`gear-gradient-${size}-${teeth}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <path 
        d={pathData} 
        fill={`url(#gear-gradient-${size}-${teeth})`}
        stroke={color}
        strokeWidth="1"
      />
      <circle 
        cx="0" 
        cy="0" 
        r={outerRadius * innerRadius} 
        fill="hsl(var(--background))"
        stroke={color}
        strokeWidth="2"
      />
      <circle 
        cx="0" 
        cy="0" 
        r={outerRadius * innerRadius * 0.4} 
        fill={color}
        opacity="0.5"
      />
    </svg>
  );
}

function TransmissionVisualization({ product, isActive }: { product: ProductView; isActive: boolean }) {
  const [rotation, setRotation] = useState(0);
  
  return (
    <motion.div
      className="relative w-full aspect-square max-w-[300px] mx-auto"
      animate={{ 
        scale: isActive ? 1 : 0.85,
        opacity: isActive ? 1 : 0.5
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      data-testid={`visualization-${product.id}`}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: isActive ? 360 : 0 }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear",
          repeatType: "loop"
        }}
      >
        <GearSVG 
          size={200} 
          teeth={16} 
          color={product.color}
          className="drop-shadow-lg"
        />
      </motion.div>
      
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ left: "30%", top: "30%" }}
        animate={{ rotate: isActive ? -480 : 0 }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear",
          repeatType: "loop"
        }}
      >
        <GearSVG 
          size={100} 
          teeth={10} 
          color={product.color}
          innerRadius={0.35}
          className="drop-shadow-md opacity-80"
        />
      </motion.div>
      
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ right: "20%", bottom: "25%" }}
        animate={{ rotate: isActive ? 540 : 0 }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear",
          repeatType: "loop"
        }}
      >
        <GearSVG 
          size={70} 
          teeth={8} 
          color={product.color}
          innerRadius={0.4}
          className="drop-shadow-sm opacity-70"
        />
      </motion.div>
      
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{ 
          scale: isActive ? [1, 1.1, 1] : 1
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut"
        }}
      >
        <div className="w-16 h-16 rounded-full bg-background border-4 flex items-center justify-center shadow-lg"
          style={{ borderColor: product.color }}
        >
          <product.icon className="w-8 h-8" style={{ color: product.color }} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProductVisualization() {
  const { language } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = PRODUCT_VIEWS[activeIndex];

  return (
    <SectionWrapper id="visualization" background="default">
      <SectionHeader
        title={language === "ko" ? "제품 시각화" : "Product Visualization"}
        subtitle={
          language === "ko"
            ? "정밀한 재제조 공정을 통해 제작되는 변속기 부품을 확인하세요"
            : "Explore transmission components crafted through our precision remanufacturing process"
        }
      />
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <TransmissionVisualization 
            product={activeProduct} 
            isActive={true} 
          />
        </div>
        
        <div className="order-1 lg:order-2 space-y-6">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Badge className="mb-4" style={{ backgroundColor: activeProduct.color }}>
              {language === "ko" ? "활성" : "Active"}
            </Badge>
            <h3 className="text-2xl font-bold mb-3" data-testid={`text-product-name-${activeProduct.id}`}>
              {language === "ko" ? activeProduct.nameKr : activeProduct.nameEn}
            </h3>
            <p className="text-muted-foreground text-lg mb-6" data-testid={`text-product-desc-${activeProduct.id}`}>
              {language === "ko" ? activeProduct.descriptionKr : activeProduct.descriptionEn}
            </p>
          </motion.div>
          
          <div className="flex flex-wrap gap-3">
            {PRODUCT_VIEWS.map((product, index) => (
              <Button
                key={product.id}
                variant={index === activeIndex ? "default" : "outline"}
                onClick={() => setActiveIndex(index)}
                className="gap-2"
                data-testid={`button-view-${product.id}`}
              >
                <product.icon className="w-4 h-4" />
                {language === "ko" ? product.nameKr : product.nameEn}
              </Button>
            ))}
          </div>
          
          <div className="flex items-center gap-3 pt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveIndex((prev) => (prev + 1) % PRODUCT_VIEWS.length)}
              className="gap-2"
              data-testid="button-next-product"
            >
              <RotateCcw className="w-4 h-4" />
              {language === "ko" ? "다음 제품" : "Next Product"}
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
