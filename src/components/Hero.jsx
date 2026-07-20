import heroImg2 from "../assets/hero/heroImg2.webp";
import logo from "../assets/logo/vibeeland_logo.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroImg2}
        alt="Vibee Land Homestay"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.35) 100%)",
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
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white -mt-20">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{
                background: "rgba(201,162,39,0.35)",
              }}
            ></div>

            <img
              src={logo}
              alt="Vibee Land Homestay"
              className="
    relative
    z-10
    -translate-x-2
    sm:-translate-x-3
    md:-translate-x-4
    lg:-translate-x-5
    w-60
    sm:w-75
    md:w-95
    lg:w-112.5
    h-auto
  "
            />
          </div>
        </div>
        {/* Tagline */}
        <p
          className="
    text-[#E4C468]
    uppercase
    tracking-[0.5em]
    text-xs
  "
        >
          PREMIUM HOMESTAY
        </p>

        <h2
          className="
    text-4xl
    md:text-6xl
    font-serif
    text-white
    mt-4
  "
        >
          Stay Beyond Expectations
        </h2>

        <p
          className="
    mt-5
    text-lg
    md:text-xl
    max-w-2xl
    mx-auto
    text-white/85
  "
        >
          Discover a unique blend of modern comfort, scenic beauty, and
          unforgettable experiences near Mini Ooty.
        </p>

        <p className="mt-6 text-white/70">📍 Near Mini Ooty, Kerala</p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-5">
          <a
            href={`https://wa.me/918547878720?text=${encodeURIComponent(
              `Hi Vibee Land 👋

I would like to know room availability and pricing.

Thank you.`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="
              px-10
              py-5
              rounded-full
              font-medium
              text-[#16301F]
              transition-all
              duration-300
              hover:scale-105
            "
            style={{
              background: "linear-gradient(160deg, #C9A227 0%, #B08D22 100%)",
              boxShadow: "0 10px 24px -8px rgba(201, 162, 39, 0.55)",
            }}
          >
            Check Availability
          </a>

          <a
            href="#gallery"
            className="
              px-10
              py-5
              rounded-full
              border
              border-white/30
              backdrop-blur-sm
              text-white
              transition-all
              duration-300
              hover:bg-white/10
            "
          >
            Explore Gallery
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70">
        <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center">
          <div className="w-0.75 h-2 bg-[#C9A227] rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
