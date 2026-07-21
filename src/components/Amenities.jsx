import {
  Wifi,
  Car,
  Tv,
  Droplets,
  CookingPot,
  Trees,
  Coffee,
  Wind,
  Music,
} from "lucide-react";

export default function Amenities() {
  const amenities = [
    { icon: <Wifi size={22} />, title: "Free WiFi" },
    { icon: <Car size={22} />, title: "Parking" },
    { icon: <Wind size={22} />, title: "Air Conditioning" },
    { icon: <Tv size={22} />, title: "Television" },
    { icon: <Droplets size={22} />, title: "Hot Water" },
    { icon: <CookingPot size={22} />, title: "Kitchen Access" },
    { icon: <Trees size={22} />, title: "Garden Area" },
    { icon: <Coffee size={22} />, title: "Complimentary Breakfast" },
    { icon: <Music size={22} />, title: "Open Stage" },
  ];

  return (
    <section
      id="amenities"
      className="py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(165deg, #16301F 0%, #1B4332 100%)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600&family=Jost:wght@300;400;500&display=swap');

        .vl-am-eyebrow { font-family: 'Jost', sans-serif; }
        .vl-am-title { font-family: 'Cormorant Garamond', serif; }
        .vl-am-body { font-family: 'Jost', sans-serif; font-weight: 300; }
        .vl-am-name { font-family: 'Jost', sans-serif; }

        .vl-flourish-line {
          height: 1px;
          width: 2rem;
          background: rgba(201, 162, 39, 0.55);
        }

        .vl-am-motif {
          position: absolute;
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 24rem;
          line-height: 1;
          color: rgba(201, 162, 39, 0.04);
          bottom: -6rem;
          left: -3rem;
          user-select: none;
          pointer-events: none;
        }

        .vl-am-card {
          background: rgba(244, 239, 226, 0.04);
          border: 1px solid rgba(201, 162, 39, 0.18);
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }

        .vl-am-card:hover {
          background: rgba(201, 162, 39, 0.08);
          border-color: rgba(201, 162, 39, 0.5);
          transform: translateY(-3px);
        }

        .vl-am-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(201, 162, 39, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C9A227;
          flex-shrink: 0;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .vl-am-card:hover .vl-am-icon-wrap {
          background: #C9A227;
          color: #16301F;
        }
      `}</style>

      <span className="vl-am-motif hidden lg:block">V</span>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="vl-flourish-line" />
            <span className="vl-am-eyebrow text-[#C9A227] uppercase tracking-[0.3em] text-xs font-medium">
              Amenities
            </span>
            <span className="vl-flourish-line" />
          </div>

          <h2 className="vl-am-title mt-4 text-4xl md:text-5xl text-[#F4EFE2]">
            Everything You Need
          </h2>

          <p className="vl-am-body mt-5 text-[#F4EFE2]/65 max-w-2xl mx-auto leading-relaxed">
            Enjoy a comfortable stay with thoughtfully selected amenities
            designed to make your visit relaxing and memorable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="vl-am-card rounded-sm p-6 flex items-center gap-4"
            >
              <span className="vl-am-icon-wrap">{item.icon}</span>
              <h3 className="vl-am-name text-[#F4EFE2] font-medium text-base">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
