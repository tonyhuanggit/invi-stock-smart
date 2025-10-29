import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const benefits = ["14-day free trial, no credit card required", "Setup in under 10 minutes", "Cancel anytime"];
export const CTASection = () => {
  const [email, setEmail] = useState("");
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "We'll be in touch soon to get you started."
      });
      setEmail("");
    }
  };
  return <section id="contact" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-primary opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-12 shadow-large border-2 border-primary/20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Stop Guessing. <span className="text-gradient text-slate-950">Start Knowing.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses running smarter inventory with AI-powered insights and automation.
            </p>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              {benefits.map(benefit => <div key={benefit} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>)}
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="Enter your work email" value={email} onChange={e => setEmail(e.target.value)} required className="flex-1 h-12 px-4 rounded-lg" />
                <Button variant="hero" size="lg" type="submit" className="group">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Text with Invi
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Start your free trial today. No credit card required.
              </p>
            </form>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-wrap justify-center gap-8 items-center">
                <div className="text-sm text-muted-foreground">🔒 Bank-level Security</div>
                <div className="text-sm text-muted-foreground">⚡ 99.9% Uptime</div>
                <div className="text-sm text-muted-foreground">💬 24/7 Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};