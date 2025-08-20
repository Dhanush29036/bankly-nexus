import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header>
        <title>BanklyNexus - Smart Banking Solutions</title>
        <meta name="description" content="Experience next-generation banking with BanklyNexus. Secure transactions, intelligent insights, and 24/7 support for your financial journey." />
      </header>
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
};

export default Index;
