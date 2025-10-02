import { motion } from "framer-motion";
import { MessageSquare, Users, Smartphone } from "lucide-react";
import { ChatBubble, ChatContainer } from "@/components/ui/chat-bubble";
import { Button } from "@/components/ui/button";

const platforms = [
  {
    name: "Slack",
    icon: MessageSquare,
    color: "text-[#4A154B]",
    description: "Add Invi to your team workspace",
    sample: [
      { text: "Hey @invi, what's our mango stock?", isUser: true, time: "2:34 PM" },
      { text: "You have 47 cups of mango - enough for ~130 drinks 🥭", isUser: false, time: "2:34 PM" }
    ]
  },
  {
    name: "Microsoft Teams",
    icon: Users,
    color: "text-[#5558AF]",
    description: "Connect to your business chat",
    sample: [
      { text: "Can you order more tapioca?", isUser: true, time: "3:12 PM" },
      { text: "On it! Ordering 40 bags from your preferred supplier. Delivery by Thursday 🎯", isUser: false, time: "3:12 PM" }
    ]
  },
  {
    name: "SMS",
    icon: Smartphone,
    color: "text-primary",
    description: "Get alerts on your phone",
    sample: [
      { text: "Quick alert: Brown sugar running low! Want me to reorder? Reply YES or NO", isUser: false, time: "9:02 AM" },
      { text: "YES", isUser: true, time: "9:05 AM" },
      { text: "Done! Order placed ✓", isUser: false, time: "9:05 AM" }
    ]
  }
];

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
            <span className="text-sm font-semibold">Integrations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Works Where <span className="text-gradient">You Already Are</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            No new app to download. Invi lives in your existing messaging tools.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-medium h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <platform.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{platform.name}</h3>
                    <p className="text-sm text-muted-foreground">{platform.description}</p>
                  </div>
                </div>

                <ChatContainer className="flex-1 mb-4">
                  {platform.sample.map((msg, msgIndex) => (
                    <ChatBubble
                      key={msgIndex}
                      message={msg.text}
                      isUser={msg.isUser}
                      timestamp={msg.time}
                    />
                  ))}
                </ChatContainer>

                <Button variant="outline" className="w-full group-hover:border-primary/50">
                  Add to {platform.name}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="glass rounded-2xl p-8 shadow-large">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">5 Minutes</span> to Full Integration
            </h3>
            <p className="text-muted-foreground mb-6">
              Connect your POS, choose your platform, and start chatting. No technical setup, no training required.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Works with all major POS systems</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Secure data encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>24/7 support</span>
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
