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
import { WaitlistFormDialog } from "@/components/WaitlistFormDialog";

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
                Available for purchase and event partnerships
              </Badge>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">No data, No problem.</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                A MagSafe device that sticks to the back of your iPhone, connects via Bluetooth, and enables calls, video calls, texts, Find My Friends maps, and more using a mesh network. Equally valuable at music festivals and business conventions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <WaitlistFormDialog>
                  <Button size="lg" className="bg-gradient-hero hover:shadow-glow-strong transition-all text-lg">
                    Join waitlist
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </WaitlistFormDialog>
                <PartnerFormDialog>
                  <Button size="lg" variant="outline" className="text-lg">
                    Book a pilot
                  </Button>
                </PartnerFormDialog>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4">When cellular data jams, plans fall apart.</h2>
              <p className="text-xl text-muted-foreground">Crowded events overwhelm cellular networks, so meetups fail, calls drop, and messages don't send—whether you're at a music festival or a business convention.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Our solution</h3>
              <p className="text-muted-foreground text-lg">
                Waypoint connects your iPhone via Bluetooth to a mesh network, enabling calls, video calls, texts, Find My Friends maps, and more—without relying on congested cellular data.
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
                What it is: A MagSafe device that sticks to the back of your iPhone, connects via Bluetooth, and enables calls, video calls, texts, Find My Friends maps, and more using a mesh network. Perfect for music festivals and business conventions—available for direct purchase or through event partnerships.
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Attach the MagSafe device to your iPhone, pair via Bluetooth, and connect to the mesh network. Make calls, send texts, use Find My Friends maps, and more—even when cellular data fails.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-glow">1</div>
              <h3 className="text-2xl font-bold mb-3">Attach & pair</h3>
              <p className="text-muted-foreground">Stick the MagSafe device to the back of your iPhone and pair via Bluetooth.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-glow">2</div>
              <h3 className="text-2xl font-bold mb-3">Connect to mesh</h3>
              <p className="text-muted-foreground">Your device connects to the Waypoint mesh network, enabling communication with other devices in range.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-glow">3</div>
              <h3 className="text-2xl font-bold mb-3">Use your phone normally</h3>
              <p className="text-muted-foreground">Make calls, video calls, send texts, use Find My Friends maps, and more.</p>
            </div>
          </div>

          {/* Simple diagram: device → mesh → communication */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span>iPhone + MagSafe device</span>
                </div>
                <span className="opacity-70">→</span>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span>Waypoint mesh network</span>
                </div>
                <span className="opacity-70">→</span>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-foreground" />
                  <span>Calls, texts, maps & more</span>
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
            <Card className="p-6 bg-card border-border"><h3 className="text-xl font-bold mb-2">Make calls & video calls</h3><p className="text-muted-foreground">Stay connected even when cellular networks fail.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="text-xl font-bold mb-2">Send texts & messages</h3><p className="text-muted-foreground">Reliable messaging through the mesh network.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="text-xl font-bold mb-2">Find My Friends & maps</h3><p className="text-muted-foreground">Navigate and locate friends without data connectivity.</p></Card>
          </div>
        </div>
      </section>

      {/* For Attendees */}
      <section id="attendees" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Buy it. Attach it. Connect it.</h2>
            <p className="text-xl text-muted-foreground mb-8">Purchase your Waypoint device directly, or rent one through event partnerships. Perfect for music festivals and business conventions—stay connected when cellular data fails.</p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Direct purchase</h3><p className="text-muted-foreground">Buy your own device and use it at any event.</p></Card>
              <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Event rental</h3><p className="text-muted-foreground">Rent through festival or convention partnerships.</p></Card>
              <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Works everywhere</h3><p className="text-muted-foreground">Music festivals, business conventions, and more.</p></Card>
            </div>
          </div>
        </div>
      </section>

      {/* For Organisers */}
      <section id="organisers" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={festivalCrowd} 
            alt="Crowd at event" 
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Connectivity your attendees can feel.</h2>
              <p className="text-xl text-muted-foreground">Deploy a Waypoint mesh network at your festival or business convention, then offer devices for rent through your existing equipment‑rental partner or sell directly to attendees.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Distribution model</h3>
                <p className="text-muted-foreground">Waypoint → Rental Partner → Event (Festival/Convention) → Attendee. Or direct purchase options.</p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
                <Sparkles className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Rapid deployment</h3>
                <p className="text-muted-foreground">Modular rollout across venues, stages, and convention halls.</p>
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
                <li>Site map & venue plan (festivals, conventions, or both)</li>
                <li>Mesh network coverage planning</li>
                <li>Device distribution strategy (rental or direct purchase)</li>
                <li>Rental partner ops (kiosks, returns, SLAs) if applicable</li>
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

      {/* Why Waypoint vs just cellular data */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Waypoint vs. "just cellular data"?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Built for crowded events</h3><p className="text-muted-foreground">Mesh network routes around cellular congestion at festivals and conventions.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Works without data</h3><p className="text-muted-foreground">Make calls, send texts, and use maps even when cellular networks fail.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Better experience</h3><p className="text-muted-foreground">Fewer missed meetups, reliable communication, and seamless connectivity.</p></Card>
          </div>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Tech overview</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">MagSafe device</h3><p className="text-muted-foreground">Compact device that attaches to the back of your iPhone via MagSafe technology.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Bluetooth connectivity</h3><p className="text-muted-foreground">Connects your iPhone to the device via Bluetooth—no Wi‑Fi required.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Mesh network</h3><p className="text-muted-foreground">Device‑to‑device mesh network enables communication across festivals and conventions.</p></Card>
          </div>
        </div>
      </section>

      {/* Rental Flow */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">How to get started</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl">
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">1) Purchase or rent</h3><p className="text-muted-foreground">Buy directly or rent through event partnerships.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">2) Attach & pair</h3><p className="text-muted-foreground">Stick to your iPhone and pair via Bluetooth.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">3) Connect to mesh</h3><p className="text-muted-foreground">Join the mesh network automatically.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">4) Stay connected</h3><p className="text-muted-foreground">Make calls, send texts, use maps—no data needed.</p></Card>
          </div>
        </div>
      </section>

      {/* Trust & Proof */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Available now</Badge>
          <p className="text-muted-foreground">Seeking partnerships with festivals and business conventions for the 2025 season.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">FAQ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Does it work without cellular data?</h3><p className="text-muted-foreground">Yes. Your iPhone connects to the Waypoint device via Bluetooth, which then connects to the mesh network. You can make calls, send texts, and use Find My Friends maps even when cellular networks fail.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Which iPhones are compatible?</h3><p className="text-muted-foreground">The device uses MagSafe technology, so it's compatible with iPhone 12 and later models that support MagSafe.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Can I buy it or only rent it?</h3><p className="text-muted-foreground">Both options are available. You can purchase your own device directly, or rent one through event partnerships at festivals and business conventions.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Is there an app required?</h3><p className="text-muted-foreground">No special app required. Pair via Bluetooth and use your iPhone's native features—calls, messages, Find My Friends, and maps work normally.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">Where can I use it?</h3><p className="text-muted-foreground">Perfect for music festivals and business conventions where cellular networks get congested. Works anywhere there's a Waypoint mesh network.</p></Card>
            <Card className="p-6 bg-card border-border"><h3 className="font-bold mb-2">How do events partner with Waypoint?</h3><p className="text-muted-foreground">We work with festivals and business conventions to deploy mesh networks and offer devices through rental partners or direct sales to attendees.</p></Card>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get started with Waypoint</h2>
            <p className="text-xl text-muted-foreground mb-8">Join the waitlist or book a pilot for your event.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WaitlistFormDialog>
                <Button size="lg" className="bg-gradient-hero hover:shadow-glow-strong transition-all text-lg">
                  Join waitlist
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </WaitlistFormDialog>
              <PartnerFormDialog>
                <Button size="lg" variant="outline" className="text-lg">
                  Book a pilot
                </Button>
              </PartnerFormDialog>
            </div>
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
              <p className="text-muted-foreground">Waypoint is a MagSafe device that connects your iPhone via Bluetooth to a mesh network. Available for direct purchase or through event partnerships at music festivals and business conventions.</p>
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
              <h4 className="font-bold mb-4">For Events</h4>
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
