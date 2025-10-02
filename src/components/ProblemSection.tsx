import { AlertTriangle, Clock, DollarSign, FileX } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: Clock,
    title: "Manual Inventory Counts",
    description: "Hours wasted every week counting stock by hand instead of growing your business",
  },
  {
    icon: AlertTriangle,
    title: "Surprise Stockouts",
    description: "Lost sales and disappointed customers when popular items suddenly run out",
  },
  {
    icon: DollarSign,
    title: "Over-Ordering Cash Drain",
    description: "Money tied up in excess inventory while struggling to pay other bills",
  },
  {
    icon: FileX,
    title: "Invoice Errors",
    description: "Paying for products you never received or getting shorted on deliveries",
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Running Out of Stock?{" "}
            <span className="text-gradient">Drowning in Spreadsheets?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            You're not alone. These inventory headaches are costing you time, money, and peace of mind.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border group hover:border-primary/50"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
