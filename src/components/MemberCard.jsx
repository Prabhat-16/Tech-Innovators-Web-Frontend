import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './ui/icons/SocialIcons';

export function MemberCard({ member }) {
  return (
    <div className="relative group overflow-hidden rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200/20 dark:border-slate-800/20 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Background Gradient Glow on Hover */}
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-primary/20 via-accent/0 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
      
      <div className="relative p-6 flex flex-col items-center text-center">
        <div className="relative w-32 h-32 mb-4">
          <img
            src={member.imageUrl}
            alt={member.name}
            className="w-full h-full rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-md"
          />
          {/* Online status indicator */}
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-800"></div>
        </div>
        
        <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-sky-600 bg-clip-text text-transparent">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-primary/80 dark:text-primary/60 mb-2">{member.role}</p>
        <p className="text-sm text-muted-foreground mb-4">{member.major} - {member.year}</p>
        
        <p className="text-muted-foreground text-sm mb-6 h-20">
          {member.bio}
        </p>

        <div className="flex items-center justify-center space-x-4">
          {member.socials.github && (
            <a href={member.socials.github} className="text-muted-foreground hover:text-primary transition-colors">
              <GithubIcon className="w-6 h-6" />
            </a>
          )}
          {member.socials.linkedin && (
            <a href={member.socials.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
              <LinkedinIcon className="w-6 h-6" />
            </a>
          )}
          {member.socials.twitter && (
            <a href={member.socials.twitter} className="text-muted-foreground hover:text-primary transition-colors">
              <TwitterIcon className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
