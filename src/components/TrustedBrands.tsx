import { Building2, Briefcase, Shield, Landmark, TrendingUp, Cpu } from "lucide-react";

const trustedBrands = [
  { name: "Enterprise Corp", icon: Building2 },
  { name: "Financial Group", icon: Landmark },
  { name: "Tech Innovations", icon: Cpu },
  { name: "Security Solutions", icon: Shield },
  { name: "Growth Partners", icon: TrendingUp },
  { name: "Business Systems", icon: Briefcase },
  { name: "Digital Finance", icon: Landmark },
  { name: "Tech Ventures", icon: Building2 },
];

export const TrustedBrands = () => {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Trusted By Leading Organizations
        </h2>
        
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />
          
          {/* Scrolling animation container */}
          <div className="flex animate-scroll hover:pause-animation">
            {/* First set of logos */}
            <div className="flex gap-12 px-6">
              {trustedBrands.map((brand, index) => (
                <div
                  key={`first-${index}`}
                  className="flex flex-col items-center justify-center min-w-[180px] h-32 bg-background/50 rounded-lg p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow"
                >
                  <brand.icon className="w-12 h-12 text-primary mb-3" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-muted-foreground text-center">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-12 px-6">
              {trustedBrands.map((brand, index) => (
                <div
                  key={`second-${index}`}
                  className="flex flex-col items-center justify-center min-w-[180px] h-32 bg-background/50 rounded-lg p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow"
                >
                  <brand.icon className="w-12 h-12 text-primary mb-3" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-muted-foreground text-center">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
          Join hundreds of satisfied clients who trust Meta2140 for their blockchain and cryptocurrency technology needs
        </p>
      </div>
    </section>
  );
};
