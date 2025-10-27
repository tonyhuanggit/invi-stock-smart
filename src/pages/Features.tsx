import { Navigation } from "@/components/Navigation";
import { FeaturesSection } from "@/components/FeaturesSection";
import { WhyChooseInviSection } from "@/components/WhyChooseInviSection";
import { Footer } from "@/components/Footer";

const Features = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <FeaturesSection />
        <WhyChooseInviSection />
      </div>
      <Footer />
    </div>
  );
};

export default Features;
