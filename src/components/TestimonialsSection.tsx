import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Chen",
    business: "Bubble Bliss Tea",
    type: "Boba Shop",
    quote: "I literally just text Invi like it's my assistant. 'Hey, order more matcha' and it's done. No app to open, no forms to fill. It's honestly magic.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Marcus Rivera",
    business: "Scoops & Dreams",
    type: "Ice Cream Parlor",
    quote: "Invi messages me when we're running low before I even notice. It's proactive, conversational, and way easier than any dashboard I've used. Feels like having a smart coworker on text.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Jennifer Park",
    business: "Park's Corner Market",
    type: "Retail SMB",
    quote: "My team loves it because they can just ask questions naturally. 'How many apples left?' Done. No training needed, everyone gets it instantly.",
    rating: 5,
    avatar: "JP",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6"
          >
            <span className="text-sm font-semibold">Testimonials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Loved by <span className="text-gradient">Business Owners</span> Like You
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            See what our customers are saying about their experience with Invi.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-5 rounded-xl shadow-soft border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-medium"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-foreground mb-5 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white text-sm font-bold shadow-md">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.business}
                  </div>
                  <div className="text-[10px] text-primary">{testimonial.type}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
