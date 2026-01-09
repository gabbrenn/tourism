import gorillaImg from "@/assets/gorilla-trekking.jpg";
import akageraImg from "@/assets/akagera-safari.jpg";
import nyungweImg from "@/assets/nyungwe-forest.jpg";
import lakeKivuImg from "@/assets/lake-kivu.jpg";
import culturalImg from "@/assets/cultural-dance.jpg";

import rdblogo from "@/assets/logos/rdb_logo.png";
import visitrwandaLogo from "@/assets/logos/Visit_Rwanda_Logo.png";
import africanParksLogo from "@/assets/logos/African_Parks_logo.png";
import ecoTourismLogo from "@/assets/logos/tourism-alliance-logo.png";
import safariPartnersLogo from "@/assets/logos/safari_partners_logo.png";

export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface Tour {
  id: string;
  title: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  highlights: string[];
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
}

export const destinations: Destination[] = [
  {
    id: "volcanoes",
    name: "Volcanoes National Park",
    description: "Home to the endangered mountain gorillas and stunning volcanic landscapes. Trek through bamboo forests to encounter these magnificent primates.",
    image: gorillaImg,
    highlights: ["Mountain Gorilla Trekking", "Golden Monkey Tracking", "Volcano Hiking", "Dian Fossey Tomb Visit"]
  },
  {
    id: "akagera",
    name: "Akagera National Park",
    description: "Rwanda's only savanna park offering the Big Five experience with lions, elephants, rhinos, buffalos, and leopards in a stunning African landscape.",
    image: akageraImg,
    highlights: ["Big Five Safari", "Boat Safaris", "Bird Watching", "Night Game Drives"]
  },
  {
    id: "nyungwe",
    name: "Nyungwe Forest",
    description: "One of Africa's oldest rainforests, home to chimpanzees and 13 other primate species. Experience the thrilling canopy walkway.",
    image: nyungweImg,
    highlights: ["Chimpanzee Tracking", "Canopy Walkway", "Waterfall Hikes", "Bird Watching"]
  },
  {
    id: "lake-kivu",
    name: "Lake Kivu",
    description: "One of Africa's Great Lakes offering stunning beaches, water activities, and charming lakeside towns perfect for relaxation.",
    image: lakeKivuImg,
    highlights: ["Beach Relaxation", "Kayaking", "Island Tours", "Coffee Tours"]
  }
];

export const tours: Tour[] = [
  {
    id: "gorilla-express",
    title: "Gorilla Express Trek",
    duration: "3 Days",
    price: 1899,
    image: gorillaImg,
    description: "An intimate encounter with mountain gorillas in their natural habitat at Volcanoes National Park.",
    highlights: ["Gorilla permit included", "Professional guide", "All meals", "4x4 transport"],
    category: "Gorilla Trekking"
  },
  {
    id: "big-five-safari",
    title: "Akagera Big Five Safari",
    duration: "4 Days",
    price: 1499,
    image: akageraImg,
    description: "Experience Africa's iconic Big Five in Rwanda's only savanna national park.",
    highlights: ["Game drives", "Boat safari", "Luxury lodge", "Bush breakfast"],
    category: "Safari"
  },
  {
    id: "primate-adventure",
    title: "Ultimate Primate Adventure",
    duration: "7 Days",
    price: 3299,
    image: nyungweImg,
    description: "Track gorillas and chimpanzees in Rwanda's incredible forests.",
    highlights: ["Gorilla trekking", "Chimp tracking", "Canopy walk", "Cultural visits"],
    category: "Adventure"
  },
  {
    id: "cultural-immersion",
    title: "Rwanda Cultural Immersion",
    duration: "5 Days",
    price: 1199,
    image: culturalImg,
    description: "Discover Rwanda's rich heritage, traditions, and warm hospitality.",
    highlights: ["Traditional dance", "Village visits", "Coffee experience", "Craft workshops"],
    category: "Cultural"
  },
  {
    id: "lake-kivu-retreat",
    title: "Lake Kivu Retreat",
    duration: "4 Days",
    price: 899,
    image: lakeKivuImg,
    description: "Relax on the shores of Lake Kivu and explore charming lakeside towns.",
    highlights: ["Beach resort", "Kayaking", "Island tours", "Sunset cruises"],
    category: "Relaxation"
  },
  {
    id: "complete-rwanda",
    title: "Complete Rwanda Experience",
    duration: "10 Days",
    price: 4999,
    image: gorillaImg,
    description: "The ultimate Rwanda adventure covering all major attractions.",
    highlights: ["All national parks", "Gorilla & chimp trekking", "Safari", "Cultural experiences"],
    category: "Comprehensive"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    country: "United States",
    text: "The gorilla trekking experience was absolutely life-changing. Our guide was incredibly knowledgeable and the entire trip was seamlessly organized.",
    rating: 5,
    avatar: "SJ"
  },
  {
    id: "2",
    name: "Michael Chen",
    country: "Singapore",
    text: "Rwanda exceeded all my expectations. From the stunning landscapes to the warm hospitality, every moment was magical. Highly recommend!",
    rating: 5,
    avatar: "MC"
  },
  {
    id: "3",
    name: "Emma Williams",
    country: "United Kingdom",
    text: "Professional service from start to finish. The Akagera safari was incredible - we saw all the Big Five! Will definitely be back.",
    rating: 5,
    avatar: "EW"
  },
  {
    id: "4",
    name: "Pierre Dubois",
    country: "France",
    text: "Un voyage inoubliable! The cultural experiences and genuine connections with local communities made this trip truly special.",
    rating: 5,
    avatar: "PD"
  }
];

