import { Check, X, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const WhyChooseInviSection = () => {
  const comparisonData = [
    {
      feature: "Stock Accuracy",
      invi: { icon: <Check className="w-5 h-5 text-primary" />, text: "AI Forecasts & Alerts" },
      manual: { icon: <X className="w-5 h-5 text-destructive" />, text: "Prone to Errors" },
      generic: { icon: <AlertTriangle className="w-5 h-5 text-yellow-500" />, text: "Basic Threshold Alerts" },
    },
    {
      feature: "Time Required",
      invi: { text: "< 1 hr/week" },
      manual: { text: "5–10 hrs/week" },
      generic: { text: "2–4 hrs/week" },
    },
    {
      feature: "Forecasting",
      invi: { text: "Predictive AI Models" },
      manual: { text: "None" },
      generic: { text: "Historical Only" },
    },
    {
      feature: "Integration",
      invi: { text: "POS + E-Commerce" },
      manual: { text: "Manual Entry" },
      generic: { text: "Limited" },
    },
    {
      feature: "Cost Savings",
      invi: { text: "15–30% Reduction in Waste" },
      manual: { text: "—" },
      generic: { text: "Up to 10%" },
    },
    {
      feature: "Insights",
      invi: { text: "Real-time Dashboard" },
      manual: { text: "Spreadsheets" },
      generic: { text: "Limited Graphs" },
    },
    {
      feature: "Support",
      invi: { text: "Dedicated Onboarding" },
      manual: { text: "None" },
      generic: { text: "Chat Only" },
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Invi?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Invi outperforms manual tracking and generic inventory tools
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass rounded-2xl shadow-large overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border hover:bg-transparent">
                  <TableHead className="font-bold text-foreground w-1/4">Feature</TableHead>
                  <TableHead className="font-bold text-primary text-center bg-primary/5 w-1/4">Invi</TableHead>
                  <TableHead className="font-bold text-foreground text-center w-1/4">Manual Tracking</TableHead>
                  <TableHead className="font-bold text-foreground text-center w-1/4">Generic Inventory Apps</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow
                    key={row.feature}
                    className={`border-b border-border ${
                      index % 2 === 0 ? "bg-background" : "bg-muted/30"
                    } hover:bg-muted/50 transition-colors`}
                  >
                    <TableCell className="font-semibold">{row.feature}</TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <div className="flex flex-col items-center gap-1">
                        {row.invi.icon}
                        <span className="text-sm">{row.invi.text}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      <div className="flex flex-col items-center gap-1">
                        {row.manual.icon}
                        <span className="text-sm">{row.manual.text}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      <div className="flex flex-col items-center gap-1">
                        {row.generic.icon}
                        <span className="text-sm">{row.generic.text}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
