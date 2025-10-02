import { motion } from "framer-motion";
import { ChatBubble, ChatContainer, TypingIndicator } from "@/components/ui/chat-bubble";
import { Bell, PackageCheck, TrendingUp, AlertCircle, MessageSquare, Zap } from "lucide-react";

const scenarios = [
  {
    icon: Bell,
    title: "Morning Stock Alert",
    messages: [
      { text: "Good morning! ☀️ Quick heads up:", isUser: false, time: "8:02 AM" },
      { text: "• Matcha powder running low (12 units left)\n• Brown sugar down to 8 bags\n• Boba pearls good for 3 more days", isUser: false, time: "8:02 AM" },
      { text: "Want me to order the usual amounts?", isUser: false, time: "8:02 AM" },
      { text: "Yes, go ahead", isUser: true, time: "8:05 AM" },
      { text: "Done! 🎯 Orders sent to both suppliers. Delivery expected Thursday.", isUser: false, time: "8:05 AM" }
    ]
  },
  {
    icon: PackageCheck,
    title: "Delivery Verification",
    messages: [
      { text: "Delivery arrived from Boba Express 📦", isUser: false, time: "11:23 AM" },
      { text: "Checked the invoice - they sent 18 bags of tapioca instead of 20.", isUser: false, time: "11:23 AM" },
      { text: "Should I flag this?", isUser: false, time: "11:23 AM" },
      { text: "Yes please", isUser: true, time: "11:30 AM" },
      { text: "Flagged! I've documented it and notified the supplier. Saved you $47. 💰", isUser: false, time: "11:30 AM" }
    ]
  },
  {
    icon: TrendingUp,
    title: "Trend Alert",
    messages: [
      { text: "Hey! 🔥 Seeing a spike in strawberry matcha orders today", isUser: false, time: "2:45 PM" },
      { text: "Up 220% vs usual Tuesday. Might be going viral on TikTok.", isUser: false, time: "2:45 PM" },
      { text: "Current stock will run out by 6pm at this rate. Want to prep more?", isUser: false, time: "2:46 PM" },
      { text: "Good catch! Prep double batch", isUser: true, time: "2:50 PM" },
      { text: "Smart move! 👍 I'll monitor and alert you if we need more ingredients.", isUser: false, time: "2:50 PM" }
    ]
  },
  {
    icon: AlertCircle,
    title: "Waste Tracking",
    messages: [
      { text: "End of day check-in 🌙", isUser: false, time: "9:15 PM" },
      { text: "Noticed 6 taro milk teas marked as waste today. That's up from your usual 2-3.", isUser: false, time: "9:15 PM" },
      { text: "Been happening Tuesdays lately. Maybe prep less taro on slower days?", isUser: false, time: "9:16 PM" },
      { text: "That makes sense, let's adjust", isUser: true, time: "9:20 PM" },
      { text: "Updated! I'll reduce Tuesday taro prep by 30%. Let's see if that helps. 📊", isUser: false, time: "9:20 PM" }
    ]
  },
  {
    icon: MessageSquare,
    title: "Quick Question",
    messages: [
      { text: "How many cups of mango left?", isUser: true, time: "3:12 PM" },
      { text: "You have 47 cups of mango puree in stock. At today's pace, that's enough for ~130 drinks. 🥭", isUser: false, time: "3:12 PM" },
      { text: "Should last through tomorrow, but I can order more if you're expecting a busy weekend.", isUser: false, time: "3:12 PM" }
    ]
  },
  {
    icon: Zap,
    title: "Anomaly Detection",
    messages: [
      { text: "🚨 Heads up - something unusual", isUser: false, time: "4:33 PM" },
      { text: "The POS shows 23 large boba pearls sold, but inventory only dropped by 11.", isUser: false, time: "4:33 PM" },
      { text: "Either there's a counting error or someone forgot to log a restock. Want me to investigate?", isUser: false, time: "4:34 PM" },
      { text: "Yes check the logs", isUser: true, time: "4:40 PM" },
      { text: "Found it! Staff restocked at 3pm but didn't update the system. Fixed the count. ✅", isUser: false, time: "4:41 PM" }
    ]
  }
];

export const ChatScenariosSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-semibold">Real Conversations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            How Invi <span className="text-gradient">Talks to You</span> Throughout the Day
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Natural conversations that feel like texting a helpful coworker, not using enterprise software.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <scenario.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg">{scenario.title}</h3>
              </div>

              <ChatContainer className="flex-1">
                {scenario.messages.map((msg, msgIndex) => (
                  <ChatBubble
                    key={msgIndex}
                    message={msg.text}
                    isUser={msg.isUser}
                    timestamp={msg.time}
                  />
                ))}
              </ChatContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
