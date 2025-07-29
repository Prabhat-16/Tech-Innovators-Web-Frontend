import React, { useState } from 'react';
import { EventCard } from './EventCard';
import { events } from '../data/events';
import { PageTransition } from './PageTransition';
import { Calendar, Filter } from 'lucide-react';

export function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const categories = ['all', ...new Set(events.map(event => event.category))];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  return (
    <PageTransition>
      <section className="bg-slate-50 dark:bg-slate-900 py-20 lg:py-24">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-12 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 -right-12 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary border border-primary/20">
              <Calendar className="w-4 h-4 mr-2" />
              Upcoming Events
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-500 to-sky-700 bg-clip-text text-transparent">
              Join Our Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover upcoming workshops, hackathons, and tech talks. Connect with fellow innovators and expand your knowledge.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2">
              <Filter className="w-4 h-4 text-primary mr-2" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-primary text-white'
                      : 'bg-primary/10 text-primary hover:bg-primary/20'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {/* No Events Message */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No events found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
