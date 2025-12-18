import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

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

// Inline conversation bubbles for mobile view
const InlineConversation = ({ conversation }: { conversation: ConversationMessage[] }) => {
  return (
    <div className="mt-4 space-y-2 rounded-xl bg-muted/30 p-3">
      {conversation.map((message, index) => (
        <motion.div
          key={`${message.text}-${index}`}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
          className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
        >
          {message.type === "system" ? (
            <div className="w-full text-center">
              <span className="inline-block rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                {message.text}
              </span>
            </div>
          ) : (
            <div
              className={`max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                message.type === "user"
                  ? "rounded-br-sm bg-primary text-primary-foreground"
                  : "rounded-bl-sm bg-white text-foreground shadow-sm"
              }`}
            >
              {message.text}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

const PhoneFrame = ({ conversation }: { conversation: ConversationMessage[] }) => {
  return (
    <div className="relative mx-auto w-full max-w-[240px] md:max-w-[280px]">
      {/* Phone outline - iPhone 15 Pro ratio approx 19.5:9 */}
      <div 
        className="relative rounded-[36px] md:rounded-[44px] border-[3px] border-[#2a2a2a] bg-white p-2.5 md:p-3"
        style={{ 
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          aspectRatio: '9 / 17.5'
        }}
      >
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-2.5 md:top-3 h-[22px] md:h-[26px] w-[75px] md:w-[90px] -translate-x-1/2 rounded-full bg-[#1a1a1a]" />
        
        {/* Screen content */}
        <div className="flex h-full flex-col pt-10 md:pt-12">
          {/* Header */}
          <div className="mb-3 md:mb-4 text-center">
            <p className="text-xs md:text-sm font-medium text-muted-foreground">Invi</p>
          </div>
          
          {/* Messages */}
          <div className="flex-1 space-y-2.5 md:space-y-3 overflow-y-auto px-1.5 md:px-2">
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
                      <span className="inline-block rounded-full bg-muted px-2.5 py-1 text-[10px] md:text-xs text-muted-foreground">
                        {message.text}
                      </span>
                    </div>
                  ) : (
                    <div
                      className={`max-w-[85%] rounded-2xl px-2.5 py-1.5 md:px-3 md:py-2 text-[11px] md:text-[13px] leading-relaxed ${
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
          
          {/* Home indicator */}
          <div className="mx-auto mb-1.5 md:mb-2 mt-3 md:mt-4 h-1 w-20 md:w-28 rounded-full bg-[#d1d1d6]" />
        </div>
      </div>
    </div>
  );
};

const FeaturePanel = ({
  feature,
  isActive,
  onClick,
  showInlineConversation = false
}: {
  feature: Feature;
  isActive: boolean;
  onClick: () => void;
  showInlineConversation?: boolean;
}) => {
  return (
    <div
      className="cursor-pointer rounded-lg py-4 md:py-5 px-3 md:px-4 transition-all duration-300 ease-out active:scale-[0.99] md:active:scale-100"
      style={{
        background: isActive 
          ? 'linear-gradient(135deg, #f8f6ff 0%, #fdfcff 100%)' 
          : 'transparent',
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (!isActive && window.innerWidth >= 768) {
          e.currentTarget.style.background = '#fafafa';
          e.currentTarget.style.transform = 'translateX(4px)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive && window.innerWidth >= 768) {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.transform = 'translateX(0)';
        }
      }}
    >
      <div className="flex items-center gap-3 md:gap-4">
        {/* Circular dot indicator */}
        <div
          className="flex-shrink-0 rounded-full transition-all duration-300 ease-out"
          style={{
            width: isActive ? '12px' : '8px',
            height: isActive ? '12px' : '8px',
            backgroundColor: isActive ? '#8B7DD8' : 'white',
            border: isActive ? 'none' : '2px solid #d0d0d0',
            boxShadow: isActive ? '0 0 0 4px rgba(139, 125, 216, 0.15)' : 'none',
          }}
        />
        <h3 
          className="text-base md:text-lg font-semibold transition-colors duration-300 ease-out"
          style={{ color: isActive ? '#8B7DD8' : 'inherit' }}
        >
          {feature.title}
        </h3>
      </div>
      
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-3 md:mt-4 ml-[24px] md:ml-[30px] space-y-2 md:space-y-3">
              {feature.body.map((paragraph, index) => (
                <p key={index} className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
              
              {/* Inline conversation for mobile */}
              {showInlineConversation && (
                <InlineConversation conversation={feature.conversation} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const HowInviWorksSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const isMobile = useIsMobile();

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16 text-center"
        >
          <h2 className="mb-3 md:mb-4 text-2xl md:text-3xl font-bold lg:text-4xl">
            How Invi Works in Practice
          </h2>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground">
            See how Invi transforms inventory management through simple conversation.
          </p>
        </motion.div>

        {/* Mobile layout: Features first, no phone (inline conversations) */}
        {isMobile ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <FeaturePanel
                key={feature.id}
                feature={feature}
                isActive={activeFeature === index}
                onClick={() => setActiveFeature(index)}
                showInlineConversation={true}
              />
            ))}
          </motion.div>
        ) : (
          /* Desktop/Tablet layout: Two columns with sticky phone */
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column: Phone (sticky on tablet+) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center md:sticky md:top-24 md:self-start order-1 lg:order-1"
            >
              <PhoneFrame conversation={features[activeFeature].conversation} />
            </motion.div>

            {/* Right column: Feature panels */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-2"
            >
              {features.map((feature, index) => (
                <FeaturePanel
                  key={feature.id}
                  feature={feature}
                  isActive={activeFeature === index}
                  onClick={() => setActiveFeature(index)}
                  showInlineConversation={false}
                />
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
