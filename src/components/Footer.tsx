import { Bitcoin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center gap-2">
            <Bitcoin className="text-primary" size={24} />
            <span className="text-xl font-bold text-foreground">Meta2140</span>
          </div>
          
          <p className="text-muted-foreground text-center max-w-md">
            Building the future of Bitcoin technology. Innovative blockchain solutions for the decentralized economy.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <button className="hover:text-primary transition-colors">Privacy Policy</button>
            <button className="hover:text-primary transition-colors">Terms of Service</button>
            <button className="hover:text-primary transition-colors">Careers</button>
          </div>
          
          <div className="pt-6 border-t border-border w-full text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Meta2140. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
