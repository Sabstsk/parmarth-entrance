import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/parmarth-entrance.jpg';
import meditationHall from '@/assets/meditation-hall.jpg';
import spiritualTeacher from '@/assets/spiritual-teacher.jpg';
import gangaAarti from '@/assets/parmarth-ghat-ceremony.jpg';
import ashramGardens from '@/assets/ashram-peaceful-grounds.jpg';
import yogaSession from '@/assets/yoga-session.jpg';

const Gallery = () => {
  // Using our generated images and some placeholder categories
  const galleryItems = [
    {
      id: 1,
      category: 'Ashram Grounds',
      title: 'Sacred Entrance Gate',
      image: heroImage,
      description: 'Welcome to your Himalayan home - Parmarth Niketan entrance'
    },
    {
      id: 2,
      category: 'Meditation',
      title: 'Meditation Hall',
      image: meditationHall,
      description: 'Peaceful meditation hall for daily practice'
    },
    {
      id: 3,
      category: 'Spiritual Teachers',
      title: 'Guiding Light',
      image: spiritualTeacher,
      description: 'Our spiritual teachers sharing ancient wisdom'
    },
    {
      id: 4,
      category: 'Ceremonies',
      title: 'Ganga Aarti Ceremony',
      image: gangaAarti,
      description: 'Sacred evening prayers at the holy Ganges riverbank'
    },
    {
      id: 5,
      category: 'Ashram Grounds',
      title: 'Peaceful Ashram Grounds',
      image: ashramGardens,
      description: 'Beautiful gardens and pathways for spiritual contemplation'
    },
    {
      id: 6,
      category: 'Activities',
      title: 'Morning Yoga',
      image: yogaSession,
      description: 'Daily yoga practice at sunrise in our courtyard'
    }
  ];

  const categories = ['All', 'Ashram Grounds', 'Meditation', 'Spiritual Teachers', 'Ceremonies', 'Activities'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-peaceful">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sacred <span className="text-spiritual-saffron">Moments</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the beauty and serenity of life at Parmarth Niketan through 
              our collection of sacred moments and peaceful spaces.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border border-spiritual-saffron text-spiritual-saffron hover:bg-spiritual-saffron hover:text-white transition-colors duration-200"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item) => (
                <Card key={item.id} className="group overflow-hidden border-none shadow-gentle hover:shadow-warm transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-spiritual-saffron text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-spiritual-saffron text-white px-8 py-3 rounded-full hover:bg-spiritual-saffron/90 transition-colors duration-200 font-medium">
                Load More Images
              </button>
            </div>
          </div>
        </section>

        {/* Visit Call to Action */}
        <section className="py-16 bg-spiritual-cream/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Experience These Sacred Moments Yourself
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us at Parmarth Niketan and become part of our spiritual community. 
              Create your own sacred memories in this holy place.
            </p>
            <button className="bg-spiritual-saffron text-white px-8 py-4 rounded-full hover:bg-spiritual-saffron/90 transition-colors duration-200 font-semibold text-lg">
              Plan Your Visit
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;