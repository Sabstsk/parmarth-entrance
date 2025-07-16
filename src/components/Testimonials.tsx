import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'California, USA',
      text: 'My stay at Parmarth Niketan was transformational. The peaceful environment and spiritual teachings helped me find inner peace I had been seeking for years.',
      rating: 5,
    },
    {
      name: 'Raj Patel',
      location: 'Mumbai, India',
      text: 'The Ganga Aarti ceremony was absolutely divine. The ashram provides the perfect blend of traditional spirituality and modern comfort.',
      rating: 5,
    },
    {
      name: 'Emma Williams',
      location: 'London, UK',
      text: 'The yoga classes and meditation sessions were exceptional. The teachers are knowledgeable and compassionate. Highly recommended for spiritual seekers.',
      rating: 5,
    },
    {
      name: 'Kumar Singh',
      location: 'Delhi, India',
      text: 'Clean accommodations, delicious sattvic food, and a truly spiritual atmosphere. This place touches your soul and transforms your perspective on life.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-spiritual-cream/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Spiritual Experiences Shared
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from fellow seekers who have found peace, transformation, and 
            spiritual growth during their stay at our ashram.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-none shadow-gentle hover:shadow-warm transition-all duration-300 bg-background"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-quote h-8 w-8 text-spiritual-saffron/40 flex-shrink-0 mt-1"
                    >
                      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                    </svg>
                  <div className="flex-1">
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-spiritual-gold text-spiritual-gold" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;