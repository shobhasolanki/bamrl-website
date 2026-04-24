// src/components/Sidebar.tsx
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import bamrlLogo from "@/assets/bamrl-logo.webp";

type NavItem = {
  label: string;
  path: string;
  id?: string;
  icon?: string;
};

const navItems: NavItem[] = [
  { label: "HOME", path: "/", id: "hero", icon: "" },
  { label: "ABOUT", path: "/about", id: "about", icon: "" },
  { label: "SERVICES", path: "/services", id: "services", icon: "" },
  { label: "PROJECTS", path: "/projects", icon: "" },
  { label: "LABORATORY", path: "/laboratory", icon: "" },
  { label: "COLLABORATION", path: "/collaboration", icon: "" },
  { label: "CONTACT", path: "/contact", icon: "" },
  
  
];

interface SidebarProps {
  collapsed: boolean;
  toggleCollapse: () => void;
}

const Sidebar = ({ collapsed, toggleCollapse }: SidebarProps) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [systemTime, setSystemTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();

  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setSystemTime(
        now.toLocaleTimeString("en-US", { hour12: false }) +
          "." +
          String(now.getMilliseconds()).padStart(3, "0")
      );
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Intersection observer for home page sections
  useEffect(() => {
    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach(({ id }) => {
      if (id) {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNavigation = (item: NavItem) => {
    if (item.path.includes("#")) {
      const [basePath, hash] = item.path.split("#");
      if (location.pathname !== basePath) {
        navigate(basePath);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.getElementById(item.id!);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(item.path);
    }
    setMenuOpen(false);
  };

  const isActive = (item: NavItem): boolean => {
    if (item.path.includes("#")) {
      const [basePath, hash] = item.path.split("#");
      return location.pathname === basePath && activeSection === hash;
    }
    return location.pathname === item.path;
  };

  const renderNavItems = () =>
    navItems.map((item) => (
      <button
        key={item.path}
        onClick={() => handleNavigation(item)}
        className={`w-full flex items-center gap-3 px-2 py-2 rounded-md transition-all duration-200 ${
          isActive(item)
            ? "text-primary bg-primary/10 border-l-2 border-primary"
            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
        } ${collapsed ? "justify-center" : "justify-start"}`}
      >
        <span className="text-lg">{item.icon}</span>
        {!collapsed && (
          <span className="font-heading text-[11px] tracking-[0.15em]">
            {item.label}
          </span>
        )}
      </button>
    ));

  // Mobile version (unchanged, uses its own menu)
  if (isMobile) {
    return (
      <>
        <header className="fixed top-0 left-0 right-0 h-20 bg-card border-b border-border z-50 flex items-center justify-between px-4">
          <div>
            <img src={bamrlLogo} alt="BAMRL Logo" className="h-16 w-auto object-contain" />
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-foreground p-2">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </header>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed inset-0 top-20 bg-card z-40 flex flex-col py-6 px-6 overflow-y-auto"
            >
              <nav className="space-y-1">{renderNavItems()}</nav>
              <div className="mt-auto pt-6 space-y-3">
                <div className="h-px bg-border" />
                <p className="data-label text-[10px]">SYSTEM STATUS</p>
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-accent"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="font-mono text-[10px] text-muted-foreground">ONLINE</span>
                </div>
                <p className="font-mono text-[10px] text-muted-foreground">{systemTime}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Desktop sidebar with collapse support
  return (
    <motion.aside
      initial={{ width: collapsed ? 80 : 220 }}
      animate={{ width: collapsed ? 80 : 220 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 top-0 h-screen bg-card border-r border-border z-50 flex flex-col justify-between py-6 overflow-hidden"
      style={{ width: collapsed ? 80 : 220 }}
    >
      <div className="px-2">
        {/* Logo area */}
        <div className={`mb-8 flex justify-center ${collapsed ? "px-0" : "px-2"}`}>
  <div className="bg-black/70 backdrop-blur-sm p-2 rounded-md">
    <img
      src={bamrlLogo}
      alt="BAMRL Logo"
      className={`object-contain transition-all drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${collapsed ? "h-14 w-14" : "h-28 w-auto"}`}
    />
  </div>
</div>
        {!collapsed && <div className="h-px bg-border mt-2 mx-2" />}
       
       <div className="mt-2 text-center">
      <p className="text-white font-extrabold text-sm tracking-wider">
        BAMRL
      </p>
    </div>
        {!collapsed && (
          
          
          <p className="data-label mt-2 text-[10px] text-center">AEROSPACE ENGINEERING</p>
          
        )}

        <nav className="mt-6 space-y-1">{renderNavItems()}</nav>

{/* Get a Quote button */}

  <a href="/contact"
  className="mt-4 w-full block text-center font-heading text-[10px] tracking-[0.15em] uppercase px-3 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors"
>
  GET A QUOTE →
</a>

      </div>

      {/* Bottom section with status and graph box */}
      <div className={`px-2 ${collapsed ? "space-y-2" : "space-y-3"}`}>
        {!collapsed && <div className="h-px bg-border" />}
        {!collapsed && <p className="data-label text-[9px] text-center">SYSTEM STATUS</p>}
        
        <div className="flex justify-center items-center gap-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-accent"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {!collapsed && <span className="font-mono text-[10px] text-muted-foreground">ONLINE</span>}
        </div>
        
        {!collapsed && (
          <p className="font-mono text-[10px] text-muted-foreground text-center">{systemTime}</p>
        )}

        {/* ✅ Restored SVG graph box - exactly as in original code */}
        {!collapsed && (
          <div className="h-16 border border-border rounded-sm overflow-hidden relative mt-2">
            <svg className="w-full h-full" viewBox="0 0 100 40">
              <motion.path
                d="M0,20 Q10,10 20,20 Q30,30 40,20 Q50,10 60,20 Q70,30 80,20 Q90,10 100,20"
                fill="none"
                stroke="hsl(var(--cyan))"
                strokeWidth="0.5"
                strokeDasharray="200"
                animate={{ strokeDashoffset: [200, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.path
                d="M0,25 Q15,15 25,25 Q35,35 50,20 Q65,5 75,25 Q85,35 100,15"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="0.5"
                strokeDasharray="200"
                animate={{ strokeDashoffset: [200, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </svg>
          </div>
        )}
      </div>

      {/* Toggle button */}
      <button
        onClick={toggleCollapse}
        className="absolute -right-3 top-20 bg-card border border-border rounded-full p-1 text-muted-foreground hover:text-primary transition-colors z-50"
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
    </motion.aside>
  );
};

export default Sidebar;