import { motion } from "framer-motion";
import { Download, FileText, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { DOWNLOADABLE_RESOURCES } from "@/data/constants";
import { useI18n } from "@/lib/i18n";

const typeIcons = {
  brochure: BookOpen,
  specification: FileText,
  certification: Award,
};

export function ResourcesSection() {
  const { language } = useI18n();
  
  const handleDownload = (resourceId: string) => {
    window.open(`/api/resources/${resourceId}`, "_blank");
  };

  return (
    <SectionWrapper id="resources" background="muted">
      <SectionHeader
        title={language === "ko" ? "자료실" : "Resources"}
        subtitle={
          language === "ko"
            ? "제품 사양서, 회사 소개서 및 인증 문서를 다운로드하세요"
            : "Download product specifications, company brochures, and certification documents"
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DOWNLOADABLE_RESOURCES.map((resource, index) => {
          const Icon = typeIcons[resource.type as keyof typeof typeIcons] || FileText;
          const title = language === "ko" ? resource.titleKr : resource.titleEn;
          const description = language === "ko" ? resource.descriptionKr : resource.descriptionEn;

          return (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover-elevate" data-testid={`resource-card-${resource.id}`}>
                <CardHeader className="flex-row items-start gap-4 space-y-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <CardTitle className="text-base" data-testid={`text-resource-title-${resource.id}`}>
                        {title}
                      </CardTitle>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className="text-xs">
                        {resource.format}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{resource.size}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="flex-1 mb-4" data-testid={`text-resource-desc-${resource.id}`}>
                    {description}
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      variant="default"
                      className="flex-1 gap-2"
                      onClick={() => handleDownload(resource.id)}
                      data-testid={`button-download-${resource.id}`}
                    >
                      <Download className="w-4 h-4" />
                      {language === "ko" ? "다운로드" : "Download"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-center p-6 rounded-xl bg-card border border-card-border"
      >
        <p className="text-muted-foreground mb-4">
          {language === "ko"
            ? "추가 자료나 맞춤형 제품 정보가 필요하신가요?"
            : "Need additional materials or customized product information?"}
        </p>
        <Button variant="default" asChild data-testid="button-request-materials">
          <a href="/contact">
            {language === "ko" ? "자료 요청하기" : "Request Materials"}
          </a>
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}
