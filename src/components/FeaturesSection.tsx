import { Activity, TrendingUp, ShoppingCart, CheckCircle, Smartphone, Globe } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Activity,
    title: "💬 Text-First, Not Dashboard-First",
    description: "Just open iMessage and ask. No logging in, no navigation, no hunting for reports.",
  },
  {
    icon: TrendingUp,
    title: "🔔 Proactive Alerts in Your Messages",
    description: "Invi texts you when stock runs low or usage spikes. Stay informed without checking anything.",
  },
  {
    icon: ShoppingCart,
    title: "⚡ Instant Actions, No App Switching",
    description: "Log counts, get reorder suggestions, and check stock levels right from iMessage. One-word replies work.",
  },
  {
    icon: CheckCircle,
    title: "🧠 Understands Context",
    description: "Invi knows what you mean when you say 'yes' or 'more' without re-explaining. Context carries across conversations.",
  },
  {
    icon: Smartphone,
    title: "📱 iMessage — Already on Your Phone",
    description: "No new app to download. Invi works in the Messages app you already use every day.",
  },
  {
    icon: Globe,
    title: "📊 Google Sheets — Your Data, Your Way",
    description: "Everything Invi tracks lives in your own Google Sheet. You own your data and can access it anytime.",
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
            Powerful features that simplify inventory management so you can focus on growing your business.
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
