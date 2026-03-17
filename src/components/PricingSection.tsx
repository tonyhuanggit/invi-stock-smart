import { Check, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  "iMessage-based inventory management",
  "Google Sheets integration — your data, your way",
  "Low-stock alerts and reorder suggestions",
  "Usage trend analysis and burn rate tracking",
  "Natural language — just text like you're talking",
  "Responds in seconds, 24/7",
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
          >
            <span className="text-sm font-semibold">Early Access</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Try the Demo. <span className="text-gradient">Request Early Access.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Invi is currently in early access. Text the demo to see it in action, then request access for your store.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative bg-card rounded-2xl p-10 shadow-large border-2 border-primary">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-white text-sm font-semibold shadow-md">
              Live Demo Available
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">What You Get with Invi</h3>
              <p className="text-muted-foreground">
                Everything you need to manage inventory from your phone
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center space-y-4">
              <Button variant="hero" size="xl" asChild className="w-full">
                <a href="sms:+13053369541">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Text the Demo: +1 (305) 336-9541
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                No signup required. Text and try it right now.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
