import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { MeshNetworkBackground } from "@/components/MeshNetworkBackground";

// LinkedIn icon component (Linkedin from lucide-react is deprecated)
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <MeshNetworkBackground />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 relative z-10 py-20">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-12 md:mb-16">
            <div className="w-10 h-10 rounded-full bg-gradient-hero" />
            <span className="text-3xl font-bold">Waypoint</span>
          </div>

          {/* Hero Content + CTA Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl">
            {/* Left: Hero Content */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                No signal,<br />
                No problem.
              </h1>
              
              <p className="text-base md:text-2xl text-muted-foreground leading-relaxed">
                From crowded events that overload cell towers<br />
                to crisis situations that take out power grids<br />
                to sparsely populated areas without cell coverage,<br />
                <strong>Waypoint connects up to 3km between nodes <br />
                in a mesh network without cellular data.</strong>
              </p>
            </div>

            {/* Right: Product Description + CTA */}
            <div className="lg:pl-8 space-y-8">
              {/* Product Description */}
              <Card className="p-6 md:p-8 bg-card/60 backdrop-blur-sm border-border">
                <h3 className="text-xl font-bold mb-4">What it is</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Bluetooth connectivity:</strong> Pairs with your phone wirelessly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>MagSafe attachment:</strong> Keep it close to your iPhone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Mesh network:</strong> Connects with other Waypoint devices up to 3km</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Without cellular data:</strong> Make calls, send texts, share locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Custom applications:</strong> Build your own applications on the Waypoint platform.</span>
                  </li>
                </ul>
              </Card>

              {/* CTA */}
              <div className="pt-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Interested in learning more?
                </p>

                <Button
                  size="default"
                  className="bg-gradient-hero hover:shadow-glow-strong transition-all"
                  asChild
                >
                  <a href="mailto:eddy@findwaypoint.com?subject=Waypoint%20Interest&body=Hi%20Eddy%2C%0A%0AI'm%20interested%20in%20learning%20more%20about%20Waypoint.%0A%0AOrganisation%20Name%3A%20%0AContact%20Name%3A%20%0APhone%20Number%3A%20%0AProject%2FUse%20Case%20Name%3A%20%0ANumber%20of%20Users%3A%20%0ATimeframe%3A%20%0A%0AMessage%3A%20">
                    Request details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between gap-4">
            {/* Copyright - Left */}
            <p className="text-muted-foreground text-sm">
              &copy; 2025 Waypoint. All rights reserved.
            </p>

            {/* Social Links - Right */}
            <div className="flex gap-3 flex-shrink-0">
              <a
                href="https://linkedin.com/in/eddydavies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-card hover:shadow-glow transition-all"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a
                href="https://x.com/eddywdavies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-card hover:shadow-glow transition-all"
                aria-label="X (Twitter)"
              >
                <XIcon className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
