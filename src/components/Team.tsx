import { Card } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import ceoImage from "@/assets/team/ceo.jpg";
import ctoImage from "@/assets/team/cto.jpg";
import architect1Image from "@/assets/team/architect1.jpg";
import architect2Image from "@/assets/team/architect2.jpg";
import developer1Image from "@/assets/team/developer1.jpg";
import securityImage from "@/assets/team/security.jpg";

const teamMembers = [
  {
    name: "Michael Chen",
    role: "Chief Executive Officer",
    image: ceoImage,
    bio: "With over 15 years in fintech and blockchain, Michael leads Meta2140's vision to revolutionize decentralized finance. Previously led blockchain initiatives at Fortune 500 companies.",
    email: "michael.chen@meta2140.com",
    linkedin: "#"
  },
  {
    name: "Sarah Rodriguez",
    role: "Chief Technology Officer",
    image: ctoImage,
    bio: "Sarah brings 12+ years of experience in distributed systems and cryptocurrency development. She architected secure blockchain solutions handling billions in transactions.",
    email: "sarah.rodriguez@meta2140.com",
    linkedin: "#"
  },
  {
    name: "David Kim",
    role: "Lead Blockchain Architect",
    image: architect1Image,
    bio: "Expert in smart contract development and DeFi protocols. David has designed and deployed over 50 production blockchain applications with zero security breaches.",
    email: "david.kim@meta2140.com",
    linkedin: "#"
  },
  {
    name: "Elena Volkov",
    role: "Senior Blockchain Architect",
    image: architect2Image,
    bio: "Specializing in cross-chain protocols and Layer 2 solutions. Elena holds a PhD in Cryptography and has published research on blockchain scalability.",
    email: "elena.volkov@meta2140.com",
    linkedin: "#"
  },
  {
    name: "Jessica Martinez",
    role: "Lead Smart Contract Developer",
    image: developer1Image,
    bio: "Full-stack blockchain developer with expertise in Solidity, Rust, and Web3 integration. Jessica has audited and optimized smart contracts securing over $500M in assets.",
    email: "jessica.martinez@meta2140.com",
    linkedin: "#"
  },
  {
    name: "Thomas Anderson",
    role: "Head of Security",
    image: securityImage,
    bio: "Cybersecurity specialist focused on blockchain security audits and penetration testing. Thomas previously worked with government agencies on cryptocurrency security protocols.",
    email: "thomas.anderson@meta2140.com",
    linkedin: "#"
  }
];

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-primary">Expert Team</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Industry-leading blockchain experts driving innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
                      aria-label="Send email"
                    >
                      <Mail size={18} />
                    </a>
                    <a
                      href={member.linkedin}
                      className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin size={18} />
                    </a>
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
