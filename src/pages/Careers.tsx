import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, Heart, TrendingUp, Coffee, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Careers = () => {
  const { toast } = useToast();
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: "",
    coverLetter: "",
  });

  const benefits = [
    {
      icon: TrendingUp,
      title: "Competitive Salary",
      description: "Industry-leading compensation with performance bonuses and equity options",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, gym membership, and mental health support",
    },
    {
      icon: Coffee,
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and unlimited PTO",
    },
    {
      icon: Users,
      title: "Learning & Growth",
      description: "Conference attendance, courses, certifications, and mentorship programs",
    },
  ];

  const positions = [
    {
      id: "senior-blockchain-dev",
      title: "Senior Blockchain Developer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "We're looking for an experienced blockchain developer to lead the development of cutting-edge decentralized applications.",
      requirements: [
        "5+ years of software development experience",
        "3+ years of blockchain development (Ethereum, Solana, or similar)",
        "Strong knowledge of Solidity, Web3.js, and smart contract development",
        "Experience with DeFi protocols and tokenomics",
      ],
      responsibilities: [
        "Design and implement smart contracts and dApps",
        "Lead technical architecture decisions for blockchain solutions",
        "Conduct code reviews and mentor junior developers",
        "Collaborate with clients to understand and deliver requirements",
      ],
    },
    {
      id: "smart-contract-auditor",
      title: "Smart Contract Security Auditor",
      department: "Security",
      location: "Remote",
      type: "Full-time",
      description: "Join our security team to audit smart contracts and ensure the highest security standards for our clients.",
      requirements: [
        "3+ years of smart contract security auditing experience",
        "Deep understanding of common vulnerabilities (reentrancy, overflow, etc.)",
        "Proficiency with security tools (Slither, Mythril, Echidna)",
        "Strong knowledge of Solidity and EVM internals",
      ],
      responsibilities: [
        "Perform comprehensive security audits of smart contracts",
        "Write detailed security reports with findings and recommendations",
        "Develop automated security testing tools",
        "Stay updated with latest security vulnerabilities and attack vectors",
      ],
    },
    {
      id: "blockchain-architect",
      title: "Blockchain Solutions Architect",
      department: "Solutions",
      location: "Hybrid - San Francisco",
      type: "Full-time",
      description: "Design enterprise blockchain solutions and guide clients through their blockchain transformation journey.",
      requirements: [
        "7+ years of software architecture experience",
        "3+ years of blockchain solution design",
        "Experience with multiple blockchain platforms (Ethereum, Hyperledger, Cosmos)",
        "Strong communication and client-facing skills",
      ],
      responsibilities: [
        "Design end-to-end blockchain architectures for enterprise clients",
        "Lead technical discovery and requirements gathering",
        "Create technical documentation and architecture diagrams",
        "Provide technical leadership across multiple projects",
      ],
    },
    {
      id: "defi-engineer",
      title: "DeFi Protocol Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build innovative DeFi protocols and integrate with existing DeFi ecosystems.",
      requirements: [
        "4+ years of blockchain development experience",
        "Strong understanding of DeFi protocols (AMMs, lending, staking)",
        "Experience with Solidity and Rust",
        "Knowledge of MEV, liquidity pools, and yield optimization",
      ],
      responsibilities: [
        "Develop and deploy DeFi smart contracts",
        "Integrate with existing DeFi protocols",
        "Optimize gas costs and protocol efficiency",
        "Research and implement innovative DeFi mechanisms",
      ],
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { data, error } = await supabase.functions.invoke(
        "submit-career-application",
        {
          body: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            position: formData.position,
            resume: formData.resume,
            coverLetter: formData.coverLetter,
          },
        }
      );

      if (error) {
        throw error;
      }

      toast({
        title: "Application Submitted!",
        description: "We've received your application and will get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        resume: "",
        coverLetter: "",
      });
      setSelectedPosition(null);
    } catch (error: any) {
      console.error("Error submitting application:", error);
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleApply = (positionTitle: string) => {
    setSelectedPosition(positionTitle);
    setFormData({ ...formData, position: positionTitle });
    const formSection = document.getElementById("application-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            Join Our Mission
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Build the future of blockchain technology with a team of passionate innovators. 
            At Meta2140, we're not just writing code—we're shaping the decentralized future.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Culture</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in innovation, collaboration, and continuous learning. Our team is our greatest asset.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Innovation First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We encourage experimentation and creative problem-solving. Your ideas matter and can shape our products.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  Work-Life Balance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We value your time and well-being. Flexible hours, remote work, and unlimited PTO help you thrive.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Growth Mindset
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Invest in your growth with learning budgets, mentorship, and opportunities to work on cutting-edge projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We invest in our team's success and well-being with comprehensive benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-secondary/20 border border-border hover:border-primary transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore opportunities to join our growing team
            </p>
          </div>

          <div className="space-y-6">
            {positions.map((position) => (
              <Card key={position.id} className="bg-card border-border hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <CardDescription className="flex flex-wrap gap-4 text-base">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </span>
                      </CardDescription>
                    </div>
                    <Button
                      onClick={() => handleApply(position.title)}
                      className="bg-gradient-primary text-primary-foreground hover:opacity-90 whitespace-nowrap"
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{position.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Responsibilities:</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Apply Now</h2>
            <p className="text-lg text-muted-foreground">
              {selectedPosition 
                ? `Applying for: ${selectedPosition}` 
                : "Fill out the form below to join our team"}
            </p>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Position *</Label>
                    <Input
                      id="position"
                      placeholder="Select a position above or enter one"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Resume/CV Link *</Label>
                  <Input
                    id="resume"
                    type="url"
                    placeholder="https://drive.google.com/... or LinkedIn profile"
                    value={formData.resume}
                    onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    Provide a link to your resume (Google Drive, Dropbox, LinkedIn, etc.)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter *</Label>
                  <Textarea
                    id="coverLetter"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    rows={6}
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 text-lg py-6"
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
