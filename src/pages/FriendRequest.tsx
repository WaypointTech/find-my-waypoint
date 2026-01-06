import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Smartphone, QrCode } from "lucide-react";

const FriendRequest = () => {
  const { id } = useParams<{ id: string }>();

  console.log("FriendRequest page loaded with id:", id);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-subtle pointer-events-none" />
      <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12 relative z-10">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex flex-col items-center gap-3">
            <img
              src="/waypoint-icon-transparent.png"
              alt="Waypoint"
              className="w-16 h-16"
            />
            <span className="text-2xl font-bold">Waypoint</span>
          </div>

          {/* Main card */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-border text-center space-y-6">
            {/* Icon */}
            <div className="mx-auto w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow">
              <Users className="w-10 h-10 text-white" />
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Friend Request</h1>
              <p className="text-muted-foreground">
                Someone wants to connect with you on Waypoint!
              </p>
            </div>

            {/* Friend ID display */}
            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                Friend Code
              </p>
              <p className="text-2xl font-mono font-bold text-accent break-all">
                {id}
              </p>
            </div>

            {/* Instructions */}
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Smartphone className="w-4 h-4 text-primary-glow" />
                </div>
                <div>
                  <p className="font-medium">Open the Waypoint app</p>
                  <p className="text-sm text-muted-foreground">
                    Launch the app on your device
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <QrCode className="w-4 h-4 text-primary-glow" />
                </div>
                <div>
                  <p className="font-medium">Scan your friend's QR code</p>
                  <p className="text-sm text-muted-foreground">
                    Or enter the friend code above manually
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Beta notice */}
          <Card className="p-4 bg-card/60 backdrop-blur-sm border-border">
            <p className="text-sm text-muted-foreground text-center">
              <span className="inline-block px-2 py-0.5 bg-accent/20 text-accent rounded text-xs font-medium mr-2">
                BETA
              </span>
              Waypoint is currently in beta testing. Stay tuned for our public launch!
            </p>
          </Card>

          {/* Waitlist CTA */}
          <div className="text-center">
            <a href="https://findwaypoint.io" className="inline-block">
              <Button
                variant="outline"
                className="border-border hover:bg-card hover:shadow-glow transition-all"
              >
                Learn more about Waypoint
              </Button>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; 2025 Waypoint. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FriendRequest;

