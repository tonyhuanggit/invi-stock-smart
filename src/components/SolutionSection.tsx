import { CheckCircle2, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChatBubble, ChatContainer } from "@/components/ui/chat-bubble";

const benefits = [
  "Works in Slack, Microsoft Teams, or SMS - wherever you already chat",
  "Natural conversations - ask questions like you're texting a friend",
  "Proactive alerts when stock runs low or deliveries arrive",
  "One-word approvals - reply 'YES' to reorder, that's it",
  "Learns your communication style and preferences",
  "Instant answers to 'How much X do we have?' questions",
];

export const SolutionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <span className="text-sm font-semibold">The Solution</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Chat Your Way to <span className="text-gradient">Perfect Inventory</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Invi lives in your messaging apps - Slack, Teams, or SMS. Just chat naturally like you're 
              texting a coworker. No dashboards, no training, no complexity. Just conversations that keep 
              your shelves stocked.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              <MessageSquare className="mr-2 h-5 w-5" />
              Try a Demo Chat
            </Button>
          </motion.div>

          {/* Right - Chat Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-large glass p-6">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">I</span>
                </div>
                <div>
                  <div className="font-semibold">Invi</div>
                  <div className="text-xs text-muted-foreground">Online</div>
                </div>
                <div className="ml-auto">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                </div>
              </div>

              <ChatContainer>
                <ChatBubble 
                  message="Matcha running low - 8 bags left. Want me to reorder?" 
                  isUser={false}
                  emoji="☀️"
                />
                <ChatBubble 
                  message="Yes" 
                  isUser={true}
                />
                <ChatBubble 
                  message="Done! Order placed. Delivery Thursday 🎯" 
                  isUser={false}
                />
              </ChatContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
