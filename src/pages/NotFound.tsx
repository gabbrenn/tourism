import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="font-serif text-8xl md:text-9xl font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          The page you're looking for seems to have wandered off into the 
          Rwandan hills. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/tours" className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Explore Tours
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;