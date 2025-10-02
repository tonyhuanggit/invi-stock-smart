import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const pricingPlans = [
  {
    name: "Starter",
    price: { monthly: 49, annual: 39 },
    description: "Perfect for single-location businesses getting started with automation",
    features: [
      "Up to 500 SKUs",
      "Real-time inventory tracking",
      "Basic forecasting",
      "Email support",
      "POS integration",
      "Mobile app access",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: { monthly: 149, annual: 119 },
    description: "For growing businesses that need advanced features and insights",
    features: [
      "Up to 5,000 SKUs",
      "AI-powered forecasting",
      "Automated ordering",
      "Invoice verification",
      "Priority support",
      "Multi-location support",
      "Custom reports",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    description: "Custom solutions for large retailers with complex needs",
    features: [
      "Unlimited SKUs",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced analytics",
      "24/7 phone support",
      "On-premise option",
      "Custom training",
      "SLA guarantee",
    ],
    popular: false,
  },
];

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

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
            <span className="text-sm font-semibold">Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Choose the plan that fits your business. All plans include a 14-day free trial.
          </motion.p>

          {/* Annual/Monthly Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 p-1 rounded-full glass"
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                !isAnnual ? "bg-primary text-white shadow-md" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                isAnnual ? "bg-primary text-white shadow-md" : "text-muted-foreground"
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-accent text-white px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-card rounded-2xl p-8 shadow-soft border-2 transition-all duration-300 hover:shadow-large ${
                plan.popular
                  ? "border-primary scale-105 lg:scale-110"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-white text-sm font-semibold shadow-md">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

                <div className="mb-6">
                  {plan.price.monthly ? (
                    <div>
                      <span className="text-5xl font-bold text-gradient">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                      {isAnnual && (
                        <div className="text-sm text-muted-foreground mt-1">
                          Billed annually
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-3xl font-bold text-gradient">Custom</div>
                  )}
                </div>

                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.price.monthly ? "Start Free Trial" : "Contact Sales"}
                </Button>
              </div>

              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
