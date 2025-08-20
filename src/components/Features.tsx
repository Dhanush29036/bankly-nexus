import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CreditCard, 
  Smartphone, 
  Shield, 
  TrendingUp, 
  Headphones, 
  Clock,
  DollarSign,
  PieChart,
  Bell
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Digital Cards",
      description: "Instantly create virtual cards for secure online purchases and manage all your cards in one place."
    },
    {
      icon: Smartphone,
      title: "Mobile Banking",
      description: "Complete banking experience on your mobile with biometric security and instant notifications."
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Advanced encryption and multi-factor authentication to keep your money and data safe."
    },
    {
      icon: TrendingUp,
      title: "Investment Tools",
      description: "Smart investment recommendations and portfolio management with real-time market insights."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support with AI-powered chatbot and human agents."
    },
    {
      icon: Clock,
      title: "Instant Transfers",
      description: "Send money instantly to anyone, anywhere with just their phone number or email."
    },
    {
      icon: DollarSign,
      title: "Low Fees",
      description: "Transparent pricing with no hidden fees and competitive rates on all services."
    },
    {
      icon: PieChart,
      title: "Spending Analytics",
      description: "Detailed insights into your spending patterns with intelligent categorization."
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Customizable notifications for transactions, bills, and important account activities."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need for Modern Banking
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover powerful features designed to make your financial life easier, 
            more secure, and more rewarding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card shadow-card hover:shadow-primary transition-all duration-300 border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;