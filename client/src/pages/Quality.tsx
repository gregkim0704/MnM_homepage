import { Layout } from "@/components/layout/Layout";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { QUALITY_SYSTEMS, QUALITY_EQUIPMENT, CERTIFICATIONS } from "@/data/constants";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, BarChart3, Wrench, Shield, Target } from "lucide-react";

const QUALITY_METRICS = [
  {
    icon: Target,
    label: "Defect Rate",
    value: "<1600ppm",
    description: "Industry-leading defect prevention",
  },
  {
    icon: BarChart3,
    label: "First Pass Yield",
    value: "99.8%",
    description: "Right first time manufacturing",
  },
  {
    icon: Shield,
    label: "Warranty Claims",
    value: "<0.1%",
    description: "Exceptional reliability record",
  },
];

export default function Quality() {
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
            Quality Control
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Comprehensive quality management systems ensuring excellence at every step
          </motion.p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {QUALITY_METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center p-6" data-testid={`quality-metric-${index}`}>
                <CardContent className="p-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                  <p className="text-3xl font-bold text-primary mb-2">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <SectionHeader
          title="Quality Management Systems"
          subtitle="Advanced systems for process control and error prevention"
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {QUALITY_SYSTEMS.map((system, index) => (
            <motion.div
              key={system.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full" data-testid={`quality-system-${system.name.toLowerCase()}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <system.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-xl font-bold text-card-foreground">
                          {system.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs">Active</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {system.fullName}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {system.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted">
        <SectionHeader
          title="Testing & Inspection Equipment"
          subtitle="State-of-the-art equipment ensuring product reliability"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUALITY_EQUIPMENT.map((equipment, index) => (
            <motion.div
              key={equipment.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full" data-testid={`equipment-${index}`}>
                <CardContent className="p-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Wrench className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">
                    {equipment.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {equipment.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground">Error Prevention</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Fool-Proof Manufacturing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our manufacturing lines incorporate multiple layers of error 
                prevention mechanisms to ensure consistent quality output. 
                From automated inspection stations to interlocking systems, 
                every step is designed to prevent defects before they occur.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Poka-Yoke Systems</h4>
                    <p className="text-sm text-muted-foreground">
                      Mistake-proofing devices at critical assembly points
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Torque Verification</h4>
                    <p className="text-sm text-muted-foreground">
                      Real-time torque monitoring with automatic lockout
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Visual Inspection AI</h4>
                    <p className="text-sm text-muted-foreground">
                      Automated visual quality checks using machine learning
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <Card key={cert.name} className="p-4">
                  <CardContent className="p-0 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <cert.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-card-foreground">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
}
