import { Phone } from 'lucide-react';
import React from 'react';

/**
 * FloatingButtons renders fixed-position action buttons for WhatsApp chat and phone call.
 * Place the component near the root of the application (e.g., in App.tsx) so it appears on all pages.
 */
const FloatingButtons: React.FC = () => {
  const phoneNumber = '6003282464';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
          <path d="M16.001 3C9.383 2.999 3.999 8.382 4 15c.002 2.647.863 5.079 2.331 7.07L4 28l6.158-2.292A11.938 11.938 0 0 0 16 27c6.618-.001 12.001-5.385 12-12.003C28 8.38 22.617 3 16.001 3zm0 21.866c-2.019 0-3.898-.588-5.48-1.598l-.393-.249-3.656 1.361 1.304-3.778-.257-.389a9.866 9.866 0 0 1-1.525-5.208c.001-5.444 4.434-9.876 9.977-9.874 5.44.002 9.875 4.435 9.873 9.876-.002 5.543-4.436 9.877-9.843 9.877zm5.46-7.415c-.299-.149-1.767-.87-2.041-.97-.274-.099-.473-.149-.672.15-.198.298-.772.97-.945 1.167-.173.199-.347.224-.646.075-.299-.149-1.262-.465-2.404-1.481-.888-.792-1.487-1.772-1.662-2.07-.173-.298-.018-.458.13-.607.134-.134.299-.348.448-.522.149-.173.198-.298.298-.497.099-.198.05-.373-.025-.522-.075-.149-.672-1.616-.92-2.215-.242-.579-.487-.501-.672-.511l-.573-.01c-.198 0-.522.074-.796.373-.274.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.197 5.077 4.485.709.306 1.262.488 1.694.626.712.226 1.361.194 1.873.118.572-.085 1.767-.721 2.015-1.416.249-.696.249-1.292.174-1.416-.075-.124-.273-.198-.572-.348z"/>
        </svg>
      </a>

      {/* Phone */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-colors"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
};

export default FloatingButtons;
