import heroImg2 from "../assets/hero/heroImg2.webp";
import logo from "../assets/logo/vibeeland_logo.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      <style>{`
        .vl-logo-halo {
          /* Stacked drop-shadows follow the PNG's actual silhouette (alpha channel),
             so this hugs the logo shape instead of sitting behind it as a box/circle. */
          filter:
            drop-shadow(0 0 3px rgba(6, 14, 10, 0.85))
            drop-shadow(0 0 8px rgba(6, 14, 10, 0.65))
            drop-shadow(0 0 18px rgba(6, 14, 10, 0.45))
            drop-shadow(0 2px 10px rgba(0, 0, 0, 0.35));
        }
      `}</style>

      {/* Background Image */}
      <img
        src={heroImg2}
        alt="Vibee Land Homestay"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.12) 22%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.30) 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 text-center text-white sm:-mt-20">
        {/* Logo */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <img
            src={logo}
            alt="Vibee Land Homestay"
            className="vl-logo-halo w-32 xs:w-36 sm:w-44 md:w-60 lg:w-64 h-auto"
          />
        </div>

        {/* Tagline */}
        <p className="text-[#E4C468] uppercase tracking-[0.35em] sm:tracking-[0.5em] text-[0.65rem] sm:text-xs">
          PREMIUM HOMESTAY
        </p>

        <h2 className="text-2xl sm:text-4xl md:text-6xl font-serif text-white mt-3 sm:mt-4 leading-snug px-2">
          Stay Beyond Expectations
        </h2>

        <p className="mt-4 sm:mt-5 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto text-white/85 px-2">
          Discover a unique blend of modern comfort, scenic beauty, and
          unforgettable experiences near Mini Ooty.
        </p>

        <p className="mt-5 sm:mt-6 text-sm sm:text-base text-white/70">
          📍 Near Mini Ooty, Kerala
        </p>

        {/* Buttons */}
        <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
          <a
            href={`https://wa.me/917907103605?text=${encodeURIComponent(
              `Hi Vibee Land 👋

I would like to know room availability and pricing.

Thank you.`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-5 rounded-full font-medium text-[#16301F] transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            style={{
              background: "linear-gradient(160deg, #C9A227 0%, #B08D22 100%)",
              boxShadow: "0 10px 24px -8px rgba(201, 162, 39, 0.55)",
            }}
          >
            Check Availability
          </a>

          <a
            href="#gallery"
            className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-5 rounded-full border border-white/30 backdrop-blur-sm text-white transition-all duration-300 hover:bg-white/10 text-sm sm:text-base"
          >
            Explore Gallery
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/70">
        <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center">
          <div className="w-0.75 h-2 bg-[#C9A227] rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
