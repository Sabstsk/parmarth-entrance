import Header from '@/components/Header';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import img1 from '@/assets/Parmarth-Niketan-Ashram.webp';
import img2 from '@/assets/Parmarth-Niketan-Ashram2.webp';
import img3 from '@/assets/Parmarth-Niketan-Ashram3.webp';
import img4 from '@/assets/Parmarth-Niketan-Ashram4.webp';
import img5 from '@/assets/Parmarth-Niketan-Ashram5.webp';
import img6 from '@/assets/Parmarth-Niketan-Ashram6.webp';
import img7 from '@/assets/Parmarth-Niketan-Ashram7.webp';
import img8 from '@/assets/Parmarth-Niketan-Ashram8.webp';
import img9 from '@/assets/Parmarth-Niketan-Ashram9.webp';
import img10 from '@/assets/Parmarth-Niketan-Ashram10.webp';











const Gallery = () => {
  const placeholderImg = 'https://via.placeholder.com/400x256?text=Image+Unavailable';
  const [visibleCount, setVisibleCount] = useState(6);
  const loadMore = () => setVisibleCount((prev) => prev + 6);
  // Using our generated images and some placeholder categories
  const galleryItems = [
    {
      id: 1,
      category: 'Ashram Grounds',
      title: 'Sacred Entrance Gate',
      image: img1,
      description: 'Welcome to your Himalayan home - Parmarth Niketan entrance'
    },
    {
      id: 2,
      category: 'Meditation',
      title: 'Meditation Hall',
      image: img2,
      description: 'Peaceful meditation hall for daily practice'
    },
    {
      id: 3,
      category: 'Ceremonies',
      title: 'Ganga Aarti Ceremony',
      image: img3,
      description: 'Sacred evening prayers at the holy Ganges riverbank'
    },
    {
      id: 4,
      category: 'Ashram Grounds',
      title: 'Peaceful Ashram Gardens',
      image: img4,
      description: 'Beautiful gardens and pathways for contemplation'
    },
    {
      id: 5,
      category: 'Activities',
      title: 'Morning Yoga',
      image: img5,
      description: 'Daily yoga practice at sunrise in our courtyard'
    },
    {
      id: 6,
      category: 'Meditation',
      title: 'Silent Sunrise Meditation',
      image: img6,
      description: 'Early morning group meditation by the Ganges'
    },
    {
      id: 7,
      category: 'Ceremonies',
      title: 'Fire Yagna Ritual',
      image: img7,
      description: 'Devotees performing sacred fire offerings'
    },
    {
      id: 8,
      category: 'Activities',
      title: 'Kirtan Singing',
      image: img8,
      description: 'Evening kirtan session with devotional music'
    },
    {
      id: 9,
      category: 'Ashram Grounds',
      title: 'Lush Garden Path',
      image: img9,
      description: 'Walkway lined with blooming flowers and trees'
    },
    {
      id: 10,
      category: 'Meditation',
      title: 'Wisdom Talk',
      image: img10,
      description: 'Inspirational evening discourse'
    }
  ];
  /* Duplicate obsolete gallery items (commented out)
  {
    id: 2,
    category: 'Meditation',
    title: 'Meditation Hall',
    image: meditationHall,
    description: 'Peaceful meditation hall for daily practice'
  },
  {
    id: 3,*/
/*
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
  },
  {
    id: 7,
    category: 'Meditation',
    title: 'Silent Sunrise Meditation',
    image: heroAshram,
    description: 'Early morning group meditation facing the Ganges.'
  },
  {
    id: 8,
    category: 'Ceremonies',
    title: 'Fire Yagna Ritual',
    image: ashramGardens2,
    description: 'Devotees performing sacred fire offerings.'
  },
  {
    id: 9,
    category: 'Activities',
    title: 'Kirtan Singing',
    image: roomStandard,
    description: 'Evening kirtan session with devotional music.'
  },
  {
    id: 9,
    category: 'Ashram Grounds',
    title: 'Lush Garden Path',
    image: roomDeluxe,
    description: 'Walkway lined with blooming flowers and trees.'
  },
  {
    id: 10,
    category: 'Ashram Grounds',
    title: 'Lush Garden Path',
    image: ashramGardens,
    description: 'Walkway lined with blooming flowers and trees.'
  },
  {
    id: 11,
    category: 'Meditation',
    title: 'Wisdom Talk',
    image: roomFamily,
    description: 'Evening satsang with guest spiritual teacher.'
  }
  */
/*      title: 'Guiding Light',
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
    },
    {
      id: 7,
      category: 'Meditation',
      title: 'Silent Sunrise Meditation',
      image: heroAshram,
      description: 'Early morning group meditation facing the Ganges.'
    },
    {
      id: 8,
      category: 'Ceremonies',
      title: 'Fire Yagna Ritual',
      image: ashramGardens2,
      description: 'Devotees performing sacred fire offerings.'
    },
    {
      id: 9,
      category: 'Activities',
      title: 'Kirtan Singing',
      image: roomStandard,
      description: 'Evening kirtan session with devotional music.'
    },
    {
      id: 9,
      category: 'Ashram Grounds',
      title: 'Lush Garden Path',
      image: roomDeluxe,
      description: 'Walkway lined with blooming flowers and trees.'
    },
    {
      id: 10,
      category: 'Ashram Grounds',
      title: 'Lush Garden Path',
      image: ashramGardens,
      description: 'Walkway lined with blooming flowers and trees.'
    },
    {
      id: 11,
      category: 'Meditation',
      title: 'Wisdom Talk',
      image: roomFamily,
      description: 'Evening satsang with guest spiritual teacher.'
    }
  ];
*/

  const categories = ['All', 'Ashram Grounds', 'Meditation', 'Ceremonies', 'Activities'];

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
              {galleryItems.slice(0, visibleCount).map((item) => (
                <Card key={item.id} className="group overflow-hidden border-none shadow-gentle hover:shadow-warm transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.src = placeholderImg;
                      }}
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
              {visibleCount < galleryItems.length && (
                <button onClick={loadMore} className="bg-spiritual-saffron text-white px-8 py-3 rounded-full hover:bg-spiritual-saffron/90 transition-colors duration-200 font-medium">
                  Load More Images
                </button>
              )}
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
            <Link to="/book" className="inline-block">
              <button className="bg-spiritual-saffron text-white px-8 py-4 rounded-full hover:bg-spiritual-saffron/90 transition-colors duration-200 font-semibold text-lg">
                Plan Your Visit
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;