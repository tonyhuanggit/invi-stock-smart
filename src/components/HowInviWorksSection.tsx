import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface Feature {
  id: number;
  title: string;
  shortTitle: string;
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
    title: "Log counts by texting",
    shortTitle: "Log Counts",
    body: [
      "Just text Invi your inventory counts — like 'Coffee Beans 4 Lb, Napkins 3 Pack' — and it logs them to your Google Sheet automatically. No forms, no apps, no typing into cells.",
      "You spend less time on data entry and more time running your business.",
    ],
    conversation: [
      { type: "user", text: "Coffee Beans 4 Lb, Napkins 3 Pack, Bagels 12" },
      { type: "invi", text: "Got it! All logged to your sheet ✓" },
    ],
  },
  {
    id: 2,
    title: "Ask what's running low",
    shortTitle: "Stock Check",
    body: [
      "Text 'What's running low?' and Invi compares your current stock to the minimums you set. You get a clear, instant answer — no digging through spreadsheets.",
      "Stay ahead of shortages without constantly checking numbers.",
    ],
    conversation: [
      { type: "user", text: "What's running low?" },
      { type: "invi", text: "Coffee Beans — 4 Lb, need 13. Napkins — 3 Pack, need 18. Everything else is good." },
    ],
  },
  {
    id: 3,
    title: "Get reorder suggestions",
    shortTitle: "Reorder",
    body: [
      "When stock drops below your minimums, Invi tells you exactly what to order and how much. You decide when and how to place the order — Invi just gives you the data.",
      "No surprise shortages. No guesswork on quantities.",
    ],
    conversation: [
      { type: "system", text: "Low stock alert" },
      { type: "invi", text: "Coffee Beans: order 9 Lb. Napkins: order 15 Pack. Want the full list?" },
      { type: "user", text: "Yes" },
      { type: "invi", text: "Here's your reorder list: Coffee Beans 9 Lb, Napkins 15 Pack. Everything else is above minimum ✓" },
    ],
  },
  {
    id: 4,
    title: "Track usage and trends",
    shortTitle: "Trends",
    body: [
      "Ask Invi about burn rate, usage patterns, or how fast you're going through a product. It runs the calculations on your data and gives you plain-English answers.",
      "Make smarter ordering decisions backed by real numbers.",
    ],
    conversation: [
      { type: "user", text: "How fast are we going through coffee?" },
      { type: "invi", text: "~2.1 Lb/day over the last 7 days. At this rate, you'll run out in about 2 days." },
    ],
  },
  {
    id: 5,
    title: "Built for small teams, ready on day one",
    shortTitle: "Easy Setup",
    body: [
      "Invi works with a Google Sheet and iMessage — tools you already have. Share a sheet, text the number, and you're live. No POS integration, no training, no IT setup.",
      "You get clarity without adding operational overhead.",
    ],
    conversation: [
      { type: "user", text: "How do I get started?" },
      { type: "invi", text: "Share your Google Sheet with me and set your minimums. That's it — you're ready to go!" },
    ],
  },
];

