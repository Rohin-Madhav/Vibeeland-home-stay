import { BedDouble, Wifi, Coffee, Wind } from "lucide-react";

import room1 from "../assets/rooms/executive-room.webp";
import room2 from "../assets/rooms/deluxe-room.webp";

export default function Rooms() {
  const rooms = [
    {
      name: "Executive Room",
      tag: "A/C",
      image: room1,
      description:
        "Comfortable room designed for couples and small families with modern amenities and a relaxing atmosphere.",
    },
    {
      name: "Deluxe Room",
      tag: "A/C",
      image: room2,
      description:
        "Spacious deluxe accommodation offering comfort, privacy, and a peaceful stay near Mini Ooty.",
    },
  ];

  const amenities = [
    { icon: Wind, label: "Air Conditioning" },
    { icon: Wifi, label: "Free WiFi" },
    { icon: Coffee, label: "Breakfast" },
    { icon: BedDouble, label: "Comfortable Bed" },
  ];

  const handleBooking = (roomName) => {
    const message = `Hi Vibee Land,

I would like to check availability.

Room: ${roomName}

Please share availability and pricing.`;

    window.open(
      `https://wa.me/917907103605?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section id="rooms" className="py-28 bg-[#FBF8F2]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap');

        .vl-rooms-eyebrow { font-family: 'Jost', sans-serif; }
        .vl-rooms-title { font-family: 'Cormorant Garamond', serif; }
        .vl-rooms-body { font-family: 'Jost', sans-serif; font-weight: 300; }
        .vl-rooms-amenity { font-family: 'Jost', sans-serif; }
        .vl-rooms-cta { font-family: 'Jost', sans-serif; letter-spacing: 0.1em; }

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

        .vl-room-card {
          background: #FFFFFF;
          border: 1px solid rgba(201, 162, 39, 0.15);
          transition: box-shadow 0.35s ease, transform 0.35s ease;
        }

        .vl-room-card:hover {
          box-shadow: 0 30px 50px -20px rgba(15, 26, 20, 0.25);
          transform: translateY(-4px);
        }

        .vl-room-image-wrap {
          position: relative;
          overflow: hidden;
        }

        .vl-room-image {
          transition: transform 0.6s ease;
        }

        .vl-room-card:hover .vl-room-image {
          transform: scale(1.05);
        }

        .vl-room-tag {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: rgba(251, 248, 242, 0.92);
          backdrop-filter: blur(4px);
          color: #16301F;
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0.4rem 0.85rem;
          border-radius: 3px;
          border: 1px solid rgba(201, 162, 39, 0.4);
        }

        .vl-amenity-row {
          border-top: 1px solid rgba(201, 162, 39, 0.15);
          padding-top: 1.5rem;
        }

        .vl-amenity-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(201, 162, 39, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="vl-flourish-line" />
            <span className="vl-rooms-eyebrow text-[#C9A227] uppercase tracking-[0.3em] text-xs font-medium">
              Accommodation
            </span>
            <span className="vl-flourish-line" />
          </div>

          <h2 className="vl-rooms-title text-4xl md:text-5xl text-[#1B4332]">
            Stay In Comfort
          </h2>

          <p className="vl-rooms-body mt-5 text-[#6B6B63] max-w-2xl mx-auto leading-relaxed">
            Choose from our comfortable air-conditioned rooms designed for
            relaxation and memorable stays.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="vl-room-card rounded-sm overflow-hidden"
            >
              <div className="vl-room-image-wrap">
                <img
                  src={room.image}
                  alt={room.name}
                  className="vl-room-image w-full h-48 sm:h-64 md:h-80 object-cover"
                />
                <span className="vl-room-tag">{room.tag}</span>
              </div>

              <div className="p-8">
                <h3 className="vl-rooms-title text-2xl text-[#1B4332] font-medium">
                  {room.name}
                </h3>

                <p className="vl-rooms-body mt-4 text-[#6B6B63] leading-relaxed">
                  {room.description}
                </p>

                {/* Amenities */}
                <div className="vl-amenity-row grid grid-cols-2 gap-4 mt-6">
                  {amenities.map(({ icon: Icon, label }, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="vl-amenity-icon">
                        <Icon size={14} className="text-[#C9A227]" />
                      </span>
                      <span className="vl-rooms-amenity text-sm text-[#3A3A36]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleBooking(room.name)}
                  className="vl-rooms-cta mt-8 w-full text-[#16301F] text-xs uppercase py-4 rounded-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background:
                      "linear-gradient(160deg, #C9A227 0%, #B08D22 100%)",
                    boxShadow: "0 10px 22px -10px rgba(201, 162, 39, 0.55)",
                  }}
                >
                  Check Availability
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
