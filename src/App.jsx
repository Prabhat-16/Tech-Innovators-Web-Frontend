import { useState, useEffect } from 'react';
import { Navigation } from "./components/Navigation.jsx";
import { HeroSection } from "./components/HeroSection.jsx";
import { MissionSection } from "./components/MissionSection.jsx";
import { GallerySection } from "./components/GallerySection.jsx";
import { Footer } from "./components/Footer.jsx";
import { MembersPage } from "./components/MembersPage.jsx";
import { EventsPage } from "./components/EventsPage.jsx";
import { ContactPage }from "./components/ContactPage.jsx";
import { AboutPage } from "./components/AboutPage.jsx";
export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('currentPage') || 'home';
  });

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Always apply the blue-cyan theme class to the root div
  return (
    <div className="min-h-screen flex flex-col theme-blue-cyan">
      <Navigation onPageChange={setCurrentPage} currentPage={currentPage} />
      <main className="flex-1">
        {currentPage === 'home' ? (
          <>
            <HeroSection />
            <MissionSection />
            <GallerySection />
          </>
        ) : currentPage === 'members' ? (
          <MembersPage />
        ) : currentPage === 'events' ? (
          <EventsPage />
        ) : currentPage === 'about' ? (
          <AboutPage />
        ) : currentPage === 'contact' ? (
          <ContactPage />
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
