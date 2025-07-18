import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Wifi, Car, Utensils, Wind, TreePine, Phone, MessageCircle } from 'lucide-react';
import roomStandard from '@/assets/room-standard.jpg';
import roomDeluxe from '@/assets/room-deluxe.jpg';
import roomFamily from '@/assets/room-family.jpg';

const Book = () => {
  const roomTypes = [
    {
      name: 'Standard Room (Non-AC)',
      price: '₹800/night',
      features: ['Private bathroom', 'River view', 'Daily housekeeping', 'Meditation corner'],
      image: roomStandard
    },
    {
      name: 'Deluxe Room (AC)',
      price: '₹1200/night',
      features: ['Air conditioning', 'Private bathroom', 'River view', 'Mini-fridge', 'Daily housekeeping'],
      image: roomDeluxe
    },
    {
      name: 'Family Suite',
      price: '₹2000/night',
      features: ['2 bedrooms', 'Air conditioning', 'Living area', 'Kitchenette', 'Balcony with river view'],
      image: roomFamily
    }
  ];

  const amenities = [
    { icon: Utensils, title: 'Sattvic Meals', description: 'Pure vegetarian cuisine' },
    { icon: Wifi, title: 'Free WiFi', description: 'Stay connected' },
    { icon: Car, title: 'Parking', description: 'Secure vehicle parking' },
    { icon: Wind, title: 'Fresh Air', description: 'Mountain breeze' },
    { icon: TreePine, title: 'Gardens', description: 'Peaceful surroundings' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-peaceful">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Book Your <span className="text-spiritual-saffron">Sacred Stay</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Reserve your peaceful retreat at Parmarth Niketan Ashram. Choose from our 
              comfortable accommodations designed for spiritual reflection and rest.
            </p>
          </div>
        </section>

        {/* Room Types */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Choose Your Sacred Space
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {roomTypes.map((room, index) => (
                <Card key={index} className="border-none shadow-gentle hover:shadow-warm transition-all duration-300">
                  <div className="h-48 rounded-t-lg overflow-hidden">
                    <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{room.name}</CardTitle>
                    <div className="text-2xl font-bold text-spiritual-saffron">{room.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {room.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-spiritual-saffron" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#reservation-form" className="block">
                      <Button className="w-full bg-spiritual-saffron hover:bg-spiritual-saffron/90">
                      Book Now
                    </Button></a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Amenities */}
            <div className="bg-spiritual-cream/50 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                Included Amenities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {amenities.map((amenity, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-gentle">
                      <amenity.icon className="h-8 w-8 text-spiritual-saffron" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{amenity.title}</h4>
                    <p className="text-xs text-muted-foreground">{amenity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section id="reservation-form" className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <Card className="border-none shadow-warm">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Reserve Your Stay</CardTitle>
                  <p className="text-muted-foreground">
                    Contact us to check availability and make your reservation
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Check-in Date</label>
                      <input 
                        type="date" 
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-spiritual-saffron focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Check-out Date</label>
                      <input 
                        type="date" 
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-spiritual-saffron focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Room Type</label>
                    <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-spiritual-saffron focus:border-transparent">
                      <option>Standard Room (Non-AC)</option>
                      <option>Deluxe Room (AC)</option>
                      <option>Family Suite</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Adults</label>
                      <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-spiritual-saffron focus:border-transparent">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Children</label>
                      <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-spiritual-saffron focus:border-transparent">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="flex-1 bg-spiritual-saffron hover:bg-spiritual-saffron/90 gap-2"
                      onClick={() => window.open('https://wa.me/916003282464', '_blank')}
                    >
                      <MessageCircle className="h-4 w-4" />
                      Book via WhatsApp
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 gap-2"
                      onClick={() => window.open('tel:6003282464', '_self')}
                    >
                      <Phone className="h-4 w-4" />
                      Call to Book
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Book;