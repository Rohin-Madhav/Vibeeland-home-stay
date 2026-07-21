import { Phone, MapPin, Camera, MessageCircle } from "lucide-react";

export default function Contact() {
  const details = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 85478 78720",
      href: "tel:+918547878720",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Near Mini Ooty, Kerala",
    },
    {
      icon: Camera,
      label: "Instagram",
      value: "@vibeeland_homestay",
      href: "https://www.instagram.com/vibeeland_homestay?igsh=MTU1ZmF3OWhzaXRvag%3D%3D&utm_source=qr",
    },
  ];

  return (
    <section id="contact" className="py-28 bg-[#FBF8F2]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600&family=Jost:wght@300;400;500&display=swap');

        .vl-ct-eyebrow { font-family: 'Jost', sans-serif; }
        .vl-ct-title { font-family: 'Cormorant Garamond', serif; }
        .vl-ct-body { font-family: 'Jost', sans-serif; font-weight: 300; }
        .vl-ct-label { font-family: 'Jost', sans-serif; }
        .vl-ct-value { font-family: 'Cormorant Garamond', serif; }
        .vl-ct-cta { font-family: 'Jost', sans-serif; letter-spacing: 0.1em; }

        .vl-flourish-line {
          height: 1px;
          width: 2rem;
          background: rgba(201, 162, 39, 0.6);
        }

        .vl-ct-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid rgba(201, 162, 39, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C9A227;
          flex-shrink: 0;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .vl-ct-row:hover .vl-ct-icon {
          background: #C9A227;
          color: #16301F;
        }

        .vl-ct-row + .vl-ct-row {
          border-top: 1px solid rgba(201, 162, 39, 0.15);
          padding-top: 1.75rem;
          margin-top: 1.75rem;
        }

        .vl-map-frame {
          position: relative;
          border: 1px solid rgba(201, 162, 39, 0.25);
          box-shadow: 0 30px 60px -25px rgba(15, 26, 20, 0.35);
        }

        .vl-map-frame::after {
          content: '';
          position: absolute;
          inset: 10px;
          border: 1px solid rgba(201, 162, 39, 0.35);
          pointer-events: none;
          z-index: 1;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="vl-flourish-line" />
            <span className="vl-ct-eyebrow text-[#C9A227] uppercase tracking-[0.3em] text-xs font-medium">
              Contact Us
            </span>
            <span className="vl-flourish-line" />
          </div>

          <h2 className="vl-ct-title mt-4 text-4xl md:text-5xl text-[#1B4332]">
            Plan Your Stay
          </h2>

          <p className="vl-ct-body mt-5 text-[#6B6B63] max-w-2xl mx-auto leading-relaxed">
            Contact us directly to check room availability and book your stay at
            Vibee Land Homestay.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Contact Info */}
          <div>
            {details.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="vl-ct-icon">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="vl-ct-label text-[0.65rem] uppercase tracking-[0.2em] text-[#8A7B54] mb-1">
                      {item.label}
                    </p>
                    <p className="vl-ct-value text-xl text-[#1B4332]">
                      {item.value}
                    </p>
                  </div>
                </>
              );

              return item.href ? (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="vl-ct-row flex items-center gap-5"
                >
                  {content}
                </a>
              ) : (
                <div key={index} className="vl-ct-row flex items-center gap-5">
                  {content}
                </div>
              );
            })}

            <div className="mt-10">
              <a
                href={`https://wa.me/918547878720?text=${encodeURIComponent(
                  `Hi Vibee Land 👋

I found your website and would like to know more about room availability.

Please share:
• Available rooms
• Pricing
• Check-in details

Thank you.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="vl-ct-cta inline-flex items-center gap-3 text-[#16301F] text-xs uppercase px-8 py-4 rounded-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(160deg, #C9A227 0%, #B08D22 100%)",
                  boxShadow: "0 10px 22px -10px rgba(201, 162, 39, 0.55)",
                }}
              >
                <MessageCircle size={17} />
                WhatsApp Booking
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="vl-map-frame rounded-sm overflow-hidden">
            <iframe
              title="Vibee Land Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.2038781789574!2d75.97179129999999!3d11.098177599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64d0030933575%3A0x4015703e4d8c34c!2sVibeeland!5e0!3m2!1sen!2sin!4v1783856537121!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
