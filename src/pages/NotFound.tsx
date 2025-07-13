import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white px-4 animate-gradient">
      <div className="max-w-md text-center">
        <h1 className="text-9xl font-extrabold drop-shadow-lg mb-4 animate-bounce motion-safe:animate-bounce">404</h1>
        <p className="text-2xl md:text-3xl font-light mb-8">
          Sorry, the page you are looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-md bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-200 animate-pulse motion-safe:animate-pulse"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
