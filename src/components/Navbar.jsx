import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo/vibeeland_logo.png";

export default function Navbar({ setBookingOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Rooms", href: "#rooms" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap');

        .vl-nav-link {
          position: relative;
          font-family: 'Jost', sans-serif;
          letter-spacing: 0.04em;
          padding-bottom: 4px;
        }

        .vl-nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 1px;
          background: #C9A227;
          transition: width 0.3s ease;
        }

        .vl-nav-link:hover::after {
          width: 100%;
        }

        .vl-logo {
          font-family: 'Cormorant Garamond', serif;
        }

        .vl-cta {
          font-family: 'Jost', sans-serif;
          letter-spacing: 0.08em;
        }

        .vl-mobile-link {
          font-family: 'Cormorant Garamond', serif;
        }

        .vl-flourish-line {
          height: 1px;
          width: 2rem;
          background: rgba(201, 162, 39, 0.5);
        }

        .vl-flourish-diamond {
          width: 5px;
          height: 5px;
          background: #C9A227;
          transform: rotate(45deg);
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FBF8F2]/95 backdrop-blur-md shadow-[0_4px_20px_-8px_rgba(15,26,20,0.25)] py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className={`flex items-center transition-all duration-300 ${
              scrolled
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <img
              src={logo}
              alt="Vibee Land Homestay"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`vl-nav-link text-sm transition-colors duration-300 ${
                  scrolled
                    ? "text-[#3A3A36] hover:text-[#1B4332]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={() => {
                setIsOpen(false);
                setBookingOpen(true);
              }}
              className="vl-cta group relative overflow-hidden text-[#16301F] px-7 py-3 rounded-sm text-xs uppercase font-medium transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(160deg, #C9A227 0%, #B08D22 100%)",
                boxShadow: "0 8px 20px -8px rgba(201, 162, 39, 0.55)",
              }}
            >
              <span className="relative z-10">Book Your Stay</span>
              <span className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </button>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden transition-colors duration-300 ${
              scrolled ? "text-[#1B4332]" : "text-white"
            }`}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 text-white transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{
          background: "linear-gradient(160deg, #16301F 0%, #1B4332 100%)",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full px-8">
          <div className="flex flex-col gap-7 text-center">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="vl-mobile-link text-3xl font-medium text-[#F4EFE2] hover:text-[#C9A227] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 my-10">
            <span className="vl-flourish-line" />
            <span className="vl-flourish-diamond" />
            <span className="vl-flourish-line" />
          </div>

          <div className="w-full max-w-xs">
            <button
              onClick={() => {
                setIsOpen(false);
                setBookingOpen(true);
              }}
              className="vl-cta w-full py-4 rounded-sm text-[#16301F] text-sm uppercase font-medium transition-transform duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(160deg, #C9A227 0%, #B08D22 100%)",
                boxShadow: "0 10px 24px -8px rgba(201, 162, 39, 0.6)",
              }}
            >
              Book Your Stay
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
