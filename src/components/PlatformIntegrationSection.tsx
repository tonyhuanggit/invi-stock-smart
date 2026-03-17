import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";
import { ChatBubble, ChatContainer } from "@/components/ui/chat-bubble";
import { Button } from "@/components/ui/button";

export const PlatformIntegrationSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6"
          >
            <span className="text-sm font-semibold">Try It Now</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Works Right in <span className="text-gradient">iMessage</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            No app to download. No account to create. Just text the demo number and see Invi in action.
          </motion.p>
        </div>

        {/* Single iMessage Demo Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="bg-card rounded-2xl p-8 shadow-large border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">iMessage Demo</h3>
                <p className="text-muted-foreground">Text Invi and see how it works</p>
              </div>
            </div>

            <ChatContainer className="mb-6">
              <ChatBubble
                message="What's running low?"
                isUser={true}
                timestamp="9:02 AM"
              />
              <ChatBubble
                message="Coffee Beans — 4 Lb, need 13. Napkins — 3 Pack, need 18. Everything else is good ✓"
                isUser={false}
                timestamp="9:02 AM"
              />
              <ChatBubble
                message="How fast are we burning through coffee?"
                isUser={true}
                timestamp="9:03 AM"
              />
              <ChatBubble
                message="You're using ~2.1 Lb/day. At this rate, you'll run out in about 2 days. Want a reorder suggestion?"
                isUser={false}
                timestamp="9:03 AM"
              />
            </ChatContainer>

            <div className="text-center">
              <Button variant="hero" size="xl" asChild className="mb-4">
                <a href="sms:+13053369541">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Text the Demo: +1 (305) 336-9541
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Open iMessage and text this number — Invi will respond in seconds
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="glass rounded-2xl p-8 shadow-large">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">5 Minutes</span> to See It Work
            </h3>
            <p className="text-muted-foreground mb-6">
              Text the demo number, try a few commands, and see your data appear in a Google Sheet instantly.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>No app download needed</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Your data stays in your Google Sheet</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Works on any iPhone</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Check = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);
