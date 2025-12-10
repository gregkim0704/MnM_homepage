import { Layout } from "@/components/layout/Layout";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { Timeline } from "@/components/company/Timeline";
import { COMPANY_INFO, CERTIFICATIONS } from "@/data/constants";
import { motion } from "framer-motion";
import { MapPin, Building, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Company() {
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
            About MnM Corp
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Pioneering sustainable automotive solutions since {COMPANY_INFO.founded}
          </motion.p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-accent text-accent-foreground">CEO Message</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Leading the Future of Sustainable Mobility
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At MnM Corp, we believe in the power of remanufacturing to create 
                a more sustainable automotive industry. Our mission is to extend 
                the lifecycle of critical transmission components while maintaining 
                the highest quality standards.
              </p>
              <p>
                Since our founding in 2018, we have continuously invested in 
                cutting-edge technology and skilled workforce development to 
                deliver products that meet and exceed OEM specifications.
              </p>
              <p>
                As we expand into the electric vehicle market with our EV 
                reduction gear solutions, we remain committed to innovation, 
                quality, and environmental responsibility.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <Card className="p-6">
              <CardContent className="p-0">
                <Building className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Founded</h3>
                <p className="text-2xl font-bold text-primary">{COMPANY_INFO.founded}</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <Users className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Employees</h3>
                <p className="text-2xl font-bold text-primary">100+</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <Target className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Production</h3>
                <p className="text-2xl font-bold text-primary">15,100+</p>
                <p className="text-xs text-muted-foreground">units/year</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <MapPin className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">{COMPANY_INFO.location}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted">
        <SectionHeader
          title="Our Journey"
          subtitle="Key milestones in our growth and development"
        />
        <Timeline />
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          title="Certifications & Standards"
          subtitle="International certifications ensuring quality and safety excellence"
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full p-6">
                <CardContent className="p-0 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <cert.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our Location
          </h2>
          <p className="text-muted-foreground mb-8">
            Visit our manufacturing facility in Seosan-si, Chungnam
          </p>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-card-foreground mb-1">
                    Manufacturing Facility
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-company-address">
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
