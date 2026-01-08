import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/data/tourismData";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
}

const CTASection = ({
  title = "Ready to Explore Rwanda?",
  description = "Let us help you plan the adventure of a lifetime. Contact our travel experts today.",
  primaryCTA = "Start Planning",
  secondaryCTA = "Call Us Now",
}: CTASectionProps) => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            {title}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8"
            >
              <Link to="/contact" className="flex items-center gap-2">
                {primaryCTA}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                {secondaryCTA}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
