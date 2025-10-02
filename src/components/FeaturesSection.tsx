import { Activity, TrendingUp, ShoppingCart, CheckCircle, AlertTriangle, Globe } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description: "Tracks every sale instantly and reconciles daily counts automatically. Always know what's in stock.",
  },
  {
    icon: TrendingUp,
    title: "Smart Forecasting",
    description: "Predicts demand using sales history, seasonality, and market trends. Order exactly what you need.",
  },
  {
    icon: ShoppingCart,
    title: "Automated Ordering",
    description: "Generates purchase orders and routes to suppliers with one tap. Never miss a restock deadline.",
  },
  {
    icon: CheckCircle,
    title: "Invoice Verification",
    description: "Compares deliveries against orders and flags discrepancies immediately. Pay only for what you receive.",
  },
  {
    icon: AlertTriangle,
    title: "Waste Tracking",
    description: "Records shrink and waste with nightly stock checks. Identify patterns and reduce losses.",
  },
  {
    icon: Globe,
    title: "Market Intelligence",
    description: "Monitors trends, anticipates shortages, and spots viral products early. Stay ahead of demand.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
          >
            <span className="text-sm font-semibold">Features</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Everything You Need to{" "}
            <span className="text-gradient">Run Inventory Like a Pro</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Powerful features that automate the tedious parts of inventory management so you can focus on growing your business.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card p-8 rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 border border-border hover:border-primary/50"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
