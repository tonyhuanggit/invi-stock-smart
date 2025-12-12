import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Feature {
  id: number;
  title: string;
  body: string[];
  conversation: ConversationMessage[];
}

interface ConversationMessage {
  type: "user" | "invi" | "system";
  text: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Real-time inventory, always accurate",
    body: [
      "Invi gives you a live view of your inventory as it actually exists, not what a spreadsheet says it should be. Stock levels update automatically as products move, so you always know what's on hand and what's running low.",
      "You spend less time double-checking counts and more time making decisions with confidence."
    ],
    conversation: [
      { type: "user", text: "How many matcha bags do we have left?" },
      { type: "invi", text: "You currently have 14 bags in stock across all locations. Based on recent sales, you'll need to reorder within 4 days." }
    ]
  },
  {
    id: 2,
    title: "Demand forecasting you can trust",
    body: [
      "Invi analyzes historical sales and current velocity to help you anticipate demand before it becomes a problem. Forecasts are grounded in your data, not generic assumptions.",
      "You can plan ahead without over-ordering or reacting too late."
    ],
    conversation: [
      { type: "user", text: "What should we order for next week?" },
      { type: "invi", text: "Based on last month's sales and current trends, I recommend increasing your order by 18%. This should cover projected demand without excess stock." }
    ]
  },
  {
    id: 3,
    title: "Automatic low-stock alerts and reorders",
    body: [
      "When inventory drops below healthy levels, Invi flags it immediately and recommends what to reorder. No manual monitoring. No last-minute scrambles.",
      "You stay ahead of shortages without constantly checking numbers."
    ],
    conversation: [
      { type: "system", text: "Low stock detected: Oat milk" },
      { type: "user", text: "Place a reorder." },
      { type: "invi", text: "I've prepared a reorder for 12 units based on average weekly usage. Let me know if you'd like to adjust it." }
    ]
  },
  {
    id: 4,
    title: "One source of truth across channels",
    body: [
      "Whether you sell in-store, online, or across multiple locations, Invi centralizes your inventory in one place. Everything stays in sync so counts don't drift and decisions don't rely on guesswork.",
      "You always know which numbers to trust."
    ],
    conversation: [
      { type: "user", text: "Why is inventory lower at the Ballard location?" },
      { type: "invi", text: "Ballard is selling 22% faster than other locations this week. Inventory levels have been adjusted accordingly." }
    ]
  },
  {
    id: 5,
    title: "Built for small teams, ready on day one",
    body: [
      "Invi is designed for teams that don't have time to manage complex systems. Setup is simple, workflows are intuitive, and value shows up immediately.",
      "You get clarity without adding operational overhead."
    ],
    conversation: [
      { type: "user", text: "Do I need to set anything up to start?" },
      { type: "invi", text: "No additional setup is required. Once your data is connected, I'll start tracking inventory automatically." }
    ]
  }
];

const PhoneFrame = ({ conversation }: { conversation: ConversationMessage[] }) => {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      {/* Phone outline */}
      <div className="relative rounded-[40px] border-[8px] border-[#1a1a1a] bg-white p-4 shadow-xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-[#1a1a1a]" />
        
        {/* Screen content */}
        <div className="min-h-[480px] pt-8">
          {/* Header */}
          <div className="mb-6 text-center">
            <p className="text-sm font-medium text-muted-foreground">Invi</p>
          </div>
          
          {/* Messages */}
          <div className="space-y-3 px-2">
            <AnimatePresence mode="wait">
              {conversation.map((message, index) => (
                <motion.div
                  key={`${message.text}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.type === "system" ? (
                    <div className="w-full text-center">
                      <span className="inline-block rounded-full bg-muted px-3 py-1.5 text-xs text-muted-foreground">
                        {message.text}
                      </span>
                    </div>
                  ) : (
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        message.type === "user"
                          ? "rounded-br-md bg-primary text-primary-foreground"
                          : "rounded-bl-md bg-muted text-foreground"
                      }`}
                    >
                      {message.text}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Home indicator */}
        <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-[#1a1a1a]" />
      </div>
    </div>
  );
};

const FeaturePanel = ({
  feature,
  isActive,
  onClick
}: {
  feature: Feature;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`cursor-pointer border-b border-border/30 py-5 transition-colors ${
        isActive ? "bg-transparent" : "hover:bg-muted/20"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <h3 className={`text-lg font-semibold transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>
          {feature.title}
        </h3>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
            isActive ? "rotate-180" : ""
          }`}
        />
      </div>
      
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-3">
              {feature.body.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const HowInviWorksSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            How Invi Works in Practice
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            See how Invi transforms inventory management through simple conversation.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column: Phone */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center lg:sticky lg:top-24 lg:self-start"
          >
            <PhoneFrame conversation={features[activeFeature].conversation} />
          </motion.div>

          {/* Right column: Feature panels */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <FeaturePanel
                key={feature.id}
                feature={feature}
                isActive={activeFeature === index}
                onClick={() => setActiveFeature(index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
