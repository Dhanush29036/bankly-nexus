import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  Eye,
  EyeOff,
  ArrowUpRight,
  ArrowDownLeft,
  PiggyBank,
  RefreshCw
} from "lucide-react";
import { useState } from "react";

const Balance = () => {
  const [showBalance, setShowBalance] = useState(true);

  const accounts = [
    {
      id: 1,
      type: "Premium Checking",
      balance: 125450.75,
      accountNumber: "****1234",
      interestRate: 0.15,
      status: "Active"
    },
    {
      id: 2,
      type: "High Yield Savings",
      balance: 28750.50,
      accountNumber: "****5678",
      interestRate: 2.35,
      status: "Active"
    },
    {
      id: 3,
      type: "Money Market",
      balance: 15000.00,
      accountNumber: "****9012",
      interestRate: 1.85,
      status: "Active"
    }
  ];

  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

  const quickActions = [
    { title: "Transfer Money", icon: ArrowUpRight, color: "text-primary" },
    { title: "Receive Money", icon: ArrowDownLeft, color: "text-success" },
    { title: "Add to Savings", icon: PiggyBank, color: "text-accent" }
  ];

  const balanceInsights = [
    {
      title: "Monthly Income",
      amount: 8500.00,
      change: "+5.2%",
      isPositive: true,
      description: "vs last month"
    },
    {
      title: "Monthly Expenses",
      amount: 4250.30,
      change: "-1.8%",
      isPositive: true,
      description: "vs last month"
    },
    {
      title: "Net Savings",
      amount: 4249.70,
      change: "+12.1%",
      isPositive: true,
      description: "vs last month"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Account Balance</h1>
          <p className="text-muted-foreground mt-2">
            Overview of your account balances and financial position
          </p>
        </div>
        <Button variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      {/* Total Balance Card */}
      <Card className="bg-gradient-primary text-primary-foreground shadow-primary">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardDescription className="text-primary-foreground/70">
                Total Balance
              </CardDescription>
              <CardTitle className="text-4xl font-bold">
                {showBalance ? `$${totalBalance.toLocaleString()}` : "••••••"}
              </CardTitle>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowBalance(!showBalance)}
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
              <Wallet className="h-8 w-8 text-primary-foreground/70" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="secondary"
                className="flex-1 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/30"
              >
                <action.icon className="h-4 w-4 mr-2" />
                {action.title}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Individual Accounts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((account) => (
          <Card key={account.id} className="shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{account.type}</CardTitle>
                <Badge variant="secondary">{account.status}</Badge>
              </div>
              <CardDescription>
                Account {account.accountNumber}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-2xl font-bold text-card-foreground">
                {showBalance ? `$${account.balance.toLocaleString()}` : "••••••"}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Interest Rate</span>
                <span className="font-medium text-success">
                  {account.interestRate}% APY
                </span>
              </div>
              <Progress 
                value={Math.min((account.balance / 50000) * 100, 100)} 
                className="h-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Available</span>
                <span>{Math.min(Math.round((account.balance / 50000) * 100), 100)}% of limit</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Balance Insights */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Financial Insights</CardTitle>
          <CardDescription>
            Your financial health overview for this month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {balanceInsights.map((insight, index) => (
              <div key={index} className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  {insight.title}
                </p>
                <p className="text-2xl font-bold text-card-foreground">
                  ${insight.amount.toLocaleString()}
                </p>
                <div className="flex items-center space-x-2">
                  {insight.isPositive ? (
                    <TrendingUp className="h-4 w-4 text-success" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-destructive" />
                  )}
                  <span className={`text-sm font-medium ${
                    insight.isPositive ? "text-success" : "text-destructive"
                  }`}>
                    {insight.change}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {insight.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Balance;