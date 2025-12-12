import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package, TrendingUp, Bell, Layers, Sparkles, AlertTriangle, RefreshCw, ArrowRight } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Real-time inventory, always accurate",
    body: "Invi gives you a live view of your inventory as it actually exists, not what a spreadsheet says it should be. Stock levels update automatically as products move, so you always know what's on hand and what's running low.",
    outcome: "You spend less time double-checking counts and more time making decisions with confidence.",
  },
  {
    id: 2,
    title: "Demand forecasting you can trust",
    body: "Invi analyzes historical sales and current velocity to help you anticipate demand before it becomes a problem. Forecasts are grounded in your data, not generic assumptions.",
    outcome: "You can plan ahead without over-ordering or reacting too late.",
  },
  {
    id: 3,
    title: "Automatic low-stock alerts and reorders",
    body: "When inventory drops below healthy levels, Invi flags it immediately and recommends what to reorder. No manual monitoring. No last-minute scrambles.",
    outcome: "You stay ahead of shortages without constantly checking numbers.",
  },
  {
    id: 4,
    title: "One source of truth across channels",
    body: "Whether you sell in-store, online, or across multiple locations, Invi centralizes your inventory in one place. Everything stays in sync so counts don't drift and decisions don't rely on guesswork.",
    outcome: "You always know which numbers to trust.",
  },
  {
    id: 5,
    title: "Built for small teams, ready on day one",
    body: "Invi is designed for teams that don't have time to manage complex systems. Setup is simple, workflows are intuitive, and value shows up immediately.",
    outcome: "You get clarity without adding operational overhead.",
  },
];

// Minimal visual components for each feature
const InventoryTableVisual = () => (
  <div className="w-full h-full flex items-center justify-center p-6">
    <div className="w-full max-w-md glass rounded-xl p-4">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/30">
        <Package className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">Inventory Status</span>
      </div>
      <div className="space-y-2">
        {[
          { name: "Widget A", qty: 142, status: "good" },
          { name: "Widget B", qty: 8, status: "low" },
          { name: "Widget C", qty: 89, status: "good" },
        ].map((item, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-3 rounded-lg transition-all ${
              item.status === "low" 
                ? "bg-destructive/10 border border-destructive/20" 
                : "bg-muted/50"
            }`}
          >
            <span className="text-sm font-medium">{item.name}</span>
            <div className="flex items-center gap-2">
              <span className={`text-sm ${item.status === "low" ? "text-destructive font-semibold" : "text-muted-foreground"}`}>
                {item.qty} units
              </span>
              {item.status === "low" && (
                <AlertTriangle className="w-4 h-4 text-destructive" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ForecastChartVisual = () => (
  <div className="w-full h-full flex items-center justify-center p-6">
    <div className="w-full max-w-md glass rounded-xl p-4">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/30">
        <TrendingUp className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">Demand Forecast</span>
      </div>
      <div className="h-32 flex items-end gap-1 px-2">
        {/* Historical bars */}
        {[40, 55, 48, 62, 58, 70].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div 
              className="w-full bg-primary/60 rounded-t"
              style={{ height: `${h}%` }}
            />
            <span className="text-[10px] text-muted-foreground">W{i + 1}</span>
          </div>
        ))}
        {/* Forecast bars */}
        {[75, 82, 78].map((h, i) => (
          <div key={`f${i}`} className="flex-1 flex flex-col items-center gap-1">
            <div 
              className="w-full bg-primary/30 border-2 border-dashed border-primary/50 rounded-t"
              style={{ height: `${h}%` }}
            />
            <span className="text-[10px] text-primary font-medium">F{i + 1}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-4 pt-3 border-t border-border/30 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary/60 rounded" />
          <span>Historical</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 border-2 border-dashed border-primary/50 rounded" />
          <span>Forecast</span>
        </div>
      </div>
    </div>
  </div>
);

const AlertCardVisual = () => (
  <div className="w-full h-full flex items-center justify-center p-6">
    <div className="w-full max-w-md space-y-3">
      <div className="glass rounded-xl p-4 border-l-4 border-l-destructive/70">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
            <Bell className="w-4 h-4 text-destructive" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium mb-1">Low Stock Alert</p>
            <p className="text-xs text-muted-foreground">Widget B is below reorder threshold</p>
          </div>
        </div>
      </div>
      <div className="glass rounded-xl p-4 border-l-4 border-l-primary/70">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <RefreshCw className="w-4 h-4 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium mb-1">Recommended Action</p>
            <p className="text-xs text-muted-foreground mb-2">Reorder 50 units of Widget B</p>
            <button className="text-xs font-medium text-primary hover:underline flex items-center gap-1">
              Approve order <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ChannelSyncVisual = () => (
  <div className="w-full h-full flex items-center justify-center p-6">
    <div className="w-full max-w-md">
      <div className="flex items-center justify-center gap-4 mb-6">
        {["Shopify", "Amazon", "Retail"].map((channel, i) => (
          <div key={i} className="glass rounded-lg px-4 py-2 text-xs font-medium text-muted-foreground">
            {channel}
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-4">
        <div className="flex flex-col items-center gap-1">
          <div className="w-px h-8 bg-border/50" />
          <ArrowRight className="w-4 h-4 text-muted-foreground rotate-90" />
        </div>
      </div>
      <div className="glass rounded-xl p-4 border-2 border-primary/30">
        <div className="flex items-center gap-2 mb-3">
          <Layers className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Unified Inventory</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { label: "Total SKUs", value: "248" },
            { label: "In Stock", value: "241" },
            { label: "Low Stock", value: "7" },
          ].map((stat, i) => (
            <div key={i} className="bg-muted/50 rounded-lg p-2">
              <p className="text-lg font-semibold text-foreground">{stat.value}</p>
              <p className="text-[10px] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const OnboardingVisual = () => (
  <div className="w-full h-full flex items-center justify-center p-6">
    <div className="w-full max-w-md glass rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-sm font-medium">Setup Complete</p>
          <p className="text-xs text-muted-foreground">Your inventory is ready</p>
        </div>
      </div>
      <div className="space-y-3">
        {[
          { step: "Connect your store", done: true },
          { step: "Import products", done: true },
          { step: "Set reorder thresholds", done: true },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-muted-foreground">{item.step}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const visuals = [
  InventoryTableVisual,
  ForecastChartVisual,
  AlertCardVisual,
  ChannelSyncVisual,
  OnboardingVisual,
];

export const HowInviWorksSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const ActiveVisual = visuals[activeFeature];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Invi Works in Practice
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple tools that solve real inventory problems, without the complexity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Visual Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="sticky top-24 aspect-square lg:aspect-[4/3] rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 border border-border/30 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full"
                >
                  <ActiveVisual />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right: Feature List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={`w-full text-left p-5 rounded-xl transition-all duration-200 ${
                  activeFeature === index
                    ? "glass border-primary/30"
                    : "bg-transparent hover:bg-muted/20 border border-transparent"
                }`}
              >
                <h3 className={`text-base font-semibold mb-2 transition-colors ${
                  activeFeature === index ? "text-foreground" : "text-muted-foreground"
                }`}>
                  {feature.title}
                </h3>
                <AnimatePresence>
                  {activeFeature === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {feature.body}
                      </p>
                      <p className="text-sm text-foreground/80 italic">
                        {feature.outcome}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
