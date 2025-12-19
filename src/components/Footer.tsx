import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Community", href: "#" },
    { name: "API", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Security", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg gradient-primary flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg md:text-xl">I</span>
              </div>
              <span className="text-[22px] md:text-2xl font-bold">Invi</span>
            </div>
            <p className="text-muted-foreground text-[13px] md:text-sm mb-6">
              Your AI-powered inventory management teammate, working 24/7 to keep your business stocked and profitable.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2.5 md:gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all hover:shadow-md group"
                >
                  <social.icon className="w-[18px] h-[18px] md:w-5 md:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-[15px] md:text-base">Product</h3>
            <ul className="space-y-2.5 md:space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-[13px] md:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-[15px] md:text-base">Company</h3>
            <ul className="space-y-2.5 md:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-[13px] md:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-[15px] md:text-base">Resources</h3>
            <ul className="space-y-2.5 md:space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-[13px] md:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-[15px] md:text-base">Legal</h3>
            <ul className="space-y-2.5 md:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-[13px] md:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-7 md:pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-muted-foreground text-[13px] md:text-sm">
              © {new Date().getFullYear()} Invi. All rights reserved.
            </p>
            <p className="text-muted-foreground text-[13px] md:text-sm">
              Built with ❤️ for retail businesses worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
