
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">MATCHBOX</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Home
          </Link>
          <Link to="/create" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Host an Event
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Pricing
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <SignedOut>
            <Button variant="outline" size="sm">
              Contact Sales
            </Button>
            <SignInButton mode="modal">
              <Button size="sm" className="bg-matchbox-purple hover:bg-matchbox-purple/90">
                Get Started
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button variant="outline" size="sm" asChild>
              <Link to="/dashboard">Dashboard</Link>
            </Button>
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8"
                }
              }}
            />
          </SignedIn>
        </div>
        
        <button
          className="inline-flex md:hidden items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="container md:hidden py-4 space-y-4">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-sm font-medium text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/create" 
              className="text-sm font-medium text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Host an Event
            </Link>
            <Link 
              to="/pricing" 
              className="text-sm font-medium text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
          </nav>
          <div className="flex flex-col space-y-2">
            <SignedOut>
              <Button variant="outline" size="sm">
                Contact Sales
              </Button>
              <SignInButton mode="modal">
                <Button size="sm" className="bg-matchbox-purple hover:bg-matchbox-purple/90">
                  Get Started
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button variant="outline" size="sm" asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
