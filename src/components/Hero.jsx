import heroImg2 from "../assets/hero/heroImg2.webp";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

        .vl-hero-badge { font-family: 'Jost', sans-serif; }
        .vl-hero-title { font-family: 'Cormorant Garamond', serif; font-weight: 500; }
        .vl-hero-body { font-family: 'Jost', sans-serif; font-weight: 300; }
        .vl-hero-cta { font-family: 'Jost', sans-serif; letter-spacing: 0.08em; }

        .vl-hero-img {
          filter: saturate(0.78) brightness(0.92) contrast(1.05);
        }

        .vl-flourish-line {
          height: 1px;
          width: 2.25rem;
          background: rgba(201, 162, 39, 0.6);
        }

        .vl-flourish-diamond {
          width: 5px;
          height: 5px;
          background: #C9A227;
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        .vl-hero-title-shadow {
          text-shadow: 0 2px 24px rgba(0,0,0,0.35);
        }

        .vl-scroll-track {
          width: 1.35rem;
          height: 2.4rem;
          border: 1px solid rgba(244, 239, 226, 0.4);
          border-radius: 999px;
          display: flex;
          justify-content: center;
        }

        .vl-scroll-dot {
          width: 3px;
          height: 8px;
          background: #C9A227;
          margin-top: 8px;
          border-radius: 999px;
        }

        @keyframes vl-scroll-fade {
          0% { opacity: 1; transform: translateY(0); }
          60% { opacity: 0; transform: translateY(10px); }
          61% { opacity: 0; transform: translateY(0); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .vl-scroll-dot {
          animation: vl-scroll-fade 1.8s ease-in-out infinite;
        }
      `}</style>

      {/* Background Image */}
      <img
        src={heroImg2}
        alt="Vibee Land Homestay"
        className="vl-hero-img absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay: top-down + radial vignette for legibility everywhere text sits */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,20,15,0.5) 0%, rgba(10,20,15,0.28) 30%, rgba(10,20,15,0.4) 55%, rgba(10,20,15,0.72) 100%)",
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(10,20,15,0.1) 0%, rgba(10,20,15,0.45) 78%)",
        }}
      ></div>

    {/* Content */}
<div className="relative z-10 max-w-4xl mx-auto px-5 text-center text-white pt-16 md:pt-0">

  {/* Location Badge */}
  <div className="flex justify-center">
    <span
      className="
        vl-hero-badge
        inline-flex
        items-center
        gap-2
        mb-6
        px-4 md:px-5
        py-2
        rounded-full
        backdrop-blur-md
        text-[10px] md:text-[0.7rem]
        uppercase
        tracking-[0.12em] md:tracking-[0.28em]
      "
      style={{
        border: "1px solid rgba(201, 162, 39, 0.5)",
        background: "rgba(15, 26, 20, 0.25)",
      }}
    >
      <span style={{ color: "#C9A227" }}>◆</span>
      <span>Near Mini Ooty, Kerala</span>
    </span>
  </div>

  {/* Heading */}
  <h1
    className="
      vl-hero-title
      vl-hero-title-shadow
      text-4xl
      sm:text-5xl
      md:text-7xl
      lg:text-8xl
      leading-[1.1]
    "
  >
    Escape to Nature.
    <br />

    <span
      className="italic block mt-2"
      style={{ color: "#E4C468" }}
    >
      Stay in Style.
    </span>
  </h1>

  {/* Divider */}
  <div className="flex items-center justify-center gap-3 mt-6 mb-6">
    <span className="vl-flourish-line" />
    <span className="vl-flourish-diamond" />
    <span className="vl-flourish-line" />
  </div>

  {/* Description */}
  <p
    className="
      vl-hero-body
      text-base
      md:text-xl
      max-w-md
      md:max-w-2xl
      mx-auto
      text-white/85
      leading-relaxed
      vl-hero-title-shadow
    "
  >
    Experience a peaceful homestay surrounded by nature,
    offering comfort, scenic views, and unforgettable memories.
  </p>

  {/* Buttons */}
  <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 w-full">

    <a
      href={`https://wa.me/918547878720?text=${encodeURIComponent(
        `Hi Vibee Land 👋

I found your website and would like to know more about room availability.

Please share:
• Available rooms
• Pricing
• Check-in details

Thank you.`
      )}`}
      target="_blank"
      rel="noreferrer"
      className="
        vl-hero-cta
        text-xs
        uppercase
        w-full
        sm:w-auto
        px-9
        py-4
        rounded-sm
        text-[#16301F]
        transition-all
        duration-300
        hover:-translate-y-0.5
      "
      style={{
        background:
          "linear-gradient(160deg, #C9A227 0%, #B08D22 100%)",
        boxShadow:
          "0 10px 24px -8px rgba(201, 162, 39, 0.55)",
      }}
    >
      Check Availability
    </a>

    <a
      href="#gallery"
      className="
        vl-hero-cta
        text-xs
        uppercase
        w-full
        sm:w-auto
        px-9
        py-4
        rounded-sm
        backdrop-blur-sm
        transition-all
        duration-300
        hover:bg-white/10
      "
      style={{
        border: "1px solid rgba(201, 162, 39, 0.5)",
        background: "rgba(15, 26, 20, 0.2)",
      }}
    >
      Explore Gallery
    </a>

  </div>

</div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70">
        <div className="vl-scroll-track">
          <div className="vl-scroll-dot"></div>
        </div>
      </div>
    </section>
  );
}
