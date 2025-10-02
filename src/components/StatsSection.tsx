import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  {
    value: 85,
    suffix: "%",
    label: "Reduction in Stockouts",
    description: "Never lose sales due to missing inventory",
  },
  {
    value: 20,
    suffix: "+",
    label: "Hours Saved Per Week",
    description: "Automate tedious inventory tasks",
  },
  {
    value: 99,
    suffix: "%",
    label: "Invoice Accuracy",
    description: "Catch errors before you pay",
  },
  {
    value: 50,
    suffix: "K",
    prefix: "$",
    label: "Average Annual Savings",
    description: "Reduce waste and optimize ordering",
  },
];

const CountUp = ({ end, duration = 2, suffix = "", prefix = "" }: { end: number; duration?: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-primary opacity-5" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            The Numbers <span className="text-gradient">Speak for Themselves</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Real results from businesses using Invi to transform their inventory management.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-card p-8 rounded-2xl shadow-soft border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-medium group"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">
                <span className="text-gradient group-hover:scale-110 inline-block transition-transform duration-300">
                  <CountUp 
                    end={stat.value} 
                    suffix={stat.suffix} 
                    prefix={stat.prefix}
                  />
                </span>
              </div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
