import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageWrapper from '@/components/PageWrapper';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Gallery from '@/pages/Gallery';
import TestimonialsPage from '@/pages/TestimonialsPage';
import Book from '@/pages/Book';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
        <Route path="/testimonials" element={<PageWrapper><TestimonialsPage /></PageWrapper>} />
        <Route path="/book" element={<PageWrapper><Book /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}
