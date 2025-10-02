import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const benefits = [
  "Real-time tracking of every sale and stock movement",
  "AI-powered forecasting that learns your business patterns",
  "Automated purchase orders sent directly to suppliers",
  "Invoice verification to catch errors before you pay",
  "Waste tracking and nightly reconciliation",
  "Market intelligence for trending products",
];

export const SolutionSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <span className="text-sm font-semibold">The Solution</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Meet Invi: Your <span className="text-gradient">Always-On</span> Inventory Teammate
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Invi combines AI-powered forecasting with real-time tracking to automate your entire
              inventory workflow. It's like having an expert inventory manager working 24/7, without
              the salary.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              See How It Works
            </Button>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <div className="aspect-[4/3] gradient-subtle p-8">
                <div className="h-full rounded-xl border-2 border-primary/20 bg-card/50 backdrop-blur-sm p-6 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-24 h-24 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center shadow-glow"
                    >
                      <span className="text-white font-bold text-4xl">I</span>
                    </motion.div>
                    <p className="text-muted-foreground font-medium">
                      Smart Inventory Management
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 right-8 glass rounded-lg p-3 shadow-medium"
              >
                <div className="text-xs text-muted-foreground">AI Powered</div>
                <div className="text-lg font-bold text-secondary">Smart</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 left-8 glass rounded-lg p-3 shadow-medium"
              >
                <div className="text-xs text-muted-foreground">Automation</div>
                <div className="text-lg font-bold text-accent">24/7</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
