import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { HowInviWorksSection } from "@/components/HowInviWorksSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* How Invi Works */}
      <HowInviWorksSection />
      
      {/* Social Proof */}
      <TestimonialsSection />
      
      {/* Final CTA */}
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
