import { Button } from "@/components/ui/button";
import { ArrowRight, Bitcoin, Shield, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full animate-fade-in">
            <span className="text-primary font-semibold">
              Blockchain Innovation Meta2140
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Building the Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Bitcoin Technology
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            We deliver cutting-edge blockchain solutions that drive innovation,
            security, and scalability for the decentralized economy.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity font-semibold text-lg px-8 py-6 animate-pulse-glow"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-semibold text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>

          {/* Feature Pills */}
          <div
            className="flex flex-wrap items-center justify-center gap-6 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-card/70 backdrop-blur-sm border border-border rounded-lg">
              <Bitcoin className="text-primary" size={20} />
              <span className="text-foreground font-medium">
                Cryptocurrency Focused
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 bg-card/70 backdrop-blur-sm border border-border rounded-lg">
              <Shield className="text-primary" size={20} />
              <span className="text-foreground font-medium">
                Secure Solutions
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 bg-card/70 backdrop-blur-sm border border-border rounded-lg">
              <Zap className="text-primary" size={20} />
              <span className="text-foreground font-medium">
                Lightning Fast
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};
