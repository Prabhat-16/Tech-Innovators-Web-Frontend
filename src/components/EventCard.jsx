import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export function EventCard({ event }) {
  // Format date and time
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Calculate registration percentage
  const registrationPercentage = (event.registered / event.capacity) * 100;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200/20 dark:border-slate-800/20 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Background Gradient Glow on Hover */}
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-primary/20 via-accent/0 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
      
      {/* Event Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/90 text-white backdrop-blur-sm">
            {event.category}
          </span>
        </div>
      </div>

      {/* Event Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-sky-700 bg-clip-text text-transparent mb-2">
          {event.title}
        </h3>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">{formatTime(event.date)}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{event.location}</span>
          </div>
        </div>

        {/* Event Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {event.description}
        </p>

        {/* Registration Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-muted-foreground">
              <Users className="w-4 h-4 mr-1" />
              <span>{event.registered}/{event.capacity} registered</span>
            </div>
            <span className="text-primary font-medium">
              {Math.round(registrationPercentage)}% full
            </span>
          </div>
          <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
              style={{ width: `${registrationPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {event.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="p-4 border-t border-slate-200/20 dark:border-slate-800/20">
        <button className="w-full px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
          Register Now
        </button>
      </div>
    </div>
  );
}
