import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import defiExchangeImage from "@/assets/portfolio/defi-exchange.jpg";
import supplyChainImage from "@/assets/portfolio/supply-chain.jpg";
import nftMarketplaceImage from "@/assets/portfolio/nft-marketplace.jpg";
import securityAuditImage from "@/assets/portfolio/security-audit.jpg";

const portfolioProjects = [
  {
    title: "DeFi Exchange Platform",
    client: "CryptoTrade Global",
    image: defiExchangeImage,
    description: "Developed a high-performance decentralized exchange handling over $2B in daily trading volume. Features include advanced order matching, liquidity pools, and real-time market analytics.",
    technologies: ["Solidity", "Ethereum", "React", "Node.js", "WebSocket", "PostgreSQL"],
    results: "2M+ active users, 99.99% uptime, sub-second transaction processing",
    testimonial: {
      quote: "Meta2140 delivered a world-class DeFi platform that exceeded our expectations. Their expertise in blockchain architecture and security was instrumental in our success.",
      author: "James Wilson",
      role: "CEO, CryptoTrade Global"
    }
  },
  {
    title: "Enterprise Supply Chain Solution",
    client: "GlobalLogistics Corp",
    image: supplyChainImage,
    description: "Built an enterprise-grade blockchain solution for tracking goods across international supply chains. Provides real-time visibility, authenticity verification, and automated compliance.",
    technologies: ["Hyperledger Fabric", "Go", "Docker", "Kubernetes", "MongoDB", "Azure"],
    results: "40% reduction in logistics fraud, 30% faster customs clearance",
    testimonial: {
      quote: "The transparency and traceability provided by Meta2140's solution transformed our supply chain operations. We now have complete confidence in our product authenticity.",
      author: "Maria Garcia",
      role: "COO, GlobalLogistics Corp"
    }
  },
  {
    title: "NFT Marketplace & Minting Platform",
    client: "ArtChain Digital",
    image: nftMarketplaceImage,
    description: "Created a full-featured NFT marketplace with lazy minting, royalty management, and cross-chain compatibility. Supports ERC-721 and ERC-1155 standards with gasless transactions.",
    technologies: ["Solidity", "IPFS", "Polygon", "Next.js", "The Graph", "Alchemy"],
    results: "500K+ NFTs minted, $50M+ in secondary sales, 200K+ creators",
    testimonial: {
      quote: "Meta2140's NFT platform gave our artists the tools they needed to thrive in web3. The user experience is seamless and the gas optimization is brilliant.",
      author: "Alex Chen",
      role: "Founder, ArtChain Digital"
    }
  },
  {
    title: "Smart Contract Security Audit Suite",
    client: "SecureChain Labs",
    image: securityAuditImage,
    description: "Developed an automated security audit platform that scans smart contracts for vulnerabilities, generates comprehensive reports, and provides fix recommendations using AI.",
    technologies: ["Python", "Slither", "Mythril", "Machine Learning", "FastAPI", "Redis"],
    results: "10,000+ contracts audited, 95% vulnerability detection rate",
    testimonial: {
      quote: "The security audit platform Meta2140 built has become an essential tool for our team. It's caught critical vulnerabilities that could have cost our clients millions.",
      author: "Dr. Sarah Johnson",
      role: "CTO, SecureChain Labs"
    }
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-primary">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real-world blockchain solutions delivering measurable results
            </p>
          </div>

          <div className="space-y-12">
            {portfolioProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground font-semibold">
                        Case Study
                      </Badge>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-primary font-semibold">Client: {project.client}</p>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="border-primary/30 text-foreground"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <h4 className="text-sm font-semibold text-primary mb-2">Results:</h4>
                        <p className="text-sm text-foreground">{project.results}</p>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg border border-border">
                      <Quote className="text-primary mb-2" size={20} />
                      <p className="text-sm text-muted-foreground italic mb-3">
                        "{project.testimonial.quote}"
                      </p>
                      <div className="text-sm">
                        <p className="font-semibold text-foreground">
                          {project.testimonial.author}
                        </p>
                        <p className="text-muted-foreground">{project.testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
