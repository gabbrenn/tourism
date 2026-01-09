import { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Users,
  MapPin,
  CreditCard,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Clock,
  DollarSign,
  Hotel,
  Car,
  Utensils,
  Camera,
  Shield,
  Info,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { tours, destinations } from "@/data/tourismData";
import heroImage from "@/assets/gorilla-trekking.jpg";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const steps = [
  { id: 1, name: "Select Tour", icon: MapPin },
  { id: 2, name: "Travel Details", icon: Calendar },
  { id: 3, name: "Extras", icon: Hotel },
  { id: 4, name: "Your Info", icon: Users },
  { id: 5, name: "Review", icon: CheckCircle2 },
];

const accommodationOptions = [
  {
    id: "budget",
    name: "Budget Friendly",
    description: "Clean, comfortable guesthouses and budget hotels",
    priceModifier: 0,
    perNight: 50,
  },
  {
    id: "standard",
    name: "Standard",
    description: "Quality 3-star hotels with modern amenities",
    priceModifier: 200,
    perNight: 100,
  },
  {
    id: "luxury",
    name: "Luxury",
    description: "Premium lodges and 4-5 star hotels",
    priceModifier: 500,
    perNight: 250,
  },
  {
    id: "ultra-luxury",
    name: "Ultra Luxury",
    description: "Exclusive safari lodges and boutique resorts",
    priceModifier: 1200,
    perNight: 500,
  },
];

const extraServices = [
  {
    id: "airport-transfer",
    name: "Airport Transfer",
    description: "Round-trip airport pickup and drop-off",
    price: 80,
    icon: Car,
  },
  {
    id: "travel-insurance",
    name: "Travel Insurance",
    description: "Comprehensive travel insurance coverage",
    price: 45,
    icon: Shield,
  },
  {
    id: "photography",
    name: "Professional Photography",
    description: "Personal photographer for your tour highlights",
    price: 350,
    icon: Camera,
  },
  {
    id: "special-meals",
    name: "Special Dietary Meals",
    description: "Vegetarian, vegan, or halal meal options",
    price: 25,
    icon: Utensils,
  },
];

interface BookingData {
  // Step 1 - Tour Selection
  selectedTour: string;
  customTour: boolean;
  customTourDetails: string;
  
  // Step 2 - Travel Details
  travelDate: Date | undefined;
  returnDate: Date | undefined;
  adults: number;
  children: number;
  
  // Step 3 - Extras
  accommodation: string;
  extras: string[];
  
  // Step 4 - Personal Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  specialRequests: string;
}

const BookingTour = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const preselectedTour = searchParams.get("tour");
  
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    selectedTour: preselectedTour || "",
    customTour: false,
    customTourDetails: "",
    travelDate: undefined,
    returnDate: undefined,
    adults: 2,
    children: 0,
    accommodation: "standard",
    extras: [],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    specialRequests: "",
  });

  const selectedTourData = tours.find((t) => t.id === bookingData.selectedTour);
  
  const calculateTotal = () => {
    let total = 0;
    
    // Base tour price
    if (selectedTourData) {
      total += selectedTourData.price * (bookingData.adults + bookingData.children * 0.7);
    }
    
    // Accommodation
    const accommodation = accommodationOptions.find((a) => a.id === bookingData.accommodation);
    if (accommodation && selectedTourData) {
      const nights = parseInt(selectedTourData.duration) || 3;
      total += accommodation.priceModifier + (accommodation.perNight * nights);
    }
    
    // Extras
    bookingData.extras.forEach((extraId) => {
      const extra = extraServices.find((e) => e.id === extraId);
      if (extra) {
        total += extra.price * (bookingData.adults + bookingData.children);
      }
    });
    
    return total;
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = () => {
    // Navigate to confirmation page with booking data
    navigate("/booking/confirmation", { 
      state: { 
        bookingData, 
        selectedTourData, 
        total: calculateTotal() 
      } 
    });
  };

  const updateBookingData = <K extends keyof BookingData>(field: K, value: BookingData[K]) => {
    setBookingData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleExtra = (extraId: string) => {
    setBookingData((prev) => ({
      ...prev,
      extras: prev.extras.includes(extraId)
        ? prev.extras.filter((id) => id !== extraId)
        : [...prev.extras, extraId],
    }));
  };

  return (
    <Layout>
      <PageHero
        title="Book Your Tour"
        subtitle="Create Your Perfect Journey"
        backgroundImage={heroImage}
      />

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-center">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={cn(
                      "flex flex-col items-center",
                      currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    <div
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors",
                        currentStep >= step.id
                          ? "bg-primary border-primary text-primary-foreground"
                          : "border-muted-foreground"
                      )}
                    >
                      {currentStep > step.id ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        <step.icon className="w-5 h-5" />
                      )}
                    </div>
                    <span className="text-xs mt-2 hidden sm:block font-medium">
                      {step.name}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={cn(
                        "w-12 sm:w-24 h-1 mx-2",
                        currentStep > step.id ? "bg-primary" : "bg-muted"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {/* Step 1: Select Tour */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-card rounded-xl p-6 md:p-8 shadow-lg"
                  >
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                      Select Your Tour
                    </h2>

                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Checkbox
                          id="customTour"
                          checked={bookingData.customTour}
                          onCheckedChange={(checked) =>
                            updateBookingData("customTour", checked === true)
                          }
                        />
                        <Label htmlFor="customTour" className="font-medium">
                          I want a custom tour
                        </Label>
                      </div>
                    </div>

                    {!bookingData.customTour ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {tours.map((tour) => (
                          <div
                            key={tour.id}
                            onClick={() => updateBookingData("selectedTour", tour.id)}
                            className={cn(
                              "relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all",
                              bookingData.selectedTour === tour.id
                                ? "border-primary shadow-lg"
                                : "border-transparent hover:border-primary/50"
                            )}
                          >
                            <img
                              src={tour.image}
                              alt={tour.title}
                              className="w-full h-32 object-cover"
                            />
                            <div className="p-4 bg-card">
                              <h3 className="font-semibold text-foreground">
                                {tour.title}
                              </h3>
                              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {tour.duration}
                                </span>
                                <span className="flex items-center gap-1 text-primary font-semibold">
                                  <DollarSign className="w-4 h-4" />
                                  ${tour.price}
                                </span>
                              </div>
                            </div>
                            {bookingData.selectedTour === tour.id && (
                              <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
                                <CheckCircle2 className="w-5 h-5" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="destinations">
                            Which destinations interest you?
                          </Label>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            {destinations.map((dest) => (
                              <div
                                key={dest.id}
                                className="flex items-center space-x-2"
                              >
                                <Checkbox id={dest.id} />
                                <Label htmlFor={dest.id} className="text-sm">
                                  {dest.name}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="customDetails">
                            Tell us about your dream trip
                          </Label>
                          <Textarea
                            id="customDetails"
                            placeholder="Describe your ideal Rwanda adventure..."
                            className="mt-2"
                            rows={4}
                            value={bookingData.customTourDetails}
                            onChange={(e) =>
                              updateBookingData("customTourDetails", e.target.value)
                            }
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Step 2: Travel Details */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-card rounded-xl p-6 md:p-8 shadow-lg"
                  >
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                      Travel Details
                    </h2>

                    <div className="space-y-6">
                      {/* Date Selection */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label>Departure Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal mt-2",
                                  !bookingData.travelDate && "text-muted-foreground"
                                )}
                              >
                                <Calendar className="mr-2 h-4 w-4" />
                                {bookingData.travelDate ? (
                                  format(bookingData.travelDate, "PPP")
                                ) : (
                                  <span>Select date</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <CalendarComponent
                                mode="single"
                                selected={bookingData.travelDate}
                                onSelect={(date) =>
                                  updateBookingData("travelDate", date)
                                }
                                initialFocus
                                disabled={(date) => date < new Date()}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div>
                          <Label>Return Date (Optional)</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal mt-2",
                                  !bookingData.returnDate && "text-muted-foreground"
                                )}
                              >
                                <Calendar className="mr-2 h-4 w-4" />
                                {bookingData.returnDate ? (
                                  format(bookingData.returnDate, "PPP")
                                ) : (
                                  <span>Select date</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <CalendarComponent
                                mode="single"
                                selected={bookingData.returnDate}
                                onSelect={(date) =>
                                  updateBookingData("returnDate", date)
                                }
                                initialFocus
                                disabled={(date) =>
                                  date < new Date() ||
                                  (bookingData.travelDate && date < bookingData.travelDate)
                                }
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>

                      {/* Travelers */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label>Number of Adults</Label>
                          <Select
                            value={bookingData.adults.toString()}
                            onValueChange={(value) =>
                              updateBookingData("adults", parseInt(value))
                            }
                          >
                            <SelectTrigger className="mt-2">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <SelectItem key={num} value={num.toString()}>
                                  {num} Adult{num > 1 ? "s" : ""}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Number of Children (under 12)</Label>
                          <Select
                            value={bookingData.children.toString()}
                            onValueChange={(value) =>
                              updateBookingData("children", parseInt(value))
                            }
                          >
                            <SelectTrigger className="mt-2">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                                <SelectItem key={num} value={num.toString()}>
                                  {num} Child{num !== 1 ? "ren" : ""}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Info Box */}
                      <div className="bg-primary/10 rounded-lg p-4 flex gap-3">
                        <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-foreground">
                          <p className="font-semibold mb-1">Flexible Booking</p>
                          <p className="text-muted-foreground">
                            Dates are flexible? No problem! We'll work with you to find
                            the perfect timing. Gorilla permits may affect availability.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Extras */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-card rounded-xl p-6 md:p-8 shadow-lg"
                  >
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                      Accommodation & Extras
                    </h2>

                    {/* Accommodation */}
                    <div className="mb-8">
                      <h3 className="font-semibold text-foreground mb-4">
                        Choose Your Accommodation Level
                      </h3>
                      <RadioGroup
                        value={bookingData.accommodation}
                        onValueChange={(value) =>
                          updateBookingData("accommodation", value)
                        }
                        className="space-y-3"
                      >
                        {accommodationOptions.map((option) => (
                          <div
                            key={option.id}
                            className={cn(
                              "flex items-start space-x-4 p-4 rounded-lg border-2 transition-colors cursor-pointer",
                              bookingData.accommodation === option.id
                                ? "border-primary bg-primary/5"
                                : "border-muted hover:border-primary/50"
                            )}
                            onClick={() =>
                              updateBookingData("accommodation", option.id)
                            }
                          >
                            <RadioGroupItem value={option.id} id={option.id} />
                            <div className="flex-1">
                              <Label
                                htmlFor={option.id}
                                className="font-semibold cursor-pointer"
                              >
                                {option.name}
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                {option.description}
                              </p>
                            </div>
                            <div className="text-right">
                              <span className="font-semibold text-primary">
                                ${option.perNight}/night
                              </span>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Extra Services */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">
                        Add Extra Services
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {extraServices.map((extra) => (
                          <div
                            key={extra.id}
                            className={cn(
                              "p-4 rounded-lg border-2 transition-colors cursor-pointer",
                              bookingData.extras.includes(extra.id)
                                ? "border-primary bg-primary/5"
                                : "border-muted hover:border-primary/50"
                            )}
                            onClick={() => toggleExtra(extra.id)}
                          >
                            <div className="flex items-start gap-3">
                              <Checkbox
                                checked={bookingData.extras.includes(extra.id)}
                                onCheckedChange={() => toggleExtra(extra.id)}
                              />
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <extra.icon className="w-4 h-4 text-primary" />
                                  <span className="font-semibold">{extra.name}</span>
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {extra.description}
                                </p>
                              </div>
                              <span className="text-primary font-semibold">
                                +${extra.price}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Personal Info */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-card rounded-xl p-6 md:p-8 shadow-lg"
                  >
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                      Your Information
                    </h2>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            placeholder="John"
                            className="mt-2"
                            value={bookingData.firstName}
                            onChange={(e) =>
                              updateBookingData("firstName", e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            placeholder="Doe"
                            className="mt-2"
                            value={bookingData.lastName}
                            onChange={(e) =>
                              updateBookingData("lastName", e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="mt-2"
                          value={bookingData.email}
                          onChange={(e) =>
                            updateBookingData("email", e.target.value)
                          }
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            placeholder="+1 234 567 8900"
                            className="mt-2"
                            value={bookingData.phone}
                            onChange={(e) =>
                              updateBookingData("phone", e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <Label htmlFor="country">Country *</Label>
                          <Input
                            id="country"
                            placeholder="United States"
                            className="mt-2"
                            value={bookingData.country}
                            onChange={(e) =>
                              updateBookingData("country", e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="specialRequests">
                          Special Requests (Optional)
                        </Label>
                        <Textarea
                          id="specialRequests"
                          placeholder="Any special requirements, dietary needs, accessibility needs, or requests..."
                          className="mt-2"
                          rows={4}
                          value={bookingData.specialRequests}
                          onChange={(e) =>
                            updateBookingData("specialRequests", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Review */}
                {currentStep === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-card rounded-xl p-6 md:p-8 shadow-lg"
                  >
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                      Review Your Booking
                    </h2>

                    <div className="space-y-6">
                      {/* Tour Details */}
                      <div className="border-b pb-6">
                        <h3 className="font-semibold text-foreground mb-3">
                          Tour Details
                        </h3>
                        {selectedTourData ? (
                          <div className="flex gap-4">
                            <img
                              src={selectedTourData.image}
                              alt={selectedTourData.title}
                              className="w-24 h-24 rounded-lg object-cover"
                            />
                            <div>
                              <h4 className="font-semibold">
                                {selectedTourData.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {selectedTourData.duration} •{" "}
                                {selectedTourData.category}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <p className="text-muted-foreground">
                            Custom Tour Request
                          </p>
                        )}
                      </div>

                      {/* Travel Details */}
                      <div className="border-b pb-6">
                        <h3 className="font-semibold text-foreground mb-3">
                          Travel Details
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">
                              Departure:
                            </span>
                            <span className="ml-2 font-medium">
                              {bookingData.travelDate
                                ? format(bookingData.travelDate, "PPP")
                                : "Not selected"}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">
                              Travelers:
                            </span>
                            <span className="ml-2 font-medium">
                              {bookingData.adults} Adults
                              {bookingData.children > 0 &&
                                `, ${bookingData.children} Children`}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Accommodation */}
                      <div className="border-b pb-6">
                        <h3 className="font-semibold text-foreground mb-3">
                          Accommodation
                        </h3>
                        <p className="text-sm">
                          {accommodationOptions.find(
                            (a) => a.id === bookingData.accommodation
                          )?.name || "Standard"}
                        </p>
                      </div>

                      {/* Extras */}
                      {bookingData.extras.length > 0 && (
                        <div className="border-b pb-6">
                          <h3 className="font-semibold text-foreground mb-3">
                            Extra Services
                          </h3>
                          <ul className="text-sm space-y-1">
                            {bookingData.extras.map((extraId) => {
                              const extra = extraServices.find(
                                (e) => e.id === extraId
                              );
                              return (
                                <li key={extraId} className="flex justify-between">
                                  <span>{extra?.name}</span>
                                  <span className="text-primary">
                                    +${extra?.price}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}

                      {/* Contact Info */}
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">
                          Contact Information
                        </h3>
                        <div className="text-sm space-y-1">
                          <p>
                            {bookingData.firstName} {bookingData.lastName}
                          </p>
                          <p className="text-muted-foreground">
                            {bookingData.email}
                          </p>
                          <p className="text-muted-foreground">
                            {bookingData.phone}
                          </p>
                          <p className="text-muted-foreground">
                            {bookingData.country}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </Button>
                {currentStep < 5 ? (
                  <Button onClick={handleNext} className="flex items-center gap-2">
                    Continue
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} className="flex items-center gap-2">
                    Submit Booking Request
                    <CheckCircle2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>

            {/* Sidebar - Booking Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl p-6 shadow-lg sticky top-24">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                  Booking Summary
                </h3>

                {selectedTourData && (
                  <div className="mb-6">
                    <img
                      src={selectedTourData.image}
                      alt={selectedTourData.title}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-semibold">{selectedTourData.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedTourData.duration}
                    </p>
                  </div>
                )}

                <div className="space-y-3 border-t pt-4">
                  {selectedTourData && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Tour ({bookingData.adults} adults
                        {bookingData.children > 0 &&
                          `, ${bookingData.children} children`}
                        )
                      </span>
                      <span>
                        $
                        {(
                          selectedTourData.price *
                          (bookingData.adults + bookingData.children * 0.7)
                        ).toFixed(0)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Accommodation</span>
                    <span>
                      $
                      {accommodationOptions.find(
                        (a) => a.id === bookingData.accommodation
                      )?.priceModifier || 0}
                    </span>
                  </div>

                  {bookingData.extras.length > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Extras ({bookingData.extras.length})
                      </span>
                      <span>
                        $
                        {bookingData.extras.reduce((total, extraId) => {
                          const extra = extraServices.find((e) => e.id === extraId);
                          return (
                            total +
                            (extra?.price || 0) *
                              (bookingData.adults + bookingData.children)
                          );
                        }, 0)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Estimated Total</span>
                    <span className="text-primary">
                      ${calculateTotal().toFixed(0)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    * Final price will be confirmed after review
                  </p>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Need help?</strong> Our travel experts are available
                    24/7 to assist you.
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto mt-2">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookingTour;
