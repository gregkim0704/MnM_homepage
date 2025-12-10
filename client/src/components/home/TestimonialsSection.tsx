import { motion } from "framer-motion";
import { Quote, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { TESTIMONIALS, PARTNER_LOGOS } from "@/data/constants";
import { useI18n } from "@/lib/i18n";

export function TestimonialsSection() {
  const { language } = useI18n();

  return (
    <SectionWrapper id="testimonials" background="muted">
      <SectionHeader
        title={language === "ko" ? "고객 후기" : "Client Testimonials"}
        subtitle={
          language === "ko"
            ? "글로벌 자동차 산업 리더들이 MnM Corp를 신뢰합니다"
            : "Trusted by leaders in the global automotive industry"
        }
      />

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover-elevate" data-testid={`testimonial-card-${testimonial.id}`}>
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-card-foreground mb-6 leading-relaxed" data-testid={`text-quote-${testimonial.id}`}>
                  {language === "ko" ? testimonial.quoteKr : testimonial.quoteEn}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {(language === "ko" ? testimonial.authorKr : testimonial.authorEn).charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground text-sm" data-testid={`text-author-${testimonial.id}`}>
                      {language === "ko" ? testimonial.authorKr : testimonial.authorEn}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {language === "ko" ? testimonial.titleKr : testimonial.titleEn}, {language === "ko" ? testimonial.companyKr : testimonial.companyEn}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-center text-lg font-semibold text-foreground mb-8">
          {language === "ko" ? "신뢰받는 파트너사" : "Trusted Partners"}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {PARTNER_LOGOS.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center justify-center p-4 rounded-lg bg-card border border-card-border hover-elevate"
              data-testid={`partner-logo-${partner.id}`}
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary/60" />
                <span className="text-sm font-medium text-muted-foreground">
                  {language === "ko" ? partner.nameKr : partner.nameEn}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
