import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, DollarSign, ArrowRight } from "lucide-react";
import { Tour } from "@/data/tourismData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TourCardProps {
  tour: Tour;
  index: number;
}

const TourCard = ({ tour, index }: TourCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
          {tour.category}
        </Badge>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {tour.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {tour.description}
        </p>
        
        {/* Meta */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold text-primary">
            <DollarSign className="w-4 h-4" />
            <span>From ${tour.price}</span>
          </div>
        </div>
        
        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tour.highlights.slice(0, 3).map((highlight) => (
            <span
              key={highlight}
              className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full"
            >
              {highlight}
            </span>
          ))}
        </div>
        
        {/* CTA */}
        <Button asChild variant="outline" className="w-full group/btn">
          <Link to={`/tours/${tour.id}`} className="flex items-center justify-center gap-2">
            View Details
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default TourCard;
