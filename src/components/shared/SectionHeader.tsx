import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader = ({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("mb-12", centered && "text-center")}
    >
      {subtitle && (
        <span
          className={cn(
            "inline-block text-sm font-semibold uppercase tracking-wider mb-3",
            light ? "text-accent-foreground" : "text-primary"
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
          light ? "text-card" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg max-w-2xl leading-relaxed",
            centered && "mx-auto",
            light ? "text-card/80" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
