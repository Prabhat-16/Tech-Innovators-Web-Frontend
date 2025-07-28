// src/App.jsx
import { Navigation } from "./components/Navigation.jsx";
import { HeroSection } from "./components/HeroSection.jsx";
import { MissionSection } from "./components/MissionSection.jsx";
import { GallerySection } from "./components/GallerySection.jsx";
import { Footer } from "./components/Footer.jsx";
import { ThemeTest } from "./components/ThemeTest.jsx";

export default function App() {
  // Always apply the blue-cyan theme class to the root div
  return (
    <div className="min-h-screen flex flex-col theme-blue-cyan">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <MissionSection />
        <GallerySection />
      </main>
      <Footer />
      {/* <ThemeTest /> */}
    </div>
  );
}