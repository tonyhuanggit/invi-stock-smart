import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Do I need to install a separate app?",
    answer: "Nope! Invi works through iMessage — the messaging app already on your iPhone. No download, no account creation, no new platform to learn. Just text the number and start chatting.",
  },
  {
    question: "How does Invi track my inventory?",
    answer: "You text Invi your counts (like 'Coffee Beans 4 Lb, Napkins 3 Pack') and it logs them to a Google Sheet that you own. It compares your current stock to the minimums you set and tells you what's running low.",
  },
  {
    question: "Can my whole team use it?",
    answer: "Right now Invi is designed for the owner or manager — one person texting to manage inventory. Team-wide access is something we're exploring for future versions.",
  },
  {
    question: "What happens to my data?",
    answer: "Your data lives in your own Google Sheet. You own it, you control it. Invi reads and writes to that sheet, but you can access, edit, or export it anytime. Nothing is locked inside a proprietary system.",
  },
  {
    question: "How fast does Invi respond?",
    answer: "In seconds. Ask a question, get an answer almost instantly. Invi processes your messages in real-time and pulls live data from your Google Sheet. No waiting, no loading screens.",
  },
  {
    question: "Is my data secure?",
    answer: "Your inventory data lives in your own Google Sheet — you control who has access. Invi uses secure connections to read and write data, and we never share your information with third parties.",
  },
  {
    question: "How does Invi connect to my inventory?",
    answer: "Invi uses a Google Sheet as the source of truth. You share a sheet with Invi, set your product names and minimum stock levels, and you're ready to go. No POS integration needed — just a spreadsheet.",
  },
  {
    question: "Can I try it before committing?",
    answer: "Yes! Text our demo number at +1 (305) 336-9541 to see Invi in action. It's a live demo — you can ask questions, log test counts, and see how it works before signing up for anything.",
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
            Got questions? We've got answers. Can't find what you're looking for? Text us at +1 (305) 336-9541.
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