export const services: Service[] = [
  {
    id: "tours",
    title: "Tour & Safari Packages",
    description: "Expertly crafted tours covering Rwanda's most spectacular destinations with experienced local guides.",
    icon: "compass"
  },
  {
    id: "gorilla",
    title: "Gorilla Trekking",
    description: "Exclusive gorilla tracking permits and guided treks to encounter mountain gorillas in their natural habitat.",
    icon: "paw-print"
  },
  {
    id: "cultural",
    title: "Cultural & Community Tours",
    description: "Authentic experiences connecting you with Rwanda's rich cultural heritage and welcoming communities.",
    icon: "users"
  },
  {
    id: "accommodation",
    title: "Hotel & Lodge Booking",
    description: "Handpicked accommodations from luxury lodges to eco-camps, perfectly suited for your journey.",
    icon: "hotel"
  },
  {
    id: "transfers",
    title: "Airport Transfers",
    description: "Seamless transportation from Kigali International Airport to your destination in comfortable vehicles.",
    icon: "car"
  },
  {
    id: "visa",
    title: "Visa & Travel Consultancy",
    description: "Complete assistance with visa applications, travel insurance, and trip planning advice.",
    icon: "file-text"
  },
  {
    id: "corporate",
    title: "Corporate & Group Travel",
    description: "Tailored solutions for business retreats, conferences, and group expeditions across Rwanda.",
    icon: "briefcase"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Best Time to Visit Rwanda for Gorilla Trekking",
    excerpt: "Discover the optimal seasons for gorilla trekking and what to expect during your visit to Volcanoes National Park.",
    image: gorillaImg,
    date: "January 5, 2026",
    category: "Travel Tips",
    readTime: "5 min read"
  },
  {
    id: "2",
    title: "Rwanda's Coffee Culture: A Complete Guide",
    excerpt: "Explore the rich history of Rwandan coffee and the best coffee plantation tours around Lake Kivu.",
    image: lakeKivuImg,
    date: "December 28, 2025",
    category: "Culture",
    readTime: "4 min read"
  },
  {
    id: "3",
    title: "Top 10 Things to Pack for Your Rwanda Safari",
    excerpt: "Essential packing tips for your African adventure, from trekking gear to camera equipment.",
    image: akageraImg,
    date: "December 15, 2025",
    category: "Travel Tips",
    readTime: "6 min read"
  },
  {
    id: "4",
    title: "Understanding Rwandan Traditions and Customs",
    excerpt: "A deep dive into the cultural heritage of Rwanda, from traditional dance to local ceremonies.",
    image: culturalImg,
    date: "December 10, 2025",
    category: "Culture",
    readTime: "7 min read"
  }
];

export const partners = [
  { id: "visit-rwanda", name: "Visit Rwanda", image: visitrwandaLogo },
  { id: "rdb", name: "Rwanda Development Board", image: rdblogo },
  { id: "african-parks", name: "African Parks", image: africanParksLogo },
  { id: "eco-tourism", name: "Eco-Tourism Alliance", image: ecoTourismLogo },
  { id: "safari-partners", name: "Safari Partners", image: safariPartnersLogo }
];

export const companyInfo = {
  name: "Rwanda Explore Tours",
  tagline: "Your Gateway to the Land of a Thousand Hills",
  address: "KG 7 Ave, Kigali Heights, 4th Floor, Kigali, Rwanda",
  phone: "+250 788 123 456",
  email: "info@rwandaexploretours.com",
  whatsapp: "+250 788 123 456",
  socialMedia: {
    facebook: "https://facebook.com/rwandaexploretours",
    instagram: "https://instagram.com/rwandaexploretours",
    twitter: "https://twitter.com/rwandaexplore",
    youtube: "https://youtube.com/rwandaexploretours"
  }
};
