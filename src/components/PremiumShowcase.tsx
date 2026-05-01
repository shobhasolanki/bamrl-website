const PremiumShowcase = () => {
  return (
    <section className="relative bg-black py-28 overflow-hidden border-y border-cyan-500/10">

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGES */}
        <div className="relative">

          {/* Main Tall Image */}
          <img
            src="/images/img1.jpg"
            alt=""
            className="w-[440px] h-[620px] object-cover shadow-2xl"
          />

          {/* Floating Side Image */}
          <img
            src="/images//img2.jpg"
            alt=""
            className="absolute -right-20 bottom-10 w-[260px] h-[380px] object-cover border border-cyan-500/20 shadow-2xl"
          />

        </div>

        {/* TEXT */}
        <div>
          <p className="text-cyan-400 text-xs tracking-[0.5em] uppercase mb-6">
            Aerospace Excellence
          </p>

          <h2 className="text-white text-5xl md:text-6xl font-light uppercase leading-tight">
            Precision <br />
            Beyond Limits
          </h2>

          <p className="text-gray-400 mt-8 leading-loose max-w-xl">
            BAMRL develops high-performance aerospace systems,
            advanced structural engineering, simulation-driven design
            and next-generation flight solutions for the future.
          </p>
        </div>
      </div>

      {/* Moving Bottom Line */}
      <div className="mt-28 border-y border-white/10 py-4 overflow-hidden whitespace-nowrap">
        <div className="ticker text-white/60 text-sm tracking-[0.35em] uppercase">
          BAMRL AEROSPACE • UAV SYSTEMS • ADVANCED ENGINEERING •
          LIGHTWEIGHT STRUCTURES • FUTURE AVIATION • RESEARCH LAB •
          BAMRL AEROSPACE • UAV SYSTEMS • ADVANCED ENGINEERING •
        </div>
      </div>

      <style>{`
        .ticker{
          display:inline-block;
          min-width:200%;
          animation: moveTicker 22s linear infinite;
        }

        @keyframes moveTicker{
          0%{transform:translateX(0)}
          100%{transform:translateX(-50%)}
        }
      `}</style>

    </section>
  );
};

export default PremiumShowcase;