import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import { destinations } from "@/data/tourismData";
import heroImage from "@/assets/hero-rwanda.jpg";

const Destinations = () => {
  return (
    <Layout>
      <PageHero
        title="Destinations"
        subtitle="Explore Rwanda"
        backgroundImage={heroImage}
      />

      {/* Destinations Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Discover Rwanda
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Rwanda's Must-Visit Destinations
            </h2>
            <p className="text-muted-foreground text-lg">
              From volcanic peaks to pristine lakes, explore the diverse 
              landscapes and unique experiences that await in the Land of 
              a Thousand Hills.
            </p>
          </div>

          {/* Destination Details */}
          <div className="space-y-24">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                id={destination.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Rwanda
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {destination.name}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {destination.description}
                  </p>

                  <h4 className="font-semibold text-foreground mb-4">
                    Highlights
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {destination.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild size="lg">
                    <Link to="/tours" className="flex items-center gap-2">
                      Explore Tours Here
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Plan Your Rwanda Adventure"
        description="Let us help you explore these incredible destinations with expertly crafted tours."
      />
    </Layout>
  );
};

export default Destinations;
