
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-6xl font-bold text-matchbox-purple mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! We couldn't find that page</p>
          <Button 
            className="bg-matchbox-purple hover:bg-matchbox-purple/90"
            size="lg"
            asChild
          >
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
