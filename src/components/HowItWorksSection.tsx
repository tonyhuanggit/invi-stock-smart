import { motion } from "framer-motion";
import { Plug, Settings, Brain, ThumbsUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Connect Your POS",
    description: "Integrate with your existing sales system in minutes. No complicated setup or training required.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Set Your Rules",
    description: "Define reorder points, supplier preferences, and custom alerts that match your business needs.",
  },
  {
    number: "03",
    icon: Brain,
    title: "Let Invi Learn",
    description: "Our AI studies your sales patterns, seasonality, and trends to make smart recommendations.",
  },
  {
    number: "04",
    icon: ThumbsUp,
    title: "Approve & Order",
    description: "Review intelligent suggestions and approve purchase orders with a single tap. That's it!",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6"
          >
            <span className="text-sm font-semibold">How It Works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Get Started in <span className="text-gradient">4 Simple Steps</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            From setup to automation in less than an hour. No technical expertise required.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className={`grid md:grid-cols-2 gap-8 items-center mb-16 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="bg-card p-8 rounded-2xl shadow-soft border border-border hover:border-primary/50 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="text-sm font-bold text-primary mb-2">{step.number}</div>
                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="aspect-square rounded-2xl gradient-subtle flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl font-bold text-primary/10">{step.number}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
