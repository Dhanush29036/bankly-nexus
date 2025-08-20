import { NavLink, useNavigate } from "react-router-dom";
import { 
  Home, 
  User, 
  Wallet, 
  History, 
  CreditCard, 
  Building2, 
  LogOut,
  MessageCircle,
  Settings,
  HelpCircle
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const menuItems = [
  { title: "Overview", url: "/dashboard", icon: Home },
  { title: "Profile", url: "/dashboard/profile", icon: User },
  { title: "Balance", url: "/dashboard/balance", icon: Wallet },
  { title: "Transactions", url: "/dashboard/transactions", icon: History },
  { title: "Cards", url: "/dashboard/cards", icon: CreditCard },
  { title: "Loans", url: "/dashboard/loans", icon: Building2 },
];

const bottomItems = [
  { title: "Chatbot", url: "/dashboard/chatbot", icon: MessageCircle },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
  { title: "Help", url: "/dashboard/help", icon: HelpCircle },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isCollapsed = state === "collapsed";

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  return (
    <Sidebar
      collapsible="icon"
    >
      <SidebarTrigger className="m-2 self-end" />
      
      {/* Logo */}
      <div className="p-4 border-b border-sidebar-border">
        <NavLink to="/dashboard" className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-primary" />
          {!isCollapsed && (
            <span className="text-xl font-bold text-primary">BanklyNexus</span>
          )}
        </NavLink>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Banking</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/dashboard"}
                      className={({ isActive }) =>
                        `flex items-center transition-colors ${
                          isActive 
                            ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
                            : "hover:bg-sidebar-accent/50"
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span className="ml-2">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {bottomItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center transition-colors ${
                          isActive 
                            ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
                            : "hover:bg-sidebar-accent/50"
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span className="ml-2">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout Button */}
        <div className="mt-auto p-4 border-t border-sidebar-border">
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            {!isCollapsed && <span className="ml-2">Logout</span>}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}