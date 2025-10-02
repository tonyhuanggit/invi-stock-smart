import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, BarChart3, X, Check } from "lucide-react";
import { motion } from "framer-motion";
import { ChatBubble, ChatContainer } from "@/components/ui/chat-bubble";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-hero -z-10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">Trusted by 500+ stores worldwide</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Manage Inventory Like{" "}
              <span className="text-gradient">You're Texting a Friend</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              No dashboards. No spreadsheets. Just chat with your AI store manager through Slack, Teams, or SMS.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                <MessageSquare className="mr-2 h-5 w-5" />
                Add to Slack
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                Try with Teams
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">85%</div>
                <div className="text-sm text-muted-foreground">Fewer Stockouts</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-secondary">20+</div>
                <div className="text-sm text-muted-foreground">Hours Saved/Week</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-accent">99%</div>
                <div className="text-sm text-muted-foreground">Invoice Accuracy</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Chat Interface Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="space-y-6">
              {/* Dashboard - NO */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-destructive flex items-center justify-center shadow-lg z-10">
                  <X className="w-6 h-6 text-destructive-foreground" />
                </div>
                <div className="glass rounded-2xl p-6 border-2 border-destructive/20 opacity-60">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm font-semibold text-muted-foreground">Complex Dashboard</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-8 bg-muted rounded"></div>
                    <div className="h-8 bg-muted rounded"></div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-16 bg-muted rounded"></div>
                      <div className="h-16 bg-muted rounded"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Chat Interface - YES */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="relative"
              >
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-glow z-10">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="glass rounded-2xl p-6 shadow-large border-2 border-primary/20">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold">Simple Chat</span>
                  </div>
                  <ChatContainer className="p-4">
                    <ChatBubble 
                      message="Matcha powder running low! Want me to reorder?" 
                      isUser={false} 
                      emoji="🍵"
                      timestamp="9:02 AM"
                    />
                    <ChatBubble 
                      message="Yes please" 
                      isUser={true}
                      timestamp="9:05 AM" 
                    />
                    <ChatBubble 
                      message="Done! Order placed with your usual supplier. Delivery Thursday ✓" 
                      isUser={false}
                      timestamp="9:05 AM"
                    />
                  </ChatContainer>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
