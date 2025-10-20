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
import heroDevice from "@/assets/waypoint-device.png";
import festivalCrowd from "@/assets/festival-friends.webp";
import { PartnerFormDialog } from "@/components/PartnerFormDialog";

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
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Solutions</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it works</a>
            <a href="#festivals" className="text-muted-foreground hover:text-foreground transition-colors">For organisers</a>
            <Button className="bg-gradient-hero hover:shadow-glow transition-all">
              Book a pilot
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
                Festival connectivity partner
              </Badge>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Connectivity that survives the crowd
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We help organisers and rental partners deliver reliable on‑site comms: find friends, message offline,
                and bring extra internet capacity where it’s needed most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <PartnerFormDialog>
                  <Button size="lg" className="bg-gradient-hero hover:shadow-glow-strong transition-all text-lg">
                    Book a pilot
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </PartnerFormDialog>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">In pilot with select festivals.</p>
            </div>
            {/* Image removed intentionally to keep focus on organiser value */}
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Offerings</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Two clear options for your event needs.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-glow group">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:shadow-glow transition-all">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Compass — friend‑finding & offline messaging (no internet needed)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Keep groups together with device‑level direction finding and offline messaging when mobile networks are congested. Works without bringing internet onto site.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-glow group">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:shadow-glow transition-all">
                <Radio className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Event Internet — extra internet for attendees</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bring temporary internet into the site (for example via satellite or a temporary wired link) and share it locally with a robust mesh/Wi‑Fi network that keeps working when phones struggle with interference—so fans can upload, stream, and transact.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How it works — Compass</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">No site internet required. Works device‑to‑device so groups stay connected even when mobile networks are busy.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-glow">1</div>
              <h3 className="text-2xl font-bold mb-3">Pair your group</h3>
              <p className="text-muted-foreground">Simple pairing links friends or crew in seconds.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-glow">2</div>
              <h3 className="text-2xl font-bold mb-3">See direction, send messages</h3>
              <p className="text-muted-foreground">Devices talk directly to each other, so finding people and messaging keeps working.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-glow">3</div>
              <h3 className="text-2xl font-bold mb-3">No signal? Still works</h3>
              <p className="text-muted-foreground">Keeps going even when phones struggle with congestion and interference.</p>
            </div>
          </div>

          <div className="my-12 h-px bg-border" />

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How it works — Event Internet</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Internet into site → Waypoint nodes → Guests & staff devices.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-glow">
                1
              </div>
              <h3 className="text-2xl font-bold mb-3">Bring internet into site</h3>
              <p className="text-muted-foreground">
                We add extra internet capacity (for example via satellite or a temporary wired link) where it’s needed most.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-glow">
                2
              </div>
              <h3 className="text-2xl font-bold mb-3">Waypoint nodes</h3>
              <p className="text-muted-foreground">
                Share it around the site using pop‑up Wi‑Fi nodes (battery or mains powered).
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-glow">
                3
              </div>
              <h3 className="text-2xl font-bold mb-3">Guests & staff</h3>
              <p className="text-muted-foreground">
                Friend‑finding, offline messaging, payments, and content—designed for live days.
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
                For organisers & rental partners
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for operations—loved by guests</h2>
              <p className="text-xl text-muted-foreground">Fewer lost‑person incidents, shorter reunion times, higher guest satisfaction, better social content flow, and fewer “no‑signal” complaints.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Fewer lost‑person incidents</h3>
                <p className="text-muted-foreground">Shorter reunion times with friend‑finding and rendezvous points.</p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <Sparkles className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Higher guest satisfaction</h3>
                <p className="text-muted-foreground">Keep groups together and comms working when LTE is jammed.</p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <Zap className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Better content flow</h3>
                <p className="text-muted-foreground">Extra internet capacity and smart distribution for uploads and transactions.</p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <Radio className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Fewer “no‑signal” complaints</h3>
                <p className="text-muted-foreground">Designed to complement existing radios, temporary mobile masts, and site Wi‑Fi.</p>
              </Card>
            </div>

            {/* Removed extra mid-page CTA to keep only the final one */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Book a pilot</h2>
            <p className="text-xl text-muted-foreground mb-8">We’ll reply within one business day.</p>
            <PartnerFormDialog>
              <Button size="lg" className="bg-gradient-hero hover:shadow-glow-strong transition-all text-lg">
                Book a pilot
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </PartnerFormDialog>
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
              <p className="text-muted-foreground">Festival connectivity partner: friend‑finding, offline messaging, and extra internet capacity.</p>
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
