import { Navigation } from "@/components/Navigation";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <PricingSection />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
