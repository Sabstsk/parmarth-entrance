import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Parmarth Niketan Ashram', 'Swargashram, Rishikesh', 'Uttarakhand, India - 249304']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['8239455643', '8239455643']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@parmarthniketan.org', 'bookings@parmarthniketan.org']
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Sunday: 6:00 AM - 9:00 PM', 'Booking inquiries welcome anytime']
    }
  ];

  const quickLinks = [
    { title: 'WhatsApp Booking', description: 'Instant response for room bookings', action: 'Chat Now' },
    { title: 'Program Inquiry', description: 'Learn about our spiritual programs', action: 'Learn More' },
    { title: 'Group Bookings', description: 'Special rates for groups of 10+', action: 'Get Quote' },
    { title: 'Volunteer Program', description: 'Join our seva (service) community', action: 'Apply Now' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-peaceful">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Connect With <span className="text-spiritual-saffron">Our Community</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to guide you on your spiritual journey. Reach out to us for bookings, 
              program information, or any questions about life at the ashram.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none shadow-gentle hover:shadow-warm transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-spiritual-cream rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-8 w-8 text-spiritual-saffron" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm mb-1">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form and Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-none shadow-warm">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    We typically respond within 24 hours. For urgent inquiries, please call us directly.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-spiritual-saffron focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-spiritual-saffron focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-spiritual-saffron focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-spiritual-saffron focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-spiritual-saffron focus:border-transparent">
                      <option>Room Booking Inquiry</option>
                      <option>Program Information</option>
                      <option>Group Booking</option>
                      <option>Volunteer Opportunity</option>
                      <option>General Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-spiritual-saffron focus:border-transparent"
                      placeholder="Tell us how we can help you on your spiritual journey..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-spiritual-saffron hover:bg-spiritual-saffron/90 gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Map and Quick Actions */}
              <div className="space-y-8">
                {/* Map Placeholder */}
                <Card className="border-none shadow-gentle">
                  <CardContent className="p-0">
                    <div className="h-64 bg-spiritual-cream rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-spiritual-saffron mx-auto mb-4" />
                        <p className="text-muted-foreground">Interactive Map</p>
                        <p className="text-sm text-muted-foreground">
                          Parmarth Niketan Ashram<br />
                          Swargashram, Rishikesh
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Quick Actions</h3>
                  {quickLinks.map((link, index) => (
                    <Card key={index} className="border-none shadow-gentle hover:shadow-warm transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-foreground">{link.title}</h4>
                            <p className="text-sm text-muted-foreground">{link.description}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            {link.action}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-spiritual-cream/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-muted-foreground mb-8">
              For urgent matters or immediate booking assistance, reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-green-600 hover:bg-green-700 gap-2"
                onClick={() => window.open('https://wa.me/918239455643', '_blank')}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => window.open('tel:8239455643', '_self')}
              >
                <Phone className="h-4 w-4" />
                Call: 8239455643
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;