// Mobile Phone with notch style - Compact version
const MobilePhoneFrame = ({ conversation }: { conversation: ConversationMessage[] }) => {
  return (
    <div className="flex justify-center mb-4">
      <div
        className="relative bg-white rounded-[25px] border-[5px] border-[#1a1a1a] p-1.5"
        style={{
          width: "162px",
          height: "300px",
          boxShadow: "0 10px 36px rgba(0,0,0,0.15)",
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[54px] h-[14px] bg-[#1a1a1a] rounded-b-lg" />

        {/* Phone header */}
        <div className="text-center pt-4 pb-1.5">
          <span className="text-[10px] font-semibold text-foreground">Invi</span>
        </div>

        {/* Chat messages */}
        <div className="space-y-1.5">
          <AnimatePresence mode="wait">
            {conversation.map((message, index) => (
              <motion.div
                key={`${message.text}-${index}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15, delay: index * 0.08 }}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.type === "system" ? (
                  <div className="w-full text-center">
                    <span className="inline-block rounded-full bg-muted px-2 py-0.5 text-[8px] text-muted-foreground">
                      {message.text}
                    </span>
                  </div>
                ) : (
                  <div
                    className={`max-w-[90%] px-2.5 py-1.5 text-[11px] leading-snug ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground rounded-xl rounded-br-sm"
                        : "bg-muted text-foreground rounded-xl rounded-bl-sm"
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
    </div>
  );
};

// Horizontal scrollable tabs for mobile
const HorizontalTabs = ({ activeIndex, onSelect }: { activeIndex: number; onSelect: (index: number) => void }) => {
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabsRef.current) {
      const activeTab = tabsRef.current.children[activeIndex] as HTMLElement;
      if (activeTab) {
        activeTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeIndex]);

  return (
    <div className="mb-4 relative">
      <div
        ref={tabsRef}
        className="flex gap-1.5 overflow-x-auto pb-1.5 scrollbar-hide"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {features.map((feature, index) => (
          <button
            key={feature.id}
            onClick={() => onSelect(index)}
            className={`flex-shrink-0 px-[16px] py-[9px] rounded-full text-[13px] font-semibold whitespace-nowrap transition-all duration-300 ${
              activeIndex === index ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-muted-foreground"
            }`}
            style={{
              boxShadow: activeIndex === index ? "0 3px 10px rgba(139, 125, 216, 0.3)" : "none",
            }}
          >
            {feature.shortTitle}
          </button>
        ))}
      </div>
    </div>
  );
};

// Mobile tab content card
const MobileTabContent = ({ feature }: { feature: Feature }) => {
  return (
    <motion.div
      key={feature.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-[15px] font-bold text-foreground mb-2 leading-tight">{feature.title}</h3>
      <p className="text-[13px] leading-[1.5] text-muted-foreground">{feature.body[0]}</p>
    </motion.div>
  );
};

// Desktop Phone Frame
const PhoneFrame = ({ conversation }: { conversation: ConversationMessage[] }) => {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div
        className="relative rounded-[44px] border-[3px] border-[#2a2a2a] bg-white p-3"
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)",
          aspectRatio: "9 / 17.5",
        }}
      >
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-3 h-[26px] w-[90px] -translate-x-1/2 rounded-full bg-[#1a1a1a]" />

        {/* Screen content */}
        <div className="flex h-full flex-col pt-12">
          {/* Header */}
          <div className="mb-4 text-center">
            <p className="text-sm font-medium text-muted-foreground">Invi</p>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto px-2">
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
                      <span className="inline-block rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                        {message.text}
                      </span>
                    </div>
                  ) : (
                    <div
                      className={`max-w-[85%] rounded-2xl px-3 py-2 text-[13px] leading-relaxed ${
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
          <div className="mx-auto mb-2 mt-4 h-1 w-28 rounded-full bg-[#d1d1d6]" />
        </div>
      </div>
    </div>
  );
};

// Desktop Feature Panel
const FeaturePanel = ({ feature, isActive, onClick }: { feature: Feature; isActive: boolean; onClick: () => void }) => {
  return (
    <div
      className="cursor-pointer rounded-lg py-5 px-4 transition-all duration-300 ease-out"
      style={{
        background: isActive ? "linear-gradient(135deg, #f8f6ff 0%, #fdfcff 100%)" : "transparent",
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.background = "#fafafa";
          e.currentTarget.style.transform = "translateX(4px)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.transform = "translateX(0)";
        }
      }}
    >
      <div className="flex items-center gap-4">
        <div
          className="flex-shrink-0 rounded-full transition-all duration-300 ease-out"
          style={{
            width: isActive ? "12px" : "8px",
            height: isActive ? "12px" : "8px",
            backgroundColor: isActive ? "#8B7DD8" : "white",
            border: isActive ? "none" : "2px solid #d0d0d0",
            boxShadow: isActive ? "0 0 0 4px rgba(139, 125, 216, 0.15)" : "none",
          }}
        />
        <h3
          className="text-lg font-semibold transition-colors duration-300 ease-out"
          style={{ color: isActive ? "#8B7DD8" : "inherit" }}
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
            <div className="mt-4 ml-[30px] space-y-3">
              {feature.body.map((paragraph, index) => (
                <p key={index} className="text-base text-muted-foreground leading-relaxed">
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
  const isMobile = useIsMobile();

  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-16 text-center"
        >
          <h2 className="mb-3 md:mb-4 text-2xl md:text-3xl font-bold lg:text-4xl">How Invi Works in Practice</h2>
          <p className="mx-auto max-w-2xl text-[15px] md:text-lg text-muted-foreground">
            See how Invi transforms inventory management through simple iMessage conversations.
          </p>
        </motion.div>

        {/* Mobile layout */}
        {isMobile ? (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <MobilePhoneFrame conversation={features[activeFeature].conversation} />
            <div className="bg-card rounded-[20px] p-4 pt-5 shadow-lg">
              <HorizontalTabs activeIndex={activeFeature} onSelect={setActiveFeature} />
              <AnimatePresence mode="wait">
                <MobileTabContent feature={features[activeFeature]} />
              </AnimatePresence>
            </div>
          </motion.div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center md:sticky md:top-24 md:self-start"
            >
              <PhoneFrame conversation={features[activeFeature].conversation} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
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
        )}
      </div>
    </section>
  );
};
