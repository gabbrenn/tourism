import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Compass, 
  PawPrint, 
  Users, 
  Hotel, 
  Car, 
  FileText, 
  Briefcase,
  ArrowRight 
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-rwanda.jpg";

const services = [
  {
    icon: Compass,
    title: "Tour & Safari Packages",
    description: "Expertly crafted tours covering Rwanda's most spectacular destinations. From wildlife safaris to cultural immersions, we design comprehensive packages that showcase the best of Rwanda.",
    features: [
      "Multi-day adventure tours",
      "Luxury and budget options",
      "Small group departures",
      "Private custom itineraries",
    ],
  },
  {
    icon: PawPrint,
    title: "Gorilla Trekking",
    description: "Experience the magic of encountering mountain gorillas in their natural habitat. We handle permit bookings, guide arrangements, and logistics for an unforgettable wildlife encounter.",
    features: [
      "Gorilla permit assistance",
      "Expert trekking guides",
      "Premium lodging options",
      "Photography tips",
    ],
  },
  {
    icon: Users,
    title: "Cultural & Community Tours",
    description: "Connect with Rwanda's rich cultural heritage through authentic community experiences. Visit traditional villages, witness ceremonial dances, and learn about local crafts.",
    features: [
      "Village homestays",
      "Traditional dance performances",
      "Craft workshops",
      "Coffee & tea plantation tours",
    ],
  },
  {
    icon: Hotel,
    title: "Hotel & Lodge Booking",
    description: "From luxury lodges perched on volcanic slopes to boutique hotels in Kigali, we curate accommodations that complement your journey perfectly.",
    features: [
      "Luxury safari lodges",
      "Eco-friendly camps",
      "Boutique city hotels",
      "Lakeside resorts",
    ],
  },
  {
    icon: Car,
    title: "Airport Transfers",
    description: "Seamless transportation from the moment you land. Our reliable drivers and comfortable vehicles ensure stress-free travel throughout your Rwanda adventure.",
    features: [
      "Kigali airport pickups",
      "Comfortable 4x4 vehicles",
      "Professional drivers",
      "Flexible scheduling",
    ],
  },
  {
    icon: FileText,
    title: "Visa & Travel Consultancy",
    description: "Navigate visa requirements and travel documentation with ease. Our consultancy services ensure your paperwork is in order before you arrive.",
    features: [
      "Visa application assistance",
      "Travel insurance guidance",
      "Health & safety advice",
      "Pre-trip consultations",
    ],
  },
  {
    icon: Briefcase,
    title: "Corporate & Group Travel",
    description: "Tailored solutions for business retreats, conferences, and large group expeditions. We handle the logistics so you can focus on your objectives.",
    features: [
      "Conference arrangements",
      "Team building activities",
      "Incentive travel packages",
      "Large group coordination",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <PageHero
        title="Our Services"
        subtitle="What We Offer"
        backgroundImage={heroImage}
      />

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Complete Travel Solutions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Everything You Need for Your Rwanda Adventure
            </h2>
            <p className="text-muted-foreground text-lg">
              From planning to execution, we provide comprehensive travel services 
              tailored to your needs. Let us handle the details while you focus on 
              making memories.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 bg-card p-8 md:p-12 rounded-xl shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline">
                    <Link to="/contact" className="flex items-center gap-2">
                      Inquire Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex-1 hidden lg:block">
                  <div className="aspect-square bg-accent/50 rounded-xl flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-primary/30" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Planning?"
        description="Let our expert team craft the perfect Rwanda experience for you."
      />
    </Layout>
  );
};

export default Services;
