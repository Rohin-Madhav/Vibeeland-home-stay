import { MapPin, BedDouble, Coffee, Wifi } from "lucide-react";

export default function Highlights() {
  const highlights = [
    {
      icon: <MapPin size={24} />,
      title: "Near Mini Ooty",
      description: "Located close to Kerala's beautiful hill viewpoints.",
    },
    {
      icon: <BedDouble size={24} />,
      title: "3 Comfortable Rooms",
      description: "Perfect for couples, families, and groups.",
    },
    {
      icon: <Coffee size={24} />,
      title: "Complimentary Breakfast",
      description: "Start your day with delicious breakfast options.",
    },
    {
      icon: <Wifi size={24} />,
      title: "Free WiFi",
      description: "Stay connected while enjoying nature.",
    },
  ];

  return (
    <section className="py-24 bg-[#FBF8F2]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600&family=Jost:wght@300;400;500&display=swap');

        .vl-hl-eyebrow { font-family: 'Jost', sans-serif; }
        .vl-hl-title { font-family: 'Cormorant Garamond', serif; }
        .vl-hl-heading { font-family: 'Cormorant Garamond', serif; }
        .vl-hl-body { font-family: 'Jost', sans-serif; font-weight: 300; }

        .vl-flourish-line {
          height: 1px;
          width: 2rem;
          background: rgba(201, 162, 39, 0.6);
        }

        .vl-hl-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid rgba(201, 162, 39, 0.15);
          transition: box-shadow 0.35s ease, transform 0.35s ease, border-color 0.35s ease;
        }

        .vl-hl-card:hover {
          box-shadow: 0 25px 45px -22px rgba(15, 26, 20, 0.28);
          transform: translateY(-4px);
          border-color: rgba(201, 162, 39, 0.4);
        }

        .vl-hl-icon-ring {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 1px solid rgba(201, 162, 39, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: #C9A227;
          transition: background 0.35s ease, color 0.35s ease;
        }

        .vl-hl-card:hover .vl-hl-icon-ring {
          background: #C9A227;
          color: #FBF8F2;
        }

        .vl-hl-index {
          position: absolute;
          top: 1rem;
          right: 1.25rem;
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 0.9rem;
          color: rgba(27, 67, 50, 0.25);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="vl-flourish-line" />
            <span className="vl-hl-eyebrow text-[#C9A227] uppercase tracking-[0.3em] text-xs font-medium">
              Why Choose Us
            </span>
            <span className="vl-flourish-line" />
          </div>

          <h2 className="vl-hl-title text-4xl md:text-5xl text-[#1B4332]">
            Experience Comfort & Nature
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="vl-hl-card rounded-sm p-8 text-center">
              <span className="vl-hl-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="vl-hl-icon-ring">{item.icon}</div>

              <h3 className="vl-hl-heading text-xl text-[#1B4332] font-medium mb-2">
                {item.title}
              </h3>

              <p className="vl-hl-body text-sm text-[#6B6B63] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
