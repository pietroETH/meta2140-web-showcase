import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "Expert Team",
    description: "Our team consists of seasoned blockchain developers with years of experience in Bitcoin and cryptocurrency technologies.",
  },
  {
    title: "Proven Track Record",
    description: "Successfully delivered over 1000 projects for clients worldwide, from startups to Fortune 500 companies.",
  },
  {
    title: "Security First",
    description: "We prioritize security in every aspect of development, with rigorous testing and security audits for all our solutions.",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support to ensure your blockchain solutions run smoothly without interruption.",
  },
  {
    title: "Innovation Driven",
    description: "We stay at the forefront of blockchain technology, constantly innovating and adapting to new developments.",
  },
  {
    title: "Cost Effective",
    description: "Competitive pricing without compromising on quality, delivering maximum value for your investment.",
  },
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-primary">Meta2140</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional blockchain solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
