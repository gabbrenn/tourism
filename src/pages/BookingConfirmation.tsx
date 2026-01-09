import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Calendar,
  Users,
  MapPin,
  Mail,
  Phone,
  Download,
  Printer,
  Share2,
  Home,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/data/tourismData";
import { format } from "date-fns";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state?.bookingData;
  const selectedTourData = location.state?.selectedTourData;
  const total = location.state?.total;

  // Generate a random booking reference
  const bookingRef = `RWE-${Date.now().toString(36).toUpperCase()}-${Math.random()
    .toString(36)
    .substring(2, 6)
    .toUpperCase()}`;

  useEffect(() => {
    // If no booking data, redirect to booking page
    if (!bookingData) {
      navigate("/booking");
    }
  }, [bookingData, navigate]);

  if (!bookingData) {
    return null;
  }

  const nextSteps = [
    {
      step: 1,
      title: "Confirmation Email",
      description:
        "Check your inbox for a detailed confirmation email with your booking reference.",
    },
    {
      step: 2,
      title: "Our Team Reviews",
      description:
        "Our travel experts will review your request and verify availability within 24 hours.",
    },
    {
      step: 3,
      title: "Personalized Itinerary",
      description:
        "You'll receive a customized itinerary with day-by-day details and accommodation options.",
    },
    {
      step: 4,
      title: "Secure Your Booking",
      description:
        "Once you approve the itinerary, we'll send a secure payment link to confirm your reservation.",
    },
  ];

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-green-50 to-background dark:from-green-950/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            {/* Success Header */}
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
              </motion.div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Booking Request Submitted!
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Thank you for choosing Rwanda Explore Tours. We've received your
                booking request and will get back to you within 24 hours.
              </p>
            </div>

            {/* Booking Reference Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-xl shadow-lg overflow-hidden mb-8"
            >
              <div className="bg-primary p-6 text-primary-foreground text-center">
                <p className="text-sm opacity-80 mb-1">Booking Reference</p>
                <p className="text-2xl md:text-3xl font-bold font-mono tracking-wider">
                  {bookingRef}
                </p>
              </div>

              <div className="p-6 md:p-8">
                {/* Tour Details */}
                {selectedTourData && (
                  <div className="flex gap-4 pb-6 border-b">
                    <img
                      src={selectedTourData.image}
                      alt={selectedTourData.title}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground">
                        {selectedTourData.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {selectedTourData.duration} • {selectedTourData.category}
                      </p>
                      <p className="text-primary font-semibold mt-1">
                        Estimated Total: ${total?.toFixed(0) || "TBD"}
                      </p>
                    </div>
                  </div>
                )}

                {/* Booking Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-b">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Travel Date</p>
                      <p className="font-semibold text-foreground">
                        {bookingData.travelDate
                          ? format(new Date(bookingData.travelDate), "PPP")
                          : "Flexible dates"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Travelers</p>
                      <p className="font-semibold text-foreground">
                        {bookingData.adults} Adult{bookingData.adults > 1 ? "s" : ""}
                        {bookingData.children > 0 &&
                          `, ${bookingData.children} Child${
                            bookingData.children > 1 ? "ren" : ""
                          }`}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold text-foreground">
                        {bookingData.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-semibold text-foreground">
                        {bookingData.phone}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Guest Details */}
                <div className="py-6 border-b">
                  <h4 className="font-semibold text-foreground mb-3">
                    Guest Information
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Name:</span>
                      <span className="ml-2 text-foreground">
                        {bookingData.firstName} {bookingData.lastName}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Country:</span>
                      <span className="ml-2 text-foreground">
                        {bookingData.country}
                      </span>
                    </div>
                  </div>
                  {bookingData.specialRequests && (
                    <div className="mt-3">
                      <span className="text-muted-foreground text-sm">
                        Special Requests:
                      </span>
                      <p className="text-foreground text-sm mt-1">
                        {bookingData.specialRequests}
                      </p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-6">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Printer className="w-4 h-4 mr-2" />
                    Print
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* What's Next Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-xl p-6 md:p-8 shadow-lg mb-8"
            >
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                What Happens Next?
              </h3>
              <div className="space-y-6">
                {nextSteps.map((item, index) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-primary/10 rounded-xl p-6 md:p-8 text-center"
            >
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                Have Questions?
              </h3>
              <p className="text-muted-foreground mb-4">
                Our travel experts are here to help. Reach out anytime!
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  {companyInfo.phone}
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link to="/" className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Return Home
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/tours" className="flex items-center gap-2">
                    Explore More Tours
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BookingConfirmation;
