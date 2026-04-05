import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import { preloadImages } from "./hooks/useImagePreload";
import { PAGE_IMAGES } from "./lib/imageManifest";

// Kick off preloading of landing page images immediately on app init
preloadImages(PAGE_IMAGES['/'] ?? []);

const Index = lazy(() => import("./pages/Index"));
const StayPage = lazy(() => import("./pages/StayPage"));
const WellnessPage = lazy(() => import("./pages/WellnessPage"));
const CafePage = lazy(() => import("./pages/CafePage"));
const ExperiencesPage = lazy(() => import("./pages/ExperiencesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/stay" element={<StayPage />} />
            <Route path="/wellness" element={<WellnessPage />} />
            <Route path="/cafe" element={<CafePage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
