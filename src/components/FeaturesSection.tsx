import { Activity, TrendingUp, ShoppingCart, CheckCircle, AlertTriangle, Globe } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Activity,
    title: "💬 Text-First, Not Dashboard-First",
    description: "Just open your messages and ask. No logging in, no navigation, no hunting for reports.",
  },
  {
    icon: TrendingUp,
    title: "🔔 Proactive Alerts in Your Chat",
    description: "Invi messages you when stock runs low, deliveries arrive, or trends spike. Stay informed without checking.",
  },
  {
    icon: ShoppingCart,
    title: "⚡ Instant Actions, No App Switching",
    description: "Approve orders, answer questions, and manage inventory right from your chat. One-word replies work.",
  },
  {
    icon: CheckCircle,
    title: "🧠 Learns How You Communicate",
    description: "Invi adapts to your language and preferences. The more you chat, the smarter it gets.",
  },
  {
    icon: AlertTriangle,
    title: "📱 Works on Any Device",
    description: "Phone, desktop, tablet - use Slack, Teams, or SMS. Manage inventory from anywhere.",
  },
  {
    icon: Globe,
    title: "🤖 Natural Language Understanding",
    description: "Ask questions like a human, not like a search query. Invi understands context and intent.",
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
              <div className="w-14 h-14 invi-glow-bubble flex items-center justify-center mb-6">
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
