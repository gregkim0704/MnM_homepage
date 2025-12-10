import { motion } from "framer-motion";
import { COMPANY_HISTORY } from "@/data/constants";

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

      <div className="space-y-8 md:space-y-12">
        {COMPANY_HISTORY.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-start gap-6 md:gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            data-testid={`timeline-item-${item.year}`}
          >
            <div
              className={`hidden md:block w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "text-right" : "text-left"
              }`}
            >
              <div className="inline-block p-6 rounded-xl bg-card border border-card-border">
                <span className="text-sm font-medium text-primary mb-1 block" data-testid={`text-timeline-year-${item.year}`}>
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-card-foreground mb-2" data-testid={`text-timeline-title-${item.year}`}>
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-timeline-desc-${item.year}`}>
                  {item.description}
                </p>
              </div>
            </div>

            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

            <div className="md:hidden pl-10">
              <div className="p-5 rounded-xl bg-card border border-card-border">
                <span className="text-sm font-medium text-primary mb-1 block">
                  {item.year}
                </span>
                <h3 className="text-base font-bold text-card-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="hidden md:block w-[calc(50%-2rem)]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
