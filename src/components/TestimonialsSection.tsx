import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Chen",
    business: "Bubble Bliss Tea",
    type: "Boba Shop",
    quote: "Invi cut our inventory costs by 30% in the first month. It predicted the matcha shortage before it hit and we stocked up early. Game changer for our 3 locations.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Marcus Rivera",
    business: "Scoops & Dreams",
    type: "Ice Cream Parlor",
    quote: "We used to run out of popular flavors every weekend. Now Invi knows our patterns better than we do. Waste is down, sales are up, and I actually get to sleep.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Jennifer Park",
    business: "Park's Corner Market",
    type: "Retail SMB",
    quote: "The invoice verification feature alone saved us $8,000 last quarter by catching delivery errors. It's like having an accountant that never takes a break.",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl shadow-soft border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-medium"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold shadow-md">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.business}
                  </div>
                  <div className="text-xs text-primary">{testimonial.type}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
