import { motion } from "framer-motion";
import { Target, Eye, Heart, Leaf, Users, Award } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/shared/CTASection";
import heroImage from "@/assets/cultural-dance.jpg";
import culturalImg from "@/assets/cultural-dance.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion for Rwanda",
    description: "We are deeply passionate about sharing the beauty and richness of our homeland with the world.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Every trip we plan supports conservation efforts and local community development.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We believe tourism should benefit local communities and preserve cultural heritage.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every detail, from planning to execution.",
  },
];

const About = () => {
  return (
    <Layout>
      <PageHero
        title="About Us"
        subtitle="Our Story"
        backgroundImage={heroImage}
      />

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Gateway to Authentic Rwanda Experiences
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in the heart of Kigali, Rwanda Explore Tours was born from 
                  a deep love for our homeland and a desire to share its wonders with 
                  the world. What started as a small family operation has grown into 
                  one of Rwanda's most trusted tourism consultancies.
                </p>
                <p>
                  Our team of passionate local experts brings decades of combined 
                  experience in wildlife conservation, cultural preservation, and 
                  sustainable tourism. We believe that travel should be transformative 
                  – for both the traveler and the communities they visit.
                </p>
                <p>
                  From the misty slopes of the Virunga Mountains where mountain gorillas 
                  roam, to the pristine waters of Lake Kivu, we craft journeys that go 
                  beyond sightseeing to create genuine connections with Rwanda's land, 
                  wildlife, and people.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={culturalImg}
                alt="Rwandan Culture"
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm opacity-80">Years of Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 md:p-12 rounded-xl shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional, sustainable travel experiences that showcase 
                the natural beauty and cultural richness of Rwanda while contributing 
                to conservation efforts and empowering local communities. We aim to 
                transform every journey into an unforgettable adventure that leaves 
                a positive impact.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-8 md:p-12 rounded-xl shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading sustainable tourism company in East Africa, 
                recognized globally for our commitment to conservation, community 
                empowerment, and creating authentic travel experiences. We envision 
                a future where tourism serves as a powerful force for positive change 
                in Rwanda and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Values"
            title="What Drives Us"
            description="These core values guide everything we do, from planning your itinerary to supporting local communities."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Leaf className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Our Commitment to Sustainability
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                We believe that responsible tourism can be a powerful force for 
                conservation and community development. A portion of every booking 
                goes directly to wildlife conservation projects and local community 
                initiatives. We partner with eco-certified lodges, minimize our 
                environmental footprint, and ensure that your visit creates positive 
                change for Rwanda's future.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold mb-2">50%</div>
                  <div className="text-primary-foreground/70">
                    Of profits support conservation
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <div className="text-primary-foreground/70">
                    Local families supported
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">0</div>
                  <div className="text-primary-foreground/70">
                    Single-use plastics on tours
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Journey"
        description="Experience Rwanda with a company that cares about conservation and community as much as you do."
        primaryCTA="Plan Your Trip"
      />
    </Layout>
  );
};

export default About;
