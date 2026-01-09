import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Heart, Leaf, Award, Users, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import DestinationCard from "@/components/shared/DestinationCard";
import TourCard from "@/components/shared/TourCard";
import TestimonialSlider from "@/components/shared/TestimonialSlider";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import { destinations, tours, partners } from "@/data/tourismData";
import heroImage from "@/assets/hero-rwanda.jpg";
import gorillaImg from "@/assets/gorilla-trekking.jpg";
import akageraImg from "@/assets/akagera-safari.jpg";
import nyungweImg from "@/assets/nyungwe-forest.jpg";
import lakeKivuImg from "@/assets/lake-kivu.jpg";
import kigaliNightImg from "@/assets/kigali-night.jpg";

const heroSlides = [
  {
    image: heroImage,
    subtitle: "Welcome to Rwanda",
    title: "Discover Rwanda",
    highlight: "The Land of a Thousand Hills",
    description: "Experience the magic of mountain gorillas, breathtaking landscapes, and vibrant culture. Your unforgettable African adventure starts here.",
  },
  {
    image: gorillaImg,
    subtitle: "Wildlife Adventure",
    title: "Meet the Gorillas",
    highlight: "Once in a Lifetime Experience",
    description: "Trek through misty forests to encounter endangered mountain gorillas in their natural habitat. An experience that will stay with you forever.",
  },
  {
    image: akageraImg,
    subtitle: "Safari Excellence",
    title: "Akagera Safari",
    highlight: "The Big Five Awaits",
    description: "Witness lions, elephants, rhinos, and more in Rwanda's stunning savanna. Experience Africa's finest wildlife in style.",
  },
  {
    image: nyungweImg,
    subtitle: "Nature's Paradise",
    title: "Nyungwe Forest",
    highlight: "Ancient Rainforest Magic",
    description: "Walk among chimpanzees and canopy walkways in one of Africa's oldest rainforests. Pure adventure awaits.",
  },
  {
    image: lakeKivuImg,
    subtitle: "Relaxation & Beauty",
    title: "Lake Kivu Escape",
    highlight: "Serenity on the Water",
    description: "Unwind on the shores of one of Africa's Great Lakes. Kayak, swim, and explore charming lakeside towns.",
  },
  {
    image: kigaliNightImg,
    subtitle: "Memorable Evenings",
    title: "Kigali Nightlife",
    highlight: "Experience the City After Dark",
    description: "Explore Kigali's vibrant nightlife, from lively bars to cultural performances and delicious local cuisine.",
  },
];

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance hero slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <Layout>
      {/* Hero Slider Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Images with Crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-secondary/30" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-accent text-sm font-semibold uppercase tracking-wider mb-4"
              >
                {heroSlides[currentSlide].subtitle}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 leading-tight"
              >
                {heroSlides[currentSlide].title}
                <br />
                <span className="text-accent">{heroSlides[currentSlide].highlight}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-card/90 text-lg md:text-xl mb-8 leading-relaxed"
              >
                {heroSlides[currentSlide].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
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
                  className="text-lg px-8 border-card hover:bg-card hover:text-foreground"
                >
                  <Link to="/booking">Book Now</Link>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Navigation Arrows */}
        <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between z-20 pointer-events-none">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm border border-card/30 flex items-center justify-center text-card hover:bg-card/40 transition-all pointer-events-auto group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm border border-card/30 flex items-center justify-center text-card hover:bg-card/40 transition-all pointer-events-auto group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-10 bg-accent"
                  : "w-2 bg-card/50 hover:bg-card/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentSlide && (
                <motion.div
                  className="absolute inset-0 bg-accent rounded-full"
                  layoutId="activeSlide"
                />
              )}
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
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

      {/* Partners Infinite Scroll */}
      <section className="py-16 bg-accent/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-12 font-medium">
            Trusted by Leading Tourism Organizations
          </p>
          <div className="w-full overflow-hidden relative">
            <div className="flex gap-12 partner-scroll">
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center gap-3"
                >
                  <div className="w-48 h-48 bg-card rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow border border-primary/10 overflow-hidden">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 p-4"
                    />
                  </div>
                  <p className="text-sm font-medium text-foreground text-center max-w-[200px]">
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </Layout>
  );
};

export default Index;
