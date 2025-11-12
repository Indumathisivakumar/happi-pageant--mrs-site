import { useState } from 'react';

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    '/WhatsApp Image 2025-11-01 at 19.44.01_a52e7ca1.jpg',
    '/WhatsApp Image 2025-11-01 at 20.04.18_875d05a3.jpg',
    '/WhatsApp Image 2025-11-01 at 14.24.28_c393fd0d.jpg',
    '/IMG-20251101-WA0007.jpg',
    '/IMG-20251101-WA0009.jpg',
    '/IMG-20251101-WA0006.jpg',
    '/IMG-20251101-WA0004.jpg',
    '/Gemini_Generated_Image_6yyxrv6yyxrv6yyx copy.png',
    '/Gemini_Generated_Image_r4g5w1r4g5w1r4g5.png',
  
  ];

  return (
    <section id="gallery" className="py-24 gradient-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Gallery
          </h2>
          <p className="text-2xl text-[#D1D5E0] italic font-serif">
            Moments of Grace and Empowerment
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid relative group overflow-hidden rounded-xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full rounded-xl transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#00B8E6]/50 via-transparent to-[#8B4DFF]/30 rounded-xl transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <div
                className={`absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-300 ${
                  hoveredIndex === index ? 'border-[#00B8E6] shadow-lg shadow-[#00B8E6]/50' : ''
                }`}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 rounded-full gradient-brand text-white text-lg font-semibold hover:shadow-xl hover:shadow-[#00B8E6]/50 transition-all duration-300">
            Explore Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
