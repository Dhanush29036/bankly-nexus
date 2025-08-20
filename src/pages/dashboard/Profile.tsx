import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Shield,
  Edit3,
  Camera
} from "lucide-react";

const Profile = () => {
  const customerData = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, New York, NY 10001",
    dateOfBirth: "January 15, 1990",
    accountNumber: "****-****-****-1234",
    accountType: "Premium Checking",
    memberSince: "March 2020",
    customerID: "CUS123456789",
    securityLevel: "High"
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Customer Profile</h1>
        <p className="text-muted-foreground mt-2">
          Manage your personal information and account settings
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Summary */}
        <Card className="lg:col-span-1 shadow-card">
          <CardHeader className="text-center">
            <div className="relative mx-auto">
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary-foreground">
                  {customerData.firstName[0]}{customerData.lastName[0]}
                </span>
              </div>
              <Button 
                size="sm" 
                variant="outline" 
                className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <CardTitle className="text-xl">
              {customerData.firstName} {customerData.lastName}
            </CardTitle>
            <div className="flex flex-col space-y-2">
              <Badge variant="secondary" className="w-fit mx-auto">
                {customerData.accountType}
              </Badge>
              <Badge 
                variant={customerData.securityLevel === "High" ? "default" : "secondary"}
                className="w-fit mx-auto"
              >
                <Shield className="h-3 w-3 mr-1" />
                {customerData.securityLevel} Security
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Account Number</p>
              <p className="font-mono text-sm">{customerData.accountNumber}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Customer ID</p>
              <p className="font-mono text-sm">{customerData.customerID}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Member Since</p>
              <p className="text-sm">{customerData.memberSince}</p>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="lg:col-span-2 shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Update your personal details and contact information
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Edit3 className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="firstName" 
                    value={customerData.firstName} 
                    readOnly 
                    className="border-input"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="lastName" 
                    value={customerData.lastName} 
                    readOnly 
                    className="border-input"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <Input 
                  id="email" 
                  type="email" 
                  value={customerData.email} 
                  readOnly 
                  className="border-input"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <Input 
                  id="phone" 
                  value={customerData.phone} 
                  readOnly 
                  className="border-input"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <Input 
                  id="address" 
                  value={customerData.address} 
                  readOnly 
                  className="border-input"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <Input 
                  id="dateOfBirth" 
                  value={customerData.dateOfBirth} 
                  readOnly 
                  className="border-input"
                />
              </div>
            </div>

            <Separator />

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-primary text-primary-foreground shadow-primary">
                Save Changes
              </Button>
              <Button variant="outline">
                Reset Password
              </Button>
              <Button variant="outline">
                Download Profile Data
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;