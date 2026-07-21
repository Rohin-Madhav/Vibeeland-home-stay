import { Expand } from "lucide-react";
import gallery1 from "../assets/gallery/gallery1.webp";
import gallery2 from "../assets/gallery/gallery2.webp";
import gallery3 from "../assets/gallery/gallery3.webp";
import gallery4 from "../assets/gallery/gallery4.webp";
import gallery5 from "../assets/gallery/gallery5.webp";
import gallery6 from "../assets/gallery/gallery6.webp";

export default function Gallery() {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  return (
    <section id="gallery" className="py-28 bg-[#FBF8F2]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600&family=Jost:wght@300;400;500&display=swap');

        .vl-gal-eyebrow { font-family: 'Jost', sans-serif; }
        .vl-gal-title { font-family: 'Cormorant Garamond', serif; }
        .vl-gal-body { font-family: 'Jost', sans-serif; font-weight: 300; }
        .vl-gal-index { font-family: 'Cormorant Garamond', serif; font-style: italic; }

        .vl-flourish-line {
          height: 1px;
          width: 2rem;
          background: rgba(201, 162, 39, 0.6);
        }

        .vl-gal-tile {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(201, 162, 39, 0.15);
        }

        .vl-gal-img {
          transition: transform 0.7s ease;
        }

        .vl-gal-tile:hover .vl-gal-img {
          transform: scale(1.08);
        }

        .vl-gal-veil {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(15,26,20,0) 40%, rgba(15,26,20,0.65) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .vl-gal-tile:hover .vl-gal-veil {
          opacity: 1;
        }

        .vl-gal-corner {
          position: absolute;
          inset: 10px;
          border: 1px solid rgba(201, 162, 39, 0.7);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .vl-gal-tile:hover .vl-gal-corner {
          opacity: 1;
        }

        .vl-gal-icon {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #F4EFE2;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .vl-gal-tile:hover .vl-gal-icon {
          opacity: 1;
          transform: translateY(0);
        }

        .vl-gal-num {
          position: absolute;
          top: 1rem;
          right: 1.25rem;
          color: rgba(244, 239, 226, 0.85);
          font-size: 0.85rem;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .vl-gal-tile:hover .vl-gal-num {
          opacity: 1;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="vl-flourish-line" />
            <span className="vl-gal-eyebrow text-[#C9A227] uppercase tracking-[0.3em] text-xs font-medium">
              Gallery
            </span>
            <span className="vl-flourish-line" />
          </div>

          <h2 className="vl-gal-title mt-4 text-4xl md:text-5xl text-[#1B4332]">
            Discover Vibee Land
          </h2>

          <p className="vl-gal-body mt-5 text-[#6B6B63] max-w-2xl mx-auto leading-relaxed">
            Explore our homestay, comfortable rooms, scenic surroundings, and
            the peaceful atmosphere that makes every stay memorable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="vl-gal-tile rounded-sm">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="vl-gal-img w-full h-48 sm:h-64 md:h-80 object-cover"
              />
              <div className="vl-gal-veil" />
              <div className="vl-gal-corner" />
              <span className="vl-gal-num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="vl-gal-icon">
                <Expand size={15} />
                <span className="vl-gal-eyebrow text-xs uppercase tracking-widest">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
