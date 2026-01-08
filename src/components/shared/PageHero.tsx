import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {subtitle && (
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              {subtitle}
            </span>
          )}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-card">
            {title}
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
