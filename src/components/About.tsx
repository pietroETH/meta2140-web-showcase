import { Card } from "@/components/ui/card";
import { Target, Users, TrendingUp, Award } from "lucide-react";

const stats = [
  { icon: Users, label: "Global Clients", value: "500+" },
  { icon: TrendingUp, label: "Success Rate", value: "98%" },
  { icon: Award, label: "Years Experience", value: "10+" },
  { icon: Target, label: "Projects Delivered", value: "1000+" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-primary">Meta2140</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Leading the blockchain revolution with innovative solutions
            </p>
          </div>

          <div className="mb-16">
            <Card className="p-8 md:p-12 bg-card border-border">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Meta2140 is a pioneering blockchain technology company dedicated to building the infrastructure for the decentralized future. Named after the year when the last Bitcoin will be mined, we're committed to long-term innovation in the cryptocurrency space.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our team of expert developers, blockchain architects, and security specialists work tirelessly to deliver cutting-edge solutions that drive the adoption of Bitcoin and blockchain technology worldwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From smart contract development to enterprise blockchain integration, we provide comprehensive services that empower businesses to harness the transformative power of decentralized technology.
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border text-center hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
