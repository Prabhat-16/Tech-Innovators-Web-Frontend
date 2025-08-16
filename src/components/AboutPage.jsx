

import React from 'react';
import { Footer } from './Footer';
import { PageTransition } from './PageTransition';
import { Mail, MapPin, Github, Twitter, Linkedin } from "lucide-react";

export function AboutPage() {
	return (
					<div className="min-h-screen flex flex-col bg-background/80 backdrop-blur-xl text-foreground relative overflow-hidden">
						{/* Animated background elements from HeroSection - fills entire screen */}
								<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
									<div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
									<div className="absolute -bottom-8 -right-8 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
						</div>
						<PageTransition>
							<div className="container mx-auto py-12 flex-1 relative z-10">
					<div className="flex flex-col items-center">
						<img src="/src/assets/logo.png" alt="Club Logo" className="w-32 h-32 rounded-full mb-6 shadow-lg" />
						<h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent font-poppins text-center">Tech Innovators Club</h1>
						<h2 className="text-xl text-primary mb-6 font-poppins">Collaborate. Build. Learn. Innovate.</h2>
						<p className="max-w-2xl text-lg mb-8 text-muted-foreground text-center font-poppins">
							Welcome to the Tech Innovators Club! We are a vibrant community of students passionate about technology, innovation, and learning. Our club is dedicated to building real-world projects, exploring new skills in tech, and fostering collaboration among members. Whether you're interested in coding, design, AI, hardware, or entrepreneurship, you'll find a place to grow and create with us.
						</p>
					</div>
								<div className="w-full max-w-2xl mx-auto mb-8 text-center">
									<h3 className="text-2xl font-semibold mb-4 font-poppins">What We Do</h3>
									<ul className="grid grid-cols-2 gap-4 text-lg justify-center font-poppins">
										<li className="bg-card p-3 rounded shadow">Project Building</li>
										<li className="bg-card p-3 rounded shadow">Skill Workshops</li>
										<li className="bg-card p-3 rounded shadow">Tech Talks & Seminars</li>
										<li className="bg-card p-3 rounded shadow">Hackathons</li>
										<li className="bg-card p-3 rounded shadow">Open Source Collaboration</li>
										<li className="bg-card p-3 rounded shadow">Networking & Teamwork</li>
									</ul>
								</div>
					<div className="w-full max-w-2xl mx-auto text-center mb-8">
						<h3 className="text-2xl font-semibold mb-4 font-poppins">Connect With Us</h3>
									<div className="flex flex-col items-center gap-2 mb-4 font-poppins">
										<p className="flex items-center gap-2 justify-center font-poppins"><Mail className="w-5 h-5 text-primary" /><span className="font-semibold">Email:</span> info@techinnovators.club</p>
										<p className="flex items-center gap-2 justify-center font-poppins"><MapPin className="w-5 h-5 text-primary" /><span className="font-semibold">Location:</span> MIT-WPU Pune University, near Rambaug Colony</p>
						</div>
						<div className="flex justify-center gap-6">
							<a href="https://github.com" target="_blank" rel="noopener" aria-label="GitHub"><Github className="w-6 h-6 text-primary hover:text-accent transition" /></a>
							<a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter"><Twitter className="w-6 h-6 text-primary hover:text-accent transition" /></a>
							<a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn"><Linkedin className="w-6 h-6 text-primary hover:text-accent transition" /></a>
						</div>
					</div>
				</div>
			</PageTransition>
		</div>
	);
}
