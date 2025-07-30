// src/App.jsx
import { useState } from 'react';
import { Navigation } from "./components/Navigation.jsx";
import { HeroSection } from "./components/HeroSection.jsx";
import { MissionSection } from "./components/MissionSection.jsx";
import { GallerySection } from "./components/GallerySection.jsx";
import { Footer } from "./components/Footer.jsx";
import { MembersPage } from "./components/MembersPage.jsx";
import { EventsPage } from "./components/EventsPage.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

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
        ) : null}
      </main>
      <Footer />
    </div>
  );
}