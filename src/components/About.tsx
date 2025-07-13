import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Leaf, Sun } from 'lucide-react';
import meditationHall from '@/assets/meditation-hall.jpg';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Spiritual Growth',
      description: 'Daily yoga, meditation, and spiritual discourses to nurture your inner journey.'
    },
    {
      icon: Users,
      title: 'Community Living',
      description: 'Join a peaceful community of spiritual seekers from around the world.'
    },
    {
      icon: Leaf,
      title: 'Natural Environment',
      description: 'Experience tranquility surrounded by the Himalayas and holy Ganges river.'
    },
    {
      icon: Sun,
      title: 'Daily Practices',
      description: 'Participate in traditional ceremonies, including the famous Ganga Aarti.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-peaceful">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={meditationHall}
                alt="Meditation Hall at Parmarth Niketan"
                className="rounded-2xl shadow-warm w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-spiritual-gold/20 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                About Us
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded in 1942, Parmarth Niketan Ashram stands as one of Rishikesh's largest and most 
                revered spiritual centers. Located on the sacred banks of the Ganges River, our ashram 
                has welcomed seekers from around the world for over eight decades.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We offer a transformative experience through ancient wisdom, modern comfort, and the 
                timeless peace of the Himalayas. Join us in discovering your true spiritual potential.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-gentle hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-6">
                    <feature.icon className="h-8 w-8 text-spiritual-saffron mb-3" />
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;