import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Shield, Smartphone, TrendingUp } from "lucide-react";
import heroImage from "@/assets/banking-hero.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Future Starts with 
                <span className="block text-accent"> Smart Banking</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
                Experience next-generation banking with secure transactions, intelligent insights, 
                and 24/7 support. Join millions who trust BanklyNexus for their financial journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => navigate("/signup")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-primary text-lg px-8"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate("/login")}
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
              >
                Sign In
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium">Bank-grade Security</span>
              </div>
              <div className="flex items-center space-x-3">
                <Smartphone className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium">Mobile Banking</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium">Smart Insights</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={heroImage} 
              alt="Modern Banking Interface" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;