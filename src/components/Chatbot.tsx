import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User,
  Minimize2,
  Maximize2,
  RotateCcw
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  suggestions?: string[];
}

const Chatbot = ({ isMinimized = false, onToggleSize }: { 
  isMinimized?: boolean; 
  onToggleSize?: () => void; 
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your BanklyNexus assistant. I can help you with account information, transactions, loans, and general banking queries. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
      suggestions: [
        "Show my balance",
        "Latest transactions", 
        "How to apply for a loan",
        "Card information"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const bankingResponses: { [key: string]: string } = {
    "balance": "Your current account balance is $125,450.75. Your Premium Checking account shows $125,450.75, and your High Yield Savings account has $28,750.50.",
    "transactions": "Here are your latest transactions:\n• Salary Deposit: +$8,500.00 (Jan 15)\n• Amazon Purchase: -$156.78 (Jan 14)\n• Online Transfer: -$2,500.00 (Jan 13)\n• Investment Return: +$340.25 (Jan 12)",
    "loan": "We offer several loan products:\n• Home Loans: 3.25% - 4.5% APR\n• Car Loans: 5.75% - 7.5% APR\n• Personal Loans: 8.9% - 15% APR\n• Education Loans: 6.5% - 9% APR\n\nWould you like to apply for any specific loan type?",
    "cards": "You have 3 active cards:\n• BanklyNexus Platinum Credit Card (ending 9012)\n• BanklyNexus Rewards Credit Card (ending 1098)\n• BanklyNexus Premium Debit Card (ending 1111)\n\nAll cards are active and in good standing.",
    "emi": "Your upcoming EMI payments:\n• Home Loan: $2,850.75 due Feb 1\n• Car Loan: $1,245.50 due Feb 5\n• Personal Loan: $695.25 due Jan 28\n\nTotal monthly EMI: $4,791.50",
    "help": "I can help you with:\n• Account balance and transaction history\n• Card information and management\n• Loan details and applications\n• EMI schedules and payments\n• General banking queries\n• Account settings and support\n\nWhat would you like to know more about?",
    "contact": "You can reach us through:\n• Phone: 1-800-BANKLY (24/7)\n• Email: support@banklynexus.com\n• Live Chat: Available 24/7\n• Visit any of our 500+ branches nationwide\n• Mobile app support section",
    "security": "Your account security features:\n• Two-factor authentication: Enabled\n• Biometric login: Enabled\n• SMS alerts: Active\n• Email notifications: Active\n• Card controls: Available in mobile app\n\nYour account has high-level security protection."
  };

  const getResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes("balance") || lowerMessage.includes("money")) {
      return bankingResponses.balance;
    } else if (lowerMessage.includes("transaction") || lowerMessage.includes("history") || lowerMessage.includes("payment")) {
      return bankingResponses.transactions;
    } else if (lowerMessage.includes("loan") || lowerMessage.includes("borrow") || lowerMessage.includes("mortgage")) {
      return bankingResponses.loan;
    } else if (lowerMessage.includes("card") || lowerMessage.includes("credit") || lowerMessage.includes("debit")) {
      return bankingResponses.cards;
    } else if (lowerMessage.includes("emi") || lowerMessage.includes("installment") || lowerMessage.includes("due")) {
      return bankingResponses.emi;
    } else if (lowerMessage.includes("help") || lowerMessage.includes("support")) {
      return bankingResponses.help;
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("email")) {
      return bankingResponses.contact;
    } else if (lowerMessage.includes("security") || lowerMessage.includes("safe") || lowerMessage.includes("protect")) {
      return bankingResponses.security;
    } else if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! Welcome to BanklyNexus. I'm here to help you with all your banking needs. What can I assist you with today?";
    } else if (lowerMessage.includes("thank")) {
      return "You're welcome! Is there anything else I can help you with today?";
    } else {
      return "I understand you're asking about '" + message + "'. For specific account details, please use our secure banking portal or contact our support team at 1-800-BANKLY. I can help with general information about balances, transactions, loans, cards, and banking services. What would you like to know?";
    }
  };

  const getSuggestions = (message: string): string[] => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes("loan")) {
      return ["Calculate EMI", "Apply for home loan", "Check eligibility", "Interest rates"];
    } else if (lowerMessage.includes("card")) {
      return ["Block my card", "Apply for new card", "Check card limit", "Recent transactions"];
    } else if (lowerMessage.includes("balance")) {
      return ["Monthly statement", "Account summary", "Transfer money", "Set up savings goal"];
    } else {
      return ["Show my balance", "Latest transactions", "Card information", "Contact support"];
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
        suggestions: getSuggestions(inputValue)
      };

      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        text: "Hello! I'm your BanklyNexus assistant. I can help you with account information, transactions, loans, and general banking queries. How can I assist you today?",
        sender: "bot",
        timestamp: new Date(),
        suggestions: [
          "Show my balance",
          "Latest transactions", 
          "How to apply for a loan",
          "Card information"
        ]
      }
    ]);
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  if (isMinimized) {
    return (
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Banking Assistant</CardTitle>
              <Badge variant="secondary" className="ml-2">Online</Badge>
            </div>
            <Button variant="ghost" size="sm" onClick={onToggleSize}>
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Click to expand and start chatting with our AI assistant
          </p>
          <Button onClick={onToggleSize} className="w-full bg-gradient-primary text-primary-foreground">
            <MessageCircle className="h-4 w-4 mr-2" />
            Start Conversation
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-card h-[700px] flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Banking Assistant</CardTitle>
            <Badge variant="secondary" className="ml-2">Online</Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={clearChat}>
              <RotateCcw className="h-4 w-4" />
            </Button>
            {onToggleSize && (
              <Button variant="ghost" size="sm" onClick={onToggleSize}>
                <Minimize2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                  <div className={`p-2 rounded-full ${message.sender === "user" ? "bg-primary" : "bg-muted"}`}>
                    {message.sender === "user" ? (
                      <User className="h-4 w-4 text-primary-foreground" />
                    ) : (
                      <Bot className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <div className={`p-3 rounded-lg ${
                      message.sender === "user" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                    
                    {message.suggestions && (
                      <div className="flex flex-wrap gap-2">
                        {message.suggestions.map((suggestion, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="h-7 text-xs"
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                    )}
                    
                    <p className="text-xs text-muted-foreground">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="p-2 rounded-full bg-muted">
                    <Bot className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-border">
          <div className="flex space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about your account, transactions, loans..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button 
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="bg-gradient-primary text-primary-foreground shadow-primary"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            I can help with account info, transactions, loans, and general banking queries.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Chatbot;