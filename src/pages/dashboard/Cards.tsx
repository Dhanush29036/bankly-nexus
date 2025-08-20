import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CreditCard, 
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Plus,
  Settings,
  TrendingUp,
  Calendar,
  Shield,
  Zap
} from "lucide-react";
import { useState } from "react";

const Cards = () => {
  const [showCardNumbers, setShowCardNumbers] = useState(false);

  const creditCards = [
    {
      id: "CC001",
      name: "BanklyNexus Platinum",
      type: "Credit Card",
      number: "4532 1234 5678 9012",
      maskedNumber: "**** **** **** 9012",
      expiryDate: "12/27",
      cvv: "123",
      balance: 2450.75,
      creditLimit: 15000,
      availableCredit: 12549.25,
      minPayment: 98.03,
      dueDate: "2024-02-15",
      interestRate: 18.9,
      status: "Active",
      cardHolder: "John Doe",
      issuedDate: "March 2022",
      cardType: "Visa",
      color: "from-purple-600 to-blue-600"
    },
    {
      id: "CC002",
      name: "BanklyNexus Rewards",
      type: "Credit Card",
      number: "5412 9876 5432 1098",
      maskedNumber: "**** **** **** 1098",
      expiryDate: "08/26",
      cvv: "456",
      balance: 890.50,
      creditLimit: 8000,
      availableCredit: 7109.50,
      minPayment: 35.62,
      dueDate: "2024-02-10",
      interestRate: 21.9,
      status: "Active",
      cardHolder: "John Doe",
      issuedDate: "January 2023",
      cardType: "Mastercard",
      color: "from-green-600 to-teal-600"
    }
  ];

  const debitCards = [
    {
      id: "DC001",
      name: "BanklyNexus Premium Debit",
      type: "Debit Card",
      number: "4111 1111 1111 1111",
      maskedNumber: "**** **** **** 1111",
      expiryDate: "05/27",
      cvv: "789",
      accountBalance: 125450.75,
      dailyLimit: 5000,
      monthlyLimit: 50000,
      usedToday: 234.56,
      usedThisMonth: 4250.30,
      status: "Active",
      cardHolder: "John Doe",
      issuedDate: "March 2020",
      cardType: "Visa",
      color: "from-blue-600 to-indigo-600"
    }
  ];

  const cardFeatures = [
    {
      title: "Contactless Payments",
      description: "Tap to pay for purchases under $100",
      icon: Zap,
      enabled: true
    },
    {
      title: "Enhanced Security",
      description: "Advanced fraud protection and alerts",
      icon: Shield,
      enabled: true
    },
    {
      title: "Rewards Program",
      description: "Earn points on every purchase",
      icon: TrendingUp,
      enabled: true
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Cards</h1>
          <p className="text-muted-foreground mt-2">
            Manage your credit and debit cards
          </p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground shadow-primary">
          <Plus className="h-4 w-4 mr-2" />
          Apply for New Card
        </Button>
      </div>

      {/* Card Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Total Credit Limit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">
              ${creditCards.reduce((sum, card) => sum + card.creditLimit, 0).toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Across {creditCards.length} credit cards
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Available Credit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">
              ${creditCards.reduce((sum, card) => sum + card.availableCredit, 0).toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Ready to use
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Next Payment Due</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">
              ${creditCards.reduce((sum, card) => sum + card.minPayment, 0).toFixed(2)}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Due Feb 10, 2024
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Cards Display */}
      <Tabs defaultValue="credit" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="credit">Credit Cards</TabsTrigger>
            <TabsTrigger value="debit">Debit Cards</TabsTrigger>
          </TabsList>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCardNumbers(!showCardNumbers)}
          >
            {showCardNumbers ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
            {showCardNumbers ? "Hide" : "Show"} Numbers
          </Button>
        </div>

        <TabsContent value="credit" className="space-y-6">
          {creditCards.map((card) => (
            <Card key={card.id} className="shadow-card overflow-hidden">
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Card Visual */}
                  <div className="space-y-4">
                    <div className={`relative p-6 rounded-xl bg-gradient-to-br ${card.color} text-white shadow-lg`}>
                      <div className="flex justify-between items-start mb-8">
                        <div>
                          <p className="text-sm opacity-80">{card.name}</p>
                          <p className="text-xs opacity-70">{card.cardType}</p>
                        </div>
                        <CreditCard className="h-8 w-8 opacity-80" />
                      </div>
                      
                      <div className="space-y-4">
                        <div className="font-mono text-xl tracking-wider">
                          {showCardNumbers ? card.number : card.maskedNumber}
                        </div>
                        
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-xs opacity-70">CARDHOLDER</p>
                            <p className="text-sm font-medium">{card.cardHolder}</p>
                          </div>
                          <div>
                            <p className="text-xs opacity-70">EXPIRES</p>
                            <p className="text-sm font-medium">{card.expiryDate}</p>
                          </div>
                          {showCardNumbers && (
                            <div>
                              <p className="text-xs opacity-70">CVV</p>
                              <p className="text-sm font-medium">{card.cvv}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Lock className="h-4 w-4 mr-2" />
                        Freeze Card
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Button>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Current Balance</span>
                        <Badge variant={card.status === "Active" ? "default" : "secondary"}>
                          {card.status}
                        </Badge>
                      </div>
                      <div className="text-3xl font-bold text-card-foreground">
                        ${card.balance.toLocaleString()}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Available Credit</span>
                        <span className="font-medium">${card.availableCredit.toLocaleString()}</span>
                      </div>
                      <Progress 
                        value={((card.creditLimit - card.availableCredit) / card.creditLimit) * 100} 
                        className="h-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Used: ${(card.creditLimit - card.availableCredit).toLocaleString()}</span>
                        <span>Limit: ${card.creditLimit.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Min Payment</p>
                        <p className="font-medium text-warning">${card.minPayment}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Due Date</p>
                        <p className="font-medium">{card.dueDate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Interest Rate</p>
                        <p className="font-medium">{card.interestRate}% APR</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Issued</p>
                        <p className="font-medium">{card.issuedDate}</p>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-primary text-primary-foreground shadow-primary">
                      Make Payment
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="debit" className="space-y-6">
          {debitCards.map((card) => (
            <Card key={card.id} className="shadow-card overflow-hidden">
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Card Visual */}
                  <div className="space-y-4">
                    <div className={`relative p-6 rounded-xl bg-gradient-to-br ${card.color} text-white shadow-lg`}>
                      <div className="flex justify-between items-start mb-8">
                        <div>
                          <p className="text-sm opacity-80">{card.name}</p>
                          <p className="text-xs opacity-70">{card.cardType}</p>
                        </div>
                        <CreditCard className="h-8 w-8 opacity-80" />
                      </div>
                      
                      <div className="space-y-4">
                        <div className="font-mono text-xl tracking-wider">
                          {showCardNumbers ? card.number : card.maskedNumber}
                        </div>
                        
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-xs opacity-70">CARDHOLDER</p>
                            <p className="text-sm font-medium">{card.cardHolder}</p>
                          </div>
                          <div>
                            <p className="text-xs opacity-70">EXPIRES</p>
                            <p className="text-sm font-medium">{card.expiryDate}</p>
                          </div>
                          {showCardNumbers && (
                            <div>
                              <p className="text-xs opacity-70">CVV</p>
                              <p className="text-sm font-medium">{card.cvv}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Unlock className="h-4 w-4 mr-2" />
                        Active
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Button>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Account Balance</span>
                        <Badge variant={card.status === "Active" ? "default" : "secondary"}>
                          {card.status}
                        </Badge>
                      </div>
                      <div className="text-3xl font-bold text-card-foreground">
                        ${card.accountBalance.toLocaleString()}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Daily Spending</span>
                          <span className="font-medium">${card.usedToday} / ${card.dailyLimit.toLocaleString()}</span>
                        </div>
                        <Progress 
                          value={(card.usedToday / card.dailyLimit) * 100} 
                          className="h-2"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Monthly Spending</span>
                          <span className="font-medium">${card.usedThisMonth.toLocaleString()} / ${card.monthlyLimit.toLocaleString()}</span>
                        </div>
                        <Progress 
                          value={(card.usedThisMonth / card.monthlyLimit) * 100} 
                          className="h-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Daily Limit</p>
                        <p className="font-medium">${card.dailyLimit.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Monthly Limit</p>
                        <p className="font-medium">${card.monthlyLimit.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Card Type</p>
                        <p className="font-medium">{card.cardType}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Issued</p>
                        <p className="font-medium">{card.issuedDate}</p>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-primary text-primary-foreground shadow-primary">
                      View Transactions
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Card Features */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Card Features</CardTitle>
          <CardDescription>
            Advanced features available with your BanklyNexus cards
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cardFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-card-foreground">{feature.title}</p>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                  <Badge variant={feature.enabled ? "default" : "secondary"} className="text-xs">
                    {feature.enabled ? "Enabled" : "Disabled"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;