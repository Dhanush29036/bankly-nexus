import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building, 
  Car,
  GraduationCap,
  Home,
  Calculator,
  Calendar,
  TrendingDown,
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign
} from "lucide-react";

const Loans = () => {
  const activeLoans = [
    {
      id: "LOAN001",
      type: "Home Loan",
      loanAmount: 450000,
      currentBalance: 387500,
      monthlyEMI: 2850.75,
      interestRate: 3.25,
      tenure: 25,
      remainingTenure: 18.5,
      nextDueDate: "2024-02-01",
      status: "Active",
      loanAccount: "HL-2020-4567",
      startDate: "2020-03-15",
      icon: Home,
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: "LOAN002", 
      type: "Car Loan",
      loanAmount: 75000,
      currentBalance: 32500,
      monthlyEMI: 1245.50,
      interestRate: 5.75,
      tenure: 7,
      remainingTenure: 2.8,
      nextDueDate: "2024-02-05",
      status: "Active",
      loanAccount: "AL-2021-8901",
      startDate: "2021-08-20",
      icon: Car,
      color: "from-green-600 to-teal-600"
    },
    {
      id: "LOAN003",
      type: "Personal Loan",
      loanAmount: 25000,
      currentBalance: 8750,
      monthlyEMI: 695.25,
      interestRate: 8.9,
      tenure: 4,
      remainingTenure: 1.2,
      nextDueDate: "2024-01-28",
      status: "Active",
      loanAccount: "PL-2022-3456",
      startDate: "2022-11-10",
      icon: DollarSign,
      color: "from-purple-600 to-pink-600"
    }
  ];

  const loanApplications = [
    {
      id: "APP001",
      type: "Education Loan",
      requestedAmount: 150000,
      status: "Under Review",
      applicationDate: "2024-01-10",
      expectedDecision: "2024-01-25",
      icon: GraduationCap,
      statusColor: "warning"
    },
    {
      id: "APP002",
      type: "Business Loan", 
      requestedAmount: 500000,
      status: "Documents Required",
      applicationDate: "2024-01-05",
      expectedDecision: "2024-02-15",
      icon: Building,
      statusColor: "destructive"
    }
  ];

  const loanProducts = [
    {
      type: "Home Loan",
      interestRate: "3.25% - 4.5%",
      maxAmount: "$2,000,000",
      tenure: "Up to 30 years",
      processingFee: "0.5% of loan amount",
      icon: Home,
      features: ["Low interest rates", "Flexible repayment", "Tax benefits"]
    },
    {
      type: "Car Loan",
      interestRate: "5.75% - 7.5%",
      maxAmount: "$100,000",
      tenure: "Up to 7 years",
      processingFee: "$500 flat",
      icon: Car,
      features: ["Quick approval", "No prepayment penalty", "Zero down payment"]
    },
    {
      type: "Personal Loan",
      interestRate: "8.9% - 15%",
      maxAmount: "$50,000",
      tenure: "Up to 5 years",
      processingFee: "2% of loan amount",
      icon: DollarSign,
      features: ["No collateral required", "Same day disbursal", "Flexible EMI"]
    },
    {
      type: "Education Loan",
      interestRate: "6.5% - 9%",
      maxAmount: "$200,000",
      tenure: "Up to 15 years",
      processingFee: "1% of loan amount",
      icon: GraduationCap,
      features: ["Moratorium period", "Tax benefits", "Covers all expenses"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-success/10 text-success";
      case "under review":
        return "bg-warning/10 text-warning";
      case "documents required":
        return "bg-destructive/10 text-destructive";
      case "approved":
        return "bg-success/10 text-success";
      case "rejected":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return <CheckCircle className="h-4 w-4" />;
      case "under review":
        return <Clock className="h-4 w-4" />;
      case "documents required":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Loans & EMI</h1>
          <p className="text-muted-foreground mt-2">
            Manage your loans and track EMI payments
          </p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground shadow-primary">
          <Calculator className="h-4 w-4 mr-2" />
          Loan Calculator
        </Button>
      </div>

      {/* Loan Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Total Loans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">
              {activeLoans.length}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Active loans
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Outstanding Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">
              ${activeLoans.reduce((sum, loan) => sum + loan.currentBalance, 0).toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Total remaining
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Monthly EMI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">
              ${activeLoans.reduce((sum, loan) => sum + loan.monthlyEMI, 0).toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Next due: Feb 1, 2024
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Avg. Interest Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">
              {(activeLoans.reduce((sum, loan) => sum + loan.interestRate, 0) / activeLoans.length).toFixed(2)}%
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Weighted average
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Loan Management Tabs */}
      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="active">Active Loans</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="products">Loan Products</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6">
          {activeLoans.map((loan) => (
            <Card key={loan.id} className="shadow-card">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Loan Overview */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${loan.color} text-white`}>
                        <loan.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-card-foreground">
                          {loan.type}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Account: {loan.loanAccount}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Loan Amount</span>
                        <span className="font-medium">${loan.loanAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Interest Rate</span>
                        <span className="font-medium">{loan.interestRate}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tenure</span>
                        <span className="font-medium">{loan.tenure} years</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Start Date</span>
                        <span className="font-medium">{loan.startDate}</span>
                      </div>
                    </div>

                    <Badge className={getStatusColor(loan.status)}>
                      {getStatusIcon(loan.status)}
                      <span className="ml-1">{loan.status}</span>
                    </Badge>
                  </div>

                  {/* Repayment Progress */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-card-foreground">Repayment Progress</span>
                        <span className="text-sm text-muted-foreground">
                          {Math.round(((loan.loanAmount - loan.currentBalance) / loan.loanAmount) * 100)}% Complete
                        </span>
                      </div>
                      <Progress 
                        value={((loan.loanAmount - loan.currentBalance) / loan.loanAmount) * 100} 
                        className="h-3"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Paid: ${(loan.loanAmount - loan.currentBalance).toLocaleString()}</span>
                        <span>Remaining: ${loan.currentBalance.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <div className="flex items-center space-x-2">
                        <TrendingDown className="h-4 w-4 text-success" />
                        <span className="text-sm font-medium">Outstanding Balance</span>
                      </div>
                      <div className="text-2xl font-bold text-card-foreground">
                        ${loan.currentBalance.toLocaleString()}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {loan.remainingTenure} years remaining
                      </p>
                    </div>
                  </div>

                  {/* EMI Details */}
                  <div className="space-y-4">
                    <div className="bg-gradient-primary p-4 rounded-lg text-primary-foreground">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">Next EMI</span>
                      </div>
                      <div className="text-2xl font-bold">
                        ${loan.monthlyEMI.toLocaleString()}
                      </div>
                      <p className="text-sm opacity-90">
                        Due: {loan.nextDueDate}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full bg-gradient-success text-success-foreground">
                        Pay EMI Now
                      </Button>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm">
                          View Schedule
                        </Button>
                        <Button variant="outline" size="sm">
                          Prepayment
                        </Button>
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>• Auto-debit enabled</p>
                      <p>• No prepayment penalty</p>
                      <p>• Tax benefits available</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="applications" className="space-y-6">
          {loanApplications.length > 0 ? (
            loanApplications.map((application) => (
              <Card key={application.id} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <application.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-card-foreground">
                          {application.type}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Applied: {application.applicationDate}
                        </p>
                      </div>
                    </div>

                    <div className="text-right space-y-2">
                      <div className="text-xl font-bold text-card-foreground">
                        ${application.requestedAmount.toLocaleString()}
                      </div>
                      <Badge className={getStatusColor(application.status)}>
                        {getStatusIcon(application.status)}
                        <span className="ml-1">{application.status}</span>
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Expected decision by: {application.expectedDecision}
                    </p>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm" className="bg-gradient-primary text-primary-foreground">
                        Upload Documents
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="shadow-card">
              <CardContent className="p-12 text-center">
                <p className="text-muted-foreground">No pending loan applications</p>
                <Button className="mt-4 bg-gradient-primary text-primary-foreground shadow-primary">
                  Apply for New Loan
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="products" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loanProducts.map((product, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <product.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{product.type}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Interest Rate</p>
                      <p className="font-medium">{product.interestRate}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Max Amount</p>
                      <p className="font-medium">{product.maxAmount}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Tenure</p>
                      <p className="font-medium">{product.tenure}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Processing Fee</p>
                      <p className="font-medium">{product.processingFee}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-card-foreground mb-2">Key Features</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-success" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" className="flex-1">
                      Calculate EMI
                    </Button>
                    <Button className="flex-1 bg-gradient-primary text-primary-foreground shadow-primary">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Loans;