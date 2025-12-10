import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ContactForm } from "@/components/contact/ContactForm";
import { COMPANY_INFO } from "@/data/constants";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useSearch } from "wouter";

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email",
    value: COMPANY_INFO.email,
    href: `mailto:${COMPANY_INFO.email}`,
    description: "Send us your inquiry",
  },
  {
    icon: Phone,
    label: "Phone",
    value: COMPANY_INFO.phone,
    href: `tel:${COMPANY_INFO.phone}`,
    description: "Call our team directly",
  },
  {
    icon: MapPin,
    label: "Address",
    value: COMPANY_INFO.location,
    href: null,
    description: COMPANY_INFO.address,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri",
    href: null,
    description: "9:00 AM - 6:00 PM KST",
  },
];

export default function Contact() {
  const { language } = useI18n();
  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString);
  const resourceRequest = searchParams.get("resource");
  
  const initialMessage = resourceRequest 
    ? language === "ko"
      ? `${resourceRequest} 자료를 요청드립니다.\n\n`
      : `I would like to request the following document: ${resourceRequest}\n\n`
    : "";

  return (
    <Layout>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            data-testid="text-page-title"
          >
            {language === "ko" ? "문의하기" : "Contact Us"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            {language === "ko" 
              ? "변속기 재제조에 대해 상담하세요" 
              : "Get in touch with our team to discuss your transmission remanufacturing needs"}
          </motion.p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {language === "ko" ? "메시지 보내기" : "Send Us a Message"}
            </h2>
            {resourceRequest && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-4 rounded-lg bg-primary/10 border border-primary/20"
              >
                <p className="text-sm text-foreground">
                  {language === "ko" 
                    ? `요청 자료: ${resourceRequest}` 
                    : `Requesting: ${resourceRequest}`}
                </p>
              </motion.div>
            )}
            <Card>
              <CardContent className="p-6 md:p-8">
                <ContactForm initialMessage={initialMessage} />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {language === "ko" ? "연락처 정보" : "Contact Information"}
            </h2>
            <div className="grid gap-4">
              {CONTACT_METHODS.map((method, index) => (
                <Card key={method.label} data-testid={`contact-method-${method.label.toLowerCase()}`}>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <method.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                        {method.href ? (
                          <a
                            href={method.href}
                            className="font-semibold text-card-foreground hover:text-primary transition-colors"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="font-semibold text-card-foreground">{method.value}</p>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-card-foreground">Global B2B Partners</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  MnM Corp serves automotive manufacturers and partners worldwide. 
                  Whether you are seeking transmission remanufacturing solutions for 
                  passenger vehicles, commercial fleets, or heavy machinery, our 
                  team is ready to support your requirements.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Visit Our Facility
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We welcome visits from potential partners and clients. Schedule a 
            facility tour to see our manufacturing capabilities firsthand.
          </p>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-card-foreground mb-1">
                    MnM Corp Manufacturing Facility
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-facility-address">
                    {COMPANY_INFO.address}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {COMPANY_INFO.addressKr}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>
    </Layout>
  );
}
