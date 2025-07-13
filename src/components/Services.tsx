import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Bed, 
  Utensils, 
  Waves, 
  TreePine, 
  Dumbbell, 
  BookOpen, 
  Heart, 
  Users 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bed,
      title: 'Comfortable Accommodation',
      description: 'Clean, peaceful rooms with AC and non-AC options for your spiritual retreat.',
    },
    {
      icon: Utensils,
      title: 'Sattvic Meals',
      description: 'Nutritious vegetarian meals prepared with love and spiritual consciousness.',
    },
    {
      icon: Waves,
      title: 'Ganga Aarti Ceremony',
      description: 'Experience the divine evening prayer ceremony by the sacred Ganges river.',
    },
    {
      icon: TreePine,
      title: 'Nature Immersion',
      description: 'Beautiful gardens and natural surroundings for meditation and reflection.',
    },
    {
      icon: Dumbbell,
      title: 'Yoga & Meditation',
      description: 'Daily yoga classes and guided meditation sessions for all levels.',
    },
    {
      icon: BookOpen,
      title: 'Spiritual Teachings',
      description: 'Regular discourses on Vedic wisdom and spiritual philosophy.',
    },
    {
      icon: Heart,
      title: 'Ayurvedic Healing',
      description: 'Traditional Ayurvedic treatments and wellness consultations.',
    },
    {
      icon: Users,
      title: 'Community Programs',
      description: 'Join group activities, seva (service), and spiritual workshops.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Sacred Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience holistic spiritual living with our comprehensive facilities designed 
            to support your journey of self-discovery and inner peace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-none shadow-gentle hover:shadow-warm transition-all duration-300 group hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-spiritual-cream rounded-full flex items-center justify-center group-hover:bg-spiritual-saffron/10 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-spiritual-saffron" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;