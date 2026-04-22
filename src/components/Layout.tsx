// src/components/Layout.tsx
import { useState } from "react";
import Sidebar from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import FooterSection from "./FooterSection";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useIsMobile();

  const toggleCollapse = () => setCollapsed((prev) => !prev);

  // Desktop sidebar widths
  const sidebarWidth = collapsed ? 80 : 220; // in pixels

  if (isMobile) {
    // Mobile: sidebar becomes a top header + slide-out menu
    return (
      <div className="min-h-screen flex flex-col overflow-x-hidden">
  <Sidebar collapsed={false} toggleCollapse={toggleCollapse} />

  <main className="pt-20 flex-1">
    {children}
  </main>

  <FooterSection />
</div>
    );
  }

  // Desktop: fixed sidebar + main content with matching margin
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
  <Sidebar collapsed={collapsed} toggleCollapse={toggleCollapse} />

  <main
  className="transition-all duration-300 flex-1"
  style={{
    marginLeft: `${sidebarWidth}px`,
    width: `calc(100% - ${sidebarWidth}px)`
  }}
>
    {children}
  </main>

  <div style={{ marginLeft: `${sidebarWidth}px` }}>
    <FooterSection />
  </div>
</div>
  );
};

export default Layout;