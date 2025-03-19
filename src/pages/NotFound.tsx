
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-medical-gray">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
        <div className="flex justify-center mb-4">
          <Brain size={64} className="text-medical-purple" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-medical-dark-blue">404</h1>
        <p className="text-xl text-muted-foreground mb-6">The page you're looking for cannot be found</p>
        <Button asChild className="bg-medical-blue hover:bg-medical-blue/90">
          <a href="/">Return to Dashboard</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
