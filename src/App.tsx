import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import TestimonialsPage from "./pages/TestimonialsPage";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import FloatingButtons from "./components/FloatingButtons";
import { useGsapAnimations } from "./hooks/useGsapAnimations";
import { ReactLenis, useLenis } from "lenis/react";

const queryClient = new QueryClient();

const App = () => {
  useGsapAnimations();

  const lenis = useLenis((lenis) => {
    console.log(lenis);
  });

  return (
    <>
      <ReactLenis root />
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <FloatingButtons />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/book" element={<Book />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
