import BamrlLogo from "@/assets/bamrl-logo.webp";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative border-t border-white/10 mt-16 text-white bg-transparent overflow-hidden">

      {/* 🔥 TOP GLOW SEPARATOR (smooth blend) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

      {/* 🔥 SUBTLE RADIAL GLOW (center focus) */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[500px] h-[300px] bg-cyan-500/10 blur-[120px] opacity-30" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <img src={BamrlLogo} className="w-24 h-24 mb-3" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Advancing aluminium aerospace engineering through precision,
            innovation, and performance. Building next-gen structural systems
            for high-altitude applications.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="text-white mb-4 text-xs uppercase tracking-[0.3em]">
            Navigation
          </h4>

          <div className="flex flex-col gap-2 text-sm text-gray-400">
            {["Home","About","Services","Projects","Laboratory","Collaboration","Contact"].map((item,i)=>(
              <a
                key={i}
                href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="relative group hover:text-white transition"
              >
                {item}
                {/* futuristic underline */}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white mb-4 text-xs uppercase tracking-[0.3em]">
            Contact
          </h4>

          <div className="text-gray-400 text-sm space-y-2">
            <p>📍 Pune, Maharashtra, India</p>
            <p>📧 contact@bamrl.com</p>
            <p>📞 +91 98XXXXXXXX</p>
          </div>

          {/* 🔥 SOCIAL ICONS – FIXED */}
          <div className="flex gap-4 mt-6">

  {[
    {
      icon: Facebook,
      link: "https://facebook.com/YOUR_PAGE",
      color: "hover:text-blue-500",
    },
    {
      icon: Instagram,
      link: "https://instagram.com/YOUR_PAGE",
      color: "hover:text-pink-500",
    },
    {
      icon: Linkedin,
      link: "https://linkedin.com/company/YOUR_PAGE",
      color: "hover:text-blue-400",
    },
    {
      icon: MessageCircle,
      link: "https://wa.me/918421306939",
      color: "hover:text-green-500",
    },
  ].map((item, i) => {
    const Icon = item.icon;
    return (
      <a
        key={i}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`group w-10 h-10 flex items-center justify-center rounded-full 
        border border-white/10 text-gray-400 cursor-pointer
        hover:border-primary/50 ${item.color}
        hover:shadow-[0_0_15px_rgba(0,150,255,0.5)]
        transition-all duration-300`}
      >
        <Icon size={16} />
      </a>
    );
  })}

</div>
        </div>

        {/* CTA */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-white mb-3 text-xs uppercase tracking-[0.3em]">
              Mission Control
            </h4>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Ready to collaborate on aerospace innovation and advanced engineering systems?
            </p>
          </div>

          <a
            href="/collaboration"
            className="w-fit px-6 py-3 bg-primary text-black uppercase text-xs tracking-[0.2em] font-semibold 
            hover:shadow-[0_0_25px_rgba(0,150,255,0.6)] transition"
          >
            Initiate Project →
          </a>
        </div>
      </div>

      {/* 🔥 BOTTOM STATUS BAR – UPGRADED */}
      <div className="relative border-t border-white/10 py-4 text-center text-xs text-gray-500 tracking-widest">

        <span className="text-green-400 animate-pulse">●</span> SYSTEM STATUS: 
        <span className="text-green-400 ml-1">OPERATIONAL</span> •

        <span className="mx-2 text-primary/60">⦿</span>

        ALL MODULES SYNCHRONIZED •

        <span className="mx-2 text-primary/60">⦿</span>

        BAMRL AEROSPACE DIVISION

      </div>
    </footer>
  );
};

export default FooterSection;