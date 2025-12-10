import { Layout } from "@/components/layout/Layout";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { ProcessFlow } from "@/components/technology/ProcessFlow";
import { FACILITIES } from "@/data/constants";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Sparkles, Cpu, Gauge, Settings, Microscope } from "lucide-react";

const TECH_CAPABILITIES = [
  {
    icon: Cpu,
    title: "Advanced Automation",
    description: "State-of-the-art automated assembly lines with precision robotics for consistent quality.",
  },
  {
    icon: Gauge,
    title: "Precision Testing",
    description: "Comprehensive testing equipment including EOL testers and air leak detection systems.",
  },
  {
    icon: Settings,
    title: "Process Control",
    description: "Real-time monitoring and control systems ensuring process compliance at every step.",
  },
  {
    icon: Microscope,
    title: "Quality Inspection",
    description: "Multi-point inspection protocols with advanced measurement and verification equipment.",
  },
];

export default function Technology() {
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
            Technology & Infrastructure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Advanced manufacturing facilities and precision engineering processes
          </motion.p>
        </div>
      </section>

      <SectionWrapper>
        <SectionHeader
          title="Clean Room Facilities"
          subtitle="Controlled environments for precision manufacturing"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {FACILITIES.map((facility, index) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full" data-testid={`facility-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      {facility.name.includes("Clean") ? (
                        <Sparkles className="w-6 h-6 text-primary" />
                      ) : (
                        <Building2 className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="font-bold text-card-foreground">
                          {facility.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {facility.spec}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {facility.description}
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
          title="Manufacturing Process Flow"
          subtitle="10-step EV Gear manufacturing process ensuring quality at every stage"
        />
        <ProcessFlow />
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          title="Technical Capabilities"
          subtitle="Advanced technology driving manufacturing excellence"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_CAPABILITIES.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full text-center p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <cap.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-card-foreground mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cap.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted">
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-card-border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground">V/Body Assembly</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
                Precision Clean Room Assembly
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our Class 20k and Class 3k clean rooms provide the controlled 
                environment necessary for V/Body assembly operations. These 
                facilities minimize contamination and ensure the highest 
                quality standards for critical transmission components.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-card-foreground">Controlled particle count environments</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-card-foreground">Temperature and humidity regulation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-card-foreground">HEPA filtration systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-card-foreground">Positive pressure maintenance</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 aspect-video flex items-center justify-center">
              <div className="text-center">
                <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold text-foreground">Clean Room Operations</p>
                <p className="text-sm text-muted-foreground">Class 20k / Class 3k</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
}
