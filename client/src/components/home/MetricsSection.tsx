import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { KEY_METRICS } from "@/data/constants";
import { motion } from "framer-motion";

export function MetricsSection() {
  return (
    <SectionWrapper background="muted">
      <SectionHeader
        title="Industry-Leading Performance"
        subtitle="Our commitment to quality and efficiency is reflected in our operational metrics"
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {KEY_METRICS.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center p-6 md:p-8 rounded-xl bg-card border border-card-border"
            data-testid={`metric-${metric.label.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              <AnimatedCounter
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
              />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {metric.label}
            </h3>
            <p className="text-sm text-muted-foreground">{metric.sublabel}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
