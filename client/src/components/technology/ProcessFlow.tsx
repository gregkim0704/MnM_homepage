import { useState } from "react";
import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/constants";
import { 
  ClipboardCheck, 
  Gauge, 
  Wrench, 
  Search, 
  Sparkles, 
  RefreshCw, 
  Settings, 
  TestTube, 
  CheckCircle, 
  Truck,
  ChevronRight
} from "lucide-react";

const STEP_ICONS = [
  ClipboardCheck,
  Gauge,
  Wrench,
  Search,
  Sparkles,
  RefreshCw,
  Settings,
  TestTube,
  CheckCircle,
  Truck,
];

export function ProcessFlow() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="relative">
      <div className="hidden lg:block">
        <div className="grid grid-cols-5 gap-4 mb-4">
          {PROCESS_STEPS.slice(0, 5).map((step, index) => {
            const Icon = STEP_ICONS[index];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseEnter={() => setActiveStep(step.step)}
                onMouseLeave={() => setActiveStep(null)}
                className={`relative p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                  activeStep === step.step
                    ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                    : "bg-card border-card-border"
                }`}
                data-testid={`process-step-${step.step}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      activeStep === step.step
                        ? "bg-white/20"
                        : "bg-primary/10"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${
                        activeStep === step.step
                          ? "text-primary-foreground"
                          : "text-primary"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      activeStep === step.step
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    Step {step.step}
                  </span>
                </div>
                <h4
                  className={`font-semibold text-sm mb-1 ${
                    activeStep === step.step
                      ? "text-primary-foreground"
                      : "text-card-foreground"
                  }`}
                >
                  {step.name}
                </h4>
                <p
                  className={`text-xs leading-relaxed ${
                    activeStep === step.step
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.description}
                </p>
                {index < 4 && (
                  <ChevronRight
                    className={`absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 z-10 ${
                      activeStep === step.step || activeStep === step.step + 1
                        ? "text-primary"
                        : "text-muted-foreground/30"
                    }`}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center my-4">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            className="w-0.5 h-8 bg-border origin-top"
          />
        </div>

        <div className="grid grid-cols-5 gap-4">
          {PROCESS_STEPS.slice(5).map((step, index) => {
            const Icon = STEP_ICONS[index + 5];
            const actualIndex = index + 5;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (actualIndex + 2) * 0.1 }}
                onMouseEnter={() => setActiveStep(step.step)}
                onMouseLeave={() => setActiveStep(null)}
                className={`relative p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                  activeStep === step.step
                    ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                    : "bg-card border-card-border"
                }`}
                data-testid={`process-step-${step.step}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      activeStep === step.step
                        ? "bg-white/20"
                        : "bg-primary/10"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${
                        activeStep === step.step
                          ? "text-primary-foreground"
                          : "text-primary"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      activeStep === step.step
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    Step {step.step}
                  </span>
                </div>
                <h4
                  className={`font-semibold text-sm mb-1 ${
                    activeStep === step.step
                      ? "text-primary-foreground"
                      : "text-card-foreground"
                  }`}
                >
                  {step.name}
                </h4>
                <p
                  className={`text-xs leading-relaxed ${
                    activeStep === step.step
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.description}
                </p>
                {index < 4 && (
                  <ChevronRight
                    className={`absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 z-10 ${
                      activeStep === step.step || activeStep === step.step + 1
                        ? "text-primary"
                        : "text-muted-foreground/30"
                    }`}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="lg:hidden space-y-4">
        {PROCESS_STEPS.map((step, index) => {
          const Icon = STEP_ICONS[index];
          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative flex items-start gap-4"
              data-testid={`process-step-mobile-${step.step}`}
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="w-0.5 h-full min-h-[40px] bg-border mt-2" />
                )}
              </div>
              <div className="flex-1 pb-6">
                <span className="text-xs font-medium text-muted-foreground">
                  Step {step.step}
                </span>
                <h4 className="font-semibold text-foreground mb-1">
                  {step.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
