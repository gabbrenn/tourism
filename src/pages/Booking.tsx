import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plane, Map, Hotel, Car, FileCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/lake-kivu.jpg";
import gorillaImg from "@/assets/gorilla-trekking.jpg";
import akageraImg from "@/assets/akagera-safari.jpg";
import rwandairImg from "@/assets/rwandair.jpg";
import nyungweImg from "@/assets/nyungwe-forest.jpg";
import culturalImg from "@/assets/cultural-dance.jpg";
import radissonImg from "@/assets/Radisson.jpg";
import safariCarImg from "@/assets/safari-car.jpg";

const bookingOptions = [
  {
    id: "tours",
    title: "Book a Tour",
    description: "Choose from our curated tour packages or request a custom itinerary tailored to your preferences.",
    icon: Map,
    link: "/booking/tour",
    image: gorillaImg,
    features: ["Gorilla Trekking", "Safari Adventures", "Cultural Tours", "Custom Itineraries"],
  },
  {
    id: "flights",
    title: "Flight Assistance",
    description: "Get help with flight bookings, airport transfers, and travel logistics to Rwanda.",
    icon: Plane,
    link: "/booking/flight",
    image: rwandairImg,
    features: ["Flight Search", "Best Routes", "Airport Transfers", "Travel Planning"],
  },
  {
    id: "accommodation",
    title: "Accommodation",
    description: "Browse and book from our selection of luxury lodges, eco-camps, and boutique hotels.",
    icon: Hotel,
    link: "/booking/tour?step=accommodation",
    image: radissonImg,
    features: ["Luxury Lodges", "Eco-Camps", "Boutique Hotels", "Budget Options"],
  },
  {
    id: "transfers",
    title: "Transfers & Transport",
    description: "Arrange airport pickups, inter-city transfers, and private vehicle hire.",
    icon: Car,
    link: "/booking/tour?step=extras",
    image: safariCarImg,
    features: ["Airport Pickup", "Private Vehicles", "Driver Guides", "Group Transport"],
  },
];

const bookingSteps = [
  {
    step: 1,
    title: "Choose Your Experience",
    description: "Select from our tours or customize your own adventure",
  },
  {
    step: 2,
    title: "Select Dates & Travelers",
    description: "Pick your preferred travel dates and group size",
  },
  {
    step: 3,
    title: "Add Extras",
    description: "Enhance your trip with accommodations, transfers, and activities",
  },
  {
    step: 4,
    title: "Review & Submit",
    description: "Confirm details and submit your booking request",
  },
];

const Booking = () => {
  return (
    <Layout>
      <PageHero
        title="Book Your Adventure"
        subtitle="Start Your Journey"
        backgroundImage={heroImage}
      />

      {/* Booking Options Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4"
            >
              What Would You Like to Book?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Choose Your Booking Type
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Whether you're looking for a complete tour package, flight assistance, or just accommodations, we've got you covered.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookingOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Image with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-white">{option.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full group/btn">
                    <Link to={option.link} className="flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/30 to-primary/10 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4"
            >
              Simple Process
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              How Booking Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Our booking process is designed to be simple and stress-free. Here's how it works:
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookingSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-card rounded-xl p-6 text-center h-full shadow-lg hover:shadow-xl transition-shadow border border-primary/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index < bookingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-md">
                      <ArrowRight className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                Why Book With Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Rwanda Travel Partner
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Guaranteed Best Prices</h3>
                    <p className="text-muted-foreground text-sm">
                      We offer competitive rates with no hidden fees. Price match guarantee on all tours.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Flexible Cancellation</h3>
                    <p className="text-muted-foreground text-sm">
                      Plans change. Enjoy free cancellation up to 30 days before your trip.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Expert Local Support</h3>
                    <p className="text-muted-foreground text-sm">
                      Our team in Kigali is available 24/7 to assist you before and during your trip.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Secure Payment</h3>
                    <p className="text-muted-foreground text-sm">
                      Your payment information is protected with bank-level security.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={heroImage}
                alt="Rwanda Adventure"
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">500+</div>
                <div className="text-sm">Happy Travelers</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Booking CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4"
          >
            Ready to Start Your Adventure?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 mb-8 max-w-xl mx-auto"
          >
            Book your tour now or contact us for a custom itinerary. Our travel experts are ready to help.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" variant="secondary">
              <Link to="/booking/tour">Book a Tour</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
