import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const CTASection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list!",
        description: "We'll notify you about updates and early access.",
      });
      setEmail("");
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-primary opacity-5" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="glass rounded-3xl p-12 shadow-large border-2 border-primary/20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Stop Guessing. <span className="text-gradient text-slate-950">Start Knowing.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              See what Invi can do for your store. Text the demo and experience AI inventory management in 30 seconds.
            </p>

            {/* Primary CTA - Demo Number */}
            <div className="mb-8">
              <Button variant="hero" size="xl" asChild className="mb-3">
                <a href="sms:+13053369541">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Text the Demo: +1 (305) 336-9541
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Open iMessage and text this number — Invi responds in seconds
              </p>
            </div>

            {/* Secondary CTA - Email for Updates */}
            <div className="border-t border-border pt-8">
              <p className="text-sm font-medium text-foreground mb-4">
                Want to get notified about updates and early access?
              </p>
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-12 px-4 rounded-lg"
                  />
                  <Button variant="default" size="lg" type="submit">
                    Get Updates
                  </Button>
                </div>
              </form>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-wrap justify-center gap-8 items-center">
                <div className="text-sm text-muted-foreground">📱 Works in iMessage</div>
                <div className="text-sm text-muted-foreground">📊 Your data in Google Sheets</div>
                <div className="text-sm text-muted-foreground">⚡ Responds in seconds</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
