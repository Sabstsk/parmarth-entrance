import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, Heart } from 'lucide-react';

const TestimonialsPage = () => {
  const featuredTestimonials = [
    {
      name: 'Michael Anderson',
      location: 'Sydney, Australia',
      text: 'I came to Parmarth Niketan searching for meaning in my life. The three weeks I spent here completely transformed my perspective. The daily yoga sessions, meditation practices, and the wisdom shared by the teachers opened my heart to a deeper understanding of myself and the universe.',
      rating: 5,
      duration: '3 weeks',
      programs: ['Yoga Teacher Training', 'Meditation Retreat']
    },
    {
      name: 'Priya Sharma',
      location: 'Toronto, Canada',
      text: 'The Ganga Aarti ceremony every evening was the highlight of my stay. There is something magical about sitting by the sacred river as the sun sets and participating in this ancient ritual. The energy is indescribable - pure divine bliss.',
      rating: 5,
      duration: '2 weeks',
      programs: ['Spiritual Retreat', 'Ayurveda Program']
    },
    {
      name: 'David Chen',
      location: 'San Francisco, USA',
      text: 'As a tech professional constantly stressed, I never thought I could find peace. But the ashram\'s environment, the vegetarian meals, and the meditation practices taught me how to find stillness within chaos. I return every year now.',
      rating: 5,
      duration: '1 month',
      programs: ['Meditation Intensive', 'Stress Relief Program']
    }
  ];

  const quickTestimonials = [
    {
      name: 'Elena Rodriguez',
      location: 'Madrid, Spain',
      text: 'Life-changing experience. The teachings here are profound and the community is so welcoming.',
      rating: 5
    },
    {
      name: 'James Wilson',
      location: 'Manchester, UK',
      text: 'Perfect blend of spirituality and comfort. The accommodation exceeded my expectations.',
      rating: 5
    },
    {
      name: 'Anita Gupta',
      location: 'Singapore',
      text: 'The yoga classes are authentic and transformative. Best spiritual retreat I\'ve ever attended.',
      rating: 5
    },
    {
      name: 'Marco Rossi',
      location: 'Rome, Italy',
      text: 'The silence and peace here allowed me to reconnect with my true self. Absolutely magical.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-peaceful">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Voices of <span className="text-spiritual-saffron">Transformation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Read the heartfelt experiences of spiritual seekers who have found peace, 
              healing, and enlightenment at Parmarth Niketan Ashram.
            </p>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Life-Changing Stories
            </h2>
            
            <div className="space-y-8">
              {featuredTestimonials.map((testimonial, index) => (
                <Card key={index} className="border-none shadow-gentle hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <Quote className="h-16 w-16 text-spiritual-saffron/30 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                          "{testimonial.text}"
                        </p>
                        
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div>
                            <h4 className="font-bold text-xl text-foreground">{testimonial.name}</h4>
                            <p className="text-muted-foreground">{testimonial.location}</p>
                            <p className="text-sm text-spiritual-saffron font-medium mt-1">
                              Stay Duration: {testimonial.duration}
                            </p>
                          </div>
                          
                          <div className="text-right">
                            <div className="flex items-center gap-1 mb-2">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-spiritual-gold text-spiritual-gold" />
                              ))}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Programs: {testimonial.programs.join(', ')}
                            </div>
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

        {/* More Testimonials Grid */}
        <section className="py-16 bg-spiritual-cream/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              More Sacred Experiences
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quickTestimonials.map((testimonial, index) => (
                <Card key={index} className="border-none shadow-gentle hover:shadow-warm transition-all duration-300 bg-background">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Quote className="h-6 w-6 text-spiritual-saffron/40 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <p className="text-muted-foreground mb-4 italic">
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

        {/* Statistics */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-spiritual-saffron mb-2">95%</div>
                <div className="text-muted-foreground">Report Life-Changing Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-spiritual-saffron mb-2">4.9/5</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-spiritual-saffron mb-2">85%</div>
                <div className="text-muted-foreground">Return Visitors</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-spiritual-saffron mb-2">50+</div>
                <div className="text-muted-foreground">Countries Represented</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-spiritual">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <Heart className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Community of Seekers
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Begin your own transformational journey and become part of our 
              growing family of spiritual practitioners.
            </p>
            <button className="bg-white text-spiritual-saffron px-8 py-4 rounded-full hover:bg-white/90 transition-colors duration-200 font-semibold text-lg">
              Start Your Journey
            </button>
          </div>
        </section>

        {/* Include the main testimonials component */}
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;