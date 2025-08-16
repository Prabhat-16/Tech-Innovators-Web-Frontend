


import React, { useState } from 'react';

import { PageTransition } from './PageTransition';
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from "lucide-react";

export function ContactPage() {
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		// Here you would handle sending the form data
	};

			return (
				<div className="min-h-screen flex flex-col bg-background/80 backdrop-blur-xl text-foreground relative overflow-hidden">
					{/* Animated background elements from HeroSection - fills entire screen */}
					<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
						<div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
						<div className="absolute -bottom-8 -right-8 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
					</div>
					<PageTransition>
						<div className="container mx-auto py-12 flex-1 relative z-10">
							<div className="flex justify-center mb-4">
								<span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary border border-primary/20 font-poppins">
									<Mail className="w-4 h-4 mr-2" />
									Contact
								</span>
							</div>
							<h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent font-poppins text-center">Contact Us</h1>
							<p className="mb-8 text-lg text-center font-poppins">We'd love to hear from you! Fill out the form below or reach us on social media.</p>
							<form className="max-w-lg mx-auto bg-card/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-border/30" style={{background: 'rgba(30, 41, 59, 0.5)'}} onSubmit={handleSubmit}>
								<div className="mb-4">
									<label className="block mb-2 font-semibold font-poppins" htmlFor="name">Name</label>
									<input className="w-full p-2 border rounded bg-white/30 backdrop-blur-md text-foreground placeholder:text-muted-foreground" type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
								</div>
								<div className="mb-4">
									<label className="block mb-2 font-semibold font-poppins" htmlFor="email">Email</label>
									<input className="w-full p-2 border rounded bg-white/30 backdrop-blur-md text-foreground placeholder:text-muted-foreground" type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
								</div>
								<div className="mb-4">
									<label className="block mb-2 font-semibold font-poppins" htmlFor="message">Message</label>
									<textarea className="w-full p-2 border rounded bg-white/30 backdrop-blur-md text-foreground placeholder:text-muted-foreground" id="message" name="message" rows={5} value={form.message} onChange={handleChange} required />
								</div>
								<button className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark font-poppins" type="submit">Send Message</button>
								{submitted && <p className="mt-4 text-green-600">Thank you for contacting us!</p>}
							</form>
							<div className="mt-10 text-center">
								<h2 className="text-2xl font-bold mb-2 font-poppins">Connect with Us</h2>
								<div className="mt-4 text-lg flex flex-col items-center gap-2 font-poppins">
									<p className="flex items-center gap-2 font-poppins"><Mail className="w-5 h-5 text-primary" /><span className="font-semibold">Email:</span> info@techinnovators.club</p>
									<p className="flex items-center gap-2 font-poppins"><Phone className="w-5 h-5 text-primary" /><span className="font-semibold">Phone:</span> (617) 555-0123</p>
									<p className="flex items-center gap-2 font-poppins"><MapPin className="w-5 h-5 text-primary" /><span className="font-semibold">Location:</span> MIT-WPI Campus, Pune, MH</p>
								</div>
								<div className="mt-8 flex justify-center gap-6">
									<a href="https://github.com" target="_blank" rel="noopener" aria-label="GitHub"><Github className="w-6 h-6 text-primary hover:text-accent transition" /></a>
									<a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter"><Twitter className="w-6 h-6 text-primary hover:text-accent transition" /></a>
									<a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn"><Linkedin className="w-6 h-6 text-primary hover:text-accent transition" /></a>
								</div>
								<div className="mt-6">
									<iframe
										title="MIT-WPU Pune Location"
										src="https://www.openstreetmap.org/export/embed.html?bbox=73.8480%2C18.5070%2C73.8570%2C18.5130&amp;layer=mapnik"
										className="w-full max-w-lg h-64 mx-auto border rounded shadow"
										allowFullScreen
									></iframe>
									<p className="text-xs mt-2">Find us at the MIT-WPU Pune University campus near Rambaug Colony!</p>
								</div>
							</div>
						</div>
					</PageTransition>
				
				</div>
	);
};


