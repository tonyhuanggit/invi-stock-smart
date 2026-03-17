import { CheckCircle2, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChatBubble, ChatContainer } from "@/components/ui/chat-bubble";

const benefits = [
  "Text your counts — Invi logs them to your Google Sheet automatically",
  "Ask what's running low — get instant answers based on stock vs. minimums",
  "Request analysis — usage trends, burn rate, reorder suggestions",
  "Your data stays in your own Google Sheet — you own it, you control it",
  "No app to download — works right in iMessage on your phone",
  "Context-aware — Invi remembers what you said and follows up naturally",
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
              Text Your Way to <span className="text-gradient">Perfect Inventory</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Invi lives in iMessage. Just text naturally like you're messaging a coworker. 
              Tell it your counts, ask what's low, get reorder suggestions — all logged to your 
              Google Sheet automatically.
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

            <Button variant="hero" size="lg" asChild>
              <a href="sms:+13053369541">
                <MessageSquare className="mr-2 h-5 w-5" />
                Text the Demo: (305) 336-9541
              </a>
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
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    iMessage
                  </div>
                </div>
                <div className="ml-auto">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                </div>
              </div>

              <ChatContainer>
                <ChatBubble 
                  message="Coffee Beans 4 Lb, Napkins 3 Pack, Bagels 12" 
                  isUser={true}
                />
                <ChatBubble 
                  message="Got it! Logged to your sheet. Coffee Beans and Napkins are below minimum — want a reorder list?" 
                  isUser={false}
                  emoji="📋"
                />
                <ChatBubble 
                  message="Yes" 
                  isUser={true}
                />
                <ChatBubble 
                  message="Coffee Beans: order 9 Lb. Napkins: order 15 Pack. Everything else looks good ✓" 
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
