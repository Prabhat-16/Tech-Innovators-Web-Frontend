import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle.jsx";
import { ThemeSliderAdvanced } from "./ThemeSliderAdvanced.jsx";
import logoImage from "@/assets/logo.png"; // Correct path to your local logo

export function Navigation({ currentPage, onPageChange }) {
  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-4">
            <img
                src={logoImage}
                alt="MIT Tech Innovators Club Logo"
                className="w-10 h-10 object-contain"
              />
            <h1 className="text-white">MIT Tech Innovators Club</h1>
              
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Button 
                variant="ghost" 
                className={`text-foreground hover:text-primary hover:bg-primary/10 ${currentPage === 'home' ? 'bg-primary/10' : ''}`}
                onClick={() => onPageChange('home')}
              >
                Home
              </Button>
              <Button 
                variant="ghost" 
                className={`text-foreground hover:text-primary hover:bg-primary/10 ${currentPage === 'about' ? 'bg-primary/10' : ''}`}
                onClick={() => onPageChange('about')}
              >
                About
              </Button>
              <Button 
                variant="ghost" 
                className={`text-foreground hover:text-primary hover:bg-primary/10 ${currentPage === 'members' ? 'bg-primary/10' : ''}`}
                onClick={() => onPageChange('members')}
              >
                Members
              </Button>
              <Button 
                variant="ghost" 
                className={`text-foreground hover:text-primary hover:bg-primary/10 ${currentPage === 'events' ? 'bg-primary/10' : ''}`}
                onClick={() => onPageChange('events')}
              >
                Upcoming Events
              </Button>
              <Button 
                variant="ghost" 
                className={`text-foreground hover:text-primary hover:bg-primary/10 ${currentPage === 'contact' ? 'bg-primary/10' : ''}`}
                onClick={() => onPageChange('contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* <ThemeSliderAdvanced /> */}
            {/* <ThemeToggle /> */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}