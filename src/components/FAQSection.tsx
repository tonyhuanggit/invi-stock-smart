import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does Invi integrate with my POS system?",
    answer: "Invi connects seamlessly with all major POS systems including Square, Clover, Toast, and Shopify. Our setup wizard guides you through a simple OAuth connection that takes less than 5 minutes. No technical knowledge required.",
  },
  {
    question: "What if I have multiple locations?",
    answer: "Invi supports multi-location inventory management from our Professional plan and up. You can view and manage inventory across all locations from a single dashboard, with location-specific forecasting and ordering.",
  },
  {
    question: "How accurate is the forecasting?",
    answer: "Our AI achieves 90%+ accuracy after learning your business patterns for 2-3 weeks. It factors in sales history, seasonality, local events, weather patterns, and market trends to predict demand. Accuracy improves continuously as the system learns.",
  },
  {
    question: "Can I customize supplier preferences?",
    answer: "Absolutely! You can set preferred suppliers for each product, define backup suppliers, set minimum order quantities, and customize delivery schedules. Invi respects all your preferences while making smart recommendations.",
  },
  {
    question: "What happens if my internet goes down?",
    answer: "Invi stores critical data locally on your devices and syncs automatically when connection is restored. Your POS continues to function normally, and Invi catches up on inventory changes once you're back online.",
  },
  {
    question: "Is my data secure?",
    answer: "Security is our top priority. We use bank-level 256-bit encryption, SOC 2 Type II compliance, and regular third-party security audits. Your data is backed up daily across multiple secure data centers.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel anytime with no penalties or fees. If you cancel, you'll have access to your data for 90 days to export or transition to another system. We also offer a 14-day money-back guarantee.",
  },
  {
    question: "Do you offer training and onboarding?",
    answer: "Every plan includes comprehensive video tutorials and documentation. Professional and Enterprise plans include personalized onboarding sessions with our team. We'll help you get set up and train your staff.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
          >
            <span className="text-sm font-semibold">FAQ</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
