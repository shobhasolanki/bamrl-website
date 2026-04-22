import About from "./pages/About";
import Services from "./pages/Services";
import ProjectsPage from "@/pages/ProjectsPage";
import CollaborationPage from "@/pages/CollaborationPage";
import ContactPage from "./pages/ContactPage";
import Layout from "@/components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import Laboratory from "@/pages/Laboratory";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import FloatingButton from "@/components/FloatingButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/laboratory" element={<Laboratory />} />
            <Route path="/collaboration" element={<CollaborationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
         <FloatingButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;