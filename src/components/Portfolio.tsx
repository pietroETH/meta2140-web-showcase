import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Download, Users, Twitter, TrendingUp, DollarSign, Zap, Shield, MapPin, Briefcase } from "lucide-react";
import defiExchangeImage from "@/assets/portfolio/defi-exchange.jpg";
import supplyChainImage from "@/assets/portfolio/supply-chain.jpg";
import nftMarketplaceImage from "@/assets/portfolio/nft-marketplace.jpg";
import securityAuditImage from "@/assets/portfolio/security-audit.jpg";

const portfolioProjects = [
  {
    title: "DeFi Exchange Platform",
    client: "CryptoTrade Global",
    location: "Singapore",
    industry: "DeFi | Trading | Financial Services",
    image: defiExchangeImage,
    description: "Developed a high-performance decentralized exchange handling over $2B in daily trading volume. Features include advanced order matching, liquidity pools, and real-time market analytics.",
    technologies: ["Solidity", "Ethereum", "React", "Node.js", "WebSocket", "PostgreSQL"],
    stats: [
      { icon: Users, label: "Active Users", value: "2M+" },
      { icon: DollarSign, label: "Daily Volume", value: "$2B+" }
    ],
    achievements: [
      "$2.8B+ total transaction volume within first 6 months of launch",
      "63% faster time-to-market than initial development plan",
      "2.4× user growth within the first quarter post-launch",
      "99.99% system uptime with zero transaction failures",
      "Sub-second transaction processing with advanced order matching"
    ],
    testimonial: {
      quote: "Meta2140 delivered a world-class DeFi platform that exceeded our expectations. Their expertise in blockchain architecture and security was instrumental in our success.",
      author: "James Wilson",
      role: "CEO, CryptoTrade Global"
    }
  },
  {
    title: "Enterprise Supply Chain Solution",
    client: "GlobalLogistics Corp",
    location: "United States",
    industry: "Supply Chain | Logistics | Enterprise",
    image: supplyChainImage,
    description: "Built an enterprise-grade blockchain solution for tracking goods across international supply chains. Provides real-time visibility, authenticity verification, and automated compliance.",
    technologies: ["Hyperledger Fabric", "Go", "Docker", "Kubernetes", "MongoDB", "Azure"],
    stats: [
      { icon: TrendingUp, label: "Fraud Reduction", value: "40%" },
      { icon: Zap, label: "Faster Clearance", value: "30%" }
    ],
    achievements: [
      "40% reduction in logistics fraud through blockchain verification",
      "30% faster customs clearance with automated compliance",
      "58% cost reduction in compliance management and data validation",
      "Track over 500K+ shipments monthly across 45+ countries",
      "99.9% data accuracy with immutable blockchain records"
    ],
    testimonial: {
      quote: "The transparency and traceability provided by Meta2140's solution transformed our supply chain operations. We now have complete confidence in our product authenticity.",
      author: "Maria Garcia",
      role: "COO, GlobalLogistics Corp"
    }
  },
  {
    title: "NFT Marketplace & Minting Platform",
    client: "ArtChain Digital",
    location: "United Kingdom",
    industry: "NFT | Digital Art | Marketplace",
    image: nftMarketplaceImage,
    description: "Created a full-featured NFT marketplace with lazy minting, royalty management, and cross-chain compatibility. Supports ERC-721 and ERC-1155 standards with gasless transactions.",
    technologies: ["Solidity", "IPFS", "Polygon", "Next.js", "The Graph", "Alchemy"],
    stats: [
      { icon: Download, label: "NFTs Minted", value: "500K+" },
      { icon: DollarSign, label: "Secondary Sales", value: "$50M+" }
    ],
    achievements: [
      "500K+ NFTs minted with lazy minting technology",
      "$50M+ in secondary sales within first year",
      "200K+ active creators on the platform",
      "85% reduction in gas fees using layer-2 solutions",
      "2.8× platform growth month-over-month"
    ],
    testimonial: {
      quote: "Meta2140's NFT platform gave our artists the tools they needed to thrive in web3. The user experience is seamless and the gas optimization is brilliant.",
      author: "Alex Chen",
      role: "Founder, ArtChain Digital"
    }
  },
  {
    title: "Smart Contract Security Audit Suite",
    client: "SecureChain Labs",
    location: "Australia",
    industry: "Security | Blockchain | Audit Services",
    image: securityAuditImage,
    description: "Developed an automated security audit platform that scans smart contracts for vulnerabilities, generates comprehensive reports, and provides fix recommendations using AI.",
    technologies: ["Python", "Slither", "Mythril", "Machine Learning", "FastAPI", "Redis"],
    stats: [
      { icon: Shield, label: "Contracts Audited", value: "10K+" },
      { icon: TrendingUp, label: "Detection Rate", value: "95%" }
    ],
    achievements: [
      "10,000+ smart contracts audited with AI-powered analysis",
      "95% vulnerability detection rate across all contract types",
      "Prevented potential losses exceeding $100M in client funds",
      "Average audit time reduced from 2 weeks to 48 hours",
      "Integrated with 15+ major blockchain networks"
    ],
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Key Client <span className="text-transparent bg-clip-text bg-gradient-primary">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real-world blockchain solutions delivering exceptional, measurable results
            </p>
          </div>

          <div className="space-y-16">
            {portfolioProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image Section */}
                  <div className="relative lg:col-span-2 aspect-video lg:aspect-auto overflow-hidden">
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

                  {/* Content Section */}
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-foreground mb-3">
                        {project.title}
                      </h3>
                      <p className="text-xl text-primary font-semibold mb-3">{project.client}</p>
                      
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={16} className="text-primary" />
                          <span>Location: {project.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Briefcase size={16} className="text-primary" />
                          <span>Industry: {project.industry}</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {project.stats.map((stat, statIndex) => (
                        <div
                          key={statIndex}
                          className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20"
                        >
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <stat.icon className="text-primary" size={20} />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">{stat.label}</p>
                            <p className="text-xl font-bold text-foreground">{stat.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
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

                    {/* Key Achievements */}
                    <div className="mb-6 p-5 bg-primary/5 rounded-lg border border-primary/20">
                      <h4 className="text-sm font-semibold text-primary mb-4 flex items-center gap-2">
                        <TrendingUp size={16} />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2.5">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-muted/50 p-5 rounded-lg border border-border">
                      <Quote className="text-primary mb-3" size={24} />
                      <p className="text-sm text-muted-foreground italic mb-4 leading-relaxed">
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
