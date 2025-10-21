import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Radio,
  Users,
  Sparkles,
  Shield,
  MapPin,
  Zap,
  ArrowRight
} from "lucide-react";
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
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="#attendees" className="text-muted-foreground hover:text-foreground transition-colors">Attendees</a>
            <a href="#organisers" className="text-muted-foreground hover:text-foreground transition-colors">Organisers</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            <PartnerFormDialog>
              <Button className="bg-gradient-hero hover:shadow-glow transition-all">Book a pilot</Button>
            </PartnerFormDialog>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
                <Sparkles className="w-4 h-4 mr-2" />
                In pilot with select festivals
              </Badge>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">Stay connected when the crowd isn’t.</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                A pocket‑sized Wi‑Fi router that gives your phone real internet at festivals — powered by a waypoint mesh with resilient backhaul.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <PartnerFormDialog>
                  <Button size="lg" className="bg-gradient-hero hover:shadow-glow-strong transition-all text-lg">
                    Book a pilot
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </PartnerFormDialog>
                <a href="#contact" className="inline-flex">
                  <Button size="lg" variant="outline" className="text-lg">Talk to partnerships</Button>
                </a>
              </div>
            </div>
            {/* Image intentionally omitted to keep focus on value */}
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">When LTE jams, plans fall apart.</h2>
              <p className="text-xl text-muted-foreground">Crowd peaks overwhelm cellular, so meetups fail, uploads stall, and calls drop.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Our solution</h3>
              <p className="text-muted-foreground text-lg">
                Waypoint Data keeps phones online so friends meet up, videos upload, and calls go through — without relying on congested cellular.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <Card className="p-8 bg-card border-border">
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-primary mt-1" />
              <p className="text-lg text-muted-foreground">
                What it is: A phone‑shaped personal Wi‑Fi router (shareable by two people) that connects to a festival‑wide waypoint mesh, with multiple data backhaul sources into the site.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* How it works (3 steps) */}
      <section id="how-it-works" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How it works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Pick up a puck, connect by Wi‑Fi, and let the waypoint mesh route to resilient on‑site backhaul so your phone can stream, call and share even when LTE is saturated.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-glow">1</div>
              <h3 className="text-2xl font-bold mb-3">Pick up & pair</h3>
              <p className="text-muted-foreground">Rent your puck at entry and connect your phone via Wi‑Fi.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-glow">2</div>
              <h3 className="text-2xl font-bold mb-3">Mesh → backhaul</h3>
              <p className="text-muted-foreground">Your puck links through our waypoint mesh to on‑site backhaul (e.g., satellite or fixed links).</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-glow">3</div>
              <h3 className="text-2xl font-bold mb-3">Use your phone normally</h3>
              <p className="text-muted-foreground">Stream, call, send photos and messages.</p>
            </div>
          </div>

          {/* Simple diagram: mesh → backhaul → internet */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span>Waypoint mesh</span>
                </div>
                <span className="opacity-70">→</span>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span>On‑site backhaul</span>
                </div>
                <span className="opacity-70">→</span>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-foreground" />
                  <span>Internet</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What you can do */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border"><h3 className="text-xl font-bold mb-2">Stream video</h3><p className="text-muted-foreground">From the crowd or the campsite.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="text-xl font-bold mb-2">Make calls & send messages</h3><p className="text-muted-foreground">Reliable even during crowd peaks.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="text-xl font-bold mb-2">Share photos & navigate meetups</h3><p className="text-muted-foreground">No more radio silence.</p></Card>
          </div>
        </div>
      </section>

      {/* For Attendees */}
      <section id="attendees" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Rent it. Pocket it. Share it.</h2>
            <p className="text-xl text-muted-foreground mb-8">Each Waypoint Data puck is designed for one or two people. Keep your group online across the grounds and between stages.</p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Pick‑up points</h3><p className="text-muted-foreground">Available at festival entry.</p></Card>
              <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Flexible rental</h3><p className="text-muted-foreground">Day or weekend options.</p></Card>
              <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Easy returns</h3><p className="text-muted-foreground">Simple drop‑off at exit.</p></Card>
            </div>
          </div>
        </div>
      </section>

      {/* For Organisers */}
      <section id="organisers" className="py-20 relative overflow-hidden">
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Connectivity your fans can feel.</h2>
              <p className="text-xl text-muted-foreground">Deploy a festival‑wide waypoint mesh with multiple backhaul feeds, then rent pucks through your existing equipment‑rental partner.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Distribution model</h3>
                <p className="text-muted-foreground">Waypoint → Rental Partner → Festival → Attendee.</p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <Sparkles className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Rapid deployment</h3>
                <p className="text-muted-foreground">Modular rollout across campsites and stages.</p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <Zap className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Works alongside existing kit</h3>
                <p className="text-muted-foreground">Compatible with radios, Wi‑Fi and temporary towers.</p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <Radio className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Real‑time fleet monitoring</h3>
                <p className="text-muted-foreground">On‑show monitoring and support during the event.</p>
              </Card>
            </div>

            {/* Deployment checklist */}
            <div className="max-w-3xl mx-auto mb-12">
              <h3 className="text-2xl font-bold mb-4">Deployment checklist</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Site map & stage plan</li>
                <li>Backhaul locations (e.g., satellite or fixed points)</li>
                <li>Mesh node placement & power</li>
                <li>Rental partner ops (kiosks, returns, SLAs)</li>
                <li>On‑show monitoring & support</li>
              </ul>
            </div>

            <div className="text-center">
              <PartnerFormDialog>
                <Button size="lg" className="bg-gradient-hero hover:shadow-glow-strong transition-all text-lg">
                  Get a site plan & pilot
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </PartnerFormDialog>
            </div>
          </div>
        </div>
      </section>

      {/* Why Waypoint vs just LTE */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Waypoint Data vs. “just LTE”?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Built for crowd peaks</h3><p className="text-muted-foreground">Mesh routes around cellular congestion.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Local resilience</h3><p className="text-muted-foreground">Multiple backhaul options reduce single‑point failure.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Fan experience</h3><p className="text-muted-foreground">Fewer missed meetups, more captured moments.</p></Card>
          </div>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Tech overview</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Waypoint mesh tech</h3><p className="text-muted-foreground">Long‑range, low‑power device‑to‑device coverage across festival geography.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Multi‑source backhaul</h3><p className="text-muted-foreground">Satellite or fixed links bring internet into the venue.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Personal Wi‑Fi</h3><p className="text-muted-foreground">Standard phones connect instantly — no special app required.</p></Card>
          </div>
        </div>
      </section>

      {/* Rental Flow */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Rental flow</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl">
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">1) Reserve</h3><p className="text-muted-foreground">Online or at entry.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">2) Collect & pair</h3><p className="text-muted-foreground">Staff pairs it in seconds.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">3) Stay connected</h3><p className="text-muted-foreground">Share with a friend.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">4) Return</h3><p className="text-muted-foreground">Drop at exit.</p></Card>
          </div>
        </div>
      </section>

      {/* Trust & Proof */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">In pilot with select festivals</Badge>
          <p className="text-muted-foreground">Seeking additional partners for the 2025 season.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">FAQ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Does it work without cell coverage?</h3><p className="text-muted-foreground">Yes. Your phone connects to Waypoint Data over Wi‑Fi; the puck uses the festival’s waypoint mesh and on‑site backhaul.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">How many people per puck?</h3><p className="text-muted-foreground">Designed for one to two attendees.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">What speeds should I expect?</h3><p className="text-muted-foreground">Enough for video streaming, calling and photo sharing in typical conditions. Actual performance varies with load, terrain and placement.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Is there an app?</h3><p className="text-muted-foreground">No special app required — connect via Wi‑Fi and use your phone as normal.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">How do festivals get it?</h3><p className="text-muted-foreground">We supply through established equipment‑rental partners who handle on‑site distribution.</p></Card>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="py-20 relative">
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
            <div className="mt-4">
              <a href="#organisers" className="inline-flex">
                <Button size="lg" variant="outline" className="text-lg">Request a site plan</Button>
              </a>
            </div>
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
              <p className="text-muted-foreground">Waypoint Data is rented to attendees via festival equipment rental partners. Designed for use at large outdoor events.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</a></li>
                <li><a href="#attendees" className="hover:text-foreground transition-colors">Attendees</a></li>
                <li><a href="#organisers" className="hover:text-foreground transition-colors">Organisers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">For Festivals</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#organisers" className="hover:text-foreground transition-colors">Partner With Us</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
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
