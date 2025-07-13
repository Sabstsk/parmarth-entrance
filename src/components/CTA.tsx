import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-spiritual relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Begin Your Spiritual Journey Today
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join thousands of seekers who have found peace, purpose, and transformation 
            at Parmarth Niketan Ashram. Your journey to inner awakening starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-spiritual-saffron hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-warm min-w-[200px]"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Book Your Stay
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg min-w-[200px]"
              onClick={() => window.open('tel:8239455643', '_self')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg min-w-[200px]"
            >
              <Calendar className="mr-2 h-5 w-5" />
              View Programs
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">80+</div>
              <div className="text-white/80">Years of Service</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-white/80">Spiritual Seekers</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">365</div>
              <div className="text-white/80">Days of Sacred Practice</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;