import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TestimonialsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6"
          >
            <span className="text-sm font-semibold">Try It Yourself</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Don't Take Our Word for It — <span className="text-gradient">Try Invi Now</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            The best way to understand Invi is to text it. Send a message and see the magic happen.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-card p-8 rounded-2xl shadow-large border border-border text-center">
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-glow">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Text the Live Demo</h3>
            <p className="text-muted-foreground mb-6">
              Open iMessage and text Invi. Try logging counts, asking what's low, or requesting a reorder list.
            </p>
            <Button variant="hero" size="xl" asChild className="mb-4">
              <a href="sms:+13053369541">
                Text +1 (305) 336-9541
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              No signup required. Just text and see.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
