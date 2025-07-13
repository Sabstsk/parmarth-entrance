import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, MapPin, Award } from 'lucide-react';
import spiritualTeacher from '@/assets/spiritual-teacher.jpg';

const About = () => {
  const milestones = [
    {
      icon: Calendar,
      year: '1942',
      title: 'Foundation',
      description: 'Parmarth Niketan Ashram was established as a center for spiritual learning.'
    },
    {
      icon: Users,
      year: '1960s',
      title: 'Global Outreach',
      description: 'Began welcoming international seekers and expanding spiritual programs.'
    },
    {
      icon: MapPin,
      year: '1980s',
      title: 'Infrastructure Growth',
      description: 'Expanded facilities to accommodate growing number of spiritual seekers.'
    },
    {
      icon: Award,
      year: 'Present',
      title: 'Recognition',
      description: 'Recognized as one of the largest and most respected ashrams in Rishikesh.'
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
              About <span className="text-spiritual-saffron">Parmarth Niketan</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Over eight decades of spiritual service, transformation, and enlightenment 
              on the sacred banks of the Ganges River in Rishikesh.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Sacred Mission</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 1942, Parmarth Niketan Ashram stands as one of Rishikesh's largest 
                    and most revered spiritual centers. Located on the sacred banks of the Ganges River, 
                    our ashram has been a beacon of spiritual light for seekers from around the world.
                  </p>
                  <p>
                    We are dedicated to preserving and sharing the ancient wisdom of Vedic traditions 
                    while providing modern comfort and amenities. Our mission is to create a space 
                    where spiritual seekers can deepen their practice, find inner peace, and 
                    experience transformation.
                  </p>
                  <p>
                    Through yoga, meditation, spiritual discourses, and service, we guide individuals 
                    on their journey toward self-realization and divine connection. Every aspect of 
                    life at our ashram is designed to support spiritual growth and inner awakening.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src={spiritualTeacher}
                  alt="Spiritual Teacher"
                  className="rounded-2xl shadow-warm w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Journey</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {milestones.map((milestone, index) => (
                  <Card key={index} className="border-none shadow-gentle hover:shadow-warm transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-spiritual-cream rounded-full flex items-center justify-center mx-auto mb-4">
                        <milestone.icon className="h-8 w-8 text-spiritual-saffron" />
                      </div>
                      <div className="text-2xl font-bold text-spiritual-saffron mb-2">{milestone.year}</div>
                      <h3 className="font-semibold text-lg mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="bg-spiritual-cream/50 rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 text-spiritual-saffron">Compassion</h3>
                  <p className="text-muted-foreground">
                    We serve all beings with love, kindness, and understanding, 
                    creating a welcoming space for every soul.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 text-spiritual-saffron">Authenticity</h3>
                  <p className="text-muted-foreground">
                    We preserve and teach genuine Vedic traditions and practices 
                    passed down through generations of masters.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 text-spiritual-saffron">Service</h3>
                  <p className="text-muted-foreground">
                    Through selfless service (seva), we cultivate humility and 
                    contribute to the wellbeing of all creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;