import { motion } from "framer-motion";
import { X, Check, Smartphone, BarChart3 } from "lucide-react";

const dashboardPains = [
  "Log into another app",
  "Navigate through multiple tabs",
  "Export to spreadsheet",
  "Manually calculate reorder points",
];

const conversationBenefits = [
  "Just open your messages",
  "Ask questions naturally",
  "Get instant answers",
  "Approve with a quick reply",
  "Everything in one chat",
];

export const ConversationVsDashboardSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6"
          >
            <span className="text-sm font-semibold">The Difference</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Why <span className="text-gradient">Conversation Beats Dashboards</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Stop wrestling with complex software. Start chatting like a human.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Dashboard Pain */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border-2 border-destructive/20 shadow-soft relative"
          >
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-destructive flex items-center justify-center shadow-lg">
              <X className="w-6 h-6 text-destructive-foreground" />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-8 h-8 text-muted-foreground" />
              <h3 className="text-2xl font-bold">Traditional Dashboard</h3>
            </div>

            <div className="space-y-4">
              {dashboardPains.map((pain, index) => (
                <motion.div
                  key={pain}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>{pain}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground italic">
                "I spend 2 hours every week just updating spreadsheets and checking inventory levels across three different apps."
              </p>
            </div>
          </motion.div>

          {/* Conversation Win */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border-2 border-primary/20 shadow-soft relative"
          >
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-glow">
              <Check className="w-6 h-6 text-white" />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Chat with Invi</h3>
            </div>

            <div className="space-y-4">
              {conversationBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 gradient-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm font-medium">
                "It's like texting a super smart assistant. I get what I need in seconds, right where I already am."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
