import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import TourCard from "@/components/shared/TourCard";
import CTASection from "@/components/shared/CTASection";
import { tours } from "@/data/tourismData";
import heroImage from "@/assets/akagera-safari.jpg";

const categories = ["All", "Gorilla Trekking", "Safari", "Adventure", "Cultural", "Relaxation", "Comprehensive"];

const Tours = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTours = activeCategory === "All"
    ? tours
    : tours.filter((tour) => tour.category === activeCategory);

  return (
    <Layout>
      <PageHero
        title="Tour Packages"
        subtitle="Explore Our Tours"
        backgroundImage={heroImage}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Tours Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTours.map((tour, index) => (
              <TourCard key={tour.id} tour={tour} index={index} />
            ))}
          </motion.div>

          {filteredTours.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No tours found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Can't Find What You're Looking For?"
        description="We specialize in custom itineraries. Tell us your dream Rwanda adventure and we'll make it happen."
        primaryCTA="Request Custom Tour"
      />
    </Layout>
  );
};

export default Tours;
