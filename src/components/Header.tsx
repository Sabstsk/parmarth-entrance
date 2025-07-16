import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Book Your Stay', href: '/book' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="bg-white/30 backdrop-blur-lg backdrop-saturate-150 shadow-gentle sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center h-16 justify-center">
           {/* Ashram Name */}
          <div className="text-2xl font-bold text-spiritual-saffron whitespace-nowrap">
            Parmarth Niketan Ashram
          </div>
          

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 mx-auto justify-center">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-foreground hover:text-spiritual-saffron transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2"
              onClick={() => window.open('tel:8239455643', '_self')}
            >
              <Phone className="h-4 w-4" />
              Call Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground hover:text-spiritual-saffron transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 w-fit"
                onClick={() => window.open('tel:8239455643', '_self')}
              >
                <Phone className="h-4 w-4" />
                Call Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;