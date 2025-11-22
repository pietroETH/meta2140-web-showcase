import { Card } from "@/components/ui/card";
import { Code, Database, Lock, Network, Wallet, Cpu } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Smart Contract Development",
    description: "Build secure and efficient smart contracts on Bitcoin and other blockchain platforms with our expert development team.",
  },
  {
    icon: Wallet,
    title: "Wallet Solutions",
    description: "Custom cryptocurrency wallet development with advanced security features and seamless user experience.",
  },
  {
    icon: Network,
    title: "Blockchain Integration",
    description: "Integrate blockchain technology into your existing systems for enhanced transparency and efficiency.",
  },
  {
    icon: Lock,
    title: "Security Audits",
    description: "Comprehensive security assessments and audits to ensure your blockchain applications are protected.",
  },
  {
    icon: Database,
    title: "DeFi Solutions",
    description: "Decentralized finance platforms and protocols that empower users with financial sovereignty.",
  },
  {
    icon: Cpu,
    title: "Mining Infrastructure",
    description: "Enterprise-grade mining solutions and infrastructure consulting for optimal Bitcoin mining operations.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive blockchain solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-block p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
