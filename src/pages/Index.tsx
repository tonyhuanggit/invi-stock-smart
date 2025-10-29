import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { MessageSquare, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const keyFeatures = [
    {
      icon: MessageSquare,
      title: "Conversational AI",
      description: "Ask questions in plain English, get instant inventory insights without complex dashboards.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Forecasting",
      description: "AI-powered forecasts help you optimize stock levels and reduce waste by 15-30%.",
    },
    {
      icon: Zap,
      title: "Instant Integration",
      description: "Connect your POS and e-commerce platforms in minutes, no technical setup required.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Problem & Solution */}
      <div className="bg-gradient-to-b from-background to-muted/30">
        <ProblemSection />
        <SolutionSection />
      </div>
      
      {/* Three Key Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Invi combines powerful AI with simple interfaces to transform how you manage inventory.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 border-border/50">
                  <div className="w-14 h-14 invi-glow-bubble flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Social Proof */}
      <div className="bg-gradient-to-b from-background to-muted/30">
        <StatsSection />
        <TestimonialsSection />
      </div>
      
      {/* Final CTA */}
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
