import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  CreditCard, 
  PiggyBank,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const Dashboard = () => {
  const accountBalance = 125450.75;
  const monthlyIncome = 8500.00;
  const monthlyExpenses = 4250.30;
  const savingsGoal = 50000;
  const currentSavings = 28750;

  const recentTransactions = [
    { id: 1, description: "Salary Deposit", amount: 8500.00, type: "credit", date: "2024-01-15" },
    { id: 2, description: "Grocery Store", amount: -156.78, type: "debit", date: "2024-01-14" },
    { id: 3, description: "Online Transfer", amount: -2500.00, type: "debit", date: "2024-01-13" },
    { id: 4, description: "Investment Return", amount: 340.25, type: "credit", date: "2024-01-12" },
    { id: 5, description: "Electric Bill", amount: -89.50, type: "debit", date: "2024-01-11" },
  ];

  const quickStats = [
    {
      title: "Total Balance",
      value: `$${accountBalance.toLocaleString()}`,
      change: "+2.5%",
      isPositive: true,
      icon: DollarSign,
      color: "text-success"
    },
    {
      title: "Monthly Income",
      value: `$${monthlyIncome.toLocaleString()}`,
      change: "+5.2%",
      isPositive: true,
      icon: TrendingUp,
      color: "text-success"
    },
    {
      title: "Monthly Expenses",
      value: `$${monthlyExpenses.toLocaleString()}`,
      change: "-1.8%",
      isPositive: true,
      icon: TrendingDown,
      color: "text-primary"
    },
    {
      title: "Active Cards",
      value: "3",
      change: "2 Credit, 1 Debit",
      isPositive: true,
      icon: CreditCard,
      color: "text-accent"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-primary text-primary-foreground rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
        <p className="text-primary-foreground/90">
          Here's your financial overview for today, January 15, 2024
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <Card key={index} className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {typeof stat.change === 'string' && stat.change.includes('%') ? (
                  <span className={stat.isPositive ? "text-success" : "text-destructive"}>
                    {stat.change} from last month
                  </span>
                ) : (
                  stat.change
                )}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Transactions */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Transactions
              <Badge variant="secondary">Last 5</Badge>
            </CardTitle>
            <CardDescription>
              Your most recent account activity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${
                      transaction.type === 'credit' 
                        ? 'bg-success/10 text-success' 
                        : 'bg-destructive/10 text-destructive'
                    }`}>
                      {transaction.type === 'credit' ? (
                        <ArrowUpRight className="h-4 w-4" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">
                        {transaction.description}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {transaction.date}
                      </p>
                    </div>
                  </div>
                  <div className={`font-medium ${
                    transaction.type === 'credit' ? 'text-success' : 'text-destructive'
                  }`}>
                    {transaction.type === 'credit' ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Savings Goal */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PiggyBank className="h-5 w-5 text-primary" />
              <span>Savings Goal</span>
            </CardTitle>
            <CardDescription>
              Track your progress towards your financial goals
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Current Progress</span>
              <span className="text-sm font-medium">
                ${currentSavings.toLocaleString()} / ${savingsGoal.toLocaleString()}
              </span>
            </div>
            <Progress 
              value={(currentSavings / savingsGoal) * 100} 
              className="h-3"
            />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {Math.round((currentSavings / savingsGoal) * 100)}% Complete
              </span>
              <span className="text-primary font-medium">
                ${(savingsGoal - currentSavings).toLocaleString()} to go
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;