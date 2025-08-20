import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  CreditCard,
  Building,
  Smartphone
} from "lucide-react";

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("all");

  const transactions = [
    {
      id: "TXN001",
      type: "credit",
      description: "Salary Deposit - Tech Corp",
      amount: 8500.00,
      date: "2024-01-15",
      time: "09:30 AM",
      category: "Income",
      method: "Direct Deposit",
      status: "Completed",
      reference: "SAL-2024-001"
    },
    {
      id: "TXN002", 
      type: "debit",
      description: "Amazon Purchase",
      amount: -156.78,
      date: "2024-01-14",
      time: "02:45 PM",
      category: "Shopping",
      method: "Debit Card",
      status: "Completed",
      reference: "AMZ-789456123"
    },
    {
      id: "TXN003",
      type: "debit", 
      description: "Online Transfer to John Smith",
      amount: -2500.00,
      date: "2024-01-13",
      time: "11:20 AM",
      category: "Transfer",
      method: "Online Banking",
      status: "Completed",
      reference: "TRF-2024-087"
    },
    {
      id: "TXN004",
      type: "credit",
      description: "Investment Return - Portfolio A",
      amount: 340.25,
      date: "2024-01-12",
      time: "04:15 PM",
      category: "Investment",
      method: "Auto Transfer",
      status: "Completed",
      reference: "INV-PORT-A-124"
    },
    {
      id: "TXN005",
      type: "debit",
      description: "Electric Bill - City Power",
      amount: -89.50,
      date: "2024-01-11",
      time: "08:00 AM",
      category: "Utilities",
      method: "Auto Pay",
      status: "Completed",
      reference: "UTIL-CP-5547"
    },
    {
      id: "TXN006",
      type: "debit",
      description: "Grocery Store - FreshMart",
      amount: -234.67,
      date: "2024-01-10",
      time: "06:30 PM",
      category: "Groceries",
      method: "Credit Card",
      status: "Completed",
      reference: "GRC-FM-8901"
    },
    {
      id: "TXN007",
      type: "credit",
      description: "Freelance Payment - Design Work",
      amount: 1250.00,
      date: "2024-01-09",
      time: "12:45 PM",
      category: "Income",
      method: "Wire Transfer",
      status: "Completed",
      reference: "FREE-DES-445"
    },
    {
      id: "TXN008",
      type: "debit",
      description: "Restaurant - Bella Vista",
      amount: -87.32,
      date: "2024-01-08",
      time: "07:45 PM",
      category: "Dining",
      method: "Debit Card",
      status: "Completed",
      reference: "REST-BV-2890"
    }
  ];

  const getMethodIcon = (method: string) => {
    switch (method.toLowerCase()) {
      case "debit card":
      case "credit card":
        return <CreditCard className="h-4 w-4" />;
      case "direct deposit":
      case "wire transfer":
        return <Building className="h-4 w-4" />;
      case "online banking":
        return <Smartphone className="h-4 w-4" />;
      default:
        return <ArrowUpRight className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "income":
        return "bg-success/10 text-success";
      case "shopping":
        return "bg-primary/10 text-primary";
      case "groceries":
        return "bg-accent/10 text-accent";
      case "dining":
        return "bg-warning/10 text-warning";
      case "utilities":
        return "bg-muted text-muted-foreground";
      case "transfer":
        return "bg-secondary text-secondary-foreground";
      case "investment":
        return "bg-success/10 text-success";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.reference.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Transaction History</h1>
          <p className="text-muted-foreground mt-2">
            View and manage all your account transactions
          </p>
        </div>
        <Button variant="outline" className="flex items-center space-x-2">
          <Download className="h-4 w-4" />
          <span>Export</span>
        </Button>
      </div>

      {/* Filters and Search */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Filter Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Transaction Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Transactions</TabsTrigger>
          <TabsTrigger value="credit">Credits</TabsTrigger>
          <TabsTrigger value="debit">Debits</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4">
            {filteredTransactions.map((transaction) => (
              <Card key={transaction.id} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full ${
                        transaction.type === 'credit' 
                          ? 'bg-success/10 text-success' 
                          : 'bg-destructive/10 text-destructive'
                      }`}>
                        {transaction.type === 'credit' ? (
                          <ArrowUpRight className="h-5 w-5" />
                        ) : (
                          <ArrowDownRight className="h-5 w-5" />
                        )}
                      </div>
                      
                      <div className="space-y-1">
                        <p className="font-medium text-card-foreground">
                          {transaction.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{transaction.date}</span>
                            <span>{transaction.time}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {getMethodIcon(transaction.method)}
                            <span>{transaction.method}</span>
                          </div>
                          <span className="text-xs">
                            Ref: {transaction.reference}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right space-y-2">
                      <div className={`text-lg font-bold ${
                        transaction.type === 'credit' ? 'text-success' : 'text-destructive'
                      }`}>
                        {transaction.type === 'credit' ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getCategoryColor(transaction.category)}>
                          {transaction.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="credit" className="space-y-4">
          <div className="grid gap-4">
            {filteredTransactions
              .filter(t => t.type === 'credit')
              .map((transaction) => (
                <Card key={transaction.id} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-success/10 text-success">
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium text-card-foreground">
                            {transaction.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{transaction.date} {transaction.time}</span>
                            <span>{transaction.method}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-success">
                          +${transaction.amount.toLocaleString()}
                        </div>
                        <Badge className={getCategoryColor(transaction.category)}>
                          {transaction.category}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="debit" className="space-y-4">
          <div className="grid gap-4">
            {filteredTransactions
              .filter(t => t.type === 'debit')
              .map((transaction) => (
                <Card key={transaction.id} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-destructive/10 text-destructive">
                          <ArrowDownRight className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium text-card-foreground">
                            {transaction.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{transaction.date} {transaction.time}</span>
                            <span>{transaction.method}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-destructive">
                          ${Math.abs(transaction.amount).toLocaleString()}
                        </div>
                        <Badge className={getCategoryColor(transaction.category)}>
                          {transaction.category}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="pending">
          <Card className="shadow-card">
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">No pending transactions</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Transactions;