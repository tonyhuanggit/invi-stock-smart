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
    answer: "Nope! Invi works directly in Slack, Microsoft Teams, or SMS - wherever you already chat with your team. No extra app to download, no new platform to learn. Just add Invi to your workspace and start chatting.",
  },
  {
    question: "How does Invi learn our communication style?",
    answer: "Invi uses natural language AI to understand how you naturally talk. Whether you're formal or casual, use emojis or not, prefer quick replies or detailed explanations - Invi adapts to your style within a few conversations. It gets smarter the more you chat.",
  },
  {
    question: "Can my whole team use it?",
    answer: "Yes! Everyone on your team can chat with Invi. Add it to a shared channel so the whole crew can ask questions, or message Invi directly for personal alerts. Permissions are role-based, so you control who can approve orders versus just checking stock levels.",
  },
  {
    question: "What if I prefer texting over Slack?",
    answer: "Totally fine! Invi works via SMS too. Get alerts on your phone and reply with simple commands like 'YES' or 'ORDER MORE'. Perfect for owners who aren't always on their computer. You can even switch between SMS and Slack depending on where you are.",
  },
  {
    question: "How fast does Invi respond?",
    answer: "Instantly. Ask a question, get an answer in seconds. Invi processes your messages in real-time and pulls live data from your POS. No waiting, no loading screens - just fast, conversational responses like texting a real person.",
  },
  {
    question: "Is my data secure in chat?",
    answer: "Absolutely. All conversations are encrypted end-to-end, just like your banking app. Invi follows enterprise security standards (SOC 2 Type II certified) and integrates securely with Slack/Teams using official APIs. Your inventory data never leaves secure channels.",
  },
  {
    question: "How does Invi integrate with my POS system?",
    answer: "Invi connects seamlessly with all major POS systems including Square, Clover, Toast, and Shopify. Setup takes 5 minutes through our simple connection wizard - no technical knowledge required. We pull real-time sales data to keep inventory accurate.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, cancel anytime with no penalties. You'll have 90 days to export your data if needed. We also offer a 14-day money-back guarantee - if Invi doesn't save you time in the first two weeks, we'll refund you fully.",
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
