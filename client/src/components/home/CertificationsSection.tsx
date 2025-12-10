import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { CERTIFICATIONS } from "@/data/constants";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function CertificationsSection() {
  return (
    <SectionWrapper>
      <SectionHeader
        title="Certified Excellence"
        subtitle="Internationally recognized certifications ensuring the highest quality standards"
      />

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start gap-4 p-6 rounded-xl bg-card border border-card-border hover-elevate"
            data-testid={`cert-${cert.name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <cert.icon className="w-7 h-7 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <h3 className="text-xl font-bold text-foreground" data-testid={`text-cert-name-${cert.name.toLowerCase().replace(/\s+/g, "-")}`}>{cert.name}</h3>
                <Badge variant="secondary" className="text-xs" data-testid={`badge-cert-${cert.name.toLowerCase().replace(/\s+/g, "-")}`}>Certified</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed" data-testid={`text-cert-desc-${cert.name.toLowerCase().replace(/\s+/g, "-")}`}>
                {cert.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
