import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Users, Star, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import backgroundImage from "@/assets/background1.jpg";

const tourPackages = [
  {
    id: 1,
    name: "Char Dham Yatra",
    duration: "12 Days / 11 Nights",
    groupSize: "15-25 Pilgrims",
    destinations: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    price: "₹45,000",
    rating: 4.9,
    description: "Experience the sacred Char Dham pilgrimage covering all four holy shrines in Uttarakhand. Includes helicopter service to Kedarnath.",
    highlights: ["Helicopter to Kedarnath", "VIP Darshan", "Luxury Accommodation", "All Meals Included"],
    image: "char-dham",
    featured: true,
  },
  {
    id: 2,
    name: "Jyotirlinga Darshan",
    duration: "15 Days / 14 Nights",
    groupSize: "20-30 Pilgrims",
    destinations: ["Somnath", "Mallikarjuna", "Mahakaleshwar", "Omkareshwar"],
    price: "₹65,000",
    rating: 4.8,
    description: "Visit the sacred 12 Jyotirlingas spread across India. A comprehensive spiritual journey for Lord Shiva devotees.",
    highlights: ["All 12 Jyotirlingas", "Expert Pandits", "AC Transport", "Special Pujas"],
    image: "jyotirlinga",
    featured: true,
  },
  {
    id: 3,
    name: "South India Temple Tour",
    duration: "10 Days / 9 Nights",
    groupSize: "15-20 Pilgrims",
    destinations: ["Tirupati", "Madurai", "Rameswaram", "Kanyakumari"],
    price: "₹38,000",
    rating: 4.7,
    description: "Explore the magnificent temples of South India with their Dravidian architecture and rich spiritual heritage.",
    highlights: ["Special Entry Darshan", "Temple Architecture Tours", "Traditional Meals", "Cultural Programs"],
    image: "south-india",
    featured: false,
  },
  {
    id: 4,
    name: "Varanasi Spiritual Retreat",
    duration: "5 Days / 4 Nights",
    groupSize: "10-15 Pilgrims",
    destinations: ["Kashi Vishwanath", "Sarnath", "Ganga Aarti", "Manikarnika Ghat"],
    price: "₹22,000",
    rating: 4.9,
    description: "Immerse yourself in the spiritual heart of India. Experience the timeless rituals and ceremonies of Varanasi.",
    highlights: ["Private Ganga Aarti", "Boat Rides", "Meditation Sessions", "Sanskrit Lessons"],
    image: "varanasi",
    featured: true,
  },
  {
    id: 5,
    name: "Gujarat Pilgrimage",
    duration: "7 Days / 6 Nights",
    groupSize: "15-25 Pilgrims",
    destinations: ["Somnath", "Dwarka", "Nageshwar", "Dakor"],
    price: "₹32,000",
    rating: 4.6,
    description: "Discover the divine temples of Gujarat including the legendary Somnath and Dwarka temples.",
    highlights: ["Somnath Sound & Light Show", "Dwarka Beyt Island", "Local Cuisine", "Heritage Walks"],
    image: "gujarat",
    featured: false,
  },
  {
    id: 6,
    name: "Shakti Peeth Yatra",
    duration: "18 Days / 17 Nights",
    groupSize: "20-30 Pilgrims",
    destinations: ["Kamakhya", "Vaishno Devi", "Kalighat", "Vindhyavasini"],
    price: "₹75,000",
    rating: 4.8,
    description: "A sacred journey to the 51 Shakti Peethas, honoring the divine feminine energy across India.",
    highlights: ["Expert Female Guides", "Special Pujas", "All-Inclusive Package", "Spiritual Workshops"],
    image: "shakti-peeth",
    featured: false,
  },
];

const Pilgrimage = () => {
  const featuredPackages = tourPackages.filter((pkg) => pkg.featured);
  const regularPackages = tourPackages.filter((pkg) => !pkg.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/50 to-foreground/80" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-saffron/20 backdrop-blur-sm px-4 py-2 rounded-full border border-saffron/30">
              <Sparkles size={16} className="text-saffron" />
              <span className="text-saffron font-body text-sm">Curated Spiritual Journeys</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-background leading-tight">
              Pilgrimage Packages
            </h1>
            
            <p className="font-body text-lg md:text-xl text-background/80 max-w-2xl mx-auto leading-relaxed">
              Embark on transformative spiritual journeys with our expertly crafted pilgrimage 
              packages. From the Char Dham to Jyotirlingas, experience divine blessings.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-background/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-background/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-14">
            <span className="text-secondary font-body text-sm uppercase tracking-widest">
              Most Popular
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Featured Packages
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 bg-gradient-hero flex items-center justify-center">
                  <span className="font-display text-8xl text-primary-foreground/20">
                    {pkg.name.charAt(0)}
                  </span>
                  <Badge className="absolute top-4 left-4 bg-saffron text-saffron-foreground border-none">
                    Featured
                  </Badge>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/90 px-2 py-1 rounded-full">
                    <Star size={14} className="text-golden fill-golden" />
                    <span className="text-sm font-medium text-foreground">{pkg.rating}</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {pkg.name}
                  </h3>

                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span className="font-body">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span className="font-body">{pkg.groupSize}</span>
                    </div>
                  </div>

                  <p className="font-body text-muted-foreground text-sm line-clamp-2">
                    {pkg.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {pkg.destinations.slice(0, 3).map((dest) => (
                      <Badge key={dest} variant="outline" className="text-xs font-body">
                        <MapPin size={10} className="mr-1" />
                        {dest}
                      </Badge>
                    ))}
                    {pkg.destinations.length > 3 && (
                      <Badge variant="outline" className="text-xs font-body">
                        +{pkg.destinations.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-border">
                    <div>
                      <span className="text-xs text-muted-foreground font-body">Starting from</span>
                      <p className="font-display text-2xl font-bold text-primary">{pkg.price}</p>
                    </div>
                    <Button className="bg-gradient-hero text-primary-foreground hover:opacity-90">
                      View Details <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Packages */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-14">
            <span className="text-secondary font-body text-sm uppercase tracking-widest">
              Explore More
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              All Tour Packages
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularPackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-48 h-40 md:h-auto bg-gradient-hero flex items-center justify-center shrink-0">
                  <span className="font-display text-6xl text-primary-foreground/20">
                    {pkg.name.charAt(0)}
                  </span>
                </div>

                <div className="p-6 space-y-3 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {pkg.name}
                    </h3>
                    <div className="flex items-center gap-1 shrink-0">
                      <Star size={14} className="text-golden fill-golden" />
                      <span className="text-sm font-medium text-foreground">{pkg.rating}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span className="font-body">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span className="font-body">{pkg.groupSize}</span>
                    </div>
                  </div>

                  <p className="font-body text-muted-foreground text-sm line-clamp-2">
                    {pkg.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <p className="font-display text-xl font-bold text-primary">{pkg.price}</p>
                    <Button variant="outline" size="sm" className="font-body">
                      Learn More <ArrowRight size={14} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Tour CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -right-20 w-80 h-80 border border-primary-foreground/50 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-primary-foreground/50 rounded-full" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                Need a Custom Pilgrimage?
              </h2>
              <p className="font-body text-primary-foreground/80">
                We can create a personalized pilgrimage package tailored to your spiritual needs, 
                schedule, and budget. Contact us to plan your unique journey.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 font-display"
                >
                  <Link to="/contact">Request Custom Tour</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 font-display"
                >
                  <Link to="/temples">Browse Temples</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pilgrimage;
