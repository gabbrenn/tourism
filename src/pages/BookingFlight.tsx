import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Plane,
  Calendar,
  Users,
  ArrowRight,
  ArrowLeftRight,
  MapPin,
  Clock,
  Info,
  CheckCircle2,
  Globe,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { companyInfo } from "@/data/tourismData";
import heroImage from "@/assets/rwandair.jpg";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const popularRoutes = [
  {
    from: "New York (JFK)",
    to: "Kigali (KGL)",
    airlines: ["Ethiopian Airlines", "Qatar Airways", "KLM"],
    avgPrice: "$850",
    duration: "15-18 hours",
  },
  {
    from: "London (LHR)",
    to: "Kigali (KGL)",
    airlines: ["RwandAir", "Kenya Airways", "Ethiopian Airlines"],
    avgPrice: "£650",
    duration: "10-14 hours",
  },
  {
    from: "Dubai (DXB)",
    to: "Kigali (KGL)",
    airlines: ["RwandAir", "flydubai"],
    avgPrice: "$450",
    duration: "6-8 hours",
  },
  {
    from: "Amsterdam (AMS)",
    to: "Kigali (KGL)",
    airlines: ["KLM"],
    avgPrice: "€700",
    duration: "9-11 hours",
  },
];

const flightTips = [
  {
    title: "Best Time to Book",
    description:
      "Book 2-3 months in advance for the best prices. Avoid peak seasons (June-September, December) for lower fares.",
  },
  {
    title: "Direct Flights",
    description:
      "RwandAir offers direct flights from many African and European cities. Ethiopian Airlines has the most connections from North America.",
  },
  {
    title: "Visa on Arrival",
    description:
      "Most nationalities can obtain a visa on arrival at Kigali International Airport for $50 USD (30 days).",
  },
  {
    title: "Airport Transfer",
    description:
      "We provide complimentary airport pickup with all tour packages. Kigali International Airport is just 10 km from the city center.",
  },
];

