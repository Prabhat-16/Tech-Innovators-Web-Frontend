import React from 'react';
import { MemberCard } from './MemberCard';
import { members } from '../data/members';
import { PageTransition } from './PageTransition';

export function MembersPage() {
  return (
    <PageTransition>
      <section className="bg-slate-50 dark:bg-slate-900 py-20 lg:py-24">
       {/* Animated background elements */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 -left-12 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
         <div className="absolute bottom-0 -right-12 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
       </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary border border-primary/20">
            👥 Our Team
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-500 to-sky-700 bg-clip-text text-transparent">
            Meet Our Innovators
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The driving force behind MIT Tech Innovators Club. A diverse group of thinkers, builders, and leaders committed to pushing the boundaries of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
    </PageTransition>
  );
}
