import { Layout } from "@/components/layout/Layout";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { ResourcesSection } from "@/components/business/ResourcesSection";
import { ProductVisualization } from "@/components/business/ProductVisualization";
import { PRODUCTS } from "@/data/constants";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Leaf, Recycle, Award } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Business() {
  const { language } = useI18n();
  
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
            {language === "ko" ? "제품 및 서비스" : "Our Products & Services"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            {language === "ko" 
              ? "자동차 산업을 위한 종합적인 변속기 재제조 솔루션" 
              : "Comprehensive transmission remanufacturing solutions for the automotive industry"}
          </motion.p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full" data-testid={`product-detail-${product.id}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <product.icon className="w-7 h-7 text-primary" />
                    </div>
                    {product.badge && (
                      <Badge className="bg-accent text-accent-foreground">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-card-foreground">
                    {product.name}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {product.types.map((type) => (
                      <Badge key={type} variant="secondary">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                        <span className="text-sm text-card-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" data-testid={`link-request-quote-${product.id}`}>
                    <Button variant="outline" className="gap-2" data-testid={`button-request-quote-${product.id}`}>
                      Request Quote
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <ProductVisualization />

      <SectionWrapper background="muted">
        <SectionHeader
          title="Why Choose Remanufacturing?"
          subtitle="Sustainable solutions for the automotive industry"
        />
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full text-center p-6">
              <CardContent className="p-0">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">
                  Eco-Friendly
                </h3>
                <p className="text-muted-foreground text-sm">
                  Reduce environmental impact by extending the lifecycle of 
                  automotive components through precision remanufacturing.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full text-center p-6">
              <CardContent className="p-0">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Recycle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">
                  Cost Effective
                </h3>
                <p className="text-muted-foreground text-sm">
                  High-quality remanufactured products at competitive prices 
                  without compromising on performance or reliability.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full text-center p-6">
              <CardContent className="p-0">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">
                  OEM Quality
                </h3>
                <p className="text-muted-foreground text-sm">
                  Every remanufactured unit meets or exceeds original equipment 
                  manufacturer specifications and quality standards.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>

      <ResourcesSection />

      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {language === "ko" ? "시작할 준비가 되셨나요?" : "Ready to Get Started?"}
          </h2>
          <p className="text-muted-foreground mb-8">
            {language === "ko"
              ? "변속기 재제조 요구 사항을 상담하고 맞춤형 견적을 받으세요."
              : "Contact our team to discuss your transmission remanufacturing requirements and receive a customized quote."}
          </p>
          <Link href="/contact" data-testid="link-request-quote-main">
            <Button size="lg" data-testid="button-request-quote">
              {language === "ko" ? "견적 요청" : "Request a Quote"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </SectionWrapper>
    </Layout>
  );
}