const BookingFlight = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("roundtrip");
  const [departureDate, setDepartureDate] = useState<Date | undefined>();
  const [returnDate, setReturnDate] = useState<Date | undefined>();
  const [passengers, setPassengers] = useState("1");
  const [cabinClass, setCabinClass] = useState("economy");
  const [fromCity, setFromCity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    additionalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <PageHero
          title="Flight Assistance"
          subtitle="Find Your Way to Rwanda"
          backgroundImage={heroImage}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Request Received!
                </h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for your flight inquiry. Our travel experts will
                  search for the best flight options for you and get back to you
                  within 24 hours with personalized recommendations.
                </p>
                <div className="bg-muted rounded-lg p-4 mb-6 text-left">
                  <h3 className="font-semibold mb-2">Your Request Summary:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      <strong>Route:</strong> {fromCity || "TBD"} → Kigali, Rwanda
                    </li>
                    <li>
                      <strong>Trip Type:</strong>{" "}
                      {tripType === "roundtrip" ? "Round Trip" : "One Way"}
                    </li>
                    <li>
                      <strong>Departure:</strong>{" "}
                      {departureDate ? format(departureDate, "PPP") : "Flexible"}
                    </li>
                    <li>
                      <strong>Passengers:</strong> {passengers}
                    </li>
                    <li>
                      <strong>Class:</strong>{" "}
                      {cabinClass.charAt(0).toUpperCase() + cabinClass.slice(1)}
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link to="/booking/tour">Book a Tour</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/">Return Home</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHero
        title="Flight Assistance"
        subtitle="Find Your Way to Rwanda"
        backgroundImage={heroImage}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Flight Search Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-xl p-6 md:p-8 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      Request Flight Assistance
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Tell us your travel plans and we'll find the best options
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Trip Type */}
                  <div>
                    <Label className="mb-3 block">Trip Type</Label>
                    <RadioGroup
                      value={tripType}
                      onValueChange={setTripType}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="roundtrip" id="roundtrip" />
                        <Label htmlFor="roundtrip" className="cursor-pointer">
                          <div className="flex items-center gap-1">
                            <ArrowLeftRight className="w-4 h-4" />
                            Round Trip
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="oneway" id="oneway" />
                        <Label htmlFor="oneway" className="cursor-pointer">
                          <div className="flex items-center gap-1">
                            <ArrowRight className="w-4 h-4" />
                            One Way
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* From / To */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fromCity">Departing From</Label>
                      <div className="relative mt-2">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="fromCity"
                          placeholder="City or Airport"
                          className="pl-10"
                          value={fromCity}
                          onChange={(e) => setFromCity(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="toCity">Destination</Label>
                      <div className="relative mt-2">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="toCity"
                          value="Kigali, Rwanda (KGL)"
                          disabled
                          className="pl-10 bg-muted"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label>Departure Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal mt-2",
                              !departureDate && "text-muted-foreground"
                            )}
                          >
                            <Calendar className="mr-2 h-4 w-4" />
                            {departureDate ? (
                              format(departureDate, "PPP")
                            ) : (
                              <span>Select date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <CalendarComponent
                            mode="single"
                            selected={departureDate}
                            onSelect={setDepartureDate}
                            initialFocus
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    {tripType === "roundtrip" && (
                      <div>
                        <Label>Return Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal mt-2",
                                !returnDate && "text-muted-foreground"
                              )}
                            >
                              <Calendar className="mr-2 h-4 w-4" />
                              {returnDate ? (
                                format(returnDate, "PPP")
                              ) : (
                                <span>Select date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <CalendarComponent
                              mode="single"
                              selected={returnDate}
                              onSelect={setReturnDate}
                              initialFocus
                              disabled={(date) =>
                                date < new Date() ||
                                (departureDate && date < departureDate)
                              }
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    )}
                  </div>

                  {/* Passengers & Class */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label>Passengers</Label>
                      <Select value={passengers} onValueChange={setPassengers}>
                        <SelectTrigger className="mt-2">
                          <Users className="w-4 h-4 mr-2" />
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} Passenger{num > 1 ? "s" : ""}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Cabin Class</Label>
                      <Select value={cabinClass} onValueChange={setCabinClass}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="economy">Economy</SelectItem>
                          <SelectItem value="premium">Premium Economy</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="first">First Class</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="border-t pt-6">
                    <h3 className="font-semibold text-foreground mb-4">
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          className="mt-2"
                          required
                          value={contactInfo.name}
                          onChange={(e) =>
                            setContactInfo({ ...contactInfo, name: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="mt-2"
                          required
                          value={contactInfo.email}
                          onChange={(e) =>
                            setContactInfo({
                              ...contactInfo,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="+1 234 567 8900"
                        className="mt-2"
                        value={contactInfo.phone}
                        onChange={(e) =>
                          setContactInfo({ ...contactInfo, phone: e.target.value })
                        }
                      />
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="additionalInfo">
                        Additional Information (Optional)
                      </Label>
                      <Textarea
                        id="additionalInfo"
                        placeholder="Any preferences, special requirements, or questions..."
                        className="mt-2"
                        rows={3}
                        value={contactInfo.additionalInfo}
                        onChange={(e) =>
                          setContactInfo({
                            ...contactInfo,
                            additionalInfo: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Plane className="w-4 h-4 mr-2" />
                    Request Flight Options
                  </Button>
                </form>

                {/* Info Note */}
                <div className="mt-6 bg-blue-50 dark:bg-blue-950 rounded-lg p-4 flex gap-3">
                  <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-foreground mb-1">
                      How This Works
                    </p>
                    <p className="text-muted-foreground">
                      We don't sell flights directly, but our travel experts will
                      research the best options and provide you with personalized
                      recommendations within 24 hours. We can also book flights on
                      your behalf as part of a complete travel package.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Popular Routes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-xl p-6 shadow-lg"
              >
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                  <Globe className="inline w-5 h-5 mr-2" />
                  Popular Routes to Kigali
                </h3>
                <div className="space-y-4">
                  {popularRoutes.map((route, index) => (
                    <div
                      key={index}
                      className="p-3 bg-muted rounded-lg text-sm"
                    >
                      <div className="flex items-center gap-2 font-semibold">
                        <span>{route.from}</span>
                        <ArrowRight className="w-4 h-4" />
                        <span>{route.to}</span>
                      </div>
                      <div className="mt-2 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          {route.duration}
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span>{route.airlines.slice(0, 2).join(", ")}</span>
                          <span className="font-semibold text-primary">
                            From {route.avgPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-primary text-primary-foreground rounded-xl p-6 shadow-lg"
              >
                <h3 className="font-serif text-xl font-bold mb-4">
                  Need Help Now?
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Our travel experts are available to assist with your flight
                  booking.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-center gap-2 text-sm hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    {companyInfo.phone}
                  </a>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center gap-2 text-sm hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    {companyInfo.email}
                  </a>
                  <a
                    href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:underline"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Flight Tips Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Travel Tips for Flying to Rwanda
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {flightTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-lg"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Info className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tip.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BookingFlight;
