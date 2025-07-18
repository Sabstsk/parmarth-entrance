import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/parmarth-entrance.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Welcome To<br />
            <span className="text-spiritual-gold">Parmarth Niketan</span><br />
            Ashram Rishikesh
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-slide-in">
            Choose From A Variety Of Clean And Comfortable Rooms, Designed For Peace And Meditation. 
            Options Are Available With AC And Non-AC Configurations To Suit Your Needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Link to="/book" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg shadow-warm w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                BOOK NOW
              </Button>
            </Link>
            
            <Button 
              size="lg" 
              variant="outline"
              className="bg-spiritual-gold hover:bg-spiritual-gold/90 text-spiritual-earth border-spiritual-gold font-semibold px-8 py-4 text-lg"
              onClick={() => window.open('tel:6003282464', '_self')}
            >
              <Phone className="mr-2 h-5 w-5" />
              CALL US NOW
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/20 to-transparent"></div>
    </section>
  );
};

export default Hero;