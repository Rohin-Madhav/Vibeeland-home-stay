import { CheckCircle } from "lucide-react";
import heroImg from "../assets/hero/heroImg .webp";

export default function About() {
  const amenities = [
    "Free WiFi",
    "Complimentary Breakfast",
    "Garden Area",
    "Open Stage",
  ];

  return (
    <section id="about" className="py-28 bg-[#FBF8F2] relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap');

        .vl-about-eyebrow {
          font-family: 'Jost', sans-serif;
        }

        .vl-about-title {
          font-family: 'Cormorant Garamond', serif;
        }

        .vl-about-body {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
        }

        .vl-about-amenity {
          font-family: 'Jost', sans-serif;
        }

        .vl-flourish-line {
          height: 1px;
          width: 2rem;
          background: rgba(201, 162, 39, 0.6);
        }

        .vl-flourish-diamond {
          width: 5px;
          height: 5px;
          background: #C9A227;
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        .vl-about-frame {
          position: absolute;
          top: -18px;
          left: -18px;
          right: 18px;
          bottom: 18px;
          border: 1px solid rgba(201, 162, 39, 0.5);
          border-radius: 6px;
          z-index: 0;
        }

        .vl-amenity-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(201, 162, 39, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .vl-bg-motif {
          position: absolute;
          font-family: 'Cormorant Garamond', serif;
          font-size: 22rem;
          line-height: 1;
          color: rgba(27, 67, 50, 0.035);
          font-style: italic;
          user-select: none;
          pointer-events: none;
          top: -4rem;
          right: -2rem;
        }
      `}</style>

      <span className="vl-bg-motif hidden lg:block">V</span>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="vl-about-frame hidden md:block" />
            <img
              src={heroImg}
              alt="Vibee Land Homestay"
              className="relative z-10 w-full h-56 sm:h-80 md:h-96 object-cover rounded-sm shadow-2xl"
            />

            <div className="absolute z-20 bottom-6 left-6 bg-[#FBF8F2]/95 backdrop-blur-md px-6 py-4 rounded-sm shadow-lg border border-[#C9A227]/20">
              <p className="vl-about-eyebrow text-[0.65rem] text-[#8A7B54] uppercase tracking-[0.25em]">
                Location
              </p>
              <h4 className="vl-about-title text-lg font-medium text-[#1B4332] mt-1">
                Near Mini Ooty, Kerala
              </h4>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="vl-flourish-line" />
              <span className="vl-about-eyebrow text-[#C9A227] uppercase tracking-[0.3em] text-xs font-medium">
                About Vibee Land
              </span>
            </div>

            <h2 className="vl-about-title text-4xl md:text-5xl text-[#1B4332] leading-[1.15]">
              A Peaceful Escape Near Mini Ooty
            </h2>

            <p className="vl-about-body mt-7 text-[#4A4A44] leading-relaxed text-lg">
              Vibee Land Homestay offers a unique stay experience surrounded by
              nature and scenic beauty.
            </p>

            <p className="vl-about-body mt-4 text-[#6B6B63] leading-relaxed">
              Whether you're planning a family vacation, a romantic getaway, or
              a weekend retreat with friends, our homestay provides comfort,
              privacy, and unforgettable memories.
            </p>

            <p className="vl-about-body mt-4 text-[#6B6B63] leading-relaxed">
              Located near Mini Ooty, Vibee Land combines modern amenities with
              a peaceful atmosphere, making it the perfect destination to relax
              and reconnect.
            </p>

            {/* Amenities */}
            <div className="grid grid-cols-2 gap-5 mt-10">
              {amenities.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="vl-amenity-icon">
                    <CheckCircle size={15} className="text-[#C9A227]" />
                  </span>
                  <span className="vl-about-amenity text-[#3A3A36] font-medium text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
