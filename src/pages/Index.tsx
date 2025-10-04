import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Radio, 
  Users, 
  AlertCircle, 
  Battery, 
  Sparkles,
  Shield,
  MapPin,
  Zap,
  ArrowRight
} from "lucide-react";
import heroDevice from "@/assets/hero-device.jpg";
import festivalCrowd from "@/assets/festival-crowd.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-hero" />
            <span className="text-2xl font-bold">Waypoint</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="#festivals" className="text-muted-foreground hover:text-foreground transition-colors">For Festivals</a>
            <Button className="bg-gradient-hero hover:shadow-glow transition-all">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
                <Sparkles className="w-4 h-4 mr-2" />
                Never Lose Your Crew Again
              </Badge>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Stay Connected.
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Stay Safe.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Waypoint uses mesh network technology to keep you connected with friends 
                at festivals—even when phone towers are overloaded. Small, intuitive, and always reliable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-hero hover:shadow-glow-strong transition-all text-lg" asChild>
                  <a href="mailto:partnerships@trywaypoint.io">
                    Partner With Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-foreground hover:bg-primary/10 text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-[100px] animate-pulse-glow" />
              <img 
                src={heroDevice} 
                alt="Waypoint device with glowing LED ring" 
                className="relative z-10 w-full rounded-2xl shadow-glow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for the Festival Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Engineered to work where your phone can't, keeping you connected in the chaos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-glow group">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:shadow-glow transition-all">
                <Radio className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Mesh Network</h3>
              <p className="text-muted-foreground leading-relaxed">
                No phone towers needed. Our mesh network stays strong even when cellular 
                networks are overloaded with thousands of festival-goers.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-glow group">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:shadow-glow transition-all">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Find Your Friends</h3>
              <p className="text-muted-foreground leading-relaxed">
                See your crew's location in real-time. Simple, intuitive interface 
                means less time on devices, more time enjoying the moment.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-sos/50 transition-all hover:shadow-glow group">
              <div className="w-14 h-14 rounded-xl bg-sos/20 flex items-center justify-center mb-6 group-hover:shadow-glow transition-all">
                <AlertCircle className="w-7 h-7 text-sos" />
              </div>
              <h3 className="text-2xl font-bold mb-3">SOS Alerts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Instant emergency alerts sent directly to festival staff. 
                Your safety is always one button press away.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-success/50 transition-all hover:shadow-glow group">
              <div className="w-14 h-14 rounded-xl bg-success/20 flex items-center justify-center mb-6 group-hover:shadow-glow transition-all">
                <Battery className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-2xl font-bold mb-3">All-Day Battery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lasts the entire festival and beyond. Lightweight design won't 
                weigh you down as you dance the night away.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-glow group">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:shadow-glow transition-all">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Custom Branding</h3>
              <p className="text-muted-foreground leading-relaxed">
                Each device can be customized with festival-specific designs and colors, 
                making them unique collectibles for attendees.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-glow group">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:shadow-glow transition-all">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Always Reliable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Purpose-built hardware that won't fail when you need it most. 
                No interference, no dropped connections.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple. Intuitive. Powerful.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three steps to staying connected all festival long.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-glow">
                1
              </div>
              <h3 className="text-2xl font-bold mb-3">Pick Up Your Device</h3>
              <p className="text-muted-foreground">
                Get your Waypoint at the festival entrance. Pre-registered or on-site pickup available.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-glow">
                2
              </div>
              <h3 className="text-2xl font-bold mb-3">Connect Your Crew</h3>
              <p className="text-muted-foreground">
                Quick pairing process links your friends. Tap devices together or scan QR codes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-glow">
                3
              </div>
              <h3 className="text-2xl font-bold mb-3">Enjoy the Festival</h3>
              <p className="text-muted-foreground">
                See your friends' locations, send quick messages, or call for help if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Festivals Section */}
      <section id="festivals" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={festivalCrowd} 
            alt="Festival crowd" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-lg py-2 px-4">
                <Zap className="w-5 h-5 mr-2" />
                For Festival Organizers
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Elevate Safety & Experience
              </h2>
              <p className="text-xl text-muted-foreground">
                Partner with Waypoint to provide unmatched safety and connectivity for your attendees.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Staff Communication</h3>
                <p className="text-muted-foreground">
                  Equip your staff with devices for seamless coordination across the venue.
                </p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Emergency Response</h3>
                <p className="text-muted-foreground">
                  Receive instant SOS alerts with precise locations for faster response times.
                </p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <Sparkles className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Custom Branding</h3>
                <p className="text-muted-foreground">
                  Devices customized with your festival's unique design and branding.
                </p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Enhanced Experience</h3>
                <p className="text-muted-foreground">
                  Keep attendees connected and safe, creating peace of mind for everyone.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-gradient-hero hover:shadow-glow-strong transition-all text-lg" asChild>
                <a href="mailto:partnerships@trywaypoint.io">
                  Partner With Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Festival Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands who never miss a beat—or their friends.
            </p>
            <Button size="lg" className="bg-gradient-hero hover:shadow-glow-strong transition-all text-lg" asChild>
              <a href="mailto:partnerships@trywaypoint.io">
                Partner With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-hero" />
                <span className="text-xl font-bold">Waypoint</span>
              </div>
              <p className="text-muted-foreground">
                Keeping festival-goers connected and safe.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">For Festivals</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#festivals" className="hover:text-foreground transition-colors">Partner With Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact Sales</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Waypoint. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
