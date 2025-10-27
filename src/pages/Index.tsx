import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ConversationVsDashboardSection } from "@/components/ConversationVsDashboardSection";
import { SolutionSection } from "@/components/SolutionSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PlatformIntegrationSection } from "@/components/PlatformIntegrationSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { WhyChooseInviSection } from "@/components/WhyChooseInviSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Problems & Solution */}
      <div className="bg-gradient-to-b from-background to-muted/30">
        <ProblemSection />
        <ConversationVsDashboardSection />
      </div>
      
      {/* Product Details */}
      <SolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      
      {/* Social Proof */}
      <div className="bg-gradient-to-b from-background to-muted/30">
        <StatsSection />
        <TestimonialsSection />
      </div>
      
      {/* Platform & Pricing */}
      <PlatformIntegrationSection />
      <PricingSection />
      
      {/* Final Conversion */}
      <FAQSection />
      <WhyChooseInviSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
