import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Youtube, Facebook, Instagram } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoImage from "@assets/channels4_profile_1750717979071.jpg";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img 
                src={logoImage} 
                alt="Canterbury Kiwi" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-forest">Canterbury Kiwi</h1>
              <p className="text-sm text-gray-600">Agricultural Film Services</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-charcoal hover:text-forest transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-charcoal hover:text-forest transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-charcoal hover:text-forest transition-colors font-medium"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-charcoal hover:text-forest transition-colors font-medium"
            >
              About
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-charcoal hover:text-forest">
                  Social Media
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => window.open('https://www.youtube.com/@CanterburyKiwi', '_blank')}>
                  <Youtube className="mr-2 h-4 w-4 text-red-600" />
                  YouTube
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.open('https://www.facebook.com/profile.php?id=61570505278895', '_blank')}>
                  <Facebook className="mr-2 h-4 w-4 text-blue-600" />
                  Facebook
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.open('https://www.instagram.com/canterbury_kiwi/', '_blank')}>
                  <Instagram className="mr-2 h-4 w-4 text-pink-600" />
                  Instagram
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-forest text-white hover:bg-forest/90"
            >
              Contact
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-forest"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-charcoal hover:text-forest transition-colors font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-charcoal hover:text-forest transition-colors font-medium text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-charcoal hover:text-forest transition-colors font-medium text-left"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-charcoal hover:text-forest transition-colors font-medium text-left"
              >
                About
              </button>
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="text-sm font-medium text-charcoal mb-2">Social Media</div>
                <div className="space-y-1">
                  <button
                    onClick={() => window.open('https://www.youtube.com/@CanterburyKiwi', '_blank')}
                    className="flex items-center w-full px-2 py-1 text-charcoal hover:text-forest transition-colors"
                  >
                    <Youtube className="mr-2 h-4 w-4 text-red-600" />
                    YouTube
                  </button>
                  <button
                    onClick={() => window.open('https://www.facebook.com/profile.php?id=61570505278895', '_blank')}
                    className="flex items-center w-full px-2 py-1 text-charcoal hover:text-forest transition-colors"
                  >
                    <Facebook className="mr-2 h-4 w-4 text-blue-600" />
                    Facebook
                  </button>
                  <button
                    onClick={() => window.open('https://www.instagram.com/canterbury_kiwi/', '_blank')}
                    className="flex items-center w-full px-2 py-1 text-charcoal hover:text-forest transition-colors"
                  >
                    <Instagram className="mr-2 h-4 w-4 text-pink-600" />
                    Instagram
                  </button>
                </div>
              </div>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-forest text-white hover:bg-forest/90 w-fit mt-4"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
