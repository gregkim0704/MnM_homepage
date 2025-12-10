import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { MetricsSection } from "@/components/home/MetricsSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/data/constants";
import { useI18n } from "@/lib/i18n";

export default function Home() {
  const { language } = useI18n();
  return (
    <Layout>
      <HeroSection />
      <MetricsSection />
      <CertificationsSection />
      <ProductsPreview />
      <TestimonialsSection />

      <SectionWrapper>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-blue-800 p-8 md:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              {language === "ko" ? "업계 리더와 파트너가 되시겠습니까?" : "Ready to Partner with Industry Leaders?"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/80 mb-8"
            >
              {language === "ko" 
                ? "변속기 재제조에 대해 상담하고 자동차 운영을 지원하는 방법을 알아보세요." 
                : "Get in touch with our team to discuss your transmission remanufacturing needs and discover how we can support your automotive operations."}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact" data-testid="link-get-in-touch">
                <Button
                  size="lg"
                  className="min-w-[180px] bg-white text-primary font-semibold"
                  data-testid="button-get-in-touch"
                >
                  {language === "ko" ? "연락하기" : "Get in Touch"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href={`tel:${COMPANY_INFO.phone}`} data-testid="link-call-now">
                <Button
                  size="lg"
                  variant="outline"
                  className="min-w-[180px] border-white/30 text-white bg-white/10"
                  data-testid="button-call-now"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {language === "ko" ? "전화하기" : "Call Now"}
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
}
