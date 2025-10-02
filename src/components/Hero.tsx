import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

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
              Your AI Store Manager{" "}
              <span className="text-gradient">That Never Sleeps</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Real-time inventory tracking, smart forecasting, and automated ordering for
              fast-moving retail businesses. Never run out of stock again.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
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

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative glass rounded-2xl p-8 shadow-large">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center shadow-glow">
                    <span className="text-white font-bold text-3xl">I</span>
                  </div>
                  <p className="text-muted-foreground">Dashboard Preview</p>
                </div>
              </div>
              
              {/* Floating Stats Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass rounded-lg p-4 shadow-medium"
              >
                <div className="text-xs text-muted-foreground mb-1">Real-time Updates</div>
                <div className="text-2xl font-bold text-accent">Live</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 glass rounded-lg p-4 shadow-medium"
              >
                <div className="text-xs text-muted-foreground mb-1">Items Tracked</div>
                <div className="text-2xl font-bold text-primary">1,247</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
