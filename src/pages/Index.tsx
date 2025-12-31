import { Link } from "react-router-dom";
import { MapPin, Star, Sparkles, Users, Map, Calendar,Phone ,Pin, AudioLines } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { temples } from "@/data/temples";
import heroTemple from "@/assets/hero-temple.jpg";
import image1 from "@/assets/img/expert-guidance.png";

const Index = () => {
  const featuredTemples = temples.slice(0, 6);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroTemple})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/50 to-foreground/80" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-saffron/20 backdrop-blur-sm px-4 py-2 rounded-full border border-saffron/30">
              <Sparkles size={16} className="text-saffron" />
              <span className="text-saffron font-body text-sm">Discover India's Sacred Heritage</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-background leading-tight">
              Your Gateway to
              <span className="block text-saffron animate-shimmer">Divine Temples</span>
            </h1>
            
            <p className="font-body text-lg md:text-xl text-background/80 max-w-2xl mx-auto leading-relaxed">
              Embark on transformative spiritual journeys to India's most sacred temples. 
              Experience centuries of devotion, architectural marvels, and divine blessings.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-hero text-primary-foreground hover:opacity-90 px-8 py-6 text-lg font-display"
              >
                <Link to="/temples">Explore Temples</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-background/30 hover:bg-background/10 px-8 py-6 text-lg font-display"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-background/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-background/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Map, value: `${temples.length}+`, label: "Sacred Temples" },
              { icon: Users, value: "10K+", label: "Happy Pilgrims" },
              { icon: Star, value: "15+", label: "States Covered" },
              { icon: Calendar, value: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-golden flex items-center justify-center">
                  <stat.icon size={24} className="text-foreground" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Temples */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-14">
            <span className="text-secondary font-body text-sm uppercase tracking-widest">
              Explore Sacred Sites
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Featured Temples
            </h2>
            <div className="section-divider" />
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Discover some of India's most revered temples, each with unique spiritual 
              significance and architectural grandeur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTemples.map((temple, index) => (
              <div
                key={temple.id}
                className="card-temple group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-52 bg-gradient-hero overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-6xl text-primary-foreground/20">
                      {temple.deity.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-background/90 text-foreground text-xs font-body px-3 py-1 rounded-full">
                      {temple.deity}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                    <div className="flex items-center gap-2 text-background/80 text-sm">
                      <MapPin size={14} />
                      <span className="font-body">{temple.state}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {temple.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground line-clamp-2">
                    {temple.famousFor}
                  </p>
                  <Link
                    to={`/temples?id=${temple.id}`}
                    className="inline-flex items-center text-primary font-body text-sm hover:underline"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-hero text-primary-foreground hover:opacity-90 font-display"
            >
              <Link to="/temples">View All Temples</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-14">
            <span className="text-secondary font-body text-sm uppercase tracking-widest">
              Why Temple Gateway
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Your Spiritual Journey Partner
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon:Phone,
                title: "Expert Guidance",
                description: "Our knowledgeable guides ensure you understand the spiritual significance and history of each temple.",
              },
              {
                icon:Pin,
                title: "Comprehensive Coverage",
                description: "Access detailed information about temples across all states of India with interactive maps.",
              },
              {
                icon:AudioLines,
                title: "Curated Experiences",
                description: "From Jyotirlingas to Shakti Peethas, we help you plan meaningful pilgrimage journeys.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="text-4xl mb-4 w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center"><feature.icon size={32} /></div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border border-background/50 rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border border-background/50 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
              Ready to Begin Your Sacred Journey?
            </h2>
            <p className="font-body text-lg text-primary-foreground/80">
              Explore our comprehensive temple directory and plan your next spiritual pilgrimage today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-lg font-display"
              >
                <Link to="/temples">Browse Temples</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30  hover:bg-primary-foreground/10 px-8 py-6 text-lg font-display"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
