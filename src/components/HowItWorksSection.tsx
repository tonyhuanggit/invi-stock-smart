import { motion } from "framer-motion";

const steps = [
  {
    emoji: "📱",
    number: "1",
    title: "Text Your Counts",
    description: "Open iMessage and text Invi your inventory counts — like 'Coffee Beans 4 Lb, Napkins 3 Pack'. Invi logs them to your Google Sheet automatically.",
  },
  {
    emoji: "📊",
    number: "2",
    title: "Ask What's Low",
    description: "Text 'What's running low?' and Invi checks your current stock against the minimums you set. You get a clear answer in seconds.",
  },
  {
    emoji: "📈",
    number: "3",
    title: "Get Analysis",
    description: "Ask about trends, burn rate, or usage patterns. Invi runs calculations on your data and tells you what to reorder and when you'll run out.",
  },
  {
    emoji: "✅",
    number: "4",
    title: "Take Action",
    description: "Invi gives you reorder suggestions — you decide what to do. Place orders with your suppliers on your terms, with the data to back it up.",
  },
];

const dataFlow = [
  {
    title: "Inputs",
    content: "Your text messages, daily counts, Google Sheet data",
  },
  {
    title: "AI Logic",
    content: "Stock vs. minimums, trend detection, usage calculations",
  },
  {
    title: "Outputs",
    content: "Low-stock alerts, reorder suggestions, usage analysis",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            How Invi Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Text your counts, ask questions, get answers — it's that simple.
          </motion.p>
        </div>

        {/* 4-Step Cycle */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line - hidden on mobile */}
            <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 pointer-events-none" />
            
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="relative"
              >
                <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 h-full group hover:shadow-glow hover:-translate-y-1">
                  {/* Step emoji/icon */}
                  <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.emoji}
                  </div>
                  
                  {/* Step number */}
                  <div className="text-sm font-bold text-primary mb-2">
                    Step {step.number}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-primary/50 to-primary/20" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Data Flow Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">From Text to Insight</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {dataFlow.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                className="bg-muted/30 p-6 rounded-xl border border-border"
              >
                <h4 className="text-lg font-bold mb-3 text-primary">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Invi keeps your Google Sheet updated so you always have a clear picture of what's in stock, what's low, and what to order next.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
