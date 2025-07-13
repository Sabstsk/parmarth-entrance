import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-spiritual-earth text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-spiritual-gold">
              Parmarth Niketan Ashram
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Founded in 1942, we are one of Rishikesh's largest and most revered spiritual centers. 
              Experience peace, meditation, and spiritual growth on the banks of the holy Ganges.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-spiritual-gold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link>
              <Link to="/book" className="text-white/80 hover:text-white transition-colors">Book Your Stay</Link>
              <Link to="/gallery" className="text-white/80 hover:text-white transition-colors">Gallery</Link>
              <Link to="/testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-spiritual-gold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-spiritual-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Parmarth Niketan Ashram<br />
                  Swargashram, Rishikesh<br />
                  Uttarakhand, India - 249304
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-spiritual-gold" />
                <span className="text-white/80 text-sm">8239455643</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-spiritual-gold" />
                <span className="text-white/80 text-sm">info@parmarthniketan.org</span>
              </div>
            </div>
          </div>

          {/* Spiritual Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-spiritual-gold">Our Services</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Daily Yoga & Meditation</li>
              <li>Spiritual Discourses</li>
              <li>Ganga Aarti Ceremonies</li>
              <li>Accommodation & Meals</li>
              <li>Vedic Learning Programs</li>
              <li>Ayurvedic Treatments</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Parmarth Niketan Ashram. All rights reserved.
            </p>
            <p className="text-white/60 text-sm flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-400" /> for spiritual seekers worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;