import { MapPin, Phone, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Rooms", href: "#rooms" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className="text-white"
      style={{
        background: "linear-gradient(165deg, #0F2D22 0%, #16301F 100%)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap');

        .vl-ft-eyebrow { font-family: 'Jost', sans-serif; }
        .vl-ft-title { font-family: 'Cormorant Garamond', serif; }
        .vl-ft-body { font-family: 'Jost', sans-serif; font-weight: 300; }
        .vl-ft-heading { font-family: 'Jost', sans-serif; letter-spacing: 0.12em; }
        .vl-ft-link { font-family: 'Jost', sans-serif; font-weight: 300; }
        .vl-ft-brand { font-family: 'Cormorant Garamond', serif; }
        .vl-ft-cta { font-family: 'Jost', sans-serif; letter-spacing: 0.1em; }

        .vl-flourish-line {
          height: 1px;
          width: 2rem;
          background: rgba(201, 162, 39, 0.55);
        }

        .vl-ft-link-item {
          position: relative;
          width: fit-content;
        }

        .vl-ft-link-item::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background: #C9A227;
          transition: width 0.3s ease;
        }

        .vl-ft-link-item:hover::after {
          width: 100%;
        }

        .vl-ft-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(201, 162, 39, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C9A227;
          flex-shrink: 0;
        }
      `}</style>

      {/* Top CTA */}
      <div className="border-b border-[#C9A227]/15">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="vl-flourish-line" />
            <span className="vl-ft-eyebrow text-[#C9A227] uppercase tracking-[0.3em] text-xs font-medium">
              Vibee Land Homestay
            </span>
            <span className="vl-flourish-line" />
          </div>

          <h2 className="vl-ft-title text-4xl md:text-5xl">
            Ready For Your Next Getaway?
          </h2>

          <p className="vl-ft-body mt-5 text-white/65 max-w-2xl mx-auto leading-relaxed">
            Experience comfort, nature, and unforgettable moments near Mini
            Ooty.
          </p>

          <a
            href={`https://wa.me/917907103605?text=${encodeURIComponent(
              `Hi Vibee Land,

I would like to know more about room availability.

Please share pricing and available rooms.

Thank you.`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="vl-ft-cta inline-flex items-center gap-3 mt-9 text-[#16301F] text-xs uppercase px-9 py-4 rounded-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(160deg, #C9A227 0%, #B08D22 100%)",
              boxShadow: "0 10px 24px -10px rgba(201, 162, 39, 0.55)",
            }}
          >
            <MessageCircle size={17} />
            Book Your Stay
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="vl-ft-brand text-3xl">Vibee Land</h3>
            <p className="vl-ft-body mt-4 text-white/60 leading-relaxed">
              A peaceful homestay near Mini Ooty offering comfort, nature, and
              memorable experiences for families, couples, and travelers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="vl-ft-heading text-xs uppercase text-[#C9A227] mb-6">
              Quick Links
            </h4>

            <div className="flex flex-col gap-4 text-white/70">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="vl-ft-link vl-ft-link-item hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="vl-ft-heading text-xs uppercase text-[#C9A227] mb-6">
              Contact Info
            </h4>

            <div className="space-y-4 text-white/70">
              <div className="flex items-center gap-3">
                <span className="vl-ft-icon">
                  <Phone size={14} />
                </span>
                <span className="vl-ft-link">+91 85478 78720</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="vl-ft-icon">
                  <MapPin size={14} />
                </span>
                <span className="vl-ft-link">Near Mini Ooty, Kerala</span>
              </div>

              <a
                href="https://www.instagram.com/vibeeland_homestay"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors duration-300"
              >
                <span className="vl-ft-icon">
                  <FaInstagram size={14} />
                </span>
                <span className="vl-ft-link">@vibeeland_homestay</span>
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-[#C9A227]/15" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm vl-ft-body">
          <p>
            © {new Date().getFullYear()} Vibee Land Homestay. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
