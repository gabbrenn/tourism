import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Destination } from "@/data/tourismData";

interface DestinationCardProps {
  destination: Destination;
  index: number;
}

const DestinationCard = ({ destination, index }: DestinationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl shadow-lg"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="flex items-center gap-2 text-accent mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium">Rwanda</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-card mb-2">
          {destination.name}
        </h3>
        <p className="text-card/80 text-sm mb-4 line-clamp-2">
          {destination.description}
        </p>
        <Link
          to={`/destinations#${destination.id}`}
          className="inline-flex items-center gap-2 text-primary-foreground font-medium hover:gap-3 transition-all"
        >
          Explore <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
