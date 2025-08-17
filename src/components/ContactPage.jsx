



import React, { useState } from 'react';
import { PageTransition } from './PageTransition';
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from "lucide-react";

export function ContactPage() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		message: '',
	});
	const [formStatus, setFormStatus] = useState({ message: '', isError: false });

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormStatus({ message: 'Submitting...', isError: false });
		setTimeout(() => {
			// Simulate API call
			setFormData({
				firstName: '',
				lastName: '',
				email: '',
				phoneNumber: '',
				message: '',
			});
			setFormStatus({ message: 'Your message has been sent successfully!', isError: false });
		}, 1500);
	};

	return (
		<div className="min-h-screen flex flex-col bg-background/80 backdrop-blur-xl text-foreground relative overflow-hidden">
			{/* Animated background elements from HeroSection - fills entire screen */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
				<div className="absolute -top-16 -left-16 w-96 h-96 bg-gradient-to-br from-purple-600/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute -bottom-16 -right-16 w-80 h-80 bg-gradient-to-tl from-cyan-500/10 to-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
					   <div className="flex flex-col md:flex-row gap-12 items-stretch justify-center w-full max-w-5xl mx-auto">
						   <div className="flex-1 bg-card/60 backdrop-blur-lg p-8 rounded-2xl shadow-2xl relative z-10">
							   <form onSubmit={handleSubmit} className="space-y-6">
								   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									   <div>
										   <label htmlFor="firstName" className="block text-sm font-medium text-foreground font-poppins">First Name</label>
										   <input
											   type="text"
											   name="firstName"
											   id="firstName"
											   value={formData.firstName}
											   onChange={handleInputChange}
											   required
											   className="mt-1 block w-full px-4 py-3 border-2 border-border rounded-lg shadow-sm bg-background/80 text-foreground placeholder:text-muted-foreground focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out font-poppins"
										   />
									   </div>
									   <div>
										   <label htmlFor="lastName" className="block text-sm font-medium text-foreground font-poppins">Last Name</label>
										   <input
											   type="text"
											   name="lastName"
											   id="lastName"
											   value={formData.lastName}
											   onChange={handleInputChange}
											   required
											   className="mt-1 block w-full px-4 py-3 border-2 border-border rounded-lg shadow-sm bg-background/80 text-foreground placeholder:text-muted-foreground focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out font-poppins"
										   />
									   </div>
								   </div>
								   <div>
									   <label htmlFor="email" className="block text-sm font-medium text-foreground font-poppins">Email</label>
									   <input
										   type="email"
										   name="email"
										   id="email"
										   value={formData.email}
										   onChange={handleInputChange}
										   required
										   className="mt-1 block w-full px-4 py-3 border-2 border-border rounded-lg shadow-sm bg-background/80 text-foreground placeholder:text-muted-foreground focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out font-poppins"
									   />
								   </div>
								   <div>
									   <label htmlFor="phoneNumber" className="block text-sm font-medium text-foreground font-poppins">Phone Number</label>
									   <input
										   type="tel"
										   name="phoneNumber"
										   id="phoneNumber"
										   value={formData.phoneNumber}
										   onChange={handleInputChange}
										   className="mt-1 block w-full px-4 py-3 border-2 border-border rounded-lg shadow-sm bg-background/80 text-foreground placeholder:text-muted-foreground focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out font-poppins"
									   />
								   </div>
								   <div>
									   <label htmlFor="message" className="block text-sm font-medium text-foreground font-poppins">Message</label>
									   <textarea
										   name="message"
										   id="message"
										   rows="4"
										   value={formData.message}
										   onChange={handleInputChange}
										   required
										   className="mt-1 block w-full px-4 py-3 border-2 border-border rounded-lg shadow-sm bg-background/80 text-foreground placeholder:text-muted-foreground focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out font-poppins"
									   ></textarea>
								   </div>
								   <div className="flex justify-end">
									   <button
										   type="submit"
										   className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-600 hover:to-sky-700 text-white font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out transform hover:scale-105 font-poppins"
									   >
										   Send Message
									   </button>
								   </div>
							   </form>
							   {formStatus.message && (
								   <div
									   className={`mt-4 text-center py-3 px-6 rounded-lg font-medium ${
										   formStatus.isError ? 'bg-red-800 text-red-200' : 'bg-green-800 text-green-200'
									   }`}
								   >
									   {formStatus.message}
								   </div>
							   )}
						   </div>
						   <div className="flex-1 flex flex-col items-center justify-center gap-8">
							   <div className="text-center">
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
							   </div>
							   <div className="w-full max-w-lg flex flex-col items-center">
								   <iframe
									   title="MIT-WPU Pune Location"
									   src="https://www.openstreetmap.org/export/embed.html?bbox=73.8480%2C18.5070%2C73.8570%2C18.5130&amp;layer=mapnik"
									   className="w-full h-64 border rounded shadow"
									   allowFullScreen
								   ></iframe>
								   <p className="text-xs mt-2 text-center">Find us at the MIT-WPU Pune University campus near Rambaug Colony!</p>
							   </div>
						   </div>
					   </div>
				   </div>
			</PageTransition>
		</div>
	);
}


