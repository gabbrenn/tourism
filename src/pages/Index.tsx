import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Heart, Leaf, Award, Users, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import DestinationCard from "@/components/shared/DestinationCard";
import TourCard from "@/components/shared/TourCard";
import TestimonialSlider from "@/components/shared/TestimonialSlider";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import { destinations, tours, partners } from "@/data/tourismData";
import heroImage from "@/assets/hero-rwanda.jpg";

const features = [
  {
    icon: Shield,
    title: "Expert Local Guides",
    description: "Knowledgeable guides with deep understanding of Rwanda's wildlife and culture.",
  },
  {
    icon: Heart,
    title: "Authentic Experiences",
    description: "Genuine connections with local communities and immersive cultural encounters.",
  },
  {
    icon: Leaf,
    title: "Sustainable Tourism",
    description: "Committed to conservation and supporting local communities.",
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Recognized excellence in crafting unforgettable Rwanda journeys.",
  },
  {
    icon: Users,
    title: "Personalized Trips",
    description: "Tailor-made itineraries designed around your interests and preferences.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your entire journey.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Rwanda Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Welcome to Rwanda
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 leading-tight">
              Discover Rwanda
              <br />
              <span className="text-accent">The Land of a Thousand Hills</span>
            </h1>
            <p className="text-card/90 text-lg md:text-xl mb-8 leading-relaxed">
              Experience the magic of mountain gorillas, breathtaking landscapes,
              and vibrant culture. Your unforgettable African adventure starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/tours" className="flex items-center gap-2">
                  Explore Tours
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 border-card text-card hover:bg-card hover:text-foreground"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-card/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-card rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Top Destinations"
            title="Explore Rwanda's Natural Wonders"
            description="From misty volcanic peaks to pristine rainforests, discover the destinations that make Rwanda truly extraordinary."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                index={index}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/destinations" className="flex items-center gap-2">
                View All Destinations
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Why Choose Us"
            title="Your Trusted Rwanda Travel Partner"
            description="With years of experience and a passion for Rwanda, we craft journeys that create lasting memories."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Popular Tours"
            title="Unforgettable Rwanda Experiences"
            description="Handpicked tours designed to showcase the best of Rwanda's wildlife, nature, and culture."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.slice(0, 6).map((tour, index) => (
              <TourCard key={tour.id} tour={tour} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/tours" className="flex items-center gap-2">
                View All Tours
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Testimonials"
            title="What Our Guests Say"
            description="Hear from travelers who have experienced the magic of Rwanda with us."
          />
          <TestimonialSlider />
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-8 font-medium">
            Trusted by Leading Tourism Organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-20 h-20 bg-card rounded-full flex items-center justify-center shadow-sm"
              >
                <span className="font-bold text-primary text-lg">
                  {partner.logo}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </Layout>
  );
};

export default Index;